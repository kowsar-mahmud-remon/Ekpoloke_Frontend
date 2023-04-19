import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextButton from "../Carousel/NextButton";
import PreviousButton from "../Carousel/PreviousButton";
import styles from "../../styles/Carousel.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useGetCarouselQuery } from "../features/products/productsApi";
import img from "../../assets/images/flipkartCarouselImg1.jpg";
import img2 from "../../assets/images/flipkartCarouselImg2.jpg";
import img3 from "../../assets/images/flipkartCarouselImg3.jpg";
import img4 from "../../assets/images/flipkartCarouselImg4.jpg";
import Link from "next/link";

interface ComponentBProps {
  slides: any;
  onClick: any;
  className: any;
}

const FlipKartCarousel = ({}) => {
  const { data, isLoading, isSuccess } = useGetCarouselQuery([]);

  const flipKartCarouselDetails = [
    {
      _id: 1,
      image: img,
    },
    {
      _id: 2,
      image: img2,
    },
    {
      _id: 3,
      image: img3,
    },
    {
      _id: 4,
      image: img4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots custom-indicator",
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="hidden"></div>;
    },
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <Slider
      className={`my-[15px] mx-2 ${styles.homeSlider} bg-gray-400`}
      {...settings}
    >
      {flipKartCarouselDetails.map((slide: any, index: any) =>
        slide.link ? (
          <Link key={index} href="/">
            <Image
              width={1500}
              height={800}
              src={slide?.image}
              alt=""
              className="w-full "
            />
          </Link>
        ) : (
          <Image
            width={1500}
            height={800}
            key={index}
            src={slide?.image}
            alt=""
          />
        )
      )}
    </Slider>
  );
};

export default FlipKartCarousel;
