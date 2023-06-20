import React, { useState } from "react";
import {
  DefaultTool,
  DefaultButton,
  DefaultInput,
  DefaultTable,
  Footer,
  ErrorMessage,
} from "../../../utils/Imports/Imports";
import "./SalesTaxCalculator.css";

export const SalesTaxCalculator = () => {
  const [netAmount, setNetAmount] = useState("");
  const [taxRatePercentage, setTaxRatePercentage] = useState("");
  const [grossAmount, setGrossAmount] = useState("");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleCalculate = () => {
    if (netAmount !== "" && taxRatePercentage !== "") {
      const netAmountValue = parseFloat(netAmount);
      const taxRatePercentageValue = parseFloat(taxRatePercentage);

      const taxAmount = (netAmountValue * taxRatePercentageValue) / 100;
      const grossAmountValue = netAmountValue - taxAmount;

      setGrossAmount(grossAmountValue.toFixed(2));
    } else {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
    }
  };

  const handleReset = () => {
    setNetAmount("");
    setTaxRatePercentage("");
    setGrossAmount("");
  };

  return (
    <div>
      <DefaultTool
        title="Sales Tax Calculator"
        description="Sales Tax Calculator tool will calculate the tax rate and the gross amount."
      ></DefaultTool>
      <div className="container-sales-tax-calculator">
        <div className="inputs-sales-tax-calculator">
          <div className="container-dol-sales-tax-calculator">
            <p className="dol-sales-tax-calculator">$</p>
            <DefaultInput
              label="Gross Amount"
              padding="0 0 0 36px"
              width="68.4vw"
              height="3vh"
              type="number"
              value={netAmount}
              onChange={(e) => setNetAmount(e.target.value)}
            ></DefaultInput>
          </div>
          <div className="container-perc-sales-tax-calculator">
            <p className="perc-sales-tax-calculator">%</p>
            <DefaultInput
              padding="0 0 0 36px"
              label="Tax Rate"
              width="68.4vw"
              height="3vh"
              type="number"
              value={taxRatePercentage}
              onChange={(e) => setTaxRatePercentage(e.target.value)}
            ></DefaultInput>
          </div>
        </div>
        <div className="buttons-sales-tax-calculator">
          <DefaultButton title="Calculate" onClick={handleCalculate} />
          <DefaultButton title="Reset" onClick={handleReset} />
        </div>
      </div>
      {netAmount && taxRatePercentage && grossAmount && (
        <div className="results-sales-tax-calculator">
          <DefaultTable
            rows={[
              ["Gross Amount:", `$ ${netAmount}`],
              ["Tax Rate:", `$ ${(taxRatePercentage * netAmount) / 100}`],
              ["Net Amount:", `$ ${grossAmount}`],
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

export default SalesTaxCalculator;
