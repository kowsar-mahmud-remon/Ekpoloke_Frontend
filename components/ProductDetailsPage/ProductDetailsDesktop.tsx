import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosArrowForward, IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { MaterialButton } from "../../components/MaterialUI/MaterialUI";
import { useState } from "react";
import Image from "next/image";
import Rating from "../UI/Rating/Rating";
import calculateAverageRating from "@/utils/calculateAverageRating";
import RatingsContainer from "./RatingsContainer";
// import ProductImagesModal from "./ProductImagesModal";
import { MdContentCopy } from "react-icons/md";
import Link from "next/link";
import style from "./ProductDetailsPage.module.css";
import ProductModal from "./ProductModal";
import { useRouter } from "next/router";
import { addCart } from "../features/cartItems/cartItemsSlice";
import Favorite from "../Favorite/Favorite";
import CopyProductCode from "./CopyProductCode";

import { Roboto } from "@next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface productProps {
  productDetails?: any;
  selectedImageIndex?: any;
  setSelectedImageIndex?: any;
  ratings?: any;
  reviews?: any;
  reviewSlice?: any;
  setReviewSlice?: any;
}

const ProductDetailsDesktop = ({
  productDetails,
  selectedImageIndex,
  setSelectedImageIndex,
  ratings,
  reviews,
  reviewSlice,
  setReviewSlice,
}: productProps) => {
  const router = useRouter();
  const [productPicturesModal, setProductPicturesModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(productDetails?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(
    productDetails?.colors?.[0]
  );
  const dispatch = useDispatch();
  const isSelectedColor = (color: any) => {
    return selectedColor?._id === color?._id;
  };
  const isSelectedSize = (size: any) => {
    return selectedSize?._id === size?._id;
  };
  const isWhiteColor = (color: any) => {
    return (
      color.hex === "#fff" ||
      color.hex === "#ffffff" ||
      color.name.toLowerCase() === "white"
    );
  };
  return (
    <div className={`bg-white hidden md:block ${roboto.className}`} >
      <div className={`container mx-auto ${style.productDescriptionContainer}`}>
        <div
          className="flex"
          style={{ position: "sticky", top: "10px", height: "100%" }}
        >
          <div className={`${style.verticalImageStack}`}>
            {productDetails?.productPictures
              ?.slice(0, 7)
              ?.map((thumb: any, index: any) => (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedImageIndex(index)}
                  className={`${style.thumbnail} ${
                    index === selectedImageIndex ? `${style.active}` : ""
                  }`}
                >
                  <Image
                    className="object-contain max-w-full max-h-full"
                    src={thumb.img}
                    alt={index}
                    width={67}
                    height={67}
                  />
                </div>
              ))}
            <label
              htmlFor="productmodal"
              className="text-sm text-center cursor-pointer hover:underline text-[#0078F0]"
            >
              All
            </label>
          </div>
          <div className={`${style.productDescLeftContainer}`}>
            <div className={`${style.productDescImgContainer}`}>
              <Image
                className="object-contain max-w-full max-h-full"
                width={322}
                height={398}
                src={productDetails?.productPictures[selectedImageIndex].img}
                alt={`${productDetails?.productPictures[selectedImageIndex].img}`}
              />
              {/* <ReactImageMagnify {...{
              smallImage: {
                alt: `Product Image ${selectedImageIndex + 1}`,
                isFluidWidth: true,
                src: productDetails.productPictures[selectedImageIndex].img
              },
              largeImage: {
                src: productDetails.productPictures[selectedImageIndex].img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%"
              },
              enlargedImageContainerStyle: {
                background: "white",
                zIndex: "99999",
                borderRadius: "10px",
                marginLeft: "30px",
                width: "100%",
                height: "100%",
              }
            }} /> */}
              <Favorite productId={productDetails._id} />
            </div>
            {/* <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: productDetails.productPictures[selectedImageIndex].img
              },
              largeImage: {
                src: productDetails.productPictures[selectedImageIndex].img,
                width: 1200,
                height: 1800
              }
            }} /> */}

            {/* action buttons */}
            <div className="flex">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price, description, highlights } =
                    productDetails;
                  const img = productDetails.productPictures[0].img;
                  // dispatch(addToCart({ _id, name, price, img }));
                  // navigate("/cart");
                  dispatch(
                    addCart({
                      _id,
                      name,
                      price,
                      img,
                      description,
                      highlights,
                      qty: Number(1),
                    })
                  );
                  router.push("/cart");
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div className="px-[10px]">
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul className="flex items-center">
              <li className="mr-[5px] flex items-center text-xs">
                <Link
                  className="inline-block text-xs text-[#777] mr-[10px]"
                  href="/"
                >
                  Home
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="mr-[5px] flex items-center text-xs">
                <Link
                  className="inline-block text-xs text-[#777] mx-[10px]"
                  href="/"
                >
                  Mobiles
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="mr-[5px] flex items-center text-xs">
                <Link
                  className="inline-block text-xs text-[#777] mx-[10px]"
                  href="/"
                >
                  Samsung
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="mr-[5px] flex items-center text-xs">
                <Link
                  className="inline-block text-xs text-[#777] mx-[10px]"
                  href="/"
                >
                  {productDetails.name.length > 60
                    ? `${productDetails.name.slice(0, 60)}...`
                    : productDetails.name}
                </Link>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="text-lg text-[#212121] mb-[10px]">
              {productDetails.name}
            </p>
            <CopyProductCode />
            <div>
              <Rating value={calculateAverageRating(ratings && ratings)} />
              <span className={`${style.ratingNumbersReviews}`}>
                {ratings?.length} Ratings & {reviews?.length} Reviews
              </span>
            </div>
            <div className="flex items-center priceContainer gap-x-2">
              <span className={style.price}>Tk. {productDetails.price}</span>
              <del>{productDetails.price + 1000}</del>
              <span className={style.discount}>22% off</span>
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              {productDetails.colors.length > 0 && (
                <div className="my-5">
                  <h2 className="text-lg font-bold text-muted">Colors</h2>
                  <div className={`flex items-center gap-x-3 ml-[40px]`}>
                    {productDetails.colors.map((c: any) => (
                      <div
                        onClick={() => setSelectedColor(c)}
                        key={c._id}
                        className="tooltip"
                        data-tip={c.name}
                      >
                        <div
                          style={{
                            border: `${
                              isSelectedColor(c) ? "3px solid #FF6A00" : "none"
                            }`,
                            borderRadius: "50%",
                            padding: "2px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              background: c.hex,
                              height: "30px",
                              width: "30px",
                              borderRadius: "50%",
                              border: `${
                                isWhiteColor(c) && !isSelectedColor(c)
                                  ? "2px solid black"
                                  : "none"
                              }`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {productDetails.sizes.length > 0 && (
                <div className="my-5">
                  <h2 className="text-lg font-bold text-muted">Sizes</h2>
                  <div className="flex items-center gap-x-3 ml-[40px]">
                    {productDetails.sizes.map((s: any) => (
                      <div
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 px-3 ${
                          isSelectedSize(s)
                            ? "bg-gray-200 border-primary border"
                            : "border"
                        } cursor-pointer`}
                        key={s._id}
                      >
                        {s.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {productDetails.highlights.length > 0 && (
                <div className={style.highlights}>
                  <h2 className="text-lg font-bold text-muted text-[#878787]">
                    Highlights
                  </h2>
                  <ul>
                    {productDetails.highlights.map((h: any) => (
                      <li key={h._id}>{h.title}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h2 className="mt-5 text-2xl font-bold">Description</h2>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {productDetails.description}
                </p>
              </div>
              {productDetails.brand && (
                <Link
                  href={`/brands/${productDetails?.brand?.slug}/${productDetails?.brand?._id}`}
                  className="block my-5"
                >
                  <h2 className="text-2xl font-bold">Brand</h2>
                  <div className="flex items-center gap-3">
                    <div
                      title={productDetails?.brand?.name}
                      className="h-[50px]"
                    >
                      <Image
                        className="object-contain max-w-full max-h-full"
                        src={productDetails?.brand?.image.location}
                        alt={productDetails?.brand?.name}
                        width={120}
                        height={50}
                      />
                    </div>
                    <h4 className="text-sm font-bold">
                      {productDetails?.warranty || ""}
                    </h4>
                  </div>
                </Link>
              )}
            </div>
            <RatingsContainer
              reviews={reviews}
              ratings={ratings}
              reviewSlice={reviewSlice}
              setReviewSlice={setReviewSlice}
              product={productDetails}
            />
          </div>
        </div>
      </div>
      {/* {productPicturesModal && (
        <ProductImagesModal
          productName={productDetails?.name}
          images={productDetails?.productPictures}
          setProductPicturesModal={setProductPicturesModal}
        />
      )} */}
      <ProductModal productDetails={productDetails}></ProductModal>
    </div>
  );
};

export default ProductDetailsDesktop;
