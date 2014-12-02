require('es6-shim');
var webpack = require('webpack');
var appRoot = require('app-root-path').path;
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Shared Options
module.exports = {
  context: appRoot,
  entry: {
    main: [ path.resolve(appRoot, 'app/index.jsx') ]
  },
  output: {
    path: path.join(appRoot, 'dist'),
    publicPath: '/dist'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      { test: /\.css$/,
        // loader: 'style!css!sass'
        loader: ExtractTextPlugin.extract('style', 'css')
      }, {
        test: /\.scss$/,
        // loader: 'style!css!sass?sourceMap=true'
        loader: ExtractTextPlugin.extract( 'style', 'css!sass')
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(ttf|woff|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=10000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      assets: path.join(appRoot, '/assets/'),
      actions: path.join(appRoot, '/app/actions'),
      components: path.join(appRoot, '/app/components'),
      stores: path.join(appRoot, '/app/stores'),
      config: path.join(appRoot, '/config'),
      lib: path.join(appRoot, '/lib')
    }
  },
  statics: {
    variables: {
      __SERVER__: false,
      __BROWSER__: false,
      __DEVSERVER__: false
    },
    vendor: [
      'react',
      'react-router'
    ]
  }
};
