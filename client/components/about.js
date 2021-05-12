import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AutomaticPrefetchPlugin } from 'webpack';

const About = ({ FadeIn }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    //blank for now
    getInstagram();
  }, []);

  const getInstagram = () => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJXVmpMaURrV1A3QWUxSUFEV3hDWEdzSkhsZA3JQNWpXNTAtZA2xiVkZADNG1nVWlDaUdzZAnN4eFRfdVA5ZAkZAfTGJzZA0w2THFzaDJ2cmI5QUFydTR4X1ZAJOGtTcG50alhjRU5tMHJaUlFnWHJBbERCcWpZAN3JBbTdmalhN'
  )
    .then(res => {
      let data = res.data.data
      console.log('succesful get', data);
      setFeed(data);
    })
    .catch(err => console.log('err on IG req', err));
  }

  const Body = styled.div`
    display: grid;
    grid-template-columns: auto auto;
  `
  const Details = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `;
  console.log('feed data', feed);
  return (
    <div>
      <Details>About</Details>
      <Body>
        <ul style={{listStyleType: 'none'}}>{feed.map(data => {
         return (
            <li>
            <img style={{display: 'block', width: '540px', height: '540px', marginLeft: 'auto', marginRight: 'auto'}} src={data.media_url} /><br/>
            <p style={{textAlign: 'center'}}>{data.caption}</p>
            </li>
         )
        })}
        </ul>
      </Body>
    </div>
  )
}

export default About;