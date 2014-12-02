require('es6-shim');
var shared = require('./webpack.shared.config');
var webpack = require('webpack');

module.exports = Object.assign({}, shared, {
  name: 'browser',
  entry: Object.assign({}, shared.entry, {
    main: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      shared.entry.main[0]
    ],
    commons: shared.statics.vendor
  }),
  output: Object.assign({}, shared.output, {
    filename: 'browser.bundle.js',
    publicPath: 'http://localhost:3001/dist/'
  }),
  devtool: 'eval-source-map',
  target: 'web',
  module: {
    loaders: shared.module.loaders.concat(
      { test: /\.jsx$/, loaders: [ 'react-hot', 'jsx?harmony&insertPragma=React.DOM'  ]}
    )
  },
  plugins: shared.plugins.concat(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.bundle.js'),
    new webpack.DefinePlugin(Object.assign({}, shared.statics.variables, {
      __BROWSER__: true
    }))
  )
});
