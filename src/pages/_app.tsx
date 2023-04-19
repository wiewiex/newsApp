import type { AppProps } from 'next/app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';
import Layout from '@/components/controllers/Layout';
import { Reset } from 'styled-reset';
import FontsLoader from '@/utils/FontsLoader';
import { GetStaticProps } from 'next';
import { Provider } from 'react-redux';
import store from '../store';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <FontsLoader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
