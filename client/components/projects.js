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
  const coffeeMasterTechUsed = ["Swift", "SwiftUI", "Cocoapods", "Alamofire", "API"]

  return (
    <div>
      <section id="projects">
        <h2>Projects</h2>
        <article>
          <div className="text">
            <h3>Quotes</h3>
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
        <article>
          <div className='text'>
            <h3>CoffeeMaster</h3>
            <p className='blackbox'>
              <a
              href='https://github.com/abrahamesparza/swift-cm-app'
              rel='noreferrer'
              target='_blank'>CoffeeMaster, </a>
            a simple iOS app that allows users to scroll through a list of products, add to cart and checkout.
            </p>
            <h4>Technologies used</h4>
            <ul>
                {coffeeMasterTechUsed.map(item => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>
          <div className='video'>
            <img
            src="https://user-images.githubusercontent.com/21293669/238452285-6515ed21-3ad5-4bf9-9653-bbdadfff67f1.gif"
            alt='coffee masters gif'/>
          </div>
        </article>
      </section>
      <div className="gradient"></div>
    </div>
  );
};

export default Projects;
