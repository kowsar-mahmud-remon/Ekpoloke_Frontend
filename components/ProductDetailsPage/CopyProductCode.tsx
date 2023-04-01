import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyProductCode = ({id, className, style}) => {
    const [copyTitle, setCopyTitle] = useState("Copy To Clipboard");
  return (
    <div>
      <p className={`productCode ${className}`} style={style}>
        Product Identity Code
        <Tooltip title={copyTitle}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(id);
              setCopyTitle("Copied To CLipboard");
            }}
            className="copyId"
          >
            <ContentCopyIcon style={{ fontSize: "20px" }} />
          </div>
        </Tooltip>
      </p>
    </div>
  );
};

export default CopyProductCode;
