import React, { useState, useRef } from "react";
import "./DownloadImage.css";

function DownloadImage() {
  const [text, setText] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
      const previewImg = previewRef.current;
      previewImg.src = reader.result;
      previewImg.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = width || previewImg.width;
        canvas.height = height || previewImg.height;
        context.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.textAlign = "center";
        context.fillText(text, canvas.width / 2, canvas.height / 2);
      };
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "custom-image.png";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <label>
        Enter text:
        <input type="text" value={text} onChange={handleTextChange} />
      </label>
      <br />
      <label>
        Image width:
        <input type="number" value={width} onChange={handleWidthChange} />
      </label>
      <br />
      <label>
        Image height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <br />
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} />
      <br />
      <div className="text-display-">{text}</div>
      {imageSrc && <img ref={previewRef} alt="Preview" />}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <br />
      {imageSrc && <button onClick={handleDownload}>Download Image</button>}
    </div>
  );
}

export default DownloadImage;
