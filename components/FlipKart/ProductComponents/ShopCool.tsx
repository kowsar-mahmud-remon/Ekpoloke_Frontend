import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { Roboto } from "@next/font/google";
import printer from "../../../assets/products/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.webp";
import monitor from "../../../assets/products/desirtech-tg-blacka382-original-imafh2etks4bcnmx.webp";
import case1 from "../../../assets/products/mycas-black-vv-y35-qcase-original-imagj87uwxzarrzk.webp";
import monitor2 from "../../../assets/products/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.webp";
import veet from "../../../assets/products/sensitive-touch-expert-veet-original-imafhjh5ah7vf9zc.jpeg";
import camera from "../../../assets/products/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.webp";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const ShopCool = () => {
  const products = [
    { id: 1, name: "Printers", range: 3999, brand: "HP", picture: printer },
    { id: 2, name: "Monitors", range: 6599, brand: "Acer", picture: monitor },
    {
      id: 3,
      name: "Plain Case Cover",
      range: 169,
      brand: "For All Top Model",
      picture: case1,
    },
    {
      id: 1,
      name: "Top Mirrorles Camera",
      range: "Shop Now",
      brand: "HP",
      picture: camera,
    },
    {
      id: 1,
      name: "Top Mobile Case",
      range: 250,
      brand: "For All Top Model",
      picture: case1,
    },
    {
      id: 1,
      name: "Screen Guards",
      range: 510,
      brand: "For All Top Model",
      picture: monitor,
    },
    {
      id: 1,
      name: "Best Women Trimmers",
      range: 3999,
      brand: "Beet, Barun, Philips & more",
      picture: veet,
    },
    {
      id: 1,
      name: "Monitors",
      range: 8900,
      brand: "Lenovo",
      picture: monitor2,
    },
  ];
  return (
    <div
      className={`flex w-full bg-white ${roboto.className} mb-3 shadow mx-2`}
    >
      <div className="max-w-[430px] relative">
        <div className="w-[230px] mt-20">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Shop for a Cool Summer</h1>
            <button className="bg-[#2874f0] text-white py-2 px-5 text-sm mt-10 shadow-md">
              VIEW ALL
            </button>
          </div>
        </div>
        {/* <Image
          width={400}
          height={600}
          className="absolute bottom-0 object-contain"
          src=""
          alt=""
        ></Image> */}
      </div>
      <Swiper
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        className={` `}
        navigation={true}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.map((p: any, index: any) => {
          return (
            <SwiperSlide
              key={index}
              className={` ${roboto.className} w-[232px] h-[342px] py-4`}
            >
              <Link href={``} className="block px-2 rounded-md md:p-3">
                <div className="md:h-[200px] h-[140px] w-full flex items-center justify-center">
                  <Image
                    className="object-contain max-w-full max-h-full transition-all hover:scale-105"
                    src={p?.picture}
                    alt={p?.name}
                    height={200}
                    width={200}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-[#19191f] font-medium pt-4 text-sm">
                    {p.name}
                  </h3>
                  <h3 className="text-[#388e3c] py-2">From ${p.range}</h3>
                  <h3 className="text-[#A9A9A9] font-normal">{p.brand}</h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ShopCool;
