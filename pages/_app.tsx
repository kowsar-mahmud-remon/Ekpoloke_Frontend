import { store } from "../components/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
import { log } from "console";
import {createWrapper} from "next-redux-wrapper"
import { intializeCart } from "@/components/app/tools/cart/cartSlice";

const wrapper = createWrapper(()=> store)

 function App({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch();

  useEffect(() => {
    const products = localStorage.getItem("cartItems");
    dispatch(intializeCart({ cartItems: JSON.parse(products || "") }));
  }, []);



  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default wrapper.withRedux(App);
