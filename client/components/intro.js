import React from "react";

const Intro = () => {
    return (
      <div>
        <section id="intro">
          <p className="name">
            Hi, my name is <span>Abraham Esparza</span>
          </p>
          <h2 className="intro-statement">I am a Software Engineer.</h2>
          <p className="intro-statement">
            In search of my next role with a specialization in Backend or
            Full-Stack Development.
          </p>
          <p className="intro-statement">
            Currently building MVPs for my portfolio and solving problems on{" "}
            <a href="https://www.codewars.com/users/abrahamesparza">Codewars</a>.
          </p>
        </section>
        <div className="gradient"></div>
      </div>
    );
  };
  
  export default Intro;
  