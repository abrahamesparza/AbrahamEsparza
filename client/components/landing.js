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
    grid-template-rows: 300px 200px auto;
    ${'' /* color: #F0F0F0; */}
    background-color: #262626;
  `;
  const H2 = styled.h2`
    display: center;
    text-align: center;
    font-size: 28px;
    ${'' /* width: 500px; */}
    margin: 10px;
    padding-top: 25px;
    color: #F0F0F0;
    animation: ${FadeIn} linear 4.0s;
    font-family: 'Abel', sans-serif;
  `;
  const A = styled.a`
    color: #F0F0F0;
    text-decoration: none;
    &:hover {
      color: #8CB9FF;
      font-size: 32px;
      transition: 0.5s;
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
      {/* <Intro>
        Full Stack Developer
      </Intro> */}
        <H2>
          Converting ideas <FaLightbulb style={{color: '#FFF57A'}}/> into a digital experience.
          <h4 style={{display: 'center', textAlign: 'center', fontSize: '20px', fontFamily: 'Abel, sans-serif', color: '#F0F0F0', paddingTop: '70px'}}>
            I am a software engineer with experience in developing full stack applications<br/>
            from scratch using the MERN stack.
          </h4>
        </H2>
        <H2>
          <A href='mailto:abrahamesparza.dev@gmail.com'>
            Available for hire.
          </A>
        </H2>
        <Footer/>
      </Body>
    </div>
  )
}

export default Landing;