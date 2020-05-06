import React from "react";
import logo from "./images/logo.png";
import "./navigationBar.scss";

const NavigationBar = () => (
  <div className="navigation">
    <div className="navigation__logoContainer">
      <img src={logo} alt="logo" className="navigation__logoContainer__logo" />
    </div>

    <div>
      <ul className="navigationList">
        <li className="navigationList__navLinks about">
          <span className="numberColored">01. </span>
          ABOUT
        </li>
        <li className="navigationList__navLinks work">
          <span className="numberColored">02. </span>
          PROJECTS
        </li>
        <li className="navigationList__navLinks contactNav">
          <span className="numberColored">03. </span>
          CONTACT
        </li>
        <li>
          <a href="#" className=" navigationList__navLinks resume">
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default NavigationBar;
