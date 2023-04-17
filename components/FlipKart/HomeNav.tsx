import React from "react";
import img from "../../assets/images/homeNavImg1.jpg";
import img2 from "../../assets/images/homeNavImg2.jpg";
import img3 from "../../assets/images/homeNavImg3.jpg";
import img4 from "../../assets/images/homeNavImg4.jpg";
import img5 from "../../assets/images/homeNavImg5.jpg";
import img6 from "../../assets/images/homeNavImg6.jpg";
import img7 from "../../assets/images/homeNavImg7.jpg";
import img8 from "../../assets/images/homeNavImg8.jpg";
import img9 from "../../assets/images/homeNavImg9.jpg";
import Image from "next/image";

const HomeNav = () => {
  const homeNavDetails = [
    {
      _id: 1,
      img: img,
      title: "Top Offers",
    },
    {
      _id: 2,
      img: img2,
      title: "Mobiles & Tablets",
    },
    {
      _id: 3,
      img: img3,
      title: "Electronics",
    },
    {
      _id: 4,
      img: img4,
      title: "TVs & Appliances",
    },
    {
      _id: 5,
      img: img5,
      title: "Fashion",
    },
    {
      _id: 6,
      img: img6,
      title: "Beauty",
    },
    {
      _id: 7,
      img: img7,
      title: "Home & Furniture",
    },
    {
      _id: 8,
      img: img8,
      title: "Flights",
    },
    {
      _id: 9,
      img: img9,
      title: "Grocery",
    },
  ];
  return (
    <div className="px-5 my-5 flex flex-wrap border-b border-[#c2c2c2]">
      {homeNavDetails.map((details: any) => {
        return (
          <div className="p-1 w-[145px]" key={details._id}>
            <div className="flex justify-center">
              <Image
                className="w-[64px] h-[64px]"
                src={details.img}
                alt="home Nav img"
                width={64}
                height={64}
              />
            </div>

            <p className="text-base font-medium my-2 text-center">
              {details.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeNav;
