import React from "react";
import ContactSection from "../ContactSection";
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";

const Contact = () => {
  return (
    <div>
      <PageTitle title="Contact" />
      <Navbar />
      <ContactSection />
    </div>
  );
};

export default Contact;
