import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You may want to use state or a form library like Formik to handle form data
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-Nous</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Sujet:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button className="secondary-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
