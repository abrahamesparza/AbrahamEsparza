const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');
const { getRepos } = require('../helpers/getRepos');

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors({
  credentials: true,
  origin: 'localhost:3000'
}));

app.get('/', (req, res) => {
  res.status(200).send('hello from server');
});

app.get('/repos', (req, res) => {
  getRepos('abrahamesparza', (err, data) => {
    if (err) {
      console.log('err', err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});