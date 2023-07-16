import "/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Navbar from "../componets/section/menu/navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../componets/section/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import { store, persistor } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}
