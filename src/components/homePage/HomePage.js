import React from "react";
import NavigationBar from "../navigationBar";
import LandingContainer from "../landingContainer";
import Links from "../links";
import Email from "../email";
import AboutMe from "../aboutMe";
import Projects from "../projects";
import Contact from "../contact";
import Footer from "../footer";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavigationBar />
      <LandingContainer />
      <Links />
      <Email />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
