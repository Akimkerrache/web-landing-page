import React from "react";
import Navbar from "../Navbar";
import Apropos from "../Apropos";
import Team from "../Team";
import PageTitle from "../PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle title="A Propos" />
      <Navbar />
      <Apropos />
      <Team />
    </div>
  );
};

export default About;
