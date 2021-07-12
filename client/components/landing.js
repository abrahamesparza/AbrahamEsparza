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
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { IconName } from "react-icons/si";

const Landing = ({ FadeIn }) => {

  const Intro = styled.h1`
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
    color: #262626;
  `;
  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 300px 300px 300px 100px;
    color: #262626;
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
    color: #262626;
  `;
  const Main1 = styled.div`
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
    color: #262626;
  `;
  const Main2 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;
  const Footer = styled.footer`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
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
        <Main1>
          <Details>
            Div for different bodies of text describing myself
          </Details>
        </Main1>
        <Main2>
          <Details>
            Div for maybe image carousel ?
          </Details>
        </Main2>
        <Footer>
          <a href='https://www.linkedin.com/in/abrahamesparza/' target='_blank'><FaLinkedinIn style={{fontSize: '24px', color: '#2867B2' }}/></a>
          <FaGithub style={{fontSize: '24px', color: '211F1F' }}/>
          <FaTwitter style={{fontSize: '24px', color: '1DA1F2' }}/>
          <FaInstagram style={{fontSize: '24px', color: '#5851db' }}/>
        </Footer>
      </Body>
    </div>
  )
}

export default Landing;