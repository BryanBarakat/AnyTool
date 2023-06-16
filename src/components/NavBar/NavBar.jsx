import React, { useEffect, useState } from "react";
import "./NavBar.css";
import tool from "../../assets/setting.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const clickedNav = localStorage.getItem("curr_nav");
  const [currOption, setCurrOption] = useState(clickedNav);

  useEffect(() => {
    let bubble = document.getElementById("bubble");
    switch (currOption) {
      case "home":
        bubble.style.left = "62.9%";
        bubble.style.width = "74px";
        bubble.style.background = "#379eff";
        bubble.style.borderRadius = "30% 70% 70% 30% / 35% 30% 70% 65%";
        break;
      case "tools":
        bubble.style.left = "67.6%";
        bubble.style.width = "74px";
        bubble.style.background = "#FFC72C";
        bubble.style.borderRadius = "11% 89% 30% 70% / 68% 12% 88% 32% ";
        break;
      case "about":
        bubble.style.left = "72.6%";
        bubble.style.width = "74px";
        bubble.style.background = "#9932CC ";
        bubble.style.borderRadius = "57% 43% 48% 52% / 60% 5% 95% 40% ";
        break;
      case "contact":
        bubble.style.left = "77.8%";
        bubble.style.width = "100px";
        bubble.style.background = "#ff4343";
        bubble.style.borderRadius = "57% 43% 48% 52% / 33% 77% 23% 67% ";
        break;
    }
  }, [currOption]);

  const handleMouseOut = () => {
    setCurrOption(clickedNav);
  };

  return (
    <div className="container-nav">
      <div className="title-nav">
        <Link to="/">
          <img className="tool-img" src={tool} alt=""></img> AnyTool
        </Link>
      </div>
      <div className="options-nav">
        <ul>
          <li
            onClick={() => localStorage.setItem("curr_nav", "home")}
            onMouseOver={() => setCurrOption("home")}
            onMouseOut={handleMouseOut}
          >
            <Link to="/">HOME</Link>
            <span id="bubble" className="bubble-action"></span>
          </li>
          <li
            onClick={() => localStorage.setItem("curr_nav", "tools")}
            onMouseOver={() => setCurrOption("tools")}
            onMouseOut={handleMouseOut}
          >
            <Link to="/tools">TOOLS</Link>
          </li>
          <li
            onClick={() => localStorage.setItem("curr_nav", "about")}
            onMouseOver={() => setCurrOption("about")}
            onMouseOut={handleMouseOut}
          >
            <Link to="/about">ABOUT</Link>
          </li>
          <li
            onClick={() => localStorage.setItem("curr_nav", "contact")}
            onMouseOver={() => setCurrOption("contact")}
            onMouseOut={handleMouseOut}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="sign-in-button">
            <Link to="/register">
              <button>SIGN IN</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
