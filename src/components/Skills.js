import React from "react";
import { FaReact, FaPhp, FaNetworkWired, FaDatabase, FaHtml5, FaWordpress, FaNodeJs, FaChartBar } from "react-icons/fa"; // Import new icons
import "./Skills.css"; // Import the CSS file for styling

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-cards">
        <div className="skill-card">
          <FaReact size={40} />
          <h3>React</h3>
          <p>Building responsive user interfaces and SPAs using React.js, focusing on reusable components and performance.</p>
        </div>
        <div className="skill-card">
          <FaPhp size={40} />
          <h3>PHP / Laravel</h3>
          <p>Backend development using PHP and Laravel framework, creating scalable and secure web applications.</p>
        </div>
        <div className="skill-card">
          <FaHtml5 size={40} />
          <h3>HTML</h3>
          <p>Expertise in crafting well-structured and semantic HTML to ensure accessibility and SEO-friendly web pages.</p>
        </div>
        <div className="skill-card">
          <FaWordpress size={40} />
          <h3>WordPress</h3>
          <p>Development and customization of themes and plugins for WordPress, delivering user-friendly and dynamic websites.</p>
        </div>
        <div className="skill-card">
          <FaNodeJs size={40} />
          <h3>Node.js</h3>
          <p>Building backend services with Node.js, utilizing Express for RESTful APIs and scalable solutions.</p>
        </div>
        <div className="skill-card">
          <FaNetworkWired size={40} />
          <h3>Network Installation</h3>
          <p>Providing networking solutions for businesses, including installation, configuration, and maintenance of network systems.</p>
        </div>
        <div className="skill-card">
          <FaDatabase size={40} />
          <h3>MySQL</h3>
          <p>Designing and managing databases with MySQL, optimizing queries, and ensuring data integrity.</p>
        </div>
        <div className="skill-card">
          <FaChartBar size={40} />
          <h3>Big Data Analysis</h3>
          <p>Analyzing large datasets using various tools and techniques to uncover insights and drive business decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
