import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Landing from './landing';

const Page = ({ page , display, repos, FadeIn }) => {
  if (page === 'Projects' && display === true) {
    // need to create Projects component and pass here
    return <Projects repos={repos}/>;
  } else if (page === 'Contact' && display === true) {
    // need to create Media component and pass here
    return <Contact FadeIn={FadeIn}/>;
  }
  else {
    return <Landing FadeIn={FadeIn}/>;
  }
}

export default Page;