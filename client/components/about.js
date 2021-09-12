import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaDumbbell, FaRunning, FaBookReader, FaHiking, FaGuitar, FaSwimmer, FaBaseballBall, FaChild, FaDev } from 'react-icons/fa';

const About = ({ FadeIn }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    //blank for now
    // getInstagram();
  }, []);

  /*
    page goal:
      help people get an idea of who i am

  */

  // instagram api req code
  // const getInstagram = () => {
  //   axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJYVlJ5VXhBZAjgtcEhoNFhtTzBOY3BJdHMybzV4ZAS1hX2dJcjM5bktDMURpWUplS09HT1pXVHlEeDJnYU00RGFuUlgydURKWG5GVmlDYmJMVWxwanlFVzFCeXdOc0xCRUVUY2Vid0pXNXhnc1g4LUhBY2o5ZA1ZARZATNJ`
  // )
  //   .then(res => {
  //     let data = res.data.data
  //     console.log('succesful get', data);
  //     setFeed(data);
  //   })
  //   .catch(err => console.log('err on IG req', err));
  // }

  const Body = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 400px 200px;
    ${'' /* grid-template-rows: repeat(3, 1fr); */}
    @media (max-width: 500px) {
      ${'' /* grid-template-columns: repeat(1,) */}
      ${'' /* grid-template-rows: auto 300px 100px; */}
    }
  `;

  const Main1 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    animation: ${FadeIn} linear 3s;
    @media (max-width: 500px) {
      margin: auto;
      ${'' /* width: 385px; */}
    }
    @media (min-width: 1400px) {
      grid-template-rows: auto 300px auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 20px;
    }
  `;

  const Intro = styled.h1`
    display: center;
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
    color: #262626;
  `

  const Details = styled.p`
    display: center;
    text-align: center;
    font-size: 24px;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
    color: #262626;
  `;

  const UL = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    margin: auto;
    ${'' /* overflow: scroll; */}
    ${'' /* margin: 10% 35% 0% 25%; */}
    list-style: none;
    width: 900px;
    @media (max-width: 500px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto auto auto;
      width: 300px;
      overflow: scroll;
      height: 560px;
    }
  `;
  const LI = styled.li`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #262626;
    font-size: 20px;
    margin: 5%;
    padding: 5%;
    border: 1px solid black;
    background-color: #6A507C;
    border-radius:  25% 10%;
    font-family: 'Abel', sans-serif;
    width: 200px;
    @media (max-width: 500px) {
      flex-flow: column wrap;
      ${'' /* margin-left: 15%; */}
      width: 200px;
    }
  `
  return (
    // <div style={{backgroundColor: '#262626'}}>
    <Body>
      <Intro>Hi, I'm Abraham</Intro>
        <Main1>
          <UL>
            <LI>
              Full Time Father <FaChild style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
            <LI>
              Full Stack Developer <FaDev style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
            <LI>
              Daily Strength Trainer.<FaDumbbell style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
          {/* </UL> */}
          {/* <UL> */}
            <LI>
              Weekend T-Ball Coach.<FaBaseballBall style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
            <LI>
              Avid Reader.<FaBookReader style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
            <LI>
              Meditative Runner.<FaRunning style={{fontSize: '24px', color: '#F0F0F0', margin: 'auto'}}/>
            </LI>
          </UL>
        </Main1>
      </Body>
  )
}

export default About;