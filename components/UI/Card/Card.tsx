import React from "react";
import styles from "./Card.module.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Card = (props:any) => {
  return (
    <div {...props} className={`${styles.customCard} ${roboto.className}`}>
      {props.headerLeft || props.headerRight ? (
        <div className={styles.customCardHeader}>
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      ) : null}

      {props.children}
    </div>
  );
};

export default Card;
