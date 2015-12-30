var path = require('path');

module.exports = {
  entry: './js/main.jsx',
  output: {
    path: './',
    filename: 'main.js'
  },
  module: {
    loaders: [
        {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "js", "node_modules"
    ]
  }
};
