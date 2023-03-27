import { store } from "../components/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MenuHeader from "@/components/MenuHeader/MenuHeader";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header></Header>
      <MenuHeader></MenuHeader>
      <Component {...pageProps} />
      <Footer></Footer>
    </Provider>
  );
}
