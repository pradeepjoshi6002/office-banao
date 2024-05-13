import React, { useState } from "react";
import BoxImg from "../../utils/BoxImg.png";

const HomePage = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        {images.length === 0 ? (
          <img src={BoxImg} className="h-[20rem] inline-block" alt="Box" />
        ) : (
          <></>
        )}
        <div className="text-gray-500 font-semibold text-xl">
          Add Assets here
        </div>
        <button className="px-8 py-2 bg-gray-900 text-white rounded-md text-xl">
          + Add
        </button>
      </div>
    </div>
  );
};

export default HomePage;
