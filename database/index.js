const mongoose = require('mongoose');
let uri = require('./uri.js').uri;

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.on('open', () => console.log('Connected to database'));