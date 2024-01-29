import React from "react";
import styled from "styled-components";
import AnimatedObject from "../Assets/3dhand.png";

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20%;
  padding-top: 10%;
  font-size: 50px;
  font-weight: 600;
  background-color: transparent;
  position: relative;

  @media (min-width: 768px) {
    padding: 5% 10%;
  }

  @media (min-width: 1024px) {
    padding: 5% 20%;
  }
`;

const AnimatedObjectImage = styled.img`
  position: absolute;
  top: 50px;
  right: 10%;
  width: 400px;
  animation: moveObject 5s infinite linear;

  @media (max-width: 768px) {
    right: 10%;
    width: 250px;
  }

  @media (max-width: 1024px) {
    right: 20%;
    width: 300px;
  }
`;

const PageTitle = ({ title }) => {
  return (
    <PageTitleWrapper>
      <AnimatedObjectImage src={AnimatedObject} alt="Animated Object" />
      <div className="page-title">{title}</div>
    </PageTitleWrapper>
  );
};

export default PageTitle;
