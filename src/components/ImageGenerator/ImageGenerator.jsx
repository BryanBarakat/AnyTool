import React, { useState } from "react";
import "./ImageGenerator.css";
import { toPng } from "html-to-image";
import download from "download.js";

export const ImageGenerator = () => {
  const [textDisplay, setTextDisplay] = useState();
  const [getImageDisplay, setImageDisplay] = useState();

  const imageCreator = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageDisplay(e.target.files[0]);
    }
  };

  const downloadImage = () => {
    let node = document.getElementById("image-wrapper");
    toPng(node)
      .then((dataURL) => {
        download(dataURL, "custom-image.png");
      })
      .catch(() => {
        console.log("Error occured while downloading image...");
      });
  };

  return (
    <div className="container-gen">
      <div className="inputs">
        <textarea
          value={textDisplay}
          onChange={(e) => setTextDisplay(() => e.target.value)}
          rows="4"
          cols="50"
          placeholder="Type here..."
        ></textarea>
        <input type="file" accept="image/*" onChange={imageCreator}></input>
        <select>
          <option>Resolution</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      <div className="image-wrapper" id="image-wrapper">
        {getImageDisplay && (
          <div className="image-placeholder">
            <img
              className="image-creation"
              src={URL.createObjectURL(getImageDisplay)}
            ></img>{" "}
          </div>
        )}
        {textDisplay && <h1 className="text-display">{textDisplay}</h1>}
      </div>
      {getImageDisplay && <button onClick={downloadImage}>Download</button>}
    </div>
  );
};
