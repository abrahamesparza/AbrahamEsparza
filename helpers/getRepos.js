const { call } = require('file-loader');
const request = require('request');
const { TOKEN } = require('../config.js');

const getRepos = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    let data = JSON.parse(body);
    console.log('data', data);
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getRepos = getRepos;