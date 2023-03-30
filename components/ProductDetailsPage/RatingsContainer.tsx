// import React from "react";
// import Rating from "../../components/UI/Rating/Rating";
// import { GoVerified } from "react-icons/go";
// import Moment from "react-moment";
// import { BiPlusMedical } from "react-icons/bi";
// import { useState } from "react";
// import { useEffect } from "react";
// import RatingsView from "./RatingsView";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";

// const RatingsContainer = ({
//   reviews,
//   ratings,
//   reviewSlice,
//   setReviewSlice,
//   product,
// }) => {
//   const [calculatedRatings, setCalculatedRatings] = useState({});
//   useEffect(() => {
//     let five = 0;
//     let four = 0;
//     let three = 0;
//     let two = 0;
//     let one = 0;
//     ratings?.forEach((rating) => {
//       if (rating?.rate === 5) {
//         five += 1;
//       }
//       if (rating?.rate === 4) {
//         four += 1;
//       }
//       if (rating?.rate === 3) {
//         three += 1;
//       }
//       if (rating?.rate === 2) {
//         two += 1;
//       }
//       if (rating?.rate === 1) {
//         one += 1;
//       }
//     });
//     const details = {
//       fiveStars: { count: five, color: "#388e3c", title: 5 },
//       fourStars: { count: four, color: "#388e3c", title: 4 },
//       threeStars: { count: three, color: "#ff9f00", title: 3 },
//       twoStars: { count: two, color: "#ff9f00", title: 2 },
//       oneStars: { count: one, color: "#ff6161", title: 1 },
//     };
//     setCalculatedRatings(details);
//   }, [ratings]);
//   const [ratingModal, setRatingModal] = useState(false);
//   const reviewImages = () => {
//     const allReviewImages = [];
//     for (const review of reviews) {
//       const images = review?.reviewImages?.map((pic) => pic);
//       images.forEach((image) => allReviewImages.push(image));
//     }
//     return {
//       allReviewImages,
//       firstNineTeenReviewImages: allReviewImages.slice(0, 19),
//       remainingReviewImagesCount:
//         allReviewImages.length - allReviewImages.slice(0, 19).length,
//     };
//   };
//   return (
//     <div className="reviewContainer">
//       <div className="reviewHeader">
//         <h2>Ratings and reviews</h2>
//         <label
//           htmlFor="productRatingModal"
//           className="text-white btn btn-sm btn-secondary"
//           onClick={() => setRatingModal(true)}
//         >
//           Rate Product
//         </label>
//       </div>
//       <RatingsView
//         ratings={ratings}
//         reviews={reviews}
//         calculatedRatings={calculatedRatings}
//       />
//       <h2
//         style={{
//           textAlign: "center",
//           borderTop: "2px solid #f0f0f0",
//           marginBottom: "5px",
//           marginTop: "0",
//           paddingTop: "20px",
//           fontSize: "25px",
//         }}
//       >
//         All Review Images
//       </h2>
//       <div className="flex flex-col pb-5 md:flex-row">
//         <div className="grid flex-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[5px] h-fit">
//           {reviewImages().firstNineTeenReviewImages.map((reviewImage) => (
//             <div style={{ height: "80px" }}>
//               <img
//                 src={generatePublicUrl(reviewImage?.img)}
//                 alt={reviewImage?.review}
//                 style={{
//                   height: "100%",
//                   width: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//         <div
//           style={{
//             height: "340px",
//             flex: 1,
//           }}
//           className="md:ml-[10px]"
//         >
//           <img
//             src="https://placeimg.com/640/480/nature"
//             className="object-fill w-full h-full"
//             alt="placeholder img"
//           />
//         </div>
//       </div>
//       {reviews?.slice(0, reviewSlice)?.map((review) => (
//         <div className="flex flex-col justify-between review md:flex-row">
//           <div>
//             <Rating value={review?.rate} />{" "}
//             <span className="shortReview">{review?.reviewTitle}</span>
//             <p className="reviewTitle">{review?.review}</p>
//             <div className="flex" style={{ alignItems: "center" }}>
//               <p className="reviewCustomerDetails">
//                 {review?.user?.firstName} {review?.user?.lastName}
//               </p>
//               <div className="reviewVerification">
//                 <GoVerified style={{ color: "#2874f0", marginRight: "5px" }} />
//                 Verified Buyer
//               </div>
//               <Moment className="reviewDate" fromNow>
//                 {review.date}
//               </Moment>
//             </div>
//             <div className="reviewImagesContainer">
//               {review?.reviewImages?.map((reviewImage, index) => (
//                 <div key={index}>
//                   <img
//                     src={generatePublicUrl(reviewImage?.img)}
//                     alt={review?.review}
//                     style={{
//                       height: "100%",
//                       width: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-end justify-center mt-5 md:mr-5">
//             <div className="flex items-center mr-6 cursor-pointer text-neutral">
//               <AiFillLike fontSize={25} /> <span className="ml-1">100</span>
//             </div>
//             <div className="flex items-center cursor-pointer text-neutral">
//               <AiFillDislike fontSize={25} /> <span className="ml-1">10</span>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="font-bold otherReviews">
//         <span>All {reviews?.length} Reviews</span>
//         <BiPlusMedical
//           style={{ display: reviewSlice === 10 && "none" }}
//           onClick={() => setReviewSlice(10)}
//         />
//       </div>
//       {ratingModal && (
//         <RatingModal
//           open={ratingModal}
//           handleClose={() => setRatingModal(false)}
//           product={product}
//           setRatingModal={setRatingModal}
//         />
//       )}
//     </div>
//   );
// };

// export default RatingsContainer;
