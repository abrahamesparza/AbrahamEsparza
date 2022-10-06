import React from 'react'
import styled, { keyframes } from 'styled-components';
import About from './about';


const Landing = ({ FadeIn }) => {
  const Body = styled.div`
    display: grid;
    grid-template-rows: 25px 250px 50px 100px 150px;
    ${'' /* background-color: #e3e3e3; */}
    animation: ${FadeIn} linear 1.5s;
    min-height: 100vh;
    height: 100vh;
    width: 75vw;
    @media (max-width: 390px) {
      display: grid;
      grid-template-rows: 25px 200px 50px auto auto;
      width: 90vw;
      height: 100vh;
  }
  `;
  const Introduction = styled.p`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 20px;
    color: #262626;
    font-family: 'Abel', sans-serif;
    padding-left: 5vw;
  `;
  const AboutText = styled.h2`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: #262626;
  font-family: 'Abel', sans-serif;
  padding-left: 5vw;
  ${'' /* @media (max-width: 390px) {
    width: 90vw;
    height: 90vh;
  } */}
`;
  const atrStyle = {
    color: '#5dcfff',
    textDecoration: 'none'
  }
  return (
    <Body>
      <Introduction>
        Abraham Esparza
      </Introduction>
      <Introduction>
          Software Engineer | Building at&nbsp;<a style={atrStyle} href="https://winnie.com">Winnie</a>
      </Introduction>
      <AboutText>About</AboutText>
      <Introduction>
        Abraham focuses on backend programming at Winnie. He values contributing clean code, learning where he can improve and taking appropriate actions to do so.
      </Introduction>
      <Introduction>
        He began his coding journey by utilzing online resources to gain a basic grasp of how to code and how programs work. He then joined Hack Reactor, a rigorous remote program where he learned more advanced topics, resulting in the ability to develop full stack applications from scratch.
      </Introduction>
      <Introduction>
        Although his studies were focused on writing in Javascript; Abraham took initiative to learn a new language that would fit his current position and is now writing in Python.
      </Introduction>
    </Body>
  )
}

export default Landing;