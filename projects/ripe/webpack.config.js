const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'eval-source-map',
  entry: './src/main.jsx',
  output: {
    path: './',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
      { test:   /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png' }
    ]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.ENVIRONMENT': '"development"',
      'process.env.DEVELOPMENT_URL': '"http://localhost:5000"',
      'process.env.LIVE_URL': '"http://www.lilist.io"'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [ 'app', 'node_modules' ]
  }
};
