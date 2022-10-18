import type { AppType } from 'next/dist/shared/lib/utils';
import SnackbarProvider from 'react-simple-snackbar';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
};

export default MyApp;
