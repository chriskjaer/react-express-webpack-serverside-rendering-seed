require('es6-shim');
var shared = require('./webpack.shared.config');
var webpack = require('webpack');

module.exports = Object.assign({}, shared, {
  name: 'browser',
  output: Object.assign({}, shared.output, {
    filename: 'browser.bundle.js'
  }),
  plugins: shared.plugins.concat(
    new webpack.DefinePlugin({ SERVER: false, BROWSER: true })
  )
});


