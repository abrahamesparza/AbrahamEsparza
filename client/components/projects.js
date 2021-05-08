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
  const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    animation:${FadeIn} linear 3s;
  `
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
  const H1 = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `
  const Title = styled.h3`
    color: #262626;
    font-family: 'Abel', sans-serif;
  `
  const ATTR = styled.a`
    color: #262626;
    text-decoration: none;
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
  console.log('repos', repos)
  return (
    <DIV>
    <H1>PROJECTS</H1>
      <UL>
        {repos.map(repo => {
          if (repo.name !== 'abrahamesparza.github.io' && repo.name !== 'front-end-interview-handbook' && repo.name !== 'react-take-home' && repo.name !== 'front-end-interview-preparation-guide' && repo.name !== 'hrext07-my-cruddy-app') {
            return (
              <li key={repo.id}>
              <Title> <ATTR href={repo.html_url} target='_blank'>{repo.name}</ATTR></Title>
              - {repo.description}<br/><br/>
              </li>
            )
          }
        })}
      </UL>
    </DIV>
  )
}

export default Projects;