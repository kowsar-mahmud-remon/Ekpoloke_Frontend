import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetProductByIdQuery } from "@/components/rtkQuery/productApi";
import ProductDetailsDesktop from "@/components/ProductDetailsPage/ProductDetailsDesktop";
import ProductDetailsMobile from "@/components/ProductDetailsPage/ProductDetailsMobile";


const ProductDetailsPage = () => {
  const router = useRouter();
  const slug = router.query;
  const id = slug?.productSlug?.[1];

  const { data, isLoading, error } = useGetProductByIdQuery(id) || {};
  console.log(data, "all router");

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [reviewSlice, setReviewSlice] = useState(3);
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setRatings(data?.product?.ratings);
    const r:any = [];
    data?.product?.ratings?.forEach((rating:any) => {
      if (rating.reviewTitle && rating.review) {
        r.push(rating);
      }
    });
    setReviews(r);
  }, [data?.product?.ratings]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div>
        <Head>
          <title>{data?.product?.name}</title>
          <meta name="description" content={data?.product?.description} />
          <meta property="og:title" content="European Travel Destinations" />
          <meta
            property="og:description"
            content="Offering tour packages for individuals or groups."
          />
          <meta
            property="og:image"
            content="http://euro-travel-example.com/thumbnail.jpg"
          />
          <meta
            property="og:url"
            content="http://euro-travel-example.com/index.htm"
          />
        </Head>
        <div>
          <ProductDetailsDesktop
            productDetails={data?.product}
            selectedImageIndex={selectedImageIndex}
            setSelectedImageIndex={setSelectedImageIndex}
            ratings={ratings}
            reviews={reviews}
            reviewSlice={reviewSlice}
            setReviewSlice={setReviewSlice}
          />
          <ProductDetailsMobile
            productDetails={data?.product}
            ratings={ratings}
            reviews={reviews}
            reviewSlice={reviewSlice}
            setReviewSlice={setReviewSlice}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
