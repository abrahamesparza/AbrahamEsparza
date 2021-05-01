const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

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

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});