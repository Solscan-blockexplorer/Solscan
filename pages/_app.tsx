import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default MyApp;
