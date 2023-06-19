import React from "react";
import "./DefaultInput.css";

export const DefaultInput = ({
  readonly,
  type,
  width,
  height,
  onChange,
  value,
  name,
  label,
  padding,
}) => {
  const inputStyle = {
    width: width,
    height: height,
    padding: padding,
  };

  return (
    <div className="default-input">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        onChange={onChange}
        readOnly={readonly}
        type={type}
        value={value}
        style={inputStyle}
        name={name}
      ></input>
    </div>
  );
};

export default DefaultInput;
