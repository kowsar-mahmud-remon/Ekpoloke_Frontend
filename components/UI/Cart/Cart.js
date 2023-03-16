import React from "react";
import { BsCart3 } from "react-icons/bs";

const Cart = ({ count, color = "#000" }) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "#FF6A00",
          width: "15px",
          height: "15px",
          borderRadius: "5px",
          fontSize: "10px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-12px",
          right: "-6px",
          color: "white",
        }}
      >
        {count}
      </span>
      <BsCart3 color={color} />
    </div>
  );
};

export default Cart;
