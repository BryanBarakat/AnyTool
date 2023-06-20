import React from "react";
import "./DefaultCheckBox.css";

const DefaultCheckBox = ({ options, selectedOption, onChange, className }) => {
  return (
    <div className="container-def-checkbox">
      {options.map((option, index) => (
        <label key={index} className="radio-label">
          <input
            type="radio"
            name="radio-option"
            value={option}
            checked={selectedOption === option}
            onChange={() => onChange(option)}
            className={["radio-input", className].join(" ")}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default DefaultCheckBox;
