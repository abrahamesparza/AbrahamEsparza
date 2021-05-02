import React from 'react';
import styled, { keyframes } from 'styled-components';

const About = () => {
  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  `;
  const Details = styled.h3`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    color: #262626;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 5s;
  `;
  return (
    <div>
      <Details>this is where I will write info about myself.</Details>
    </div>
  )
}

export default About;