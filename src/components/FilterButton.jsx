import React from "react";
import { FaArrowsUpDown } from "react-icons/fa6";
const FilterButton = () => {
  return (
    <button className="flex items-center border-2 p-2 text-xl">
      Newest First
      <FaArrowsUpDown />
    </button>
  );
};

export default FilterButton;
