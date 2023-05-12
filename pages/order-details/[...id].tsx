// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getOrder } from "../../actions";
// import Card from "@/components/UI/Card/Card";

// const OrderDetailsPage = () => {
//   const { orderId } = useParams();
//   const orderDetails = useSelector((state) => state.user.orderDetails);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const payload = {
//       orderId,
//     };
//     dispatch(getOrder(payload));
//   }, [orderId]);
//   if (!(orderDetails && orderDetails.address)) {
//     return null;
//   }
//   return (
//     <div>
//       <div
//         style={{
//           width: "1160px",
//           margin: "10px auto",
//         }}
//       >
//         <Card>
//           <div className="delAdrContainer">
//             <div className="delAdrDetails">
//               <div className="delTitle">Delivery Address</div>
//               <div className="delName">{orderDetails.address.name}</div>
//               <div className="delAddress">{orderDetails.address.address}</div>
//               <div className="delPhoneNumber">
//                 {orderDetails.address.mobileNumber}
//               </div>
//             </div>
//             <div className="delMoreActionContainer">
//               <div className="delTitle">More Actions</div>
//               <div className="delName">Download Invoice</div>
//             </div>
//           </div>
//         </Card>
//         <Card>
//           <div className="">
//             <div>Items</div>
//             <div>Order Status</div>
//             <div>Order Status</div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailsPage;
