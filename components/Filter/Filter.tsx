import React from "react";
import { IoFilterOutline } from "react-icons/io5";

const Filter = ({ className }: any) => {
  return (
    <div
      className={`flex items-center justify-center border-[1px] border-gray-200 py-3 w-full ${className}`}
    >
      <IoFilterOutline /> Filter
    </div>
  );
};

export default Filter;
