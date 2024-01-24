import React from "react";

import Man2 from "../Assets/m2.jpg";
import Man3 from "../Assets/m3.jpg";
import Man4 from "../Assets/m4.jpg";

const Team = () => {
  const teamInfoData = [
    {
      image: Man2,
      title: "Maria Krostav",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci ",
      job: "CEO Founder",
    },
    {
      image: Man3,
      title: "Alvin Kerr",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      job: "Web Developer",
    },
    {
      image: Man4,
      title: "Mandro Prad",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci ",
      job: "Directeur des Ventes",
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
          <div className="team-section-info" key={data.title}>
            <div className="team-img">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <h3>{data.job} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
