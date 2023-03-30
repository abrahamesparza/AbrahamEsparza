import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaGithub, FaMedium } from "react-icons/fa";

const Footer = () => {

  const Body = styled.div`
    display: grid;
    grid-template-rows: auto;
  `

  const Foot = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  height: 80px;
  padding-top: 50px;
  @media (max-width: 390px) {
    padding-top: 10%;
  }
`;

  return (
    <Body>
      <Foot>
        <a href='https://www.linkedin.com/in/abrahamesparza/' target='_blank'>
          <FaLinkedinIn style={{fontSize: '24px', color: '#2867B2' }}/>
        </a>
        <a href='https://github.com/abrahamesparza' target='_blank'>
          <FaGithub style={{fontSize: '24px', color: '#211F1F' }}/>
        </a>
        <a href='https://abrahammesparza.medium.com/' target='_blank'>
          <FaMedium style={{fontSize: '24px', color: '#262626' }}/>
        </a>
        <a href='https://www.instagram.com/abrahammesparza/' target='_blank'>
          <FaInstagram style={{fontSize: '24px', color: '#5851db' }}/>
        </a>
      </Foot>
    </Body>
  )
}

export default Footer;