import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import calculateAverageRating from "../../../utils/calculateAverageRating";
import Image from "next/image";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProductBySlugQuery } from "@/components/rtkQuery/productApi";
import styles from "./ProductStore.module.css";
import Rating from "@/components/UI/Rating/Rating";
import Price from "@/components/Price/Price";

const ProductStore = (props: any) => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log("Routerrrr", slug);

  const { data: product } = useGetProductBySlugQuery(slug);
  if (product === undefined) {
    return <></>;
  }
  console.log("productssssssssssss", product);

  const priceRange = product?.priceRange;

  return (
    <>
      {Object.keys(product?.productsByPrice).map((key, index) => {
        return (
          <>
            {product.productsByPrice[key].length > 0 ? (
              <Card
                headerLeft={
                  <div style={{ fontSize: "20px" }}>
                    {product.productCategoryName} under {priceRange[key]}
                  </div>
                }
                style={{
                  width: "calc(100% - 40px)",
                  margin: "20px",
                }}
                headerRight={<Button variant="contained">View All</Button>}
                key={index}
              >
                <div style={{ display: "flex" }}>
                  {product.productsByPrice[key].map((product: any) => {
                    console.log("newwwwwproduct", product);
                    console.log("product?.ratings", product);
                    return (
                      <Link
                        href={`/products/${product.slug}/${product._id}`}
                        rel="noreferrer noopener"
                        target="_blank"
                        style={{
                          display: "block",
                          color: "black",
                          textDecoration: "none",
                          padding: "10px 0",
                        }}
                        key={product._id}
                        className={`${styles.productContainer}`}
                      >
                        <div className={`${styles.productImgContainer}`}>
                          <Image
                            width={150}
                            height={150}
                            src={product.productPictures[0].img}
                            alt={product.name}
                          />
                        </div>
                        <div className={`${styles.productInfo}`}>
                          <div style={{ margin: "5px 0" }}>{product.name}</div>
                          <div>
                            <Rating
                              value={calculateAverageRating(product?.ratings)}
                            />
                            <span
                              style={{
                                color: "#777",
                                fontWeight: "500",
                                fontSize: "12px",
                                marginLeft: "5px",
                              }}
                            >
                              ({product.ratings.length})
                            </span>
                          </div>
                          <Price value={product?.price}></Price>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Card>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default ProductStore;
