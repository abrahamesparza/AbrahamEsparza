import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import Page from './components/page';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  let [displayPage, setDisplay] = useState(false);
  let [page, setPage] = useState('');

  /* styled components */
  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  `
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
      <Navbar displayHome={displayHome} handleDisplay={handleDisplay} FadeIn={FadeIn}/>
      {setDisplay === false ? null : <Page page={page} display={displayPage} FadeIn={FadeIn}/>}<br/>
      <Footer />
    </Body>
  )
};

export default App;