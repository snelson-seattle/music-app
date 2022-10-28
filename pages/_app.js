import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <header></header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </Provider>
  );
}

export default MyApp;
