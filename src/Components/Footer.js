import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Qualité</span>
            <span>Aide</span>
            <span>Partager</span>
            <span>Carrières</span>
            <span>Témoignages</span>
            <span>Travail</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>contact@mysite.com</span>
            <span>info@mysite.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          2024 Powred By | <span> Couverture Auto</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
