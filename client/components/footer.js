import React from 'react'
import styled, { keyframes } from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaGithub, FaMedium, FaFilePdf, FaFile } from "react-icons/fa";
import pdf from './pdf/AbrahamEsparza.pdf'

const Footer = () => {

  const Foot = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  height: 100px;
  padding-top: 100px;
  background-color: #C6C6C6
`;

  return (
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
      <a src={pdf} type='application/octet-stream' download="AbrahamEsparza_Resume" target='_blank'>
        <FaFilePdf style={{fontSize: '24px', color: '#262626' }}/>
      </a>
    </Foot>
  )
}

export default Footer;