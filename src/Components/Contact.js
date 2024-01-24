import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Vous avez une question en tête ?</h1>
      <h2 className="primary-heading">Laissez-nous vous aider</h2>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Soumettre</button>
      </div>
    </div>
  );
};

export default Contact;
