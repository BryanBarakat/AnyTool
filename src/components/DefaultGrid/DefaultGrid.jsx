import React from "react";
import { Link } from "react-router-dom";
import "./DefaultGrid.css";

export const DefaultGrid = ({
  title,
  description,
  links,
  images,
  itemName,
}) => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item first-grid-item">
          <div className="title-container">{title}</div>
          <div className="container-desc">{description}</div>
        </div>
        {links.map((el, index) => {
          return (
            <Link key={index} to={el}>
              <div className="grid-item">
                <img src={images[index]} /> &nbsp; {itemName[index]}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DefaultGrid;
