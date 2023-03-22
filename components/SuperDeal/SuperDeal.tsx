import Image from "next/image";
import React from "react";
import star from "../../assets/images/star.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

const SuperDeal = () => {
  const products = [
    {
      id: 1,
      title: "SAMSUNG Galaxy F04 (Jade Purple, 64 GB)  (4 GB RAM)",
      rating: 4.5,
      regularPrice: 11499,
      discount: 34,
      img: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/7/p/9/-original-imaghgbyypzkzvud.jpeg?q=70",
    },
    {
      id: 2,
      title: "POCO C55 (Cool Blue, 128 GB)  (6 GB RAM)",
      rating: 3.5,
      regularPrice: 13999,
      discount: 21,
      img: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70",
    },
    {
      id: 3,
      title: "MOTOROLA g52 (Metallic White, 128 GB)  (6 GB RAM)",
      rating: 1.5,
      regularPrice: 19999,
      discount: 35,
      img: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/mobile/4/f/z/-original-imagdnefpypk9cgx.jpeg?q=70",
    },
    {
      id: 4,
      title: "POCO M4 Pro 5G (Yellow, 64 GB)  (4 GB RAM)",
      rating: 2.5,
      regularPrice: 16999,
      discount: 23,
      img: "https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/i/m/b/-original-imagcafg8zjz4rej.jpeg?q=70",
    },
  ];

  const ratingColor = (statuss: number) => {
    if (statuss < 3) {
      return "#F4253F";
    }
    if (statuss < 4) {
      return "#FB641B";
    }
    return "#026C51";
  };
  return (
    // <div>
    //   <h1>Super Deals</h1>
    //   <div className="grid grid-cols-1 gap-4 my-16 lg:grid-cols-5 md:grid-cols-3">
    //     {products &&
    //       products.map((product) => {
    //         const { id, title, rating, regularPrice, discount, img } = product;
    //         return (
    //           <>
    //             <div className="transition-all bg-white rounded-md coursor-pointer ">
    //               <div className=" hover:border">
    //                 <div className="flex justify-center">
    //                   {" "}
    //                   <Image
    //                     className="object-contain"
    //                     src={img}
    //                     alt=""
    //                     width={150}
    //                     height={80}
    //                   ></Image>{" "}
    //                 </div>
    //                 <div className="py-3">
    //                   <p>{title}</p>
    //                   <div>
    //                     <div className="flex items-center">
    //                       <div
    //                         style={{
    //                           backgroundColor: ratingColor(rating),
    //                         }}
    //                         className="rounded-[2px] px-[2] w-[35px] h-[16px] flex items-center justify-between mr-2"
    //                       >
    //                         <p className="text-xs text-white">{rating}</p>
    //                         <div className="">
    //                           <Image
    //                             className=""
    //                             src={star}
    //                             alt=""
    //                             width={12}
    //                           ></Image>
    //                         </div>
    //                       </div>
    //                       <p className="text-[14px] text-[#686868]">
    //                         24 Ratings & 5 Reviews
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="flex items-center gap-2">
    //                   <span className="text-[#FB641B] font-bold text-[20px]">
    //                     Tk{" "}
    //                     {discount
    //                       ? (
    //                           regularPrice -
    //                           (regularPrice * discount) / 100
    //                         ).toFixed(0)
    //                       : regularPrice}
    //                   </span>
    //                   {discount && (
    //                     <>
    //                       <span className="text-[#707070] text-[12px] line-through font-[500]">
    //                         TK {regularPrice}
    //                       </span>
    //                       <span className="text-[#707070] text-[12px] ">
    //                         ({discount}% off)
    //                       </span>
    //                     </>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </>
    //         );
    //       })}
    //   </div>
    // </div>
    <div className="">
      <div className={` py-10 bg-white shadow`}>
        <div className="flex items-center justify-between p-5 md:gap-x-3 gap-x-1">
          <h2 className="pr-1 text-lg lg:text-3xl md:text-xl whitespace-nowrap md:pr-3">
            {"Super Deals" || "Products"}
          </h2>
          <Link href="/">View All</Link>
        </div>
        <div className="flex gap-4">
          {products?.map((p, index) => (
            <SwiperSlide className="w-[270px]" key={index}>
              <Link
                href=""
                className="px-2 py-3 md:p-3 border-[0.5px] border-white hover:border-gray-300 hover:shadow-md block rounded-md"
              >
                <div className="md:h-[200px] h-[140px] w-full flex items-center justify-center">
                  <Image
                    className="object-contain max-w-full max-h-full"
                    src={p.img}
                    alt={p?.title}
                    width={140}
                    height={100}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                    }}
                  />
                </div>
                <div>
                  <p className="text-[13px] pt-5 sliderProductName textTwoLine font-medium">{p.title}</p>
                  <div className="my-2">
                    <div className="flex items-center">
                      <div
                        style={{
                          backgroundColor: ratingColor(p.rating),
                        }}
                        className="rounded-[2px] px-[2] w-[35px] h-[16px] flex items-center justify-between mr-2"
                      >
                        <p className="text-xs text-white">{p.rating}</p>
                        <div className="">
                          <Image
                            className=""
                            src={star}
                            alt=""
                            width={12}
                          ></Image>
                        </div>
                      </div>
                      <p className="text-xs text-[#686868]">
                        24 Ratings & 5 Reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#141414] font-bold text-sm">
                      Tk{" "}
                      {p.discount
                        ? (
                            p.regularPrice -
                            (p.regularPrice * p.discount) / 100
                          ).toFixed(0)
                        : p.regularPrice}
                    </span>
                    {p.discount && (
                      <>
                        <span className="text-[#949393] text-[12px] line-through font-bold">
                          TK {p.regularPrice}
                        </span>
                        <span className="text-[#42ac61] text-[12px] font-bold">
                          ({p.discount}% off)
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperDeal;
