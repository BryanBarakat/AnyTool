import React, { useState, useEffect, useRef } from "react";
import "./RandomWordGenerator.css";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import {
  randomWords,
  randomVerbs,
  randomAdjectives,
  randomNouns,
} from "../../../utils/Variables/Variables";
import { DefaultTool } from "../../DefaultTool/DefaultTool";

export const RandomWordGenerator = () => {
  const [answer, setAnswer] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [hover, setHover] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (answer !== "") {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [answer]);

  const copyWord = (el) => {
    navigator.clipboard.writeText(el);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(answer.join(" "));
  };

  const getRandomWord = (type, n) => {
    if (type === "") {
      setWarning(true);
      setWarningMessage(`Choose the type of word desired`);
      return [];
    }
    let textArray = [];
    switch (type) {
      case "words":
        textArray = randomWords;
        break;
      case "verbs":
        textArray = randomVerbs;
        break;
      case "nouns":
        textArray = randomNouns;
        break;
      case "adjectives":
        textArray = randomAdjectives;
        break;
    }
    if (n > textArray.length) {
      setWarning(true);
      setWarningMessage(
        `The maximum possible words for this option is ${textArray.length}`
      );
    }
    let words = [];
    let copy_arr = textArray.slice();
    for (let i = 0; i < n; i++) {
      const randItem = Math.floor(Math.random() * textArray.length);
      words.push(textArray[randItem]);
      copy_arr.splice(randItem, 1);
    }
    return words;
  };

  const clearField = () => {
    document.getElementById("type-word").value = "";
    document.getElementById("number-words-generation").value = 1;
    setAnswer("");
  };

  const handlePrompt = () => {
    const type = document.getElementById("type-word").value;
    const number = document.getElementById("number-words-generation").value;
    const res = getRandomWord(type, number);
    setAnswer(res);
  };

  return (
    <div>
      <DefaultTool
        title="Random Word Generator"
        description="The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want!"
      ></DefaultTool>
      <div className="main-content-random-word-gen">
        <ul>
          <li>Enter the number of words</li>
          <li>
            <input
              type="number"
              min={1}
              max={600}
              placeholder={1}
              id="number-words-generation"
            ></input>
          </li>
          <li>
            <select id="type-word">
              <option value="">Choose a word type</option>
              <option value="words">Words (All)</option>
              <option value="verbs">Verbs</option>
              <option value="nouns">Nouns</option>
              <option value="adjectives">Adjectives</option>
            </select>
          </li>
          <li className="prompt-click">
            <button onClick={handlePrompt}>Submit</button>
            <button onClick={clearField}>Clear</button>
            <button onClick={copyAll}>Copy All</button>
          </li>
          {answer && (
            <li ref={containerRef} className="words-render-randome-word-gen">
              {answer.map((el, index) => (
                <h3
                  key={`${index}`}
                  onClick={() => copyWord(el)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="item-display-random-word-gen"
                >
                  {el}
                </h3>
              ))}
              {hover && <h4 className="hoverMessage">Click to copy</h4>}
            </li>
          )}
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

export default RandomWordGenerator;
