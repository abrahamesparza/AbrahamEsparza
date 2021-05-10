import React from 'react';
import styled from 'styled-components';

const About = ({ FadeIn }) => {

  const Body = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
  `
  const Details = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `;
  let items = [1, 2, 3]
  let items2 = ['im item 1','im item 2','im item 3']
  let items3 = [
    {
      name: 'Father & Husband',
      description: 'Proud husband to my partner of 7 years'
    },
    {
      name: 'Running & Worknig Out',
      description: 'I enjoy the mental clarity and feeling of growth running and working out provide me.'
    },
    {
      name: 'Photograph',
      description: 'I love capturing photos in the moment'
    }
  ]
  return (
    <div>
      <Details>About</Details>
      <Body>
        {items.map(item => (
          <p style={{textAlign: "center", animation: `$FadeIn linear 3s`}}>{item}</p>
        ))}
        {items2.map(item => (
          <p style={{textAlign: "center", animation: `$FadeIn linear 3s`}}>{item}</p>
        ))}
        {items3.map(item => (
          <p style={{textAlign: "center", animation: `$FadeIn linear 3s`}}>{item.name}<br/>{item.description}</p>
        ))}
      </Body>
    </div>
  )
}

export default About;