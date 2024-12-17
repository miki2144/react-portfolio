import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons
import "./Footer.css"; // Import CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Woldemichael Debesaw </p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/miki2144" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/woldemichael-debesaw-966b10336" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
