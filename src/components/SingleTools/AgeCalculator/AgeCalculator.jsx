import React, { useEffect, useRef, useState } from "react";
import { DefaultTool } from "../../DefaultTool/DefaultTool";
import Footer from "../../Footer/Footer";
import "./AgeCalculator.css";

export const AgeCalculator = () => {
  const [bornDate, setBornDate] = useState("");
  const [bornMonth, setBornMonth] = useState("");
  const [bornYear, setBornYear] = useState("");

  const containerRef = useRef(null);

  const [result, setResult] = useState([]);

  useEffect(() => {
    if (result.length > 0) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [result]);

  function calculateAge() {
    const currentDate = new Date();
    const birthDate = new Date(bornYear, bornMonth - 1, bornDate);

    // Calculate the difference in milliseconds between the two dates
    const difference = currentDate - birthDate;

    // Convert the difference to years, months, and days
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);

    setResult([days, months, years]);
  }

  return (
    <div>
      <DefaultTool
        title="Age Calculator"
        description="Calculate your exact age in months, weeks, and days"
      ></DefaultTool>
      <div className="container-age-calc">
        <h2>Select your date of birth:</h2>
        <div className="date-of-birth-input">
          <select
            onChange={(e) => {
              setBornYear(e.target.value);
            }}
          >
            {Array.from({ length: 2022 - 1900 + 1 }, (_, index) => (
              <option key={index} value={1900 + index}>
                {1900 + index}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setBornMonth(e.target.value);
            }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index} value={index + 1}>
                {new Date(0, index).toLocaleString("default", {
                  month: "long",
                })}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setBornDate(e.target.value);
            }}
          >
            {Array.from({ length: 31 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button onClick={calculateAge}>Calculate</button>
      </div>
      {result.length > 0 && (
        <div ref={containerRef} className="table-of-data-age-calc">
          <table>
            <tbody>
              <tr>
                <td>Your Current Age:</td>
                <td>{`${result[2]} year(s), ${result[1]} month(s), and ${result[0]} day(s)`}</td>
              </tr>
              <tr>
                <td>Age in Months:</td>
                <td>{`${result[2] * 12 + result[1]} month(s)`}</td>
              </tr>
              <tr>
                <td>Age in Weeks:</td>
                <td>{`${Math.floor(
                  (result[2] * 365 + result[1] * 30 + result[0]) / 7
                )} week(s)`}</td>
              </tr>
              <tr>
                <td>Age in Days:</td>
                <td>{`${
                  result[2] * 365 + result[1] * 30 + result[0]
                } day(s)`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AgeCalculator;
