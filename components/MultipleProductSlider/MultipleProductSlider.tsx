import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import calculateAverageRating from "../../utils/calculateAverageRating";
import Image from "next/image";
import Link from "next/link";
import Rating from "../UI/Rating/Rating";
import styles from "./MultipleProductSlider.module.css";

const MultipleProductSlider = (products: any) => {
  console.log(products);

  return (
    <div className={`bg-white my-[15px]`}>
      <div className="flex items-center justify-between p-5 md:gap-x-3 gap-x-1">
        <h2 className="pr-1 text-lg lg:text-3xl md:text-xl whitespace-nowrap md:pr-3">
          {products.title || "Products"}
        </h2>
        <Link
          href=""
          className="text-lg hover:underline whitespace-nowrap md:text-xl text-[#ff6600]"
        >
          View All
        </Link>
      </div>
      <Swiper
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        className={styles.multiProductSlider}
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
        {products?.products?.map((p: any, index: any) => {
          return (
            <SwiperSlide key={index} className="pb-5">
              <Link
                href={`/products/${p.slug}/${p._id}`}
                className="px-2 py-3 md:p-3 border-[0.5px] border-white hover:border-gray-300 hover:shadow-md block rounded-md"
              >
                <div className="md:h-[200px] h-[140px] w-full flex items-center justify-center">
                  <Image
                    className="object-contain max-w-full max-h-full"
                    src={p?.productPictures[0].img}
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
                <div>
                  <p className={`${styles.sliderProductName} textTwoLine`}>
                    {p.name}
                  </p>
                  <div className="flex items-center justify-stater gap-x-2">
                    <Rating value={calculateAverageRating(p?.ratings) || 0} />
                    <span className="text-[12px]">
                      ({p?.ratings?.length || "0"})
                    </span>
                  </div>
                  <div className="flex md:items-center justify-start md:justify-end gap-x-2 md:flex-row-reverse flex-col">
                    <div>
                      <del className="md:text-xs text-[10px] text-gray-400">
                        TK. {p?.price + 1000}
                      </del>{" "}
                      <span className="text-success md:text-sm text-[12px]">
                        20% Off
                      </span>
                    </div>
                    <p className="text-[12px] md:text-sm font-bold">
                      Tk. {p?.price}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MultipleProductSlider;
