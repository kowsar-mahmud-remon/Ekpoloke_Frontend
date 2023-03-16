import React from 'react';

const Header = () => {
  return (
    <div>

    </div>
  );
};

export default Header;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Link,
//   useLocation,
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";
// import { DropdownMenu } from "../MaterialUI/MaterialUI";
// // import Cart from "../UI/Cart/Cart";
// import "./Header.css";
// import logo from "../../assets/logo/logo.png";
// import { IoIosArrowDown, IoIosRefresh } from "react-icons/io";
// import { GiHamburgerMenu, GiProgression, GiClawHammer } from "react-icons/gi";
// import {
//   MdCardGiftcard,
//   MdSell,
//   MdLiveHelp,
//   MdLogout,
//   MdClose,
// } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { BiCategory } from "react-icons/bi";
// import { AiOutlineHome } from "react-icons/ai";
// import {
//   BsFillGiftFill,
//   BsCart3,
//   BsCash,
//   BsSuitHeart,
//   BsHandbag,
// } from "react-icons/bs";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { CgNotes } from "react-icons/cg";
// import { TbLanguage, TbBellRinging } from "react-icons/tb";
// import { ImSearch, ImFolderDownload } from "react-icons/im";
// import Image from "next/image";
// // import { signOut } from "../../actions";
// // import { getSearchUrl } from "../../urlConfig";

// const LoggedInMenu = () => {
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const logout = () => {
//     dispatch(signOut());
//   };
//   return (
//     <DropdownMenu
//       menu={<a className="fullName">{auth.user.fullName}</a>}
//       menus={[
//         { label: "My Profile", href: "", icon: <FaRegUser /> },
//         {
//           label: "Orders",
//           href: "/account/orders",
//           icon: <CgNotes />,
//         },
//         { label: "Favorites", href: "", icon: <BsSuitHeart /> },
//         { label: "Cart", href: "/cart", icon: <BsCart3 /> },
//         { label: "Reward", href: "", icon: <BsFillGiftFill /> },
//         { label: "Gift Cards", href: "", icon: <MdCardGiftcard /> },
//         {
//           label: "Logout",
//           href: "",
//           icon: <MdLogout />,
//           onClick: logout,
//         },
//       ]}
//     />
//   );
// };

// const LoggedOutMenu = () => {
//   return (
//     <DropdownMenu
//       menu={
//         <Link
//           className="text-black font-bold flex items-center gap-2"
//           to="/login"
//         >
//           <FaRegUser /> <span>Login</span>
//         </Link>
//       }
//       menus={[
//         { label: "My Profile", href: "", icon: <FaRegUser /> },
//         {
//           label: "Orders",
//           href: "/account/orders",
//           icon: <CgNotes />,
//         },
//         { label: "Favorites", href: "", icon: <BsSuitHeart /> },
//         { label: "Cart", href: "", icon: <BsCart3 /> },
//         { label: "Reward", href: "", icon: <BsFillGiftFill /> },
//         { label: "Gift Cards", href: "", icon: <MdCardGiftcard /> },
//       ]}
//     />
//   );
// };

// const Header = ({ content }) => {
//   const cart = useSelector((state) => state.cart);
//   const auth = useSelector((state) => state.auth);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchParams] = useSearchParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (location.pathname === "/search/product") {
//       const searchValue = searchParams.get("s");
//       setSearchValue(searchValue);
//     }
//   }, [location.pathname, searchParams]);
//   const dispatch = useDispatch();
//   const logout = () => {
//     dispatch(signOut());
//   };
//   const handleSubmitSearch = (e) => {
//     e.preventDefault();
//     navigate(getSearchUrl(searchValue));
//   };
//   return (
//     <>
//       <div className="drawer">
//         <input id="navbarDrawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content" id="content">
//           <div className="bg-white">
//             <div className="w-full navbar lg:container xl:container xl:px-16 mx-auto lg:px-2 md:px-6 justify-between">
//               <Link to="/" className="px-2 mx-2">
//                 <Image src={logo} style={{ width: "170px" }} alt="Logo" />
//               </Link>
//               <div className="flex-none md:hidden">
//                 <label
//                   htmlFor="navbarDrawer"
//                   className="btn btn-square btn-ghost"
//                 >
//                   <GiHamburgerMenu className="text-primary" fontSize={30} />
//                 </label>
//               </div>

//               <div className="flex-1 h-full hidden md:block">
//                 <form onSubmit={handleSubmitSearch} className="search">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchValue}
//                     onChange={(e) => setSearchValue(e.target.value)}
//                   />
//                   <button
//                     type="submit"
//                     className="py-0 px-3 lg:px- md:px-6 sm:px-2"
//                   >
//                     <ImSearch /> Search
//                   </button>
//                 </form>
//               </div>

//               <div className="flex-none hidden md:block">
//                 <ul className="menu menu-horizontal navbarItems">
//                   <li>
//                     <DropdownMenu
//                       menu={
//                         <a className="more text-black">
//                           <span>More</span>
//                           <IoIosArrowDown />
//                         </a>
//                       }
//                       menus={[
//                         {
//                           label: "Notification Preference",
//                           href: "",
//                           icon: <TbBellRinging />,
//                         },
//                         {
//                           label: "Sell on Ekpoloke",
//                           href: "",
//                           icon: <MdSell />,
//                         },
//                         {
//                           label: "24x7 Customer Care",
//                           href: "",
//                           icon: <MdLiveHelp />,
//                         },
//                         {
//                           label: "Advertise",
//                           href: "",
//                           icon: <GiProgression />,
//                         },
//                         {
//                           label: "Download App",
//                           href: "",
//                           icon: <ImFolderDownload />,
//                         },
//                       ]}
//                     />
//                   </li>
//                   <li>
//                     {auth.authenticate ? <LoggedInMenu /> : <LoggedOutMenu />}
//                   </li>
//                   <li>
//                     <Link to="/cart" className="cart">
//                       {/* <Cart count={Object.keys(cart.cartItems).length} /> */}
//                       <span>Cart</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {content}
//         </div>
//         <div className="drawer-side">
//           <label
//             htmlFor="navbarDrawer"
//             className="drawer-overlay backdrop-brightness-50"
//           ></label>
//           <ul className="menu p-0 relative navbarMobileDrawer overflow-y-auto w-[80%] bg-base-100">
//             <li className="bg-primary sticky left-0 top-0 right-0 z-10">
//               <div className="flex items-center justify-between">
//                 <Link
//                   to="/"
//                   className="flex items-center text-white gap-x-3 text-xl"
//                 >
//                   <AiOutlineHome color="#fff" fontSize={32} />
//                 </Link>
//                 <span onClick={() => window.location.reload()}>
//                   <IoIosRefresh color="#fff" fontSize={32} />
//                 </span>
//                 <label htmlFor="navbarDrawer">
//                   <MdClose color="#fff" fontSize={32} />
//                 </label>
//               </div>
//             </li>
//             <li>
//               <Link
//                 to="/categories"
//                 style={{ fontSize: "20px", fontWeight: "bold" }}
//               >
//                 <BiCategory fontSize={25} /> <span>All Categories</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/language">
//                 <TbLanguage /> <span>Choose Language</span>
//               </Link>
//             </li>
//             <li>
//               {auth.authenticate ? (
//                 <Link to="/profile">
//                   <FaRegUser fontSize={20} /> <span>{auth.user.fullName}</span>
//                 </Link>
//               ) : (
//                 <Link to="/login">
//                   <FaRegUser fontSize={20} /> <span>Login & Register</span>
//                 </Link>
//               )}
//             </li>

//             <li>
//               <Link to="/account/orders">
//                 <CgNotes /> <span>My Orders</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/cart">
//                 <BsCart3 /> <span>My Cart</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/favorites">
//                 <BsSuitHeart /> <span>My Favorites</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/favorites">
//                 <FaRegUser /> <span>My Profile</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/offer-zone">
//                 <BsCash /> <span>Offer Zone</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/sell">
//                 <BsHandbag /> <span>Sell On Ekpoloke</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/help">
//                 <RiCustomerService2Fill /> <span>Help Centre</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/help">
//                 <GiClawHammer /> <span>Legal</span>
//               </Link>
//             </li>
//             {auth.authenticate && (
//               <li>
//                 {/* <a
//                   href="/"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     logout();
//                   }}
//                 >
//                   <MdLogout /> <span>Log Out</span>
//                 </a> */}
//               </li>
//             )}
//             {/* <label
//               htmlFor="navbarDrawer"
//               className="absolute p-2 bg-neutral rounded-full right-2 top-2 z-50"
//             >
//               <MdClose fontSize="25" />
//             </label> */}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
