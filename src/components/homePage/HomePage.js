import React from "react";
import NavigationBar from "../navigationBar";
import LandingContainer from "../landingContainer";
import Links from "../links";
import Email from "../email";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavigationBar />
      <LandingContainer />
      <Links />
      <Email />
    </div>
  );
};

export default HomePage;
