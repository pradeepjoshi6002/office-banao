import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryGrid({ imagesFile }) {
  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imagesFile.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
