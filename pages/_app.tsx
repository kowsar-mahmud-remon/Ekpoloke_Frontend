import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import Header from "../components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <div className="">
        <Header></Header>
      </div>
      <div className="">
        <Component {...pageProps} />
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
