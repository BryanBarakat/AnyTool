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
import "./DiscountCalculator.css";

export const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const percentage = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(percentage)) {
      const discountAmount = (price * percentage) / 100;
      const calculatedPrice = price - discountAmount;
      setDiscountedPrice(calculatedPrice.toFixed(2));
    } else {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
    }
  };

  const resetCalculator = () => {
    setOriginalPrice("");
    setDiscountPercentage("");
    setDiscountedPrice("");
  };

  return (
    <div className="discount-calculator">
      <DefaultTool
        title="Discount Calculator"
        description="Calculate the discounted value"
      />
      <div className="container-discount-calculator">
        <div className="input-dolar-discount-calculator">
          <div className="dol-sign-discount-calculator">$</div>
          <DefaultInput
            padding="0 0 0 36px"
            label="Original Price"
            width="68.4vw"
            height="3vh"
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          ></DefaultInput>
        </div>
        <div className="input-perc-discount-calculator">
          <div className="perc-sign-discount-calculator">%</div>
          <DefaultInput
            padding="0 0 0 36px"
            label="Discount Percentage"
            width="68.4vw"
            height="3vh"
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          ></DefaultInput>
        </div>
        <div className="buttons-discount-calculator">
          <DefaultButton title="Calculate" onClick={calculateDiscount} />
          <DefaultButton title="Reset" onClick={resetCalculator} />
        </div>
      </div>
      {discountedPrice && (
        <DefaultTable
          rows={[
            [
              "Savings:",
              `${(
                parseFloat(originalPrice) - parseFloat(discountedPrice)
              ).toFixed(2)} $`,
            ],
            ["Discounted Price:", `${discountedPrice} $`],
          ]}
        ></DefaultTable>
      )}
      <Footer></Footer>
      {warning && (
        <ErrorMessage
          removeError={() => setWarning(false)}
          message={warningMessage}
        ></ErrorMessage>
      )}
    </div>
  );
};

export default DiscountCalculator;
