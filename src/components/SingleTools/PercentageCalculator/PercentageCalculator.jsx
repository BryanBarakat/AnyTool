import React, { useState } from "react";
import {
  DefaultTool,
  DefaultButton,
  DefaultInput,
  DefaultSelect,
  DefaultTable,
  Footer,
  ErrorMessage,
} from "../../../utils/Imports/Imports";
import "./PercentageCalculator.css";

export const PercentageCalculator = () => {
  const [percentage1, setPercentage1] = useState(null);
  const [percentage2, setPercentage2] = useState(null);
  const [percentage3, setPercentage3] = useState(null);
  const [percentage4, setPercentage4] = useState(null);
  const [percentage5, setPercentage5] = useState(null);
  const [percentage6, setPercentage6] = useState(null);
  const [percentage7, setPercentage7] = useState(null);
  const [percentage8, setPercentage8] = useState(null);
  const [percentage9, setPercentage9] = useState(null);

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  function calculatePercentage1() {
    // Calculate the percentage
    if (!percentage1 || !percentage2) {
      setWarning(true);
      setWarningMessage("Fill in the fields");
      return;
    }
    const result = ((percentage1 / 100) * percentage2).toFixed(2);
    setPercentage3(result);
  }

  function calculatePercentage2() {
    // Calculate the percentage
    if (!percentage4 || !percentage5) {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
      return;
    }
    const result = ((percentage4 / percentage5) * 100).toFixed(2);
    setPercentage6(result);
  }

  function calculatePercentage3() {
    // Calculate the percentage
    if (!percentage7 || !percentage8) {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
      return;
    }
    const result = ((percentage7 / percentage8) * 100).toFixed(2);
    setPercentage9(result);
  }

  return (
    <div>
      <DefaultTool
        title="Percentage Calculator"
        description="Calculate the percentages of any number"
      />
      <div className="percentage-calculator-subcontainer">
        <div className="percentage-calculator-row1">
          <ul>
            <li>What is</li>
            <li>
              <DefaultInput
                type="number"
                value={percentage1}
                onChange={(e) => setPercentage1(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>% of</li>
            <li>
              <DefaultInput
                type="number"
                value={percentage2}
                onChange={(e) => setPercentage2(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>
              <DefaultButton onClick={calculatePercentage1} title="Calculate" />
            </li>
            <li>
              <DefaultInput
                readOnly
                type="number"
                value={percentage3}
                width="16vw"
                height="3vh"
              />
            </li>
          </ul>
        </div>
        <hr />
        <div className="percentage-calculator-row2">
          <ul>
            <li>
              <DefaultInput
                type="number"
                value={percentage4}
                onChange={(e) => setPercentage4(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>is what % of</li>
            <li>
              <DefaultInput
                type="number"
                value={percentage5}
                onChange={(e) => setPercentage5(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>
              <DefaultButton onClick={calculatePercentage2} title="Calculate" />
            </li>
            <li>
              <DefaultInput
                readOnly
                type="number"
                value={percentage6}
                width="16vw"
                height="3vh"
              />
            </li>
          </ul>
        </div>
        <hr />
        <div className="percentage-calculator-row3">
          <ul>
            <li>
              <DefaultInput
                type="number"
                value={percentage7}
                onChange={(e) => setPercentage7(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>is</li>
            <li>
              <DefaultInput
                type="number"
                value={percentage8}
                onChange={(e) => setPercentage8(e.target.value)}
                width="20vw"
                height="3vh"
              />
            </li>
            <li>% of what?</li>
            <li>
              <DefaultButton onClick={calculatePercentage3} title="Calculate" />
            </li>
            <li>
              <DefaultInput
                readOnly
                type="number"
                value={percentage9}
                width="16vw"
                height="3vh"
              />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      {warning && (
        <ErrorMessage
          removeError={() => setWarning(false)}
          message={warningMessage}
        ></ErrorMessage>
      )}
    </div>
  );
};

export default PercentageCalculator;
