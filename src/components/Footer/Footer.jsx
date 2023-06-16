import React from "react";
import { Link } from "react-router-dom";
import linkedIn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <p>&copy; 2023 AnyTool. All rights reserved.</p>
          <p>Designed by Bryan Barakat</p>
          <nav>
            <ul>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/bryan-naoum-barakat-6797b0205/?originalSubdomain=uk"
                >
                  <img src={linkedIn}></img>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/bryan-naoum-barakat-6797b0205/?originalSubdomain=uk"
                >
                  <img src={instagram}></img>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/bryan-naoum-barakat-6797b0205/?originalSubdomain=uk"
                >
                  <img src={twitter}></img>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/bryan-naoum-barakat-6797b0205/?originalSubdomain=uk"
                >
                  <img src={github}></img>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
