import React, { useEffect, useState } from 'react';


const Projects = () => {
  const quotesTechUsed = [
    "React",
    "MongoDB",
    "Node.js",
    "Express",
    "Bcrypt",
    "JWT",
  ];
  const breweryTechUsed = ["React", "Node", "Express", "Google Books API"];

  return (
    <div>
      <section id="projects">
        <h2>Projects</h2>
        <article>
          <div className="text">
            <h3>Quote Generator</h3>
            <p className="blackbox">
              Access thousands of{" "}
              <a
                href="https://github.com/abrahamesparza/Quote-Generator"
                rel="noreferrer"
                target="_blank"
              >
                inspirational quotes
              </a>{" "}
              with the click of a button. Save your favorite quotes for easy
              viewing.
            </p>
            <h4>Technologies used</h4>
            <ul>
              {quotesTechUsed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="image">
            <img
              src="https://abrahamesparza.github.io/imgs/quoteGenerator.gif"
              alt="unsplash address"
            />
          </div>
        </article>
        <article>
          <div className="text">
            <h3>Brewery Locator</h3>
            <p className="blackbox">
              <a
                href="hhttps://github.com/abrahamesparza/brewery-finder"
                rel="noreferrer"
                target="_blank"
              >
                Locate a brewery
              </a>{" "}
              nearby! Filter your results by using either a zipcode, or a city
              name.
            </p>
            <h4>Technologies used</h4>
            <ul>
              {breweryTechUsed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="image">
            <img
              src="https://abrahamesparza.github.io/imgs/brew-app.gif"
              alt="unsplash address"
            />
          </div>
        </article>
      </section>
      <div className="gradient"></div>
    </div>
  );
};

export default Projects;
