import React from "react";
import "./DefaultInput.css";

export const DefaultInput = ({
  readonly,
  type,
  width,
  height,
  onChange,
  value,
}) => {
  const inputStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="default-input">
      <input
        onChange={onChange}
        readOnly={readonly}
        type={type}
        value={value}
        style={inputStyle}
      ></input>
    </div>
  );
};

export default DefaultInput;
