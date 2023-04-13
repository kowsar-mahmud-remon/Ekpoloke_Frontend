import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import { useDispatch, useSelector } from "react-redux";
// import { getOrders } from "../../actions";
import { Breed } from "../../components/MaterialUI/MaterialUI";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Price from "../../components/UI/Price/Price";
import HorizontalProductCard from "../../components/HorizontalProductCard/HorizontalProductCard";
import Favorite from "../../components/Favorite/Favorite";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { orders } = useSelector((state) => state?.addreess);
  console.log(orders, "kiree beta");

  // useEffect(() => {
  //   dispatch(getOrders());
  // }, []);
  return (
    <>
      <div>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        <div className="container mx-auto my-5 md:px-12">
          {orders?.map((order: any, index: any) => (
            <div
              key={index}
              onClick={() => router.push(`/order-details/${order._id}`)}
              className={styles.order}
            >
         
                  <h2 className="text-2xl">
                    Order <span className="text-primary">64193813fc654fe2fc7e4975</span>
                  </h2>
        
              {order.items.map((item: any, index: any) => (
                <div
                  key={index}
                  onClick={() =>
                    router.push(`/order-details/${order._id}?item=${item._id}`)
                  }
                  className={styles.orderItem}
                >
                  <div className={`flex items-center`}>
                    <div className={`relative ${styles.orderImgContainer}`}>
                      <Image
                        width={300}
                        height={300}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
                        }}
                        src={item?.img}
                        alt={item?.name}
                      />
                      <Favorite />
                    </div>
                    <div
                      className="flex justify-between"
                      style={{ width: "80%" }}
                    >
                      <div style={{ width: "70%" }}>
                        <h3 className="overflow-hidden text-xl font-bold text-ellipsis whitespace-nowrap">
                          {item?.name}
                        </h3>
                        {item?.highlights?.length > 0 && (
                          <div className="highlights">
                            <ul>
                              {item?.highlights.map((h: any) => (
                                <li
                                  className="text-sm text-[#212121] ml-10 list-disc"
                                  key={h._id}
                                >
                                  {h.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div>
                          <p className="text-sm">
                            {item?.description
                              ? `${item?.description.slice(0, 300)}...`
                              : item?.description}
                          </p>
                        </div>
                      </div>
                      <div style={{ width: "30%" }}>
                        <Price
                          style={{ textAlign: "right" }}
                          value={item.price}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderPage;
