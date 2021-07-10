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
import ocean from '../../background/self-avenger.jpeg';

const Landing = ({ FadeIn }) => {

  const Intro = styled.h1`
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `;
  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    animation: ${FadeIn} linear 3.5s;
  `;
  const LI = styled.li`
    display: center;
    textAlign: center;
    font-size: 18px;
    width: 500px;
    margin: 10px;
  `;
  return (
    <div>
    <Body>
      <Intro>
        Full Stack Developer
      </Intro>
        <UL>
          <LI>
            Software Engineer developing full stack applications using MERN.<br/><br/>
            Actively seeking Software Engineer employment opportunites.
          </LI>
        </UL>
      </Body>
    </div>
  )
}

export default Landing;