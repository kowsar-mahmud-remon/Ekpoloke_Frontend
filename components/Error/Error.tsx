import React from "react";
import unKnownError from "../../assets/images/unknownError.png";
import Image from "next/image";

const Error = ({ image, title, description }: any) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white my-10 mx-5">
      {/* <Image w src={image || unKnownError} alt="error" /> */}
      <Image
        className="lg:w-[30% w-[50%] lg:h-[30%] h-[50%]"
        src={image || unKnownError}
        width={100}
        height={100}
        alt="error"
      ></Image>
      <h3 className="mt-4 text-4xl font-bold">
        {title || "Something Wen't wrong"}
      </h3>
      <p className="mt-2 text-xl text-gray-400">
        {description || "Something wen't wrong, please try again later"}
      </p>
    </div>
  );
};

export default Error;
