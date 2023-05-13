import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "@/components/UI/Card/Card";
import { useGetOrderByIdMutation } from "@/components/features/address/addressApi";
import { useRouter } from "next/router";
import styles from "./OrderDetailsPage.module.css"
import { roboto } from "@/fonts/googlefonts";

const OrderDetailsPage = () => {
  const [getOrderById, { data }] = useGetOrderByIdMutation() || {};

  const router = useRouter();
  const orderId = router.query.id;

  //   const { orderId } = useParams();
  //   const orderDetails = useSelector((state) => state.user.orderDetails);
  //   const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      orderId,
    };
    getOrderById(payload);
  }, [orderId]);
  if (!(data?.order && data?.order?.address)) {
    return null;
  }
  return (
    <div>
      <div
        style={{
          width: "1160px",
          margin: "10px auto",
        }}
      >
        <Card>
          <div className={`${styles.delAdrContainer} ${roboto.className}`}>
            <div className={styles.delAdrDetails}>
              <div className={styles.delTitle}>Delivery Address</div>
              <div className={styles.delName}>{data?.order?.address?.name}</div>
              <div className={styles.delAddress}>{data?.order?.address?.address}</div>
              <div className={styles.delPhoneNumber}>
                {data?.order?.address?.mobileNumber}
              </div>
            </div>
            <div className={styles.delMoreActionContainer}>
              <div className={styles.delTitle}>More Actions</div>
              <div className={styles.delName}>Download Invoice</div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="">
            <div>Items</div>
            <div>Order Status</div>
            <div>Order Status</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
