import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaDumbbell, FaRunning, FaBookReader, FaHiking, FaGuitar, FaSwimmer, FaBaseballBall, FaChild, FaDev } from 'react-icons/fa';
import img from './image/albert_einstein.jpeg';

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
    background-color: #262626;
    @media (max-width: 500px) {
      grid-template-rows: auto 500px 100px;
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
      font-size: 20px
      color: green;
    }
  `;

  const Services = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  `

  const Details = styled.p`
    display: center;
    text-align: center;
    font-size: 24px;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
    color: #F0F0F0;
  `;

  const UL = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    margin: auto;
    list-style: none;
    width: 900px;
    @media (max-width: 500px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto auto auto;
      width: 300px;
    }
  `;
  const LI = styled.li`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    color: #F0F0F0;
    font-size: 20px;
    margin: auto;
    padding: 5%;
    font-family: 'Abel', sans-serif;
    @media (max-width: 500px) {
      flex-flow: column wrap;
      margin-left: 15%;
      width: 250px;
    }
  `

  const QuoteBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${FadeIn} linear 3s;

  `;

  let icons = [
               <FaRunning style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaSwimmer style={{fontSize: '48px', color: '#F0F0F0'}}/>
              ]
  return (
    // <div style={{backgroundColor: '#262626'}}>
    <Body>
      <Details>Hi, I'm Abraham</Details>
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
          </UL>
          <UL>
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
        <QuoteBlock>
            <Details>
              "Life is like a bicycle. To keep your balance you must keep moving."<br/>- Albert Einstein
            </Details>
          </QuoteBlock>
      </Body>
  )
}

export default About;