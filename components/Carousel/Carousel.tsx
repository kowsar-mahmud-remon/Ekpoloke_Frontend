import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import styles from '../../styles/Carousel.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCaroData } from '@/features/carousel/carouselSlice';


interface ComponentBProps {
    slides: any;
    onClick: any;
    className: any; 
    
  }


const Carousel= ({}) => {
  const [slides, setSlides] = useState<string[]>([])
  // const caro = useSelector((state) => state)
  // const dispatch = useDispatch();
  useEffect(()=>{
    fetch("https://ekpoloke-backend-old.onrender.com/api/slides")
    .then(res => res.json())
    .then(result => setSlides(result.slides))

  },[])
  console.log(slides)
  const data =[
    {
      id:1,
      img: ''
    }
  ]
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
    return (
      
        <Slider className={`my-[15px] mx-2 ${styles.homeSlider} bg-gray-400`} {...settings}>
      {slides?.map((slide:any, index:any) =>
        slide.link ? (
          <a key={index}  href={slide?.link}>
            <Image
            width={1000} height={800} 
              src={slide?.image}
              alt={slide?.title}
              className="h-full w-full"
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