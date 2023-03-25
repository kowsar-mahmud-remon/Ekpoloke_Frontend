import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="md:h-[150px] h-[100px] w-[100%] my-[20px]">
      <Image
        width={1000}
        height={150}
        src="https://placeimg.com/1000/150/nature"
        alt="Bank Discount"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default HomeBanner;
