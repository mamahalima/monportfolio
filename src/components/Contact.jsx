import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/components/Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ffc4uxv",   
      "template_3b2phul",  
      formData,          
      "ewaq_7bB-IWpUxn7u"     
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi:", error);
    });
  };
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
     <div className="particles-background">
    <div className="particle" style={{top: "10%", left: "5%", animationDuration: "8s"}}></div>
    <div className="particle" style={{top: "30%", left: "80%", animationDuration: "12s"}}></div>
    <div className="particle" style={{top: "50%", left: "40%", animationDuration: "10s"}}></div>
    <div className="particle" style={{top: "70%", left: "20%", animationDuration: "14s"}}></div>
    <div className="particle" style={{top: "90%", left: "60%", animationDuration: "9s"}}></div>
  </div>
      <h2 id="contact-title">Contactez-moi</h2>
      <p>Vous avez un projet ou une question ? N'hésitez pas à m'écrire !</p>

      {submitted && <p className="success-msg">Merci, votre message a été envoyé !</p>}

<form className="contact-form" onSubmit={handleSubmit}>
  <label htmlFor="name" className="sr-only">Votre nom</label>
  <input
    id="name"type="text"name="name"placeholder="Votre nom"
    value={formData.name}onChange={handleChange}required/>
  <label htmlFor="email" className="sr-only">Votre email</label>
  <input
    id="email"type="email"name="email"placeholder="Votre email"
    value={formData.email}onChange={handleChange}required/>
  <label htmlFor="message" className="sr-only">Votre message</label>
  <textarea
    id="message"name="message"placeholder="Votre message..."
    value={formData.message}onChange={handleChange}required/>

  <button type="submit">Envoyer</button>
</form>
      <div className="contact-links">
        <a href="mailto:votremail@example.com">Email<span className="sr-only">(ouvre votre application mail)</span></a>
        <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only">(s'ouvre dans un nouvel onglet)</span></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
       GitHub <span className="sr-only">(s'ouvre dans un nouvel onglet)</span></a>
      </div>
    </section>
  );
}

export default Contact;