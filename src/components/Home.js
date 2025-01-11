import React from "react";
import "./Home.css";
import profilePicture from "../assets/profile-picture.jpg";
import myCV from "../assets/My_cv_documentation.pdf"; // Import the PDF file
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>I'm Woldemichael Debesaw</h1>
        </div>

        <div className="hero-details">
          <img
            src={profilePicture}
            alt="Woldemichael Debesaw"
            className="profile-img"
          />
          <p>
            I am a passionate full-stack software developer building robust,
            scalable, and interactive applications. I specialize in both
            frontend and backend technologies such as React, Node.js, Laravel,
            and PHP.
          </p>
          <h2>About Me</h2>
        <p>I'm a software developer.</p>

        {/* Download My CV Button */}
        <button onClick={handleDownload} className="download-btn">
          Download My CV
        </button>
        </div>
      </section>

    

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