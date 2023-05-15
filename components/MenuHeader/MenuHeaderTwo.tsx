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

const MenuHeaderTwo = () => {
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
  ];
  return (
    <div className="pl-5 pr-2 flex flex-wrap">
      {homeNavDetails.map((details: any) => {
        return (
          <div className="p-1 w-[155px]" key={details._id}>
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

export default MenuHeaderTwo;
