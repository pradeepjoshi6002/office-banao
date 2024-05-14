import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EditorPage from "./pages/EditorPage/EditorPage";
import one from "./utils/one.png";
import two from "./utils/two.png";
import three from "./utils/three.png";
import four from "./utils/four.png";
import five from "./utils/five.png";

const App = () => {
  const [images, setImages] = useState([one, two, three, four, five]);
  const [editImage, setEditImage] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage images={images} setEditImage={setEditImage} />}
        />
        <Route
          path="/edit"
          element={
            <EditorPage
              images={images}
              editImage={editImage}
              setImages={setImages}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
