import type { AppProps } from 'next/app';
import { AuthProvider } from '~hooks/useAuth';
import GlobalStyles from '~styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </AuthProvider>
  );
}
export default MyApp;
