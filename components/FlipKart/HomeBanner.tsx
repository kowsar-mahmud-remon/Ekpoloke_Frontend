import Image from "next/image";
import React from "react";
import img from "../../assets/images/flipkartBannerImg.jpg";

const HomeBanner = () => {
  return (
    <div className="mx-2">
      <Image
        className="w-full h-[150px] lg:h-[270px]"
        src={img}
        alt="home banner img"
        width={1500}
        height={1000}
      />
    </div>
  );
};

export default HomeBanner;
