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
import "./LoanCalculator.css";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate);

    if (!isNaN(amount) && !isNaN(term) && !isNaN(rate) && rate !== 0) {
      const monthlyInterestRate = rate / 100 / 12;
      const monthlyPayments =
        (amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -term));
      const totalCostOfLoan = monthlyPayments * term;
      const totalInterestPaid = totalCostOfLoan - amount;

      setMonthlyPayment(monthlyPayments.toFixed(2));
      setTotalCost(totalCostOfLoan.toFixed(2));
      setTotalInterest(totalInterestPaid.toFixed(2));
    } else {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
    }
  };

  const resetCalculator = () => {
    setLoanAmount("");
    setLoanTerm("");
    setInterestRate("");
    setMonthlyPayment("");
    setTotalCost("");
    setTotalInterest("");
  };

  return (
    <div>
      <DefaultTool
        title="Loan Calculator"
        description="Use this Loan Calculator tool to determine your monthly payment, interest rate, number of months or principal amount on a loan."
      />
      <div className="container-loan-calculator">
        <div className="dol-container-loan-calculator">
          <div className="dol-loan-calculator">$</div>
          <DefaultInput
            padding="0 0 0 36px"
            label="Loan Amount"
            width="68.4vw"
            height="3vh"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          ></DefaultInput>
        </div>
        <DefaultInput
          label="Loan Term In Months"
          width="70vw"
          height="3vh"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        ></DefaultInput>
        <div className="perc-container-loan-calculator">
          <div className="perc-loan-calculator">%</div>
          <DefaultInput
            padding="0 0 0 36px"
            label="Interest Rate Per Year"
            width="68.4vw"
            height="3vh"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          ></DefaultInput>
        </div>
        <div className="container-buttons-loan-calculator">
          <DefaultButton title="Calculate" onClick={calculateLoan} />
          <DefaultButton title="Reset" onClick={resetCalculator} />
        </div>
      </div>
      {monthlyPayment && totalCost && totalInterest && (
        <DefaultTable
          rows={[
            ["Monthly Payments: ", `${monthlyPayment} $`],
            ["Total Cost of Loan: ", `${totalCost} $`],
            ["Total Interest: ", `${totalInterest} $`],
          ]}
        ></DefaultTable>
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

export default LoanCalculator;
