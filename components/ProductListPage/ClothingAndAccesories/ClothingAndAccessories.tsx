import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./ClothingAndAccessories.module.css";
import Link from "next/link";
import Image from "next/image";
import { useGetProductBySlugQuery } from "@/components/rtkQuery/productApi";
import { useRouter } from "next/router";
import CurrencyFormat from "react-currency-format";

const ClothingAndAccessories = () => {
  // const { slug } = useParams();
  // const location = useLocation();
  const router = useRouter();
  const slug = router.query.slug;
  console.log("Routerrrr", slug);

  const { data: product } = useGetProductBySlugQuery(slug) || {};

  // const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductsBySlug(slug));
  // }, [slug, location, dispatch]);

  return (
    <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {product?.products.map((p: any, index: any) => {
          console.log(p, "pppppppppppppppppppppppp");

          return (
            <div key={index} className={`${styles.caContainer}`}>
              <Link
                className={`${styles.caImgContainer}`}
                href={`/products/${slug}/${p._id}`}
              >
                <Image
                  className="w-[100%] h-[100%]"
                  width={100}
                  height={100}
                  src={p.productPictures[0].img}
                  alt={p.name}
                />
              </Link>
              <div>
                <div className={`${styles.caProductName}`}>
                  {p.name.length > 55 ? `${p.name.slice(0, 55)}...` : p.name}
                </div>
                <div>{}</div>
                <div className={`${styles.caProductPrice}`}>
                  <p>BDT</p>
                  <p>
                    <CurrencyFormat
                      thousandSeparator={true}
                      displayType="text"
                      value={p.price}
                    />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
