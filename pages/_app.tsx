import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import DefaultHead from '~components/SEO/DefaultHead';
import { AuthProvider } from '~hooks/useAuth';
import GlobalStyles from '~styles/GlobalStyles';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <DefaultHead />
      <AuthProvider>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </AuthProvider>
    </motion.div>
  );
}
export default MyApp;
