var configs = require('./config/webpack');

// Compile production code with 'webpack -p'
module.exports = [ configs.node, configs.browser ];
