import React, { useEffect, useRef, useState } from "react";
import "./CaseConverter.css";
import TextAreaDefault from "../../TextAreaDefault/TextAreaDefault";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import { caseConverter } from "../../../utils/Functions/Functions";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

export const CaseConverter = () => {
  const [answer, setAnswer] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (answer !== "" && answer != " ") {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [answer]);

  const clearField = () => {
    document.getElementById("text-area-val").value = "";
    setAnswer("");
  };

  const handlePrompt = () => {
    const text = document.getElementById("text-area-val").value;
    const selection = document.getElementById("select-case-conv").value;
    if (selection != "" && text.trim() != "") {
      const res = caseConverter(text, selection);
      setAnswer(res);
    } else if (selection == "") {
      setAnswer(" ");
      setWarningMessage("Choose a case conversion option.");
      setWarning(true);
    } else {
      setWarningMessage("Write some text in the text area!");
      setWarning(true);
    }
  };

  return (
    <div className="case-converter-container">
      <DefaultTool
        title="Case Converter"
        description="Case Converter is a simple free online tool that converts any text to either lower case, upper case, proper case, or sentence case."
      ></DefaultTool>
      <select id="select-case-conv">
        <option value="">Choose your case</option>
        <option value="lowercase">Lower Case</option>
        <option value="uppercase">Upper Case</option>
        <option value="capitalize">Capitalize</option>
      </select>
      <div className="text-area-case">
        <TextAreaDefault
          placeholder="Copy your text here..."
          handlePrompt={handlePrompt}
          clearField={clearField}
        ></TextAreaDefault>
      </div>
      {!["", " "].includes(answer) &&
        document.getElementById("select-case-conv").value != "" && (
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
