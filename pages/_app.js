import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
