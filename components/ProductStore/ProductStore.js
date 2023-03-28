import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Card from "../../../components/UI/Card/Card";
import { Button } from "@mui/material";
import Rating from "../../../components/UI/Rating/Rating";
import Price from "../../../components/UI/Price/Price";
import calculateAverageRating from "../../../utils/calculateAverageRating";
import { useGetProductBySlugQuery } from "../rtkQuery/productApi";


const ProductStore = (props) => {
  const { slug } = useParams();
  const location = useLocation();
  // const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  const { data: product } =
    useGetProductBySlugQuery(slug) || {};
  console.log("productssssssssssss", product);

  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, [slug, location]);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
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
                  {product.productsByPrice[key].map((product) => (
                    <Link
                      to={`/product/${product.slug}/${product._id}/p`}
                      rel="noreferrer noopener"
                      target="_blank"
                      style={{
                        display: "block",
                        color: "black",
                        textDecoration: "none",
                        padding: "10px 0",
                      }}
                      key={product._id}
                      className="productContainer"
                    >
                      <div className="productImgContainer">
                        <img
                          src={product.productPictures[0].img}
                          alt={product.name}
                        />
                      </div>
                      <div className="productInfo">
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
                        <Price value={product.price}></Price>
                      </div>
                    </Link>
                  ))}
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
