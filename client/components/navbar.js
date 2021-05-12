import React from 'react';
import styled from 'styled-components';

const Navbar = ({handleDisplay, displayHome, FadeIn}) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 25px 0px 25px;
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
  return (
    <Wrapper>
      <Title onClick={displayHome}>
        A | E
      </Title>
      <UL>
          <li onClick={handleDisplay}>
            About
          </li>
          <li onClick={handleDisplay}>
            Projects
          </li>
          <li onClick={handleDisplay}>
            Contact
          </li>
      </UL>
  </Wrapper>
  )
}

export default Navbar;