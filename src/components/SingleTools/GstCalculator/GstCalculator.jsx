import React, { useState } from "react";
import {
  DefaultTool,
  DefaultButton,
  DefaultInput,
  DefaultSelect,
  DefaultTable,
  Footer,
  ErrorMessage,
  DefaultCheckBox,
} from "../../../utils/Imports/Imports";
import "./GstCalculator.css";

export const GstCalculator = () => {
  const [gstType, setGstType] = useState("GST Exclusive");
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [netAmount, setNetAmount] = useState("");
  const [gstAmount, setGstAmount] = useState("");
  const [grossAmount, setGrossAmount] = useState("");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleCheckboxChange = (option) => {
    setGstType(option);
  };

  const handleCalculate = () => {
    if (amount !== "" && gstRate !== "") {
      const amountValue = parseFloat(amount);
      const gstRateValue = parseFloat(gstRate);

      if (gstType === "GST Exclusive") {
        const gstAmountValue = (amountValue * gstRateValue) / 100;
        const grossAmountValue = amountValue + gstAmountValue;

        setNetAmount(amountValue.toFixed(2));
        setGstAmount(gstAmountValue.toFixed(2));
        setGrossAmount(grossAmountValue.toFixed(2));
      } else if (gstType === "GST Inclusive") {
        const gstAmountValue =
          (amountValue * gstRateValue) / (100 + gstRateValue);
        const netAmountValue = amountValue - gstAmountValue;

        setNetAmount(netAmountValue.toFixed(2));
        setGstAmount(gstAmountValue.toFixed(2));
        setGrossAmount(amountValue.toFixed(2));
      }
    } else {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
    }
  };

  const handleReset = () => {
    setGstType("GST Exclusive");
    setAmount("");
    setGstRate("");
    setNetAmount("");
    setGstAmount("");
    setGrossAmount("");
  };

  return (
    <div>
      <DefaultTool
        title="GST Calculator"
        description="GST Calculator online tool will calculate the amount of GST included in a gross price as well as the amount you should add to a net price."
      ></DefaultTool>
      <div className="container-gst-calculator">
        <div className="checkboxes-gst-calculator">
          <DefaultCheckBox
            options={["GST Exclusive", "GST Inclusive"]}
            selectedOption={gstType}
            onChange={handleCheckboxChange}
          ></DefaultCheckBox>
        </div>
        <div className="inputs-gst-calculator">
          <div className="dol-gst-calculator">
            <p className="dol-sign-gst-calculator">$</p>
            <DefaultInput
              padding="0 0 0 36px"
              label="Amount"
              width="68.4vw"
              height="3vh"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></DefaultInput>
          </div>
          <div className="perc-gst-calculator">
            <p className="perc-sign-gst-calculator">%</p>
            <DefaultInput
              padding="0 0 0 36px"
              label="GST Rate"
              width="68.4vw"
              height="3vh"
              type="number"
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
            ></DefaultInput>
          </div>
        </div>
        <div className="buttons-gst-calculator">
          <DefaultButton title="Calculate" onClick={handleCalculate} />
          <DefaultButton title="Reset" onClick={handleReset} />
        </div>
      </div>
      {grossAmount && gstAmount && netAmount && (
        <div className="results-gst-calculator">
          <DefaultTable
            rows={[
              ["Net Amount:", `$ ${netAmount}`],
              ["GST Amount:", `$ ${gstAmount}`],
              ["Gross Amount:", `$ ${grossAmount}`],
            ]}
          ></DefaultTable>
        </div>
      )}
      {warning && (
        <ErrorMessage
          removeError={() => setWarning(false)}
          message={warningMessage}
        ></ErrorMessage>
      )}
      <Footer></Footer>
    </div>
  );
};

export default GstCalculator;
