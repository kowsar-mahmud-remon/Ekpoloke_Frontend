import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import styles from "./ProductDetailsPage.module.css"

import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

interface copyProps {
  id?: any;
  className?: any;
  style?: any;
}

const CopyProductCode = ({ id, className, style }: copyProps) => {
  const [copyTitle, setCopyTitle] = useState("Copy To Clipboard");
  return (
    <div>
      <p className={`${styles.productCode} ${roboto.className} font-bold`}>
        Product Identity Code
        <Tooltip title={copyTitle}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(id);
              setCopyTitle("Copied To CLipboard");
            }}
            className={styles.copyId}
          >
            <ContentCopyIcon style={{ fontSize: "20px" }} />
          </div>
        </Tooltip>
      </p>
    </div>
  );
};

export default CopyProductCode;
