import React from "react";
import "./DefaultTable.css";

export const DefaultTable = ({ rows }) => {
  return (
    <div className="default-table">
      <table>
        <tbody>
          {rows.map((row, index) => {
            let td1 = row[0];
            let td2 = row[1];
            return (
              <tr key={index}>
                <td>{td1}</td>
                <td>{td2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DefaultTable;
