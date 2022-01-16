import cookies from 'js-cookie';
import { GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~config/firebase/client';
import PATHS from '~constants/paths';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import useDbCrud from './useDbCrud';
import { EDbCollections } from '~types/db';
import { TUser } from '~types/user';

interface IAuthContext {
  isAuthenticated: boolean;
  isAdmin: boolean;
  logout: () => void;
  signInWithGoogle: (shouldRedirectAfterSucces?: boolean) => void;
  user: User | null;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  isAdmin: false,
  logout: () => null,
  signInWithGoogle: () => null,
  user: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const router = useRouter();
  const { addDbDocumentWithCustomId, getDbDocument } = useDbCrud(EDbCollections.users);

  const setTokenCookie = (token: string) => {
    cookies.set('token', token, {
      expires: 1 / 24
    });
  };

  const removeTokenCookie = () => cookies.remove('token');

  const signInWithGoogle = async (shouldRedirectAfterSucces = true) => {
    try {
      const provider = new GoogleAuthProvider();
      const signIn = await signInWithPopup(auth, provider);
      const dbUser = getDbDocument<TUser>(signIn.user.uid);

      if (!dbUser) {
        addDbDocumentWithCustomId(signIn.user.uid, {
          email: signIn.user.email as string,
          imageUrl: signIn.user.photoURL as string,
          isAdmin: false,
          joinedSince: new Date().toISOString(),
          name: signIn.user.displayName as string,
          uid: signIn.user.uid as string
        });
      }

      shouldRedirectAfterSucces && router.push(PATHS.HOME);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push(PATHS.HOME);
      })
      .catch((e) => {
        throw new Error(`Error signing out: ${e}`);
      });
  };

  useEffect(() => {
    const cancelAuthListener = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user?.getIdTokenResult();

        setTokenCookie(token);
        setUser(user);
        setIsAdmin(Boolean(idTokenResult?.claims?.isAdmin));
      } else {
        removeTokenCookie();
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, isAuthenticated: !!user, logout, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
