import React, { useEffect, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes, CgMoreVerticalAlt } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
// import "./BottomNavbar.css";
import styles from "./BottomNavbar.module.css";
import Link from "next/link";
import { RootState } from "../app/store";

const BottomNavbar = () => {
  // const auth = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state: RootState) => state?.user);

  const bottomNavbarRef = useRef<any>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const content = document?.getElementById("content");

    const handleScroll = () => {
      if (content?.scrollTop && content.scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    content?.addEventListener("scroll", handleScroll);

    return () => {
      content?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="content"
      className={`${show ? "bottom-0" : `bottom-[-63px]`} ${
        styles.bottomNavbar
      }`}
      ref={bottomNavbarRef}
    >
      <Link href="/">
        <AiOutlineHome /> <span>Home</span>
      </Link>
      <Link href="/categories">
        <BiCategory /> <span>Categories</span>
      </Link>
      <Link href="/cart">
        <BsCart3 /> <span className="text-[10px]">Cart</span>
      </Link>
      <Link href="/account/orders">
        <CgNotes />
        <span>Orders</span>
      </Link>
      {accessToken ? (
        <Link href="/account/profile">
          <FaRegUser />
          <span>Profile</span>
        </Link>
      ) : (
        <Link href="/login">
          <FaRegUser /> <span>Login</span>
        </Link>
      )}
      <label htmlFor="navbarDrawer">
        <CgMoreVerticalAlt />
        <span>Menu</span>
      </label>
    </div>
  );
};

export default BottomNavbar;
