import React, { useState } from "react";
import MenuHeader from "./MenuHeader";
import MenuHeaderTwo from "./MenuHeaderTwo";

const MenuButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };
  return (
    <div className=" hidden md:block">
      <div className="flex py-1 border-b-2 border-[#cecece]">
        <div className="w-[80%] lg:w-[85%]">
          {isToggled ? <MenuHeader /> : <MenuHeaderTwo />}
        </div>
        <div className="w-[20%] lg:w-[15%] ml-1">
          <button
            onClick={handleToggle}
            className="btn btn-sm btn-primary normal-case text-white h-10"
          >
            {isToggled ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
