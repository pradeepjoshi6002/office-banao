import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { AiOutlineRotateRight } from "react-icons/ai";
import { canvasPreview } from "../../cropImage";
import SelectDropDown from "../../components/SelectDropDown";

const EditorPage = ({ images, editImage, setImages }) => {
  const mainPage = useRef(null);
  const imgRef = useRef(null);
  const downloadRef = useRef(null);

  const [crop, setCrop] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [completedCrop, setCompletedCrop] = useState();

  const onZoom = (e) => {
    setScale(parseFloat(e.target.value));
  };

  const rotateRight = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const download = async () => {
    await canvasPreview(imgRef.current, completedCrop, scale, rotation);
  };

  const onImageLoad = (e) => {
    setHeight(e.target.height);
    setWidth(e.target.width);
    setCompletedCrop({
      x: 0,
      y: 0,
      height: e.target.height,
      width: e.target.width,
      unit: "px",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    downloadRef.current.click();
    mainPage.current.click();
  };

  return (
    <div className="h-[100vh] p-8 flex flex-col gap-4">
      <div className="text-2xl text-gray-900 font-semibold">Add Assets</div>
      <div className="flex gap-2 h-full">
        <div className="flex-[3] flex justify-center items-center ">
          <ReactCrop
            src={editImage}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onComplete={(e) => {
              if (e.height === 0 || e.width === 0) {
                setCompletedCrop({
                  x: 0,
                  y: 0,
                  height: height,
                  width: width,
                  unit: "px",
                });
              } else {
                setCompletedCrop(e);
              }
            }}
          >
            <img
              ref={imgRef}
              alt="go back select new Image"
              src={editImage}
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
              }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          <div className="relative h-full w-[20rem]">
            <div className=" absolute top-0 right-0 border-2 border-black rounded-md flex flex-col items-center gap-1 text-2xl">
              <div className="relative w-[2rem] h-[10rem]">
                <input
                  type="range"
                  min={0.1}
                  max={2}
                  step={0.05}
                  value={scale}
                  onChange={onZoom}
                  className="absolute top-[40%] rotate-[270deg] right-[-150%]"
                />
              </div>

              <div ref={downloadRef} onClick={download}>
                <BsFillCloudDownloadFill />
              </div>
              <div onClick={rotateRight}>
                <AiOutlineRotateRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] border-2 p-2 text-lg">
          <form
            className="flex flex-col gap-2 w-full h-full relative"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="assets-name"
              placeholder="asset name"
              className="w-full rounded-md py-2 pl-2 border-2"
            />
            <textarea
              name="asset-description"
              placeholder="asset description"
              className="w-full rounded-md py-2 pl-2 border-2"
              rows={5}
            />
            <div className="flex flex-wrap gap-4">
              <SelectDropDown name="space" data={["space", "b", "c"]} />
              <SelectDropDown name="style" data={["style", "b", "c"]} />
              <SelectDropDown name="package" data={["package", "b", "c"]} />
              <SelectDropDown name="elements" data={["elements", "b", "c"]} />
            </div>
            <button
              className="px-8 py-2 bg-gray-900 w-full text-white rounded-md text-xl flex justify-center items-center gap-2 absolute bottom-0"
              type="submit"
            >
              <FaUpload /> Upload Image
            </button>
          </form>
        </div>
        <Link to={"/"} ref={mainPage} />
      </div>
    </div>
  );
};

export default EditorPage;
