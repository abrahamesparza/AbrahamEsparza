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
import { FaLinkedinIn, FaInstagram, FaGithub, FaMedium, FaLightbulb } from "react-icons/fa";

const Landing = ({ FadeIn }) => {
  const Intro = styled.h1`
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 1.5s;
    color: #F0F0F0;
  `;
  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 200px 200px auto;
    ${'' /* color: #F0F0F0; */}
    background-color: #262626;
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
  `;
  const LI = styled.li`
    display: center;
    text-align: center;
    font-size: 28px;
    font-family: 'Abel', sans-serif;
    margin: 10px;
    padding-top: 25px;
    color: #F0F0F0;
    animation: ${FadeIn} linear 3.5s;
    padding-top: 50px;
  `;
  const H2 = styled.h2`
    display: center;
    text-align: center;
    font-size: 28px;
    ${'' /* width: 500px; */}
    margin: 10px;
    padding-top: 25px;
    color: #F0F0F0;
    animation: ${FadeIn} linear 5.0s;
    font-family: 'Abel', sans-serif;
  `;
  const Main1 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;
  const Details = styled.p`
    display: center;
    text-align: center;
    font-size: 28px;
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
    height: 100px;
    padding-top: 100px;
    background-color: #C6C6C6
  `;
  const A = styled.a`
    color: #F0F0F0;
    text-decoration: none;
    &:hover {
      color: #8CB9FF;
      font-size: 32px;
      transition: 0.5s;
    }
  `
  return (
    <div>
    <Body>
      <Intro>
        Full Stack Developer
      </Intro>
        <UL>
        <LI>
          Converting ideas <FaLightbulb style={{color: '#FFF57A'}}/> into a digital experience.
        </LI><br/>
          {/* <LI>
            Developing full stack applications using MERN.<br/><br/><br/><br/>
            Actively seeking Software Engineer employment opportunites.
          </LI> */}
        </UL>
          <H2>
            <A href='mailto:abrahamesparza.dev@gmail.com'>
              Available for hire.
            </A>
          </H2>
        <Footer>
          <a href='https://www.linkedin.com/in/abrahamesparza/' target='_blank'>
            <FaLinkedinIn style={{fontSize: '24px', color: '#2867B2' }}/>
          </a>
          <a href='https://github.com/abrahamesparza' target='_blank'>
            <FaGithub style={{fontSize: '24px', color: '#211F1F' }}/>
          </a>
          <a href='https://abrahammesparza.medium.com/' target='_blank'>
            <FaMedium style={{fontSize: '24px', color: '#262626' }}/>
          </a>
          <a href='https://www.instagram.com/abrahammesparza/' target='_blank'>
            <FaInstagram style={{fontSize: '24px', color: '#5851db' }}/>
          </a>
        </Footer>
      </Body>
    </div>
  )
}

export default Landing;