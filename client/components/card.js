import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Card = () => {
  const [repos, setRepos] = useState([]);
  console.log('repos', repos);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = () => {
    axios.get('https://api.github.com/users/abrahamesparza/repos')
    .then(data => {
      let repos = data.data;
      setRepos(repos);
    })
    .catch(err => console.log('err', err));
  };

  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  `;

  let DIV = styled.div`
    display: grid;
    grid-template-rows: auto;
    animation: ${FadeIn} linear 3s;
  `
  let CardTemplate = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px 5px 0 0;
    margin: 25px 25px 25px 25px;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  `;
  let Container = styled.div`
    padding: 2px 16px;
  `

  let UL = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    color: green;
  `

  return (
    <DIV>
      <UL>
      {repos.map(repo => (
        <li style={{ listStyleType: 'none' }}>
          <CardTemplate>
            <h1 style={{ width: '100%', textAlign: 'center' }}>{repo.name}</h1>
            <Container>
              <h4 style={{ textAlign: 'center' }}><b>
              {repo.description}
              </b></h4>
            </Container>
            <Container>
              <p style={{ textAlign: 'center' }}>Technology Used</p>
            </Container>
          </CardTemplate>
        </li>
      ))}
      </UL>
    </DIV>
  )
};

export default Card;