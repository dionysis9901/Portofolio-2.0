import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h3 className="aboutMe__heading">
        <span className="coloredNumber">01.</span>
        ABOUT ME
      </h3>
      <p className="aboutMe__hello">
        Hello! I'm Dionysis, a software engineer based in Athens, GR.
      </p>
      <p className="aboutMe__summary">
        Professionally connected with the web development industry and
        information technology. Well-organized person, problem solver,
        independent employee with high attention to detail. Fan of Video Games,
        outdoor activities, TV series and , recently to Robotics. Interested in
        the entire front – end spectrum and working on ambitious projects with
        positive people.
      </p>

      <p className="aboutMe__techSum">
        Here are a few technologies I've been working with recently:
      </p>
      <ul className="aboutMe__technologies">
        <li className="technology">JavaScript (ES6+)</li>
        <li className="technology">HTML</li>
        <li className="technology">(S)CSS</li>
        <li className="technology">React</li>
        <li className="technology">Redux</li>
        <li className="technology">RXjS</li>
      </ul>
    </div>
  );
};

export default AboutMe;
