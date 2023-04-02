import { Button, Rating, RatingClassKey } from "@mui/material";
import React from "react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import getRatingColor from "../../utils/getRatingColor";
import { useDispatch } from "react-redux";
// import { rateProduct } from "../../actions";
import Image from "next/image";
import ModalClose from "../ModalClose/ModalClose";
import style from "./ProductDetailsPage.module.css";
import { GrClose } from "react-icons/gr";
import { useAddReviewMutation } from "../rtkQuery/productApi";

interface ratingModal {
  handleClose?: any;
  product?: any;
  setRatingModal?: any;
  open?: boolean;
}

const RatingModal = ({
  handleClose,
  product,
  setRatingModal,
  open,
}: ratingModal) => {

  const [addReview, {isError, isLoading, isSuccess}] = useAddReviewMutation() || {};

  console.log(product, "productsssssssssssss modalllllllll");

  

  const [rating, setRating] = useState(5);
  const [images, setImages] = useState([]);
  const [reviewTitle, setReviewTitle] = useState("");
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const handleImages = (e: any) => {
    setImages(Object.values(e.target.files));
  };
  const handleRateProduct = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("rate", rating);
    formData.append("reviewTitle", reviewTitle);
    formData.append("review", review);
    formData.append("date", new Date());
    for (const image of images) {
      formData.append("reviewImages", image);
    }
    addReview(product._id, formData)
    setRatingModal(false);
  };

  return (
    <>
      <div className="relative">
        <input
          type="checkbox"
          id="productRatingModal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom backdrop-blur-sm sm:modal-middle">
          <div className="modal-box">
            <h3 style={{ textAlign: "center" }}>Rate This Product</h3>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Rating
                name="simple-controlled"
                value={rating}
                style={{ fontSize: "50px" }}
                onChange={(
                  event: React.SyntheticEvent<Element, Event>,
                  newValue
                ) => {
                  setRating(newValue);
                }}
              />
            </div>
            {rating ? (
              <p style={{ textAlign: "center" }}>
                You have rated{" "}
                <span
                  style={{
                    color: getRatingColor(rating),
                    fontWeight: "bold",
                    fontSize: "23px",
                  }}
                >
                  {rating} stars
                </span>
              </p>
            ) : (
              <p style={{ textAlign: "center" }}>Please Rate This Product</p>
            )}
            <form
              onSubmit={handleRateProduct}
              className={style.rateProductForm}
            >
              <input
                className="block mb-2 w-full border border-[#cecece] rounded-lg pl-2"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                type="text"
                placeholder="Review Title (Optional)"
              />
              <textarea
                className="block mb-2 w-full border border-[#cecece] rounded-lg pl-2"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                type="text"
                placeholder="Review Description (Optional)"
              />
              <div
                className={style.reviewImagesContainer}
                style={{ marginBottom: "20px" }}
              >
                {images?.map((reviewImage, index) => (
                  <>
                    <div className="w-20 h-20 mr-1">
                      <Image
                        className="rounded"
                        width={100}
                        height={100}
                        src={reviewImage && URL.createObjectURL(reviewImage)}
                        alt={`Review ${index + 1}`}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className={style.ratingImages}>
                  <label htmlFor="ratingImages">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Upload Images{" "}
                      <MdCloudUpload style={{ marginLeft: "5px" }} />
                    </span>
                  </label>
                  <input
                    onChange={(e) => handleImages(e)}
                    id="ratingImages"
                    type="file"
                    accept="image/*"
                    multiple
                  />
                </div>
                <div style={{ width: "30px" }}></div>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ padding: "6px 20px", width: "50%" }}
                  disabled={rating ? false : true}
                  onClick={handleRateProduct}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Submit <IoMdSend style={{ marginLeft: "5px" }} />
                  </span>
                </Button>
              </div>
            </form>
            <div
              className="cursor-pointer p-2 rounded-full hover:bg-slate-200 absolute top-2 right-2"
              onClick={handleClose}
            >
              <GrClose />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingModal;
