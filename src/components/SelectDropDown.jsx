import React from "react";
import { FaTag } from "react-icons/fa";

const SelectDropDown = ({ name, data }) => {
  return (
    <select
      className="w-fit border-black text-black rounded-md border-2"
      name={name}
    >
      {data?.map((item, index) => (
        <option key={index} value={item}>
          <FaTag /> {item}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;
