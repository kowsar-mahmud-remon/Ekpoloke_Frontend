import React, { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import MultipleProductSlider from "../MultipleProductSlider/MultipleProductSlider";
import { useGetAllProductsQuery } from "../features/products/productsApi";

const HomePage = () => {
  const { data, isLoading, error } =
  useGetAllProductsQuery({fields: "ratings,name,productPictures,price,slug"}) || {};

  return (
    <div>
      <div className="md:h-[150px] h-[100px] w-[100%] my-[15px]">
        <Image
          src="https://placeimg.com/1000/150/nature"
          alt="Bank Discount"
          width={1000} height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <MultipleProductSlider
        title="Super Deals"
        viewAllLink={"/products/superdeals"}
        products={data?.products}
      />
      <MultipleProductSlider
        title="Trending Products"
        viewAllLink={"/products/trending"}
        products={data?.products}
      />

      <MultipleProductSlider
        title="New Arrival"
        viewAllLink={"/products/new"}
        products={data?.products}
        className="mt-[15px]"
      />
      <MultipleProductSlider
        title="Recently Viewed"
        viewAllLink={"/products/new"}
        products={data?.products}
      />
    </div>
  );
};

export default HomePage;
