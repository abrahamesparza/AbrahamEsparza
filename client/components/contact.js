import React from 'react';
import styled from 'styled-components';


const Contact = ({FadeIn}) => {

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
  `;
  const LI = styled.li`
    display: center;
    textAlign: center;
    ${'' /* width: 500px;
    margin: 10px; */}
  `;
  return (
    <div>
      <Details>Contact</Details>
      <UL>
        <LI>
          LinkedIn
          Instagram
          Twitter
          Gmail
        </LI>
      </UL>
    </div>
  )
}

export default Contact;