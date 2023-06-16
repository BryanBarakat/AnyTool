import React from "react";
import "./TextAreaDefault.css";

export const TextAreaDefault = ({ placeholder, handlePrompt, clearField }) => {
  return (
    <div>
      <textarea id="text-area-val" placeholder={placeholder}></textarea>
      <div className="prompt-click">
        <button onClick={handlePrompt}>Submit</button>
        <button onClick={clearField}>Clear Text</button>
      </div>
    </div>
  );
};

export default TextAreaDefault;
