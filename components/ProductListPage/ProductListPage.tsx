import React from "react";
import Layout from "../Layout/Layout";
// import ProductStore from "./ProductStore/ProductStore";
// import "./ProductListPage.css";
// import { useSearchParams } from "react-router-dom";
import ProductPage from "./ProductPage/ProductPage";
import ClothingAndAccessories from "./ClothingAndAccesories/ClothingAndAccessories";
import { useSearchParams } from "react-router-dom";
import ProductStore from "./ProductStore/ProductStore";
import { useRouter } from "next/router";

const ProductListPage = (props: any) => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  const { type } = router.query;
  const renderProduct = () => {
    let content = null;
    switch (type) {
      // "store"
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
    }
    return content;
  };

  return renderProduct();
  //   <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
