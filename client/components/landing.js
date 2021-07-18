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
import Footer from './footer.js';
import { FaLightbulb } from 'react-icons/fa';

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
    grid-template-rows: auto 250px 150px;
    background-color: #262626;
    @media (max-width: 500px) {
      grid-template-rows: auto 300px 200px;
      margin: auto;
    }
  `;
  const H2 = styled.h2`
    ${'' /* display: center;
    text-align: center; */}
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-size: 24px;
    ${'' /* width: 600px; */}
    margin: auto;
    color: #F0F0F0;
    animation: ${FadeIn} linear 4.0s;
    font-family: 'Abel', sans-serif;
    @media (max-width: 500px) {
      width: 350px;
      margin: auto
    }
  `;
  const A = styled.a`
    color: #F0F0F0;
    text-decoration: none;
    &:hover {
      color: #8CB9FF;
      font-size: 32px;
      transition: 0.5s;
    }
    @media (max-width: 500px) {
      color: #8CB9FF;
    }
  `;
  // const UL = styled.ul`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-evenly;
  //   list-style: none;
  // `;
  // const LI = styled.li`
  //   font-family: 'Abel', sans-serif;
  //   color: #F0F0F0;
  //   font-size: 24px;
  //   padding-bottom: 25px;
  // `;
  return (
    <div>
    <Body>
      <Intro>
        Converting ideas <FaLightbulb style={{color: '#FFF57A'}}/> into a digital experience.
      </Intro>
        <H2>
          {/* <h4 style={{display: 'center', textAlign: 'center', fontSize: '20px', fontFamily: 'Abel, sans-serif', color: '#F0F0F0', paddingTop: '50px'}}> */}
            Software engineer with experience in developing Full Stack Applications
            from scratch using the MERN stack.
          {/* </h4> */}
        </H2>
        <H2>
          <A href='mailto:abrahamesparza.dev@gmail.com'>
            Send me an email.
          </A>
        </H2>
        <Footer/>
      </Body>
    </div>
  )
}

export default Landing;