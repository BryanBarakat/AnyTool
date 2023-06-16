import React, { useState, useEffect, useRef } from "react";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import TextAreaDefault from "../../TextAreaDefault/TextAreaDefault";
import { removeLineBreaks } from "../../../utils/Functions/Functions";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./RemoveLineBreaks.css";

export const RemoveLineBreaks = () => {
  const [answer, setAnswer] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (answer !== "" && answer != " ") {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [answer]);

  const clearField = () => {
    document.getElementById("text-area-val").value = "";
    setAnswer("");
  };

  const handlePrompt = () => {
    const text = document.getElementById("text-area-val").value;
    const res = removeLineBreaks(text);
    if (["", " "].includes(res)) {
      setWarningMessage("Type something in order to remove line breaks");
      setWarning(true);
    } else {
      setAnswer(res);
    }
  };

  return (
    <div>
      <DefaultTool
        title="Remove Line Breaks"
        description="Remove Line Breaks is Online tool for removing line breaks from text and Paragraphs. It automatically removes line breaks and preserves paragraph breaks."
      ></DefaultTool>
      <TextAreaDefault
        placeholder="Copy your text here..."
        handlePrompt={handlePrompt}
        clearField={clearField}
      ></TextAreaDefault>
      {!["", " "].includes(answer) && (
        <textarea ref={containerRef} readOnly value={answer}></textarea>
      )}
      {warning && (
        <ErrorMessage
          removeError={() => setWarning(false)}
          message={warningMessage}
        ></ErrorMessage>
      )}
    </div>
  );
};

export default RemoveLineBreaks;
