const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');

const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors({
  credentials: true,
  origin: 'localhost:3001'
}));

app.get('/', (req, res) => {
  res.status(200).send('hello from server');
});

/* intiially had a helper function in a separate file to process this request using request api, but performace was slow. increased performance by refactoring api request to the front end */
// app.get('/repos', (req, res) => {
//   getRepos('abrahamesparza', (err, data) => {
//     if (err) {
//       console.log('err', err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});