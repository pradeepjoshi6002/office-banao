import React from "react";

const SelectDropDown = ({ name, data }) => {
  return (
    <select className="w-[7rem] rounded-md border-2" name={name}>
      {data?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;
