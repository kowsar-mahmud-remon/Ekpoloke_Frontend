import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer/Footer";
import Carousel from "@/components/Carousel/Carousel";
import SuperDeal from "@/components/SuperDeal/SuperDeal";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";
import RecentlyView from "@/components/RecentlyView/RecentlyView";
import HomePage from "@/components/HomePage/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { intializeCart } from "@/components/app/tools/cart/cartSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Ekpoloke Ecommerce Shopping In Bangladesh </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#F2F2F2]">
        <Carousel />
        <HomePage></HomePage>
      </main>
    </>
  );
}
