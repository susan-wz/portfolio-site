import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#173F36",
    secondary: "#F8C164",
    white: "#ffffff",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
