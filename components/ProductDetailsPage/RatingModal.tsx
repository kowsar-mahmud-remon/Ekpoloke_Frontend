// import { Button, Rating } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import { MdCloudUpload } from "react-icons/md";
// import { IoMdSend } from "react-icons/io";
// import getRatingColor from "../../utils/getRatingColor";
// import { useDispatch } from "react-redux";
// import Image from "next/image";

// const RatingModal = ( handleClose:any, product:any, setRatingModal:any) => {
//   const [rating, setRating] = useState(5);
//   const [images, setImages] = useState([]);
//   const [reviewTitle, setReviewTitle] = useState("");
//   const [review, setReview] = useState("");
//   const dispatch = useDispatch();
//   const handleImages = (e:any) => {
//     setImages(Object.values(e.target.files));
//   };
//   const handleRateProduct = async (e:any) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("rate", rating);
//     formData.append("reviewTitle", reviewTitle);
//     formData.append("review", review);
//     formData.append("date", new Date());
//     for (const image of images) {
//       formData.append("reviewImages", image);
//     }
//     dispatch(rateProduct(product._id, formData));
//     setRatingModal(false);
//   };

//   return (
//     <>
//       <input type="checkbox" id="productRatingModal" className="modal-toggle" />
//       <div className="modal modal-bottom backdrop-blur-sm sm:modal-middle">
//         <div className="modal-box">
//           <h3 style={{ textAlign: "center" }}>Rate This Product</h3>
//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Rating
//               name="simple-controlled"
//               value={rating}
//               style={{ fontSize: "50px" }}
//               onChange={(event, newValue) => {
//                 setRating(newValue);
//               }}
//             />
//           </div>
//           {rating ? (
//             <p style={{ textAlign: "center" }}>
//               You have rated{" "}
//               <span
//                 style={{
//                   color: getRatingColor(rating),
//                   fontWeight: "bold",
//                   fontSize: "23px",
//                 }}
//               >
//                 {rating} stars
//               </span>
//             </p>
//           ) : (
//             <p style={{ textAlign: "center" }}>Please Rate This Product</p>
//           )}
//           <form onSubmit={handleRateProduct} className="rateProductForm">
//             <input
//               value={reviewTitle}
//               onChange={(e) => setReviewTitle(e.target.value)}
//               type="text"
//               placeholder="Review Title (Optional)"
//             />
//             <textarea
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               type="text"
//               placeholder="Review Description (Optional)"
//             />
//             <div
//               className="reviewImagesContainer"
//               style={{ marginBottom: "20px" }}
//             >
//               {images?.map((reviewImage, index) => (
//                 <div>
//                   <Image
//                     src={reviewImage && URL.createObjectURL(reviewImage)}
//                     alt={`Review ${index + 1}`}
                    
//                   />
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 width: "100%",
//               }}
//             >
//               <div className="ratingImages">
//                 <label htmlFor="ratingImages">
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     Upload Images{" "}
//                     <MdCloudUpload style={{ marginLeft: "5px" }} />
//                   </span>
//                 </label>
//                 <input
//                   onChange={(e) => handleImages(e)}
//                   id="ratingImages"
//                   type="file"
//                   accept="image/*"
//                   multiple
//                 />
//               </div>
//               <div style={{ width: "30px" }}></div>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 style={{ padding: "6px 20px", width: "50%" }}
//                 disabled={rating ? false : true}
//                 onClick={handleRateProduct}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   Submit <IoMdSend style={{ marginLeft: "5px" }} />
//                 </span>
//               </Button>
//             </div>
//           </form>
//           <ModalClose handleClose={handleClose} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default RatingModal;
