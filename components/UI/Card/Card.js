import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div {...props} className="customCard">
      {props.headerLeft || props.headerRight ? (
        <div className="customCardHeader">
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      ) : null}

      {props.children}
    </div>
  );
};

export default Card;
