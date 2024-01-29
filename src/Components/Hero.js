import React from "react";
import BannerImage from "../Assets/h3.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Votre Voiture, à Votre Façon</h1>
          <p className="primary-text">
            Élevez votre expérience d'achat et de vente avec notre marché
            automobile intuitif !
          </p>
          <button className="secondary-button">
            Explorer
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
