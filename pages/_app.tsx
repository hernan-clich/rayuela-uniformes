import type { AppProps } from 'next/app';
import DefaultHead from '~components/SEO/DefaultHead';
import { AuthProvider } from '~hooks/useAuth';
import GlobalStyles from '~styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultHead />
      <AuthProvider>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </AuthProvider>
    </>
  );
}
export default MyApp;
