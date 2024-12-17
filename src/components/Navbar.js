import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure to create and import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
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
