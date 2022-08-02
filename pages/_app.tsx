import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactModal from 'react-modal';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  ReactModal.setAppElement('#__next');

  return (
    mounted && (
      <ThemeProvider attribute='class' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  );
}

export default MyApp;
