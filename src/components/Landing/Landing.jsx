import React, { useEffect } from "react";
import "./Landing.css";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export const Landing = () => {
  useEffect(() => {
    localStorage.setItem("curr_nav", "home");
  }, []);

  return (
    <div className="container-landing">
      <NavBar></NavBar>
      <div className="wrapper">
        <span class="shape"></span>
        <span class="shape"></span>
        <span class="shape"></span>
        <span class="shape"></span>
        <span class="shape"></span>
        <span class="shape"></span>
      </div>
      <div className="items-landing">
        <div className="slogan">
          WHY TAKE ON HEADACHES? <br /> <span>ANYTOOL</span> IS HERE.
        </div>
        <br />
        <div className="subslogan">
          Use any tool efficiently for free instead of wasting time! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Nam delectus quidem
          voluptas magni unde ipsum deserunt tenetur incidunt ipsam, eligendi
          rerum odit officiis repellat distinctio perspiciatis nulla suscipit
          magnam! Eligendi?
        </div>
        <br />
        <br />
        <div className="buttons-slogan">
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
          <Link to="/tools">
            <button>NAVIGATE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
