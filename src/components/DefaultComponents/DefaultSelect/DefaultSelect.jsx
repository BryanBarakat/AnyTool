import React from "react";
import "./DefaultSelect.css";

export const DefaultSelect = ({ width, options }) => {
  const styleWidth = {
    width: width,
  };

  return (
    <div className="default-select">
      <select style={styleWidth}>
        {options.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefaultSelect;
