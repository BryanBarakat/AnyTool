import React from "react";
import "./DefaultTool.css";
import { NavBar } from "../NavBar/NavBar";

export const DefaultTool = ({ title, description }) => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="wallpaper-tools"></div>
      <div className="title-page">
        <span>{title}</span> <br /> <span>{description}</span>
      </div>
    </div>
  );
};
