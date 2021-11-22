import cookies from 'js-cookie';
import { GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~config/firebase/client';
import PATHS from '~constants/paths';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';

interface IAuthContext {
  authenticated: boolean;
  logout: () => void;
  signInWithGoogle: () => void;
  user: User | null;
}

const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  logout: () => null,
  signInWithGoogle: () => null,
  user: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const setTokenCookie = (token: string) => {
    cookies.set('token', token, {
      expires: 1 / 24
    });
  };

  const removeTokenCookie = () => cookies.remove('token');

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        router.push(PATHS.HOME);
      })
      .catch((e) => {
        throw new Error(`Error signing in: ${e}`);
      });
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
    <AuthContext.Provider value={{ user, authenticated: !!user, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
