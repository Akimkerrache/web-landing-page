import React from "react";
import styled from "styled-components";
import BannerImage from "../Assets/h3.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const HeroContainer = styled.div`
  position: relative;
`;

const AnimatedBannerImage = styled.img`
  position: absolute;
  top: 70px;
  right: 0;
  animation: moveObject 5s infinite linear;
`;

const Hero = () => {
  return (
    <HeroContainer className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Votre Voiture, à Votre Façon</h1>
          <p className="primary-text">
            Élevez votre expérience d'achat et de vente avec notre marché
            automobile intuitif !
          </p>
          <button
            className="secondary-button"
            onClick={() =>
              window.open("https://www.couverture-auto.fr/", "_blank")
            }
          >
            Explorer
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <AnimatedBannerImage src={BannerImage} alt="" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
