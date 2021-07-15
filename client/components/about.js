import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from './footer.js';
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
    grid-template-rows: auto 500px auto;
    background-color: #262626;
    @media (max-width: 500px) {
      grid-template-rows: auto 200px auto;
    };
    @media (max-width: 900px) {
      grid-template-rows: auto 200px auto;
    }

  `;
  const Main1 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media (max-width: 500px) {
      overflow: scroll;
      width:400px;
      height: 600px;
      margin-left: 7px;
      margin-right:5px;
    }
    @media (min-width: 1400px) {
      grid-template-rows: auto 500px auto;
      background-color:red;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
    }
  `;
  const Details = styled.p`
    display: center;
    text-align: center;
    font-size: 24px;
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
        {/* </Main1>
        <Main2> */}
          <Details>
            My journey as a Software Engineer began in 2016, as I began to dabble with<br/>HTML, CSS, and Javascript on Codecademy.
            Codecademy is the platform I<br/>used to establish my fundamental skills of web development.
            I wanted a<br/>challenge, so after completing Codecademy and resources from other online <br/>platforms, I decided to take on a more challenging route. It was at this point in my<br/>life where I decided I was going to join Hack Reactor. Being admitted to Hack<br/>
            Reactor was not a walk in the park. Prior to being accepted, I failed two interviews.<br/>Long story short, I persevered through all the obstacles I encountered in my personal<br/>life and on my journey to becoming a software engineer. From logging 'Hello, World'<br/>to building full stack web apps utilizing HTML, CSS, VanillaJS,<br/>ReactJS, NodeJS, ExpressJS, MongoDB/MySQL, Webpack, Babel, Bcrypt, JWT, and more.
          </Details>
        </Main1>
        <Footer />
      </Body>
    </div>
  )
}

export default About;