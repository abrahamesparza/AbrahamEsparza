// build landing page for website
/*
ideas
  image of someone or something that inspires me ?
  unsplash techie background ?
  interactive game ?
  css breathing effect with
    left to right transition list of
      my values ?
      my skills ?

*/
import React from 'react'
import styled, { keyframes } from 'styled-components';
import ocean from '../../background/oceanbg.jpeg';

const Landing = ({ FadeIn }) => {

  const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 500px;
    animation: ${FadeIn} linear 3s;
  `
  return (
    <div>
      <Image src={ocean} />
    </div>
  )
}

export default Landing;