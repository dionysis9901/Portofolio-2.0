import React from "react";
import "./landinContainer.scss";

const LandingContainer = () => {
  return (
    <div className="landingContainer">
      <p className="landingContainer__hi">Hi, my name is</p>
      <p className="landingContainer__name">Dionysis Koufis</p>
      <p className="landingContainer__whatIdo">I build things for the web.</p>
      <p className="landingContainer__summary">
        I'm a software engineer based in Athens, GR specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <button className="landingContainer__btn btn">Get in Touch</button>
    </div>
  );
};

export default LandingContainer;
