'use strict';
module.exports = function configureWebpackDevServer(app, config) {
  config.host = config.host || '0.0.0.0';
  config.port = config.port || 3001;

  var DEV_URL = 'http://' + config.host + ':' + config.port;
  var Server = require('webpack-dev-server');
  var browserConfig = require('./webpack/webpack.browser.config');
  var nodeConfig = require('./webpack/webpack.node.config');
  var webpack = require('webpack');
  var browserCompiler;
  var nodeCompiler;
  var devServerOptions;
  var server;

  devServerOptions = {
    hot: true,
    stats: {
      hash: false,
      cached: false,
      cachedAssets: false,
      colors: true
    }
  };

  browserConfig.entry = browserConfig.entry.concat(
    'webpack-dev-server/client?' + DEV_URL,
    'webpack/hot/only-dev-server'
  );

  browserConfig.plugins = browserConfig.plugins.concat(
    new webpack.HotModuleReplacementPlugin()
  );

  browserCompiler = webpack(browserConfig);
  nodeCompiler = webpack(nodeConfig);

  nodeCompiler.watch(200, function(err, stats) {
    if (err) throw err;
    console.log('Server bundle compiled in %s seconds',
      (stats.endTime - stats.startTime) / 1000);
  });

  server = new Server(browserCompiler, devServerOptions);
  server.listen(config.port, function(err) {
    if (err) throw err;
  });

  app.use('/dist', server.middleware);

  return server;
};
