const { resolve } = require('path');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:  /\.(jpe?g|pdf|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: 'url-loader',
      },
    ]
  },
  resolve: {
    fallback: {
      "util": false,
      "path": false,
      "crypto": false,
      "buffer": false,
      "https": false,
      "url": false,
      "http": false,
      "vm": false,
      "querystring": false,
      "os": false,
      "browser": false
   },
  }
};