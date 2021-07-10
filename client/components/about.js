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
  `
  const Details = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `;

  const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
  `

  const LI = styled.li`
    display: center;
    textAlign: center;
    width: 500px;
    margin: 10px;
  `;

  let Interests = [
    {
      id: 0,
      title: '',
      src: ''
    }
  ];

  return (
    <div>
      <Details>Hi, I'm Abraham</Details>
      <Body>
        <UL>
          <LI>
            I am a Software Engineer with experience developing full stack applications from scratch using MERN Stack, and Webpack to compile my JavaScript code.<br />
            I am currently seeking Frontend Software Engineer employment opportunites.
          </LI>
        </UL>
          {/* Display blogs of interests? or blogs I write? */}

        {/* instagram display code */}
        {/* <ul style={{listStyleType: 'none'}}>{feed.map(data => {
         return (
            <li>
            <img style={{display: 'block', width: '540px', height: '540px', marginLeft: 'auto', marginRight: 'auto'}} src={data.media_url} /><br/>
            <p style={{textAlign: 'center'}}>{data.caption}</p>
            </li>
         )
        })}
        </ul> */}
      </Body>
    </div>
  )
}

export default About;