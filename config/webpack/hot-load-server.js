'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.browser.config');

var port = process.env.HOT_LOAD_PORT || 3001;

new WebpackDevServer(webpack(config), {
  contentBase: 'http://localhost:3000',
  publicPath: config.output.publicPath,
  hot: true
}).listen(port, 'localhost', function (err) {
  if (err) { console.log(err); }
  console.log('Listening at localhost:' + port);
});
