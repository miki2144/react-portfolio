import React, { useState } from "react";
import "./Home.css";
import profilePicture from "../assets/profile-picture.jpg";
import myCV from "../assets/My_cv_documentation.pdf"; // Import the PDF file
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import { FaReact, FaPhp, FaNetworkWired, FaDatabase, FaHtml5, FaNodeJs, FaChartBar } from "react-icons/fa"; // Existing icons
import { SiDjango, SiPython } from "react-icons/si"; // Import Django and Python logos

import "./Projects.css"; // Import the CSS file for Projects styling

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built with PHP and MySQL",
    link: "https://github.com/miki2144/e-commerce",
    image: "https://mobiwebtech.com/wp-content/uploads/2017/11/Top-PHP-Ecommerce-Website-Development-Platforms-for-Your-Business-1.png" // Updated with actual image URL
  },
  {
    title: "Mobile App",
    description: "Interactive App",
    link: "https://github.com/miki2144/simple-flutter",
    image: "https://cdn.prod.website-files.com/619e15d781b21202de206fb5/642e5f92f6147ed845692f97_How-Mobile-App-Testing-Makes-or-Breaks-Mobile-User-Experience.webp" // Updated with actual image URL
  },
  {
    title: "Companies Management",
    description: "Manage companies and employees efficiently",
    link: "https://github.com/miki2144/companies-managment",
    image: "https://nbllaw.com/wp-content/uploads/2021/06/Preparing-agreement-on-management-of-Company.jpg" // Updated with actual image URL
  },

   {
    title: "Network Installation for Serino Hotel",
    description: "Networking solutions for Serino Hotel",
    link: "#", // Unclickable link
    image: "https://thenetworkinstallers.com/wp-content/uploads/2021/06/network-cable-installation-2.jpg" // Updated with actual image URL
  },

  {
    title: "Role-Based System",
    description: "Role-based system for user management",
    link: "https://github.com/miki2144/role",
    image: "https://blog.pixelfreestudio.com/wp-content/uploads/2024/08/role-based-access-control-slide2.jpg" // Updated with actual image URL
  },

  {
    title: "Portfolio Website",
    description: "Personal website built with React",
    link: "https://github.com/miki2144/portfolio",
    image: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg" // Updated with actual image URL
  },

  {
    title: "Real-Time Telegram Application",
    description: "A telegram Bot",
    link: "https://github.com/miki2144/telegram-app",
    image: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/05/How-to-Add-a-Bot-in-Telegram.jpg?fit=602%2C372&ssl=1" // Updated with actual image URL
  },

  {
    title: "Flask Admin Based",
    description: "An admin-based Flask application.",
    link: "https://github.com/miki2144/Flask-Admin",
    image: "https://cdn.hackersandslackers.com/2020/02/flask-intro.jpg" // Updated with actual image URL
  },


  {
    title: "API Integration Product Management",
    description: "Product for integrating various APIs and displaying data.",
    link: "https://github.com/miki2144/Product_manage",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132560890/original/1d48e15e7b67d13e4721d03918d36485ec25494a/integrate-api-in-website-app-api-integration-and-development.jpg"
  },
  {
    title: "Traditional Gena Management System",
    description: "A traditional management system for Gena operations.",
    link: "https://github.com/miki2144/Traditional-gena-system",
    image: "https://ethiopianembassy.org/wp-content/uploads/2018/02/e3ef4446c24c2b9192ff481ba246ca12_XL.jpg"
  },
  {
    title: "Simple Game",
    description: "A simple game implemented in Python.",
    link: "https://github.com/miki2144/simple-Game",
    image: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg"
  },
];

const Home = () => {
  // Function to handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV; // Use the imported file
    link.download = "Woldemichael_Debesaw_CV.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
      setFormStatus("Your message has been sent successfully!");
    };
  
    return (
      <div className="contact-container">
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
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* <h1>I'm Woldemichael Debesaw</h1> */}
        </div>

        <div className="hero-details">
          <img
            src={profilePicture}
            alt="Woldemichael Debesaw"
            className="profile-img"
          />
          <h1>I'm Woldemichael Debesaw</h1> {/* Name placed after the image */}
          <p>
            I am a passionate full-stack software developer building robust,
            scalable, and interactive applications. I specialize in both
            frontend and backend technologies such as React, Node.js, Laravel,
            and PHP.
          </p>
      
          {/* Download My CV Button */}
          <button onClick={handleDownload} className="download-btn">
            Download My CV
          </button>
        </div>
      </section>

      {/* About Section */}
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
            <p>
              React, Node.js, PHP, Laravel, MySQL, HTML, CSS, JavaScript, Networking, 
              Cybersecurity, Django, Python
            </p>
            <button className="close-popup" onClick={togglePopup}>Close</button>
          </div>
        </div>
          )}
        </div>
      </div>

    {/* Skills Section */}
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
      <SiDjango size={40} /> {/* Updated to use the Django logo */}
      <h3>Django</h3>
      <p>Building robust web applications with Django, leveraging its powerful features for rapid development.</p>
    </div>
    <div className="skill-card">
      <SiPython size={40} /> {/* Updated to use the Python logo */}
      <h3>Python</h3>
      <p>Programming language known for its readability and efficiency, widely used in web development, data analysis, and machine learning.</p>
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

    {/* Projects Section */}
<div className="projects-container">
  <h2 className="projects-title">Projects</h2>
  <div className="projects-cards">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
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
           <Contact />

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Woldemichael Debesaw</p>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/miki2144"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/woldemichael-debesaw-966b10336"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yourfacebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@yourtiktok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-tiktok" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;