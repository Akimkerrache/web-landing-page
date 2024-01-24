import React from "react";
import AboutBackground from "../Assets/bg3.png";
import ApptImage from "../Assets/h1.png";
import { GrAndroid } from "react-icons/gr";
import { FaApple } from "react-icons/fa";

const AppsSection = () => {
  return (
    <div className="apps-section-container">
      <div className="apps-section-text-container">
        <p className="primary-subheading">Application Mobile</p>
        <h1 className="primary-heading">
          Un moyen simple et éprouvé d’améliorer les performances de votre
          équipe.
        </h1>
        <p className="primary-text">
          Là où l'achat et la vente de voitures rencontrent l'innovation -
          Explorez, effectuez des transactions et partez heureux !
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="android-btn">
            Android
            <GrAndroid />
          </button>
          <button className="iso-btn">
            ISO
            <FaApple />
          </button>
        </div>
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="apps-section-image-container">
        <img src={ApptImage} alt="" />
      </div>
    </div>
  );
};

export default AppsSection;
