import React from "react";
import Secure from "../Assets/w1.png";
import Money from "../Assets/w2.png";
import Location from "../Assets/w3.png";
import Calculate from "../Assets/w4.png";

const Team = () => {
  const teamInfoData = [
    {
      image: Secure,
      title: "Qualité et Honnêteté",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Money,
      title: "Garantie de Remboursement",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Location,
      title: "Livraison Rapide",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Calculate,
      title: "Bonnes Affaires",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Notre Équipe</p>
        <h1 className="primary-heading">Professionnel et Expérimenté</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod te incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim to eismud
        </p>
      </div>
      <div className="work-section-bottom">
        {teamInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
