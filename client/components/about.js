import React from 'react';
import styled from 'styled-components';

const About = ({ FadeIn }) => {

  const Details = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s
  `;
  return (
    <div>
      <Details>About</Details>
    </div>
  )
}

export default About;