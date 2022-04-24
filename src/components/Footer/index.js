import React from "react";
import "./footer.css";
import github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";
import linkedIn from "../../assets/images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:chotansharma@yahoo.com" target="_blank" rel="noreferrer">
        <img src={email} alt="Email Icon" className="contact-img" />
      </a>
      <a href="https://github.com/ChotanSharma" target="_blank" rel="noreferrer">
        <img src={github} alt="Github Icon" className="contact-img" />
      </a>
      <a
        href="https://www.linkedin.com/in/chotan-sharma/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn Icon" className="contact-img" />
      </a>
      
    </footer>
  );
}

export default Footer;