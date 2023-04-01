// import React, { useState } from "react";
// import calculateAverageRating from "../../utils/calculateAverageRating";
// import { IoMdShareAlt } from "react-icons/io";


// const RatingsView = ({ ratings, reviews, calculatedRatings }) => {
//   const [shareModal, setShareModal] = useState(false);
//   return (
//     <>
//       <div className="flex mt-0 mb-[20px] md:flex-row flex-col items-center justify-center">
//         <div className="productRatingLeftText">
//           <h2>
//             {calculateAverageRating(ratings && ratings)?.toFixed(1)}
//             <StarIcon fontSize="20px" />
//           </h2>
//           <p>
//             {ratings?.length} Ratings & {reviews.length} Reviews
//           </p>
//         </div>
//         <div className="productRatingRightStatus">
//           {Object.values(calculatedRatings)?.map((rating, index) => (
//             <div key={index}>
//               <p>
//                 <span style={{ marginRight: "3px" }}>{rating?.title}</span>
//                 <StarIcon fontSize="10px" />
//               </p>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "5px",
//                   background: "#f0f0f0",
//                   position: "relative",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <span
//                   style={{
//                     background: rating?.color,
//                     position: "absolute",
//                     left: "0",
//                     top: 0,
//                     width: `${(100 * rating?.count) / ratings?.length}%`,
//                     height: "100%",
//                     borderRadius: "10px",
//                   }}
//                 ></span>
//               </div>
//               <p
//                 style={{
//                   marginLeft: "5px",
//                 }}
//               >
//                 {rating?.count}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-row items-center justify-center w-full gap-3 md:flex-col md:gap-2">
//           <div className="text-muted whitespace-nowrap">
//             Likes <span>100</span>
//           </div>
//           <div className="text-muted whitespace-nowrap">
//             Dislikes <span>10</span>
//           </div>
//           <div>
//             <label
//               onClick={() => setShareModal(true)}
//               htmlFor="productShareModal"
//             >
//               <IoMdShareAlt
//                 className="hidden mx-auto share md:block"
//                 cursor={"pointer"}
//                 fontSize={40}
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//       {shareModal && <ShareModal setShareModal={setShareModal} />}
//     </>
//   );
// };

// export default RatingsView;
