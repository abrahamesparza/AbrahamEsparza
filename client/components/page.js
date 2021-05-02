import React from 'react';
import About from './about';
import Projects from './projects';
import Media from './media';

const Page = ({ page , display }) => {
  if (page === 'About' && display === true) {
    return <About />
  } else if (page === 'Projects' && display === true) {
    // need to create Projects component and pass here
    return <Projects />;
  } else if (page === 'Media' && display === true) {
    // need to create Media component and pass here
    return <Media />;
  }
  else {
    return null;
  }
}

export default Page;