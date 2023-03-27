import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import styles from '../../styles/Carousel.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCarouselQuery } from '../rtkQuery/productApi';



interface ComponentBProps {
    slides: any;
    onClick: any;
    className: any; 
    
  }


const Carousel= ({}) => {
 
 const {data, isLoading, isSuccess}= useGetCarouselQuery([])
 
    const settings = {
        dots: true,
        infinite: true,
        dotsClass: "slick-dots custom-indicator",
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        prevArrow: <PreviousButton  />,
        nextArrow: <NextButton />,
        slidesToScroll: 1,
        customPaging: function () {
          return <div className="hidden"></div>;
        },
      };
      if(isLoading){
        return <div>Loading....</div>
      }
    return (
      
        <Slider className={`my-[15px] mx-2 ${styles.homeSlider} bg-gray-400`} {...settings}>
      {data?.slides?.map((slide:any, index:any) =>
        slide.link ? (
          <a key={index}  href={slide?.link}>
            <Image
            width={1000} height={800} 
              src={slide?.image}
              alt={slide?.title}
              className=" w-full"
            />
          </a>
        ) : (
          <Image width={1000} height={800}  key={index} src={slide?.image} alt={slide?.title} />
        )
      )}
    </Slider>
    );
};




export default Carousel;