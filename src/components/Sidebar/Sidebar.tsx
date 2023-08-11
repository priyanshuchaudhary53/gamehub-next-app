"use client";

import { useState } from "react";

import Menu from "../Menu/Menu";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div
      className={`hidden md:block sticky top-20 ${
        expanded ? "w-[250px]" : "w-[80px]"
      } h-[calc(100vh-5rem)] p-4 pr-0 text-white bg-transparent relative duration-300`}
    >
      <RiArrowLeftDoubleLine
        className={`text-white text-3xl rounded-full absolute top-6 cursor-pointer duration-300 ${
          expanded ? "right-1" : "-right-8 rotate-180"
        }`}
        onClick={() => setExpanded((prevState) => !prevState)}
      />
      <div className=" border-r border-gray-600 h-full">
        <Menu expanded={expanded} />
      </div>
    </div>
  );
};

export default Sidebar;
