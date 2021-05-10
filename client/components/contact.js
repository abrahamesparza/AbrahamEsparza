import React from 'react';
import styled from 'styled-components';


const Contact = ({FadeIn}) => {

  const Details = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `;
  return (
    <div>
      <Details>Contact</Details>
    </div>
  )
}

export default Contact;