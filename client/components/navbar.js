import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <FontAwesomeIcon icon={faTerminal} />
              <span>A | E</span>
            </a>
          </h1>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abrahamesparza/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abrahamesparza"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li className="button">
          <a
            href="https://docs.google.com/document/d/1nj6ZI1nyQ8KYrhwN5uBc5oN31Dc63uiYxl9jQ3rT1WQ/edit?usp=sharing"
            className="resume-text"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
