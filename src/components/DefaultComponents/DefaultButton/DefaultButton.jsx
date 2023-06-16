import React from "react";
import "./DefaultButton.css";

export const DefaultButton = ({ title, padding, onClick }) => {
  const inputStyle = {
    padding: padding,
  };

  return (
    <div className="default-button">
      <button onClick={onClick} style={inputStyle}>
        {title}
      </button>
    </div>
  );
};

export default DefaultButton;
