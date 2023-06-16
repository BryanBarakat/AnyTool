import React, { useState, useRef, useEffect } from "react";
import { NavBar } from "../../NavBar/NavBar";
import { slugify } from "../../../utils/Functions/Functions";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import { TextAreaDefault } from "../../TextAreaDefault/TextAreaDefault";
import "./ChosenTool.css";

export const ChosenTool = () => {
  const [answer, setAnswer] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (answer !== "") {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [answer]);

  const clearField = () => {
    document.getElementById("text-area-val").value = "";
    setAnswer("");
  };

  const handlePrompt = () => {
    const text = document.getElementById("text-area-val").value;
    const res = slugify(text);
    setAnswer(res);
  };

  return (
    <div className="chosen-tool-container">
      <DefaultTool
        title="Text to Slug"
        description="Instantly generate SEO friendly and human readable URL slugs for your website with this easy-to-use online tool."
      ></DefaultTool>
      <div className="prompt" ref={containerRef}>
        <TextAreaDefault
          placeholder="Write your text here..."
          handlePrompt={handlePrompt}
          clearField={clearField}
        ></TextAreaDefault>
        {answer && <textarea readOnly value={answer}></textarea>}
      </div>
    </div>
  );
};

export default ChosenTool;
