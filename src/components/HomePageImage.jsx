import React from "react";
import BoxImg from "../utils/BoxImg.png";

const HomePageImage = () => {
  return (
    <div>
      <img src={BoxImg} className="h-[20rem] inline-block mb-4" alt="Box" />
      <div className="text-gray-500 font-semibold text-xl text-center">
        Add Assets here
      </div>
    </div>
  );
};

export default HomePageImage;
