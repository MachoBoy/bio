import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    mounted && (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    )
  );
}

export default MyApp;
