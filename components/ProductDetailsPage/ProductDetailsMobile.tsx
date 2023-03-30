import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from '../../styles/CardStyle.module.css'

import { Pagination } from "swiper";

import Rating from "../../components/UI/Rating/Rating";
import Price from "../../components/UI/Price/Price";

import { IoMdShareAlt } from "react-icons/io";
import Image from "next/image";
import CopyProductCode from "./CopyProductCode";
// import ShareModal from "../ShareModal/ShareModal";

const ProductDetailsMobile = (
  productDetails: any,
  ratings: any,
  reviews: any,
  reviewSlice: any,
  setReviewSlice: any
) => {

  
  const { _id, name, price, productPictures, description } = productDetails.productDetails;
  console.log(productDetails, "all details");
  const [shareModal, setShareModal] = useState(false);
  return (
    <div className={` mb-[63px]`}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
        style={{ height: "400px", background: "white" }}
        className={`${style.mobileProductDetailsSlider}`}
      >
        {productPictures?.map((i: any, index: any) => (
          <SwiperSlide className="relative" key={i._id}>
            <Image
              width={600}
              height={600}
              src={i.img}
              className="object-contain w-full h-full mx-auto"
              alt={`product img ${index}`}
            />

            <label
              onClick={() => setShareModal(true)}
              htmlFor="productShareModal"
              className="shareMobileLabel"
            >
              <IoMdShareAlt
                className="share"
                cursor={"pointer"}
                fontSize={40}
              />
            </label>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-white">
        <div className="container px-3 mx-auto mobileProductDetails">
          <p className="py-2 font-bold">{name}</p>
          {/* {ratings && ratings ? (
            <Rating value={calculateAverageRating(ratings)} />
          ) : (
            ""
          )} */}
          <span>
            {ratings?.length} Ratings & {reviews?.length} Reviews
          </span>
          <div className="flex items-center justify-start gap-x-3">
            {/* <Price value={price} /> */}
            <del>{price + 1000}</del>
            <span className="text-success">44% off</span>
          </div>
          {/* <CopyProductCode
            className="justify-center gap-x-3"
            style={{ margin: "10px 0" }}
          /> */}
          <div className="mb-5">
            <h4 className="text-2xl">Description</h4>
            <p>{description}</p>
          </div>
          {/* <RatingsContainer
            ratings={ratings}
            reviewSlice={reviewSlice}
            setReviewSlice={setReviewSlice}
            reviews={reviews}
            product={productDetails}
          /> */}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between bg-white">
        <button className="w-1/2 h-12 bg-[#FF9F00] rounded-none ">
          Add To Cart
        </button>
        <button className="w-1/2 h-12 rounded-none bg-[#FB641B]">Buy Now</button>
      </div>
      {/* {shareModal && <ShareModal setShareModal={setShareModal} />} */}
    </div>
  );
};

export default ProductDetailsMobile;
