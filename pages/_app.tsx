import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
