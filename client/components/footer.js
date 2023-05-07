import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <h2>Abraham Esparza &middot; Software Engineer</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/abrahamesparza/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abrahamesparza"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:abrahamesparza.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2023 Abraham Esparza. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
