import React from 'react'
import styled from 'styled-components';

const Landing = ({ FadeIn }) => {
  const Body = styled.div`
    display: grid;
    grid-template-rows: 15% 10% 7% 7% 10%;
    animation: ${FadeIn} linear 1.5s;
    min-height: 100vh;
    height: 100vh;
    width: 75vw;
    @media (max-width: 390px) {
      display: grid;
      grid-template-rows: auto auto auto auto auto;
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
  const atrStyle = {
    color: '#5dcfff',
    textDecoration: 'none'
  }
  return (
    <Body>
        <Introduction>
            SWE | Formerly building at&nbsp;<a style={atrStyle} href="https://winnie.com">Winnie</a>
        </Introduction>
        <Introduction>
          Hi, I'm Abraham Esparza
        </Introduction>
        <Introduction>
          As a skilled full-stack developer, I possess a diverse range of technical abilities and am proficient in both front-end and back-end development
        </Introduction>
        <Introduction>
          I am proficient in front-end technologies, and have created user-friendly and intuitive interfaces utilizing Javascript, HTML, CSS, React, and Next.js
        </Introduction>
        <Introduction>
          In terms of back-end development, I have designed efficient and secure server-side logic using Node.js and Python, and incorporated data storing with databases such as MySQL, DynamoDB, and MongoDB
        </Introduction>
    </Body>
  )
}

export default Landing;