import React, { useState, useEffect, useRef } from "react";
import "./LoremIpsumGenerator.css";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { generateLoremIpsum } from "../../../utils/Functions/Functions";
import { DefaultTool } from "../../DefaultTool/DefaultTool";

export const LoremIpsumGenerator = () => {
  const [answer, setAnswer] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    if (answer !== "") {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [answer]);

  const copyAll = () => {
    navigator.clipboard.writeText(answer);
  };

  const clearField = () => {
    document.getElementById("type-word-lorem").value = "paragraphs";
    document.getElementById("number-lorem-generation").value = 1;
    document.getElementById("includeHTML").checked = false;
    setAnswer("");
  };

  const handlePrompt = () => {
    const type = document.getElementById("type-word-lorem").value;
    const number = document.getElementById("number-lorem-generation").value;
    const htmlMarkup = document.getElementById("includeHTML").value;
    if (number > 10000) {
      setWarningMessage(
        "The maximum number of elements that can be generated is 10000"
      );
      setWarning(true);
      return;
    }
    const res = generateLoremIpsum(type, number, htmlMarkup);
    setAnswer(res);
  };

  return (
    <div>
      <DefaultTool
        title="Lorem Ipsum Generator"
        description="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging."
      ></DefaultTool>
      <div className="form-lorem-ipsum">
        <ul>
          <li>
            <label for="type-word-lorem">Select type: &nbsp;</label>
            <select id="type-word-lorem" name="type-word-lorem">
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
              <option value="list items">List Items</option>
            </select>
          </li>
          <li>
            <label for="number-lorem-generation">Number: &nbsp;</label>
            <input
              type="number"
              id="number-lorem-generation"
              name="number-lorem-generation"
              min="1"
              placeholder="1"
            />
          </li>
          <li>
            <label for="includeHTML">HTML Markup: &nbsp;</label>
            <input type="checkbox" id="includeHTML" name="includeHTML"></input>
          </li>
          <li className="buttons-lorem-ipsum">
            <button onClick={handlePrompt}>Submit</button>
            <button onClick={clearField}>Clear</button>
            <button onClick={copyAll}>Copy</button>
          </li>
          <li>
            {answer && (
              <textarea value={answer} ref={containerRef} readOnly></textarea>
            )}
          </li>
        </ul>
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
