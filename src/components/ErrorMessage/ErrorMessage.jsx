import React from "react";
import attention from "../../assets/attention.png";
import "./ErrorMessage.css"; // Import the CSS file for styling

const ErrorMessage = ({ message, removeError }) => {
  return (
    <div className="error-message-container">
      <div className="error-message-content">
        <span className="error-message-text">
          <img src={attention}></img> &nbsp;
          {message} <br />{" "}
          <span className="mini-error-message-text">
            This is a warning message, close it and follow its message
          </span>
        </span>
        <button onClick={removeError}>Close</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
