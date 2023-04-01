import React from "react";
import Lottie from "lottie-react";
import loading from "../../assets/lotties/loading.json";

const Loading = ({ height = "100vh", width = "100vw", className = "" }) => {
  return (
    <div
      style={{ height, width }}
      className={`flex items-center justify-center ${className}`}
    >
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
