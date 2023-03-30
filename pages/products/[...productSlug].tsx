import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useGetProductByIdQuery } from "@/components/rtkQuery/productApi";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import { useRouter } from "next/router";
import ProductDetailsSinglePage from "@/components/ProductDetailsPage/ProductDetailsSinglePage";
import Head from "next/head";

const ProductDetailsPage = () => {
  const router = useRouter();
  const slug = router.query;
  const id = slug?.productSlug?.[1] ;

  const { data, isLoading, error } = useGetProductByIdQuery(id) || {};
  console.log(slug, "all router");

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
          <ProductDetailsSinglePage
            product={data?.product}
          ></ProductDetailsSinglePage>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
