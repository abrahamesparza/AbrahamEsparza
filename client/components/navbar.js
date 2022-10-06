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
    console.log('list', list);
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 25px 0px 25px;
    ${'' /* background-color: #e3e3e3; */}
  `;
  const Title = styled.h1`
    font-size: 48px;
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #262626;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
    justify-content: center;
    list-style-type: none;
  `;

  const list = ['Home', 'Portfolio'];

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
          color: '#262626',
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
        <AiOutlineCloseCircle onClick={handleMenu}/><br/>
        {list.map(item => (
          <li onClick={handleDisplay}>{item}</li>
        ))}
        </UL>
    </Wrapper>
    )
  }
}

export default Navbar;