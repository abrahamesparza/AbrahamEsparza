import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  console.log('repos', repos);
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
    max-width: 100%;
    ${'' /* animation:${FadeIn} linear 3s; */}
  `
  const Title = styled.h3`
    color: #262626;
    font-family: 'Abel', sans-serif;
  `

    const LI = styled.li`
      margin: 3px;
      padding-left: 15px;
      ${'' /* text-align: center; */}
      transition: 1.0s;
      margin-right: 40px;
      border-radius: 5px;
      color: #262626;
      &:hover {
        background-color: #8AB3FF;
        color: white;
        opacity: 50%;
      }
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
    }
  `;
  const H1 = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
    ${'' /* animation: ${FadeIn} linear 3s; */}
  `
  const ATTR = styled.a`
    color: #262626;
    text-decoration: none;
  `
  // styles
  // functions
  const getRepos = () => {
    axios.get('https://api.github.com/users/abrahamesparza/repos')
    .then(data => {
      let repos = data.data;
      setRepos(repos);
    })
    .catch(err => console.log('err', err));11
  };

  console.log('repos', repos)
  return (
    <DIV>
    <H1>Projects</H1>
      <UL>
        {repos.map(repo => {
          if (repo.name !== 'abrahamesparza.github.io' && repo.name !== 'front-end-interview-handbook' && repo.name !== 'react-take-home' && repo.name !== 'front-end-interview-preparation-guide' && repo.name !== 'hrext07-my-cruddy-app') {
            return (
              <LI key={repo.id}>
              <Title> <ATTR href={repo.html_url} target='_blank'>{repo.name}</ATTR></Title>
              - {repo.description}<br/><br/>
              </LI>
            )
          }
        })}
      </UL>
    </DIV>
  )
}

export default Projects;