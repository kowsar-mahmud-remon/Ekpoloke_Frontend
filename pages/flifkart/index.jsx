import React from "react";
import HomeNav from "../../components/FlipKart/HomeNav";
import FlipKartCarousel from "../../components/FlipKart/FlipKartCarousel";
import Products from "../../components/FlipKart/Products/Products"
import HomeBanner from "../../components/FlipKart/HomeBanner";

const index = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <FlipKartCarousel></FlipKartCarousel>
      <HomeBanner></HomeBanner>
      <Products></Products>
    </div>
  );
};

export default index;
