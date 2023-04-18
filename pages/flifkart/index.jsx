import React from "react";
import HomeNav from "../../components/FlipKart/HomeNav";
import FlipKartCarousel from "../../components/FlipKart/FlipKartCarousel";
import HomeBanner from "../../components/FlipKart/HomeBanner";

const index = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <FlipKartCarousel></FlipKartCarousel>
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default index;
