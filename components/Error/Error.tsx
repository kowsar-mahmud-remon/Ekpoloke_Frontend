import React from "react";
import unKnownError from "../../assets/images/unknownError.png";
import Image from "next/image";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* <Image w src={image || unKnownError} alt="error" /> */}
      <Image src={unKnownError} width={1000} height={1000} alt=""></Image>
      {/* <h3 className="mt-4 text-5xl font-bold">
        {title || "Something Wen't wrong"}
      </h3>
      <p className="mt-2 text-xl text-gray-400">
        {description || "Something wen't wrong, please try again later"}
      </p> */}
    </div>
  );
};

export default Error;
