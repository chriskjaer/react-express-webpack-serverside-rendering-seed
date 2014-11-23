require('es6-shim');
var webpack = require('webpack');
var appRoot = require('app-root-path').path;
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Shared Options
module.exports = {
  context: appRoot,
  entry: [path.join(appRoot, 'app')],
  publicPath: '/',
  output: {
    path: path.join(appRoot, 'dist'),
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony&insertPragma=React.DOM' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']

    // Consider adding these a reflux app.
    // alias: {
    //   actions: path.join(appRoot, '/app/actions'),
    //   constants: path.join(appRoot, '/app/constants'),
    //   stores: path.join(appRoot, '/app/stores')
    // }
  }
};
