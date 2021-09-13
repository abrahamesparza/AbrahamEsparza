import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    .catch(err => console.log('err', err));11
  };

  console.log('repos', repos);

  let DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

  return (
    /*
      next: iterate through each repo and display as a card using templates of my Card and Container styled components
    */
    <DIV>
      <CardTemplate>
        <h1 style={{ width: '100%', textAlign: 'center' }}>Project Name/IMG</h1>
        <Container>
          <h4 style={{ textAlign: 'center' }}><b>Project About</b></h4>
        </Container>
        <Container>
          <p style={{ textAlign: 'center' }}>Technology Used</p>
        </Container>
      </CardTemplate>
    </DIV>

    /*
    //card html template
    <div class="card">
      <img src="img_avatar.png" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>

    //card css template

    Add shadows to create the "card" effect
  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

  On mouse-over, add a deeper shadow
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

  Add some padding inside the card container
.container {
  padding: 2px 16px;
}

    */
  )
};

export default Card;