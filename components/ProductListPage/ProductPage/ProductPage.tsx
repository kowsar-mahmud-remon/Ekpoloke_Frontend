import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
// import { getProductPage } from "../../../actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Card from "../../UI/Card/Card";
import { Carousel } from "react-responsive-carousel";

const ProductPage = () => {
  const dispatch = useDispatch();
  // const product = useSelector(state => state.product);
  const [searchParams, setSearchParams] = useSearchParams();
  //   const { page } = product;

  //   useEffect(() => {
  //     const payload = {
  //       cid: searchParams.get("category"),
  //       type: searchParams.get("type"),
  //     };
  //     dispatch(getProductPage(payload));
  //   }, []);

  return (
    <div style={{ margin: "0 10px" }}>
      <h2>Comming Soon</h2>
      {/* <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}} autoPlay={true}>
        {page.banners &&
          page.banners.map((banner: any, index: any) => (
            <a
              style={{ display: "block", height: "400px" }}
              key={index}
              href={banner.navigateTo}
            >
              <img
                style={{ height: "100%", objectFit: "cover" }}
                src={banner.img}
                alt={page.title}
              />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {page.products &&
          page.products.map((product, index) => (
            <Card
              key={index}
              style={{
                width: "400px",
                height: "200px",
                margin: "0 5px",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={product.img}
                alt=""
              />
            </Card>
          ))}
      </div> */}
    </div>
  );
};

export default ProductPage;
