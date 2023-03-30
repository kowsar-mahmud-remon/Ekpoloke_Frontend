import React from "react";
// import BottomNavbar from "../BottomNavbar/BottomNavbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuHeader from "../MenuHeader/MenuHeader";
// import Search from "../Search/Search";

const Layout = ({
  children,
  menuHeader = true,
  // bottomNavbar = true,
  // search = true,
  footer = true,
}: any) => {
  return (
    <>
      {/* <AdHeader /> */}
      <Header
        content={
          <>
            {/* {search && <Search />} */}
            {menuHeader && <MenuHeader />}
            {children}
            {/* {bottomNavbar && <BottomNavbar />} */}
            {footer && <Footer />}
          </>
        }
      />
    </>
  );
};

export default Layout;
