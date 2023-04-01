// import React from "react";
// import { BsFacebook, BsTwitter } from "react-icons/bs";
// import { GrClose } from "react-icons/gr";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { MdContentCopy } from "react-icons/md";
// import ModalClose from "../ModalClose/ModalClose";

// const ShareModal = ({ setShareModal }) => {
//   return (
//     <>
//       <input type="checkbox" id="productShareModal" className="modal-toggle" />
//       <div className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
//         <div className="relative flex items-center justify-center gap-5 py-16 modal-box">
//           <ModalClose rounded handleClose={() => setShareModal(false)} />
//           <div className="p-4 bg-gray-100 rounded-full cursor-pointer">
//             <MdContentCopy
//               onClick={() => {
//                 setShareModal(false);
//                 navigator.clipboard.writeText(window.location.href);
//               }}
//               fontSize={32}
//             />
//           </div>
//           <div className="p-4 bg-gray-100 rounded-full cursor-pointer">
//             <BsFacebook
//               onClick={() => {
//                 setShareModal(false);
//                 window.open(
//                   `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
//                   "_blank"
//                 );
//               }}
//               fontSize={32}
//               color="#0B84EE"
//             />
//           </div>
//           <div className="p-4 bg-gray-100 rounded-full cursor-pointer">
//             <BsTwitter
//               onClick={() => {
//                 setShareModal(false);
//                 window.open(
//                   `https://twitter.com/intent/tweet?url=${window.location.href}`,
//                   "_blank"
//                 );
//               }}
//               fontSize={32}
//               color="#1D9BF0"
//             />
//           </div>
//           <div className="p-4 bg-gray-100 rounded-full cursor-pointer">
//             <IoLogoWhatsapp
//               fontSize={32}
//               color="#2FBA44"
//               onClick={() => {
//                 setShareModal(false);
//                 window.open(
//                   `https://api.whatsapp.com/send?&text=${window.location.href}`,
//                   "_blank"
//                 );
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShareModal;
