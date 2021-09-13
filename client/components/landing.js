import React from 'react'
import styled, { keyframes } from 'styled-components';

import Card from './card';

const Landing = ({ FadeIn }) => {
  const Intro = styled.h1`
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 1.5s;
    color: #262626;
    ${'' /* margin-top: 25px; */}
  `;
  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    ${'' /* grid-gap: 150px; */}
    background-color: #e3e3e3;
    min-height: 100vh;
    height: 100vh;
    ${'' /* margin-top: 50px; */}
    @media (max-width: 500px) {
      grid-template-rows: auto auto 300px;
      margin: auto;
      grid-gap: 60px;
    }
  `;
  const H2 = styled.h2`
    display: center;
    textAlign: center;
    font-size: 28px;
    margin: auto;
    color: #262626;
    animation: ${FadeIn} linear 4.0s;
    font-family: 'Abel', sans-serif;
    @media (max-width: 500px) {
      width: 350px;
      margin: auto
    }
  `;

  const Title = styled.h2`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-size: 36px;
    margin: auto;
    ${'' /* padding-top: 5%; */}
    color: #262626;
    animation: ${FadeIn} linear 4.0s;
    font-family: 'Abel', sans-serif;
    width: 500px;
    @media (max-width: 500px) {
      width: 350px;
      margin: auto
    }
  `;

  const A = styled.a`
    color: #262626;
    text-decoration: none;
    &:hover {
      color: #8CB9FF;
      font-size: 28px;
      transition: 0.5s;
    }
    @media (max-width: 500px) {
      color: #8CB9FF;
    }
  `;
  return (
    <Body>
      <Title>
          Software Engineer.
      </Title>
      <Card />
    </Body>
  )
}

export default Landing;