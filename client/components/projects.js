import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  console.log('repos', repos);
  useEffect(() => {
    getRepos();
  }, [])
  const DIV = styled.div`
    min-height: 100vh;
    height: 100vh;
    width: 75vw;
  `
  const Title = styled.h3`
    color: #262626;
    font-family: 'Abel', sans-serif;
  `

    const LI = styled.li`
      margin: 3px;
      padding-left: 15px;
      transition: 1.0s;
      margin-right: 40px;
      border-radius: 5px;
      color: #262626;
      &:hover {
        background-color: #8AB3FF;
        color: #757575;
        opacity: 50%;
      }
    `

  const UL = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #262626;
    font-family: 'Abel', sans-serif;
    justify-content: center;
    list-style-type: none;
    }
  `;
  const H1 = styled.h1`
    color: #262626;
    text-align: center;
    font-family: 'Abel', sans-serif;
  `
  const ATTR = styled.a`
    color: #262626;
    text-decoration: none;
  `

  const getRepos = () => {
    axios.get('https://api.github.com/users/abrahamesparza/repos')
    .then(data => {
      let repos = data.data;
      setRepos(repos);
    })
    .catch(err => console.log('err', err));11
  };

  let reposToAvoid = [
    'abrahamesparza.github.io', 'front-end-interview-handbook',
    'react-take-home', 'front-end-interview-preparation-guide',
    'mt-metadata', 'tinder-clone', 'recursion-prompts', 'robot-cards',
    'Javascript-Exercise', 'hrext07-my-cruddy-app', 'cowlist']
  return (
    <DIV>
      <UL>
        {repos.map(repo => {
          if (!reposToAvoid.includes(repo.name)) {
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