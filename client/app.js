import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import Page from './components/page';

const App = () => {
  let [displayPage, setDisplay] = useState(false);
  let [page, setPage] = useState('');
  let [active, setActive] = useState(false);

  useEffect(() => {
    // nothing yet
  }, []);

  /* styled components */
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
  /* styled components */

  let handleDisplay = (e) => {
    let target = e.target.innerText;
    if (displayPage === false && page === '') {
      setDisplay(true);
      setPage(target);
    } else if (page !== '') {
      setPage(target);
    }
  }

  let displayHome = () => {
    setPage('');
    setDisplay(false);
  }

  return (
    <Body>
      <Wrapper>
        <Title onClick={displayHome}>
          A | E
        </Title>
        <UL>
          {/* <LI> */}
            <li onClick={handleDisplay}>
              About
            </li>
            <li onClick={handleDisplay}>
              Projects
            </li>
            <li onClick={handleDisplay}>
              Media
            </li>
          {/* </LI> */}
        </UL>
      </Wrapper>
      {/* conditional render About component: if true display / if false display nothing */}
      {setDisplay === false ? null : <Page page={page} display={displayPage}/>}
    </Body>
  )
};

export default App;