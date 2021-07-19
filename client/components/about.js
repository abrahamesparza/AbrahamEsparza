import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaDumbbell, FaRunning, FaBookReader, FaHiking, FaGuitar, FaSwimmer, FaBaseballBall } from 'react-icons/fa';

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
    grid-template-rows: auto auto auto 300px;
    background-color: #262626;
    @media (max-width: 500px) {
      grid-template-rows: auto auto auto 300px;
    }
  `;

  const Main1 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
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
    display: flex;
    flex-flow: row wrap;
    flex-direction: flex-start;
    justify-content: space-around;
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
    display: flex;
    flex-flow: row wrap;
    flex-direction: flex-start;
    justify-content: space-between;
    margin: auto;
    ${'' /* padding-right: 10px; */}
    list-style: none;
    ${'' /* width: 700px;
    height: */}
    @media (max-width: 500px) {
      ${'' /* width: 385px; */}
      margin-right: 25px;
    }
    background-color: #6d74fc;
  `;
  const LI = styled.li`
    display: flex;
    flex-flow: row wrap;
    flex-direction: flex-start;
    justify-content: space-evenly;
    paddinng: 10%;
  `
  let icons = [<FaDumbbell style={{fontSize: '48px', color: '#F0F0F0'}}/>,
               <FaRunning style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaBookReader style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaHiking style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaBaseballBall style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaGuitar style={{fontSize: '48px', color: '#F0F0F0'}}/>,
                <FaSwimmer style={{fontSize: '48px', color: '#F0F0F0'}}/>
              ]
  return (
    // <div style={{backgroundColor: '#262626'}}>
    <Body>
      <Details>Hi, I'm Abraham</Details>
      <Main1>
        <Details>
          Full-time Father & Husband<br/>
          Part-time T-Ball Coach<br/>
        </Details>
        </Main1>
        <Details>
          Hobbies
        </Details>
        {/* need to refactor this code */}
        <Services>
          {/* <UL>
            <LI> */}
              {icons.map(icon => (
                icon
              ))}
            {/* </LI>
          {/* </UL> */}
        </Services>
      </Body>
  )
}

export default About;