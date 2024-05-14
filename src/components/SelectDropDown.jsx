import React from "react";

const SelectDropDown = ({ data }) => {
  return (
    <select className="w-[7rem] rounded-md">
      {data?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;
