import React from "react";
import AboutBackground from "../Assets/bg2.png";
import AboutImage from "../Assets/h2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="about" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">A Propos</p>
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
          <button className="secondary-button">Voir Plus</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Regarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
