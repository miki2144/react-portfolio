import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <h2 style={{ color: "red" }}>My Portfolio</h2>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>
      </ul>

      {/* Dark Mode Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
        {isDarkMode ? " " : " "}
      </button>
    </nav>
  );
};

export default Navbar;
