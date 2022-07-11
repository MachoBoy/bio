import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
