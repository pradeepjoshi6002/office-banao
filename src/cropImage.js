const TO_RADIANS = Math.PI / 180;

export async function canvasPreview(imageElement, crop, scale = 1, rotate = 0) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = imageElement.naturalWidth / imageElement.width;
  const scaleY = imageElement.naturalHeight / imageElement.height;
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = imageElement.naturalWidth / 2;
  const centerY = imageElement.naturalHeight / 2;

  ctx.save();

  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.rotate(rotateRads);
  ctx.scale(scale, scale);
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    imageElement,
    0,
    0,
    imageElement.naturalWidth,
    imageElement.naturalHeight,
    0,
    0,
    imageElement.naturalWidth,
    imageElement.naturalHeight
  );

  ctx.restore();

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      var blobUrl = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = blobUrl;
      link.download = "image.jpg";
      link.click();
    }, "image/jpeg");
  });
}
