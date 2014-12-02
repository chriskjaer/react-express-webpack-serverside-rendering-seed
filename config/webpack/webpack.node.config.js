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
    new webpack.DefinePlugin(Object.assign({}, shared.statics.variables, {
    __SERVER__: true
  }))
  ),
  target: 'node',
  module: {
    loaders: shared.module.loaders.concat(
      { test: /\.jsx$/, loaders: [ 'jsx?harmony&insertPragma=React.DOM'  ]}
    )
  },
  externals: shared.statics.vendor
});
