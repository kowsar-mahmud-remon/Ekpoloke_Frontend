import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useRouter } from "next/router";
import Search from "../Search/Search";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import MenuButton from "../MenuHeader/MenuButton";

const Layout = ({
  children,
  menuHeader = true,
  bottomNavbar = true,
  search = true,
  footer = true,
}: any) => {
  const router = useRouter();
  const newPage = router.pathname;
  if (newPage === "/login" || newPage === "/register") {
    return children;
  }
  return (
    <>
      {/* <AdHeader /> */}
      <Header
        content={
          <>
            {search && <Search />}
            {menuHeader && <MenuButton />}
            {children}
            {bottomNavbar && <BottomNavbar />}
            {footer && <Footer />}
          </>
        }
      />
    </>
  );
};

export default Layout;
