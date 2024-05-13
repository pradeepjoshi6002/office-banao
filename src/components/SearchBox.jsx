import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBox = () => {
  return (
    <div className="border-2  h-fit w-fit text-xl">
      <input placeholder="Search Assets" className="w-[25vw] p-2" />
      <button className="pr-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;
