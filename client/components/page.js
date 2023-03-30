import React from 'react';
import Projects from './projects';
import Landing from './landing';

const Page = ({ page , display, repos, FadeIn }) => {
  if (page === 'Portfolio' && display === true) {
    return <Projects repos={repos}/>;
  }
  else {
    return <Landing FadeIn={FadeIn}/>;
  }
}

export default Page;