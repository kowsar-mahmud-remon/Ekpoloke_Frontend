import React from "react";
import Rating from "../../components/UI/Rating/Rating";
import { GoVerified } from "react-icons/go";
import Moment from "react-moment";
import { generatePublicUrl } from "../../urlConfig";
import { BiPlusMedical } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import RatingsView from "./RatingsView";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Image from "next/image";
import style  from "./ProductDetailsPage.module.css"

interface ratingProps {
  product?: any;
  ratings?: any;
  reviews?: any;
  reviewSlice?: any;
  setReviewSlice?: any;
}

const RatingsContainer = ({
  reviews,
  ratings,
  reviewSlice,
  setReviewSlice,
  product,
}: ratingProps) => {
  const [calculatedRatings, setCalculatedRatings] = useState({});
  useEffect(() => {
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;
    ratings?.forEach((rating: any) => {
      if (rating?.rate === 5) {
        five += 1;
      }
      if (rating?.rate === 4) {
        four += 1;
      }
      if (rating?.rate === 3) {
        three += 1;
      }
      if (rating?.rate === 2) {
        two += 1;
      }
      if (rating?.rate === 1) {
        one += 1;
      }
    });
    const details = {
      fiveStars: { count: five, color: "#388e3c", title: 5 },
      fourStars: { count: four, color: "#388e3c", title: 4 },
      threeStars: { count: three, color: "#ff9f00", title: 3 },
      twoStars: { count: two, color: "#ff9f00", title: 2 },
      oneStars: { count: one, color: "#ff6161", title: 1 },
    };
    setCalculatedRatings(details);
  }, [ratings]);
  const [ratingModal, setRatingModal] = useState(false);
  const reviewImages = () => {
    const allReviewImages: any = [];
    for (const review of reviews) {
      const images = review?.reviewImages?.map((pic: any) => pic);
      images.forEach((image: any) => allReviewImages.push(image));
    }
    return {
      allReviewImages,
      firstNineTeenReviewImages: allReviewImages.slice(0, 19),
      remainingReviewImagesCount:
        allReviewImages.length - allReviewImages.slice(0, 19).length,
    };
  };
  return (
    <div className={`${style.reviewContainer}`}>
      <div className={style.reviewHeader}>
        <h2 className="m-1">Ratings and reviews</h2>
        <label
          htmlFor="productRatingModal"
          className="text-white btn btn-sm btn-secondary"
          onClick={() => setRatingModal(true)}
        >
          Rate Product
        </label>
      </div>
      <RatingsView
        ratings={ratings}
        reviews={reviews}
        calculatedRatings={calculatedRatings}
      />
      <h2
        style={{
          textAlign: "center",
          borderTop: "2px solid #f0f0f0",
          marginBottom: "5px",
          marginTop: "0",
          paddingTop: "20px",
          fontSize: "25px",
        }}
      >
        All Review Images
      </h2>
      <div className="flex flex-col pb-5 md:flex-row">
        <div className="grid flex-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[5px] h-fit">
          {reviewImages().firstNineTeenReviewImages.map((reviewImage: any) => (
            <>
              <div className="h-20">
                <Image className="object-contain max-w-full max-h-full"
                  src={generatePublicUrl(reviewImage?.img)}
                  alt=""
                  width={110}
                  height={180}
                ></Image>
              </div>
            </>
          ))}
        </div>
        <div
          style={{
            height: "340px",
            flex: 1,
          }}
          className="md:ml-[10px]"
        >
          <Image
            width={340}
            height={340}
            src="https://placeimg.com/640/480/nature"
            className="object-fill w-full h-full"
            alt="placeholder img"
          />
        </div>
      </div>
      {reviews?.slice(0, reviewSlice)?.map((review: any) => (
        <>
          <div className={`flex flex-col justify-between ${style.review} md:flex-row`}>
            <div>
              <Rating value={review?.rate} />{" "}
              <span className={style.shortReview}>{review?.reviewTitle}</span>
              <p className={style.reviewTitle}>{review?.review}</p>
              <div className="flex" style={{ alignItems: "center" }}>
                <p className={style.reviewStyle}>
                  {review?.user?.firstName} {review?.user?.lastName}
                </p>
                <div className={`${style.reviewStyle} flex items-center`}>
                  <GoVerified
                    style={{ color: "#2874f0", marginRight: "5px" }}
                  />
                  Verified Buyer
                </div>
                <Moment className={style.reviewStyle} fromNow>
                  {review.date}
                </Moment>
              </div>
              <div className={style.reviewImagesContainer}>
                {review?.reviewImages?.map((reviewImage: any, index: any) => (
                  <div key={index}>
                    <Image
                      width={100}
                      height={100}
                      src={generatePublicUrl(reviewImage?.img)}
                      alt={review?.review}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-end justify-center mt-5 md:mr-5">
              <div className="flex items-center mr-6 cursor-pointer text-neutral">
                <AiFillLike fontSize={25} /> <span className="ml-1">100</span>
              </div>
              <div className="flex items-center cursor-pointer text-neutral">
                <AiFillDislike fontSize={25} /> <span className="ml-1">10</span>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className={`font-bold ${style.otherReviews}`}>
        <span >All {reviews?.length} Reviews</span>
        {/* <BiPlusMedical
          style={{ display: reviewSlice === 10 && "none" }}
          onClick={() => setReviewSlice(10)}
        /> */}
      </div>
      {/* {ratingModal && (
        <RatingModal
          open={ratingModal}
          handleClose={() => setRatingModal(false)}
          product={product}
          setRatingModal={setRatingModal}
        />
      )} */}
    </div>
  );
};

export default RatingsContainer;
