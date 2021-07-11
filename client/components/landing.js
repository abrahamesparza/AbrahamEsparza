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
import { AiOutlineLinkedin } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Landing = ({ FadeIn }) => {

  const Intro = styled.h1`
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `;
  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 300px 300px 300px 100px;
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
    text-align: center;
    font-size: 28px;
    ${'' /* width: 500px; */}
    margin: 10px;
    padding-top: 25px;
  `;
  const About = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;
  const Details = styled.p`
    display: center;
    text-align: center;
    fonnt-size: 18px;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `
  return (
    <div>
    <Body>
      <Intro>
        Full Stack Developer
      </Intro>
        <UL>
          <LI>
            Developing full stack applications using MERN.<br/><br/><br/><br/>
            Actively seeking Software Engineer employment opportunites.
          </LI>
        </UL>
        <About>
          <Details>
            Test text
          </Details>
        </About>
        <div>
          <Details>test text 2</Details>
        </div>
        <div>
          <FaTwitter/>
          <FaLinkedinIn/>
        </div>
      </Body>
    </div>
  )
}

export default Landing;