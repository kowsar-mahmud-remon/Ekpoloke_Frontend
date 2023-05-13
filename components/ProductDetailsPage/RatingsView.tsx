import React, { useState } from "react";
import calculateAverageRating from "../../utils/calculateAverageRating";
import { IoMdShareAlt } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import style from "./ProductDetailsPage.module.css"

interface ratingViewProps {
  ratings?: any;
  reviews?: any;
  calculatedRatings?: any;
}

const RatingsView = ({
  ratings,
  reviews,
  calculatedRatings,
}: ratingViewProps) => {
  const [shareModal, setShareModal] = useState(false);
  return (
    <>
      <div className="flex mt-0 mb-[20px] md:flex-row flex-col items-center justify-center">
        <div className={style.productRatingLeftText}>
          <h2>
            {calculateAverageRating(ratings && ratings)?.toFixed(1)}
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            {ratings?.length} Ratings & {reviews.length} Reviews
          </p>
        </div>
        <div className={style.productRatingRightStatus}>
          {Object.values(calculatedRatings)?.map((rating: any, index: any) => (
            <div key={index}>
              <p>
                <span style={{ marginRight: "3px" }}>{rating?.title}</span>
                <AiFillStar></AiFillStar>
              </p>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  background: "#f0f0f0",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    background: rating?.color,
                    position: "absolute",
                    left: "0",
                    top: 0,
                    width: `${(100 * rating?.count) / ratings?.length}%`,
                    height: "100%",
                    borderRadius: "10px",
                  }}
                ></span>
              </div>
              <p
                style={{
                  marginLeft: "5px",
                }}
              >
                {rating?.count}
              </p>  
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-3 md:flex-col md:gap-2">
          <div className="text-muted whitespace-nowrap text-[#878787]">
            Likes <span>100</span>
          </div>
          <div className="text-muted whitespace-nowrap text-[#878787]">
            Dislikes <span>10</span>
          </div>
          <div>
            <label
              onClick={() => setShareModal(true)}
              htmlFor="productShareModal"
            >
              <IoMdShareAlt
                className="hidden mx-auto share md:block"
                cursor={"pointer"}
                fontSize={40}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingsView;
