require('es6-shim');
var shared = require('./webpack.shared.config');
var webpack = require('webpack');

module.exports = Object.assign({}, shared, {
  name: 'server',
  output: Object.assign({}, shared.output, {
    libraryTarget: 'commonjs2',
    filename: 'node.bundle.js'
  }),
  plugins: shared.plugins.concat(
    new webpack.DefinePlugin({ SERVER: true, BROWSER: false })
  ),
  target: 'node',
  externals: /^[a-z\-0-9]+$/ // All non-relative modules
});

