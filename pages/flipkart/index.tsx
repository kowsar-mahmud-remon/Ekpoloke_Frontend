import React from "react";
import HomeNav from "../../components/FlipKart/HomeNav";
import FlipKartCarousel from "../../components/FlipKart/FlipKartCarousel";
import HomeBanner from "../../components/FlipKart/HomeBanner";
import BestElectronic from "../../components/FlipKart/ProductComponents/BestElectronic";
import BeautyFood from "../../components/FlipKart/ProductComponents/BeautyFood";
import ShopCool from "../../components/FlipKart/ProductComponents/ShopCool";
import SportsHealthCare from "../../components/FlipKart/ProductComponents/SportsHealthCare";

const index = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <FlipKartCarousel></FlipKartCarousel>
      <BestElectronic></BestElectronic>
      <BeautyFood></BeautyFood>
      <HomeBanner></HomeBanner>
      <ShopCool></ShopCool>
      <SportsHealthCare></SportsHealthCare>
    </div>
  );
};

export default index;
