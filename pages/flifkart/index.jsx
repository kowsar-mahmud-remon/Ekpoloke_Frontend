import React from "react";
import HomeNav from "../../components/FlipKart/HomeNav";
import FlipKartCarousel from "../../components/FlipKart/FlipKartCarousel";
import Products from "../../components/FlipKart/Products/Products"

const index = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <FlipKartCarousel></FlipKartCarousel>
      <Products></Products>
    </div>
  );
};

export default index;
