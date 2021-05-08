import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';


const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  }, [])
  // styles
  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
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
  const H1 = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    animation: ${FadeIn} linear 3s;
  `
  // styles
  // functions
  const getRepos = () => {
    axios.get('http://localhost:3000/repos')
    .then(data => {
      let repos = data.data;
      setRepos(repos);
    })
    .catch(err => console.log('err', err));11
  }
  console.log('repos state: ', repos);
  return (
    <div>
    <H1>PROJECTS</H1>
      <UL>
        {repos.map(repo => (
          <li>
          <h3>{repo.name}</h3>
          - {repo.description}<br/><br/>
          </li>
        ))}
      </UL>
    </div>
  )
}

export default Projects;