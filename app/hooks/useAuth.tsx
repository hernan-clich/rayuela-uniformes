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
  logout: () => void;
  signInWithGoogle: (shouldRedirectAfterSucces?: boolean) => void;
  user: User | null;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  logout: () => null,
  signInWithGoogle: () => null,
  user: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
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
      console.log('\x1b[35m%s\x1b[0m', 'signIn: ', signIn);
      const dbUser = getDbDocument<TUser>(signIn.user.uid);
      console.log('\x1b[35m%s\x1b[0m', 'dbUser: ', dbUser);

      if (!dbUser) {
        addDbDocumentWithCustomId(signIn.user.uid, {
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
        setTokenCookie(token);
        setUser(user);
      } else {
        removeTokenCookie();
        setUser(null);
      }
    });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
