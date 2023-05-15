import { store } from "../components/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
import { log } from "console";
import { createWrapper } from "next-redux-wrapper";
import { intializeCart } from "@/components/features/cartItems/cartItemsSlice";
import { roboto } from "@/fonts/googlefonts";



const wrapper = createWrapper(() => store);

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = localStorage.getItem("cartItems");
    if (products) {
      dispatch(intializeCart({ cartItems: JSON.parse(products || "") }));
    } else {
      console.log("no cart available");
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  );
}

export default wrapper.withRedux(App);
