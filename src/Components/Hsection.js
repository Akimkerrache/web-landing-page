import React from "react";

import AboutBackground from "../Assets/bg2.png";
import HsectionImage from "../Assets/hsec.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaSmileWink } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";

const Hsection = () => {
  return (
    <div className="hsection">
      <div>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="about" />
        </div>
        <div className="about-section-image-container">
          <img src={HsectionImage} alt="" />
        </div>
      </div>
      <div className="hsection-text">
        <p className="primary-subheading">A Propos</p>
        <h1 className="primary-heading">
          Un moyen simple et éprouvé d’améliorer les performances de votre
          équipe.
        </h1>
        <p className="primary-text">
          Là où l'achat et la vente de voitures rencontrent l'innovation -
          Explorez, effectuez des transactions et partez heureux !
        </p>
        <div className="hsec1">
          <FaSmileWink className="hsecIcon" />
          <h3>Beaux choix</h3>
        </div>
        <div className="hsec1">
          <RiSecurePaymentFill className="hsecIcon" />
          <h3>Paiement Sécurisé</h3>
        </div>
        <div className="hsec1">
          <FaMobileAlt className="hsecIcon" />
          <h3>Application Mobile</h3>
        </div>

        <div className="about-buttons-container">
          <button className="secondary-button">Voir Plus</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Regarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hsection;
