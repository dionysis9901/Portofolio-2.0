import React from "react";
import NavigationBar from "../navigationBar";
import LandingContainer from "../landingContainer";
import Links from "../links";
import Email from "../email";
import AboutMe from "../aboutMe";
import Projects from "../projects";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavigationBar />
      <LandingContainer />
      <Links />
      <Email />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default HomePage;
