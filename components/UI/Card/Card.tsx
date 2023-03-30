import React from "react";
import styles from "./Card.module.css";

const Card = (props:any) => {
  return (
    <div {...props} className={styles.customCard}>
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
