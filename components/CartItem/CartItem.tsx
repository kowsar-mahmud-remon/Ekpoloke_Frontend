import Image from "next/image";
import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";



import {
  decrement,
  increment,
  removeSingleItem,
} from "../features/cartItems/cartItemsSlice";
import { roboto } from "@/fonts/googlefonts";



interface ComponentBProps {
  cartItem: any;
}



const CartItem: React.FC<ComponentBProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleIncrease = (cartItem: any) => {
    dispatch(increment({ cartItem, qty: cartItem.qty }));
    console.log("increment data", cartItem.qty);
  };

  const handleDecrease = (cartItem: any) => {
    if (cartItem.qty <= 1) return;
    dispatch(decrement({ cartItem, qty: cartItem.qty }));
    console.log("increment data", cartItem.qty);
  };

  const handleRemove = (cartItem: any) => {
    dispatch(removeSingleItem(cartItem));
  };

  const { _id, name, img, price, qty } = cartItem;

  return (
    <div className={`${styles.cartItemContainer}`}>
      <div className="flex">
        <div className={styles.cartProImgContainer}>
          <Image width={100} height={100} src={img} alt="" />
        </div>
        <div className={styles.cartItemDetails}>
          <div>
            <p>{name}</p>
            <p className={styles.SingleCartPrice}>
              Tk. {` `}
              <span>{price}</span>
            </p>
            <p className={styles.SingleCartTotal}>
              Total - <span>{price * qty}</span>
            </p>
          </div>
          <div style={{ marginRight: "20px" }}>Deliver in 3 to 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        <div className={styles.quantityControl}>
          <button
            className={`${styles.button} ${roboto.className}`}
            onClick={() => handleDecrease(cartItem)}
          >
            -
          </button>
          <input className={`${styles.input} ${roboto.className}`} value={qty} type="value" readOnly />
          <button
            className={`${styles.button} ${roboto.className}`}
            onClick={() => handleIncrease(cartItem)}
          >
            +
          </button>
        </div>
        <button className={`${styles.cartActionBtn} ${roboto.className}`}>
          Save For Later
        </button>
        <button
          onClick={() => handleRemove(cartItem)}
          className={`${styles.cartActionBtn} ${roboto.className}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
