import type { AppProps } from "next/app";
import { GlobalStyles } from "@styles/globals";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
