import React, { useState, useRef } from "react";
import HomePageImage from "../../components/HomePageImage";
import AddButton from "../../components/AddButton";
import SearchBox from "../../components/SearchBox";
import FilterButton from "../../components/FilterButton";
import MasonryGrid from "../../components/MasonryGrid";
import one from "../../utils/one.png";
import two from "../../utils/two.png";
import three from "../../utils/three.png";
import four from "../../utils/four.png";
import five from "../../utils/five.png";

const HomePage = () => {
  const [images, setImages] = useState([one, two, three, four, five]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newImages = Array.from(fileList).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
    fileInputRef.current.value = null;
  };

  return (
    <div className="">
      {images.length === 0 ? (
        <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
          <HomePageImage />
          <AddButton
            title={"+ Add"}
            onClickFn={() => fileInputRef.current.click()}
          />
        </div>
      ) : (
        <div className="p-4">
          <div className="flex justify-between my-[2rem] items-center">
            <div className="flex gap-4">
              <SearchBox />
              <FilterButton />
            </div>
            <AddButton
              title={"+ Add"}
              onClickFn={() => fileInputRef.current.click()}
            />
          </div>
          <MasonryGrid imagesFile={images} />
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
};

export default HomePage;
