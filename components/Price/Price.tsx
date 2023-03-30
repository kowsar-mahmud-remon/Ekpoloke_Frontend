import React from "react";

const Price = ( value:any, fontSize:any, className:any, style:any ) => {
  return (
    <div
      style={{
        fontSize: fontSize ? fontSize : "20px",
        fontWeight: "bold",
        margin: "5px 0",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
      className={className || ""}
    >
      Tk. {value}
    </div>
  );
};

export default Price;
