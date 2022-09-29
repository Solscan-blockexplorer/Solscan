import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import GlobalStyle from "../theme/globalStyles";
import { ThemeProvider } from "styled-components";

import Theme from "../theme/theme";
import { StyledContainer } from "../theme/styledContainer";
import Layout from "../components/layout";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <StyledContainer>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
