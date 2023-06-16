import React, { useState } from "react";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./IcoToPng.css";

export const IcoToPng = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");
  const [mode, setMode] = useState("file");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setConvertedUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleUrlChange = (event) => {
    const inputUrl = event.target.value;
    setUrl(inputUrl);
    setConvertedUrl(inputUrl);
  };

  const handleConvert = () => {
    // Handle the conversion logic here
    // Use the 'file' and 'url' values to perform the conversion
    if (file) {
      console.log("Converting file:", file);
      console.log("Using URL:", url);

      // Simulating a conversion result URL
      const convertedImageUrl = "https://example.com/converted-image.png";
      setConvertedUrl(convertedImageUrl);
    } else {
      setWarning(true);
      setWarningMessage("Choose a file.");
    }
  };

  const handleDownload = () => {
    // Check if convertedUrl is a remote URL or a blob URL
    if (convertedUrl.startsWith("http") || convertedUrl.startsWith("https")) {
      // If convertedUrl is a remote URL, create an anchor element to initiate the download
      const link = document.createElement("a");
      link.href = convertedUrl;
      link.download = "converted-image.png";
      link.click();
    } else {
      // If convertedUrl is a blob URL, use the browser's download feature
      const anchor = document.createElement("a");
      anchor.href = convertedUrl;
      anchor.setAttribute("download", "converted-image.png");
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };

  return (
    <div>
      <DefaultTool
        title="ICO to PNG"
        description="Best way to convert your ICO to PNG file in seconds. 100% free, secure and easy to use!"
      ></DefaultTool>
      <div className="converter-container">
        <div className="input-container">
          {mode == "file" && (
            <div className="file-url-ico-to-png">
              <label htmlFor="file-input" className="custom-file-input">
                Choose a file
              </label>
              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                accept=".ico"
              />
              <h3 onClick={() => setMode("remote")}>Use remote URL</h3>
            </div>
          )}

          {mode == "remote" && (
            <div className="remote-url-ico-to-png">
              <input
                type="text"
                id="url-input"
                placeholder="https://example.com/icon.ico"
                value={url}
                onChange={handleUrlChange}
              />
              <h3 onClick={() => setMode("file")}>Use file URL</h3>
            </div>
          )}

          <button onClick={handleConvert} className="conversion-ico-to-png">
            Convert
          </button>
        </div>

        {convertedUrl && (
          <div className="output-container">
            <div className="image-preview">
              <img src={convertedUrl} alt="Converted Icon" />
            </div>
            <button className="download-ico-to-png" onClick={handleDownload}>
              Download
            </button>
          </div>
        )}
      </div>
      {warning && (
        <ErrorMessage
          message={warningMessage}
          removeError={() => {
            setWarning(false);
          }}
        ></ErrorMessage>
      )}
    </div>
  );
};

export default IcoToPng;
