import React from 'react';

import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";

const App = () => {
  return (
    <div>
       <Navbar />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;