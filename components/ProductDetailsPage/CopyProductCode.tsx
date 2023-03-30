
import React, { useState } from "react";
import { GrTooltip } from "react-icons/gr";

const  CopyProductCode = (id:any, className:any, style:any) => {
    const [copyTitle, setCopyTitle] = useState("Copy To Clipboard");
  return (
    <div>
      <p className={`productCode ${className}`} style={style}>
        Product Identity Code
        <div title={copyTitle}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(id);
              setCopyTitle("Copied To CLipboard");
            }}
            className="copyId"
          >
            {/* <ContentCopyIcon style={{ fontSize: "20px" }} /> */}
          </div>
        </div>
      </p>
    </div>
  );
};

export default CopyProductCode;
