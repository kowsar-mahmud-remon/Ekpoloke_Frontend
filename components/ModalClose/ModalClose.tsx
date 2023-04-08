import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface modal {
  handleClose?: any;
  rounded?: any;
  top?: any;
  right?: any;
  className?: any;
}

const ModalClose = ({
  handleClose,
  top = "15px",
  right = "15px",
  className,
  rounded = false,
}: modal) => {
  return (
    <div
      style={{ top, right, position: "absolute", cursor: "pointer" }}
      className={`${className} ${rounded && "p-2 rounded-full bg-slate-200"}`}
      onClick={handleClose}
    >
      <CloseIcon />
    </div>
  );
};

export default ModalClose;
