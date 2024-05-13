import React from "react";

const AddButton = ({ onClickFn, title }) => {
  return (
    <div>
      <button
        className="px-8 py-2 bg-gray-900 text-white rounded-md text-xl"
        onClick={onClickFn}
      >
        {title}
      </button>
    </div>
  );
};

export default AddButton;
