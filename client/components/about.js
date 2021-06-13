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
    grid-template-columns: auto auto;
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
    justify-content: space-evenly;
    list-style-type: none;
  `

  const LI = styled.li`
    width: 250px;
    margin: 10px;
    border: 2px solid dodgerblue;
    border-radius: 25%;
    padding: 30px;
  `;

  return (
    <div>
      <Details>Hi, I'm Abraham</Details>
      <Body>
      {/* dummy lorem ipsum data to create display */}
      <UL>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
        <LI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam bibendum velit mattis porta. Quisque eget maximus ipsum. Quisque imperdiet, ex a commodo tempor, dui nisi luctus ante, eget posuere ex arcu eu quam. Nam ut ex ut erat tempor pulvinar vel ut arcu. Integer nunc magna, lacinia quis scelerisque non, placerat nec erat. Vivamus rhoncus efficitur convallis. Sed accumsan mattis tortor a euismod. Ut ac nisl blandit, posuere nisl eu, posuere sem. Pellentesque vel mattis eros. Fusce laoreet ipsum enim, id volutpat nisi volutpat a. Nunc faucibus sed nibh eget vehicula.</LI>
      </UL>

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