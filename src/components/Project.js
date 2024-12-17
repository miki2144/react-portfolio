import React from "react";
import "./Projects.css"; // Import the CSS file for styling

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built with PHP and MySQL",
    link: "https://github.com/miki2144/e-commerce"
  },
  {
    title: "Mobile App",
    description: "Interactive App",
    link: "https://github.com/miki2144/simple-flutter"
  },
  {
    title: "Companies Management",
    description: "Manage companies and employees efficiently",
    link: "https://github.com/miki2144/companies-managment"
  },
  {
    title: "Network Installation for Serino Hotel",
    description: "Networking solutions for Serino Hotel",
    link: "#" // Unclickable link
  },
  {
    title: "Role-Based System",
    description: "Role-based system for user management",
    link: "https://github.com/miki2144/role"
  },
  {
    title: "Portfolio Website",
    description: "Personal website built with React",
    link: "https://github.com/miki2144/portfolio"
  },
  {
    title: "Real-Time Telegram Application",
    description: "A telegram Bot",
    link: "https://github.com/miki2144/telegram-app"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`view-button ${project.link === '#' ? 'unclickable' : ''}`}
            >
              {project.link === '#' ? 'Link Unavailable' : 'View on GitHub'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
