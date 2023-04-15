import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DropdownMenu } from "../MaterialUI/MaterialUI";
import Cart from "../UI/Cart/Cart";
import styles from "../../styles/Header.module.css";
import logo from "../../assets/logo/logo.png";
import { IoIosArrowDown, IoIosRefresh } from "react-icons/io";
import { GiHamburgerMenu, GiProgression, GiClawHammer } from "react-icons/gi";
import {
  MdCardGiftcard,
  MdSell,
  MdLiveHelp,
  MdLogout,
  MdClose,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import {
  BsFillGiftFill,
  BsCart3,
  BsCash,
  BsSuitHeart,
  BsHandbag,
} from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { TbLanguage, TbBellRinging } from "react-icons/tb";
import { ImSearch, ImFolderDownload } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSearchUrl } from "@/urlConfig";
import { signOut, signUp } from "../features/auth/authSlice";
// import { signOut } from "../../actions";
// import { getSearchUrl } from "../../urlConfig";

const LoggedInMenu = () => {
  const { user } = useSelector((state) => state?.user);
  // const newUser = JSON.parse(localStorage.getItem("user"));
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    // dispatch(signOut());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(signOut());
    console.log(" useruser user", user);
  };
  return (
    <DropdownMenu
      menu={<a className={`${styles.fullName}`}>{user?.fullName}</a>}
      menus={[
        { label: "My Profile", href: "", icon: <FaRegUser /> },
        {
          label: "Orders",
          href: "/account/orders",
          icon: <CgNotes />,
        },
        { label: "Favorites", href: "", icon: <BsSuitHeart /> },
        { label: "Cart", href: "/cart", icon: <BsCart3 /> },
        { label: "Reward", href: "", icon: <BsFillGiftFill /> },
        { label: "Gift Cards", href: "", icon: <MdCardGiftcard /> },
        {
          label: "Logout",
          href: "",
          icon: <MdLogout />,
          onClick: logout,
        },
      ]}
    />
  );
};

const LoggedOutMenu = () => {
  return (
    <DropdownMenu
      menu={
        <Link
          className="flex items-center gap-2 font-bold text-black"
          href="/login"
        >
          <FaRegUser /> <span>Login</span>
        </Link>
      }
      menus={[
        { label: "My Profile", href: "", icon: <FaRegUser /> },
        {
          label: "Orders",
          href: "/account/orders",
          icon: <CgNotes />,
        },
        { label: "Favorites", href: "", icon: <BsSuitHeart /> },
        { label: "Cart", href: "", icon: <BsCart3 /> },
        { label: "Reward", href: "", icon: <BsFillGiftFill /> },
        { label: "Gift Cards", href: "", icon: <MdCardGiftcard /> },
      ]}
    />
  );
};

const Header = ({ content }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(signUp({ token: token, user: user }));
  }, ["token", "user"]);

  const { accessToken, user } = useSelector((state) => state?.user);

  // const cart = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth);
  const [searchValue, setSearchValue] = useState("");
  const { cartItems } = useSelector((state) => state?.carts);

  // const [searchParams] = useSearchParams();

  // const location = useLocation();
  // const navigate = useNavigate();
  const router = useRouter();
  const { s } = router.query;

  useEffect(() => {
    if (router.asPath === "/search/product") {
      const searchValue = s;
      console.log("header searchValue under useEffect", s);
      setSearchValue(searchValue);
    }
  }, [router?.asPath, s]);

  // useEffect(() => {
  //   if (location.pathname === "/search/product") {
  //     const searchValue = searchParams.get("s");
  //     setSearchValue(searchValue);
  //   }
  // }, [location.pathname, searchParams]);
  // const dispatch = useDispatch();

  const logout = () => {
    // dispatch(signOut());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(signOut());
    console.log(" useruser user", user);
  };

  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    console.log("header searchValue searchValue searchValue", searchValue);
    const newRouter = getSearchUrl(searchValue);
    console.log("header newRouter newRouter newRouter", newRouter);
    router.push(getSearchUrl(searchValue));
    // navigate(getSearchUrl(searchValue));
  };

  return (
    <>
      <div className="drawer">
        <input id="navbarDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F2F2F2]" id="content">
          <div className="bg-white">
            <div className="justify-between w-full mx-auto navbar lg:container xl:container xl:px-16 lg:px-2 md:px-6">
              <Link href="/" className="px-2 mx-2">
                <Image
                  src={logo}
                  style={{ width: "170px" }}
                  alt="Logo"
                  width={170}
                  height={170}
                />
              </Link>
              <div className="flex-none md:hidden">
                <label
                  htmlFor="navbarDrawer"
                  className="btn btn-square btn-ghost"
                >
                  <GiHamburgerMenu className="text-primary" fontSize={30} />
                </label>
              </div>

              <div className="flex-1 hidden h-full md:block">
                <form
                  onSubmit={handleSubmitSearch}
                  className={`${styles.search}`}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="py-0 px-3 lg:px- md:px-6 sm:px-2"
                  >
                    <ImSearch /> Searchh
                  </button>
                </form>
              </div>

              <div className="flex-none hidden md:block">
                <ul className={`menu menu-horizontal ${styles.navbarItems}`}>
                  <li>
                    <DropdownMenu
                      menu={
                        <a className={`${styles.more} text-black`}>
                          <span>More</span>
                          <IoIosArrowDown />
                        </a>
                      }
                      menus={[
                        {
                          label: "Notification Preference",
                          href: "",
                          icon: <TbBellRinging />,
                        },
                        {
                          label: "Sell on Ekpoloke",
                          href: "",
                          icon: <MdSell />,
                        },
                        {
                          label: "24x7 Customer Care",
                          href: "",
                          icon: <MdLiveHelp />,
                        },
                        {
                          label: "Advertise",
                          href: "",
                          icon: <GiProgression />,
                        },
                        {
                          label: "Download App",
                          href: "",
                          icon: <ImFolderDownload />,
                        },
                      ]}
                    />
                  </li>
                  <li>{accessToken ? <LoggedInMenu /> : <LoggedOutMenu />}</li>
                  <li>
                    <Link href="/cart" className="cart">
                      <Cart count={Object.keys(cartItems).length} />
                      <span>Cart</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {content}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="navbarDrawer"
            className="drawer-overlay backdrop-brightness-50"
          ></label>
          <ul
            className={`menu p-0 relative ${styles.navbarMobileDrawer} overflow-y-auto w-[80%] bg-base-100`}
          >
            <li className="sticky top-0 left-0 right-0 z-10 bg-primary">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center text-xl text-white gap-x-3"
                >
                  <AiOutlineHome color="#fff" fontSize={32} />
                </Link>

                <span onClick={() => window.location.reload()}>
                  <IoIosRefresh color="#fff" fontSize={32} />
                </span>

                <label htmlFor="navbarDrawer">
                  <MdClose color="#fff" fontSize={32} />
                </label>
              </div>
            </li>
            <li>
              <Link
                href="/categories"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <BiCategory fontSize={25} /> <span>All Categories</span>
              </Link>
            </li>
            <li>
              <Link href="/language">
                <TbLanguage /> <span>Choose Language</span>
              </Link>
            </li>
            <li>
              {user ? (
                <Link href="/profile">
                  <FaRegUser fontSize={20} /> <span>{user?.fullName}</span>
                </Link>
              ) : (
                <Link href="/login">
                  <FaRegUser fontSize={20} /> <span>Login & Register</span>
                </Link>
              )}
            </li>

            <li>
              <Link href="/account/orders">
                <CgNotes /> <span>My Orders</span>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <BsCart3 /> <span>My Cart</span>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <BsSuitHeart /> <span>My Favorites</span>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <FaRegUser /> <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/offer-zone">
                <BsCash /> <span>Offer Zone</span>
              </Link>
            </li>
            <li>
              <Link href="/sell">
                <BsHandbag /> <span>Sell On Ekpoloke</span>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <RiCustomerService2Fill /> <span>Help Centre</span>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <GiClawHammer /> <span>Legal</span>
              </Link>
            </li>
            {accessToken && (
              <li>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  <MdLogout /> <span>Log Out</span>
                </Link>
              </li>
            )}

            {/* // */}
            {/* <label
              htmlFor="navbarDrawer"
              className="absolute z-50 p-2 rounded-full bg-neutral right-2 top-2"
            >
              <MdClose fontSize="25" />
            </label> */}
            {/* // */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
