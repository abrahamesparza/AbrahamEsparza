import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    grid-template-rows: 300px 300px 300px;
    background-color: #262626
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
    color: #F0F0F0;
  `;

  return (
    <div style={{backgroundColor: '#262626'}}>
      <Details>Hi, I'm Abraham</Details>
      <Body>
      <Main1>
          <Details>
            Prior to writing code, I spent most of my time photographing concerts,<br/>nature, people, being creative capturing long exposure images, and producing music.<br/>
            I have a natural force within me that wants to create, so create is what I do.<br/>
            I have never been one to let barriers stop me from doing something new.<br/>
            Whether the barrier is a skill I lack, or a tool I don't have, I always find a way.<br/>
          </Details>
        </Main1>
        <Main1>
          <Details>
            My journey as a Software Engineer began in 2016, as I began to dabble with<br/>HTML, CSS, and Javascript on Codecademy.<br/>
            Codecademy is the platform I used to build the fundamentals of web development
          </Details>
        </Main1>
      </Body>
    </div>
  )
}

export default About;