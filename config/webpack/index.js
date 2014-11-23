'use strict';

var configs = ['shared', 'node', 'browser'].reduce(function(accumulator, name) {
  accumulator[name] = require('./webpack.' + name + '.config');
  return accumulator;
}, {});

module.exports = configs;
