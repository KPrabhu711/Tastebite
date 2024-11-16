import React from "react";
import "./footer.css"; // Import the CSS for styling
import logo from "../../assets/Logo.png"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Motto Section */}
      <div className="footer-logo-motto">
        <img src={logo} alt="Tastebite Logo" className="footer-logo" />
        <p className="footer-motto">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment."
        </p>
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Tastebite</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow</h4>
          <ul>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#youtube">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
