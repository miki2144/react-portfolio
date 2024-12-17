import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  // State to handle form data and form submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API or email service)
    // For now, we'll just show a success message
    setFormStatus("Your message has been sent successfully!");
  };

  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-form-container">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>

      {/* Contact Methods Section */}
      <div className="contact-methods">
        <div className="contact-item">
          <a href="tel:+0963080716" className="contact-link">
            <FaPhone size={30} />
            <p>0963080716</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:mikidbesaw@gmail.com" className="contact-link">
            <FaEnvelope size={30} />
            <p>email</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/miki2144" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
            <p>GitHub</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/woldemichael-debesaw-966b10336" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
