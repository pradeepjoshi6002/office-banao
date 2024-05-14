import React, { useState, useRef, useEffect } from "react";
import HomePageImage from "../../components/HomePageImage";
import AddButton from "../../components/AddButton";
import SearchBox from "../../components/SearchBox";
import FilterButton from "../../components/FilterButton";
import MasonryGrid from "../../components/MasonryGrid";
import { Link } from "react-router-dom";

const HomePage = ({ images, setEditImage }) => {
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);
  const openEditor = (newImage) => {
    setEditImage(newImage);
    editorRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newImage = Array.from(fileList).map((file) =>
      URL.createObjectURL(file)
    )[0];
    openEditor(newImage);
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
      <Link to={"/edit"} ref={editorRef} />
    </div>
  );
};

export default HomePage;
