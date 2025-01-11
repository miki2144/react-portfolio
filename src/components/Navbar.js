import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure to create and import the CSS file for styling
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing additional icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark/light mode
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <h2 style={{ color: 'red' }}>My Portfolio</h2> {/* Set text color to red */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />} {/* Use the moon or sun icon */}
        {isDarkMode ? " Light Mode" : " Dark Mode"}
      </button>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/skills" className="nav-link">Skills</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;