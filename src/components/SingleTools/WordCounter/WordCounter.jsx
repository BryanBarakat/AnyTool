import React, { useState } from "react";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import { wordCounter } from "../../../utils/Functions/Functions";
import TextAreaDefault from "../../TextAreaDefault/TextAreaDefault";
import "./WordCounter.css";

export const WordCounter = () => {
  const [answer, setAnswer] = useState([]);

  const handlePrompt = () => {
    const text = document.getElementById("text-area-val").value;
    const res = wordCounter(text);
    setAnswer(res);
  };

  const clearField = () => {
    document.getElementById("text-area-val").value = "";
    setAnswer("");
  };

  return (
    <div>
      <DefaultTool
        title="Word Counter"
        description="Word Counter - Its a free online tool by AnyTool which helps you in counting the number of words and characters of any text or any doc file."
      ></DefaultTool>
      <ul className="list-of-word-counter">
        <li>Words &nbsp; {answer.length > 0 && <span>{answer[0]}</span>}</li>
        <li>
          Characters &nbsp; {answer.length > 0 && <span>{answer[1]}</span>}
        </li>
        <li>
          Characters (with spaces) &nbsp;{" "}
          {answer.length > 0 && <span>{answer[2]}</span>}
        </li>
        <li>
          Paragraphs &nbsp; {answer.length > 0 && <span>{answer[3]}</span>}
        </li>
      </ul>
      <TextAreaDefault
        placeholder="Write your text here..."
        handlePrompt={handlePrompt}
        clearField={clearField}
      ></TextAreaDefault>
    </div>
  );
};
