import React, { useState } from "react";
import "./About.css"; // Import the CSS file for styling

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
           I'm Woldemichael Debesaw, a Full Stack Software Developer. I graduated from Wolkite University with a degree in Information Technology.
          I specialize in modern web development using languages and frameworks such as React, Node.js, Laravel, and PHP. I am passionate about creating
          responsive, user-friendly, and efficient applications. My skills also extend to networking and cybersecurity, allowing me to build secure, high-performance
          solutions for businesses and individuals.
        </p>
        <button className="popup-button" onClick={togglePopup}>
          More Details
        </button>
        {showPopup && (
          <div className="popup show">
            <div className="popup-content">
              <h3>Technologies I Use</h3>
              <p>React, Node.js, PHP, Laravel, MySQL, HTML, CSS, JavaScript, Networking, Cybersecurity</p>
              <button className="close-popup" onClick={togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
