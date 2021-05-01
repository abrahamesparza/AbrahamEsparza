import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import About from './components/about';

const App = () => {
  let [displayAbout, setDisplay] = useState(false);

  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  `
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
    animation: ${FadeIn} linear 3s;
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #262626;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
    justify-content: center;
    list-style-type: none;
  `;
  const Body = styled.div`
    max-width: 100%;
    max-height: 100%;
  `;
  let handleDisplay = () => {
    if (displayAbout === false) {
      console.log('display', displayAbout);
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }
  return (
    <Body>
      <Wrapper>
        <Title>
          A | E
        </Title>
        <UL>
          {/* <LI> */}
            <li onClick={handleDisplay}>
              About
            </li>
            <li>
              Projects
            </li>
            <li>
              Media
            </li>
          {/* </LI> */}
        </UL>
      </Wrapper>
      {/* conditional render About component: if true display / if false display nothing */}
      {() => {
        if (displayAbout === false) {
          return null;
        } else {
          return <About />
        }
      }}
    </Body>
  )
};

export default App;