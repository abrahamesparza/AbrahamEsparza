import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = ({handleDisplay, displayHome, FadeIn}) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {

  }, []);

  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false)
    }
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 25px 0px 25px;
    background-color: #262626;
  `;
  const Title = styled.h1`
    font-size: 48px;
    color: #F0F0F0;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #F0F0F0;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
    justify-content: center;
    list-style-type: none;
  `;

  if (!menu) {
    return (
      <Wrapper>
        <Title onClick={displayHome}>
        A | E
        </Title>
        <FiMenu
          style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '45px',
          color: '#F0F0F0',
          fontSize: '36px',
          textAlign: 'center',
          }}
          onClick={handleMenu}
          />
      </Wrapper>
    )
  }
  else {
    return (
      <Wrapper>
        <Title onClick={displayHome}>
          A | E
        </Title>
        <UL>
        <AiOutlineCloseCircle onClick={handleMenu}/>
          <li onClick={displayHome}>
            Home
          </li>
          <li onClick={handleDisplay}>
            About
          </li>
          <li onClick={handleDisplay}>
            Projects
          </li>
        </UL>
    </Wrapper>
    )
  }
}

export default Navbar;