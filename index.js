'use strict';

var express = require('express');
var server = express();
var React = require('react');
var reactApp = React.createFactory(require('./dist/node.bundle'));
var ENV = process.env.NODE_ENV || 'development';


if (ENV === 'development') {
  server.use(require('morgan')('dev'));
  require('./config/dev-middleware')(server, {port: 3001});
}

server.use(express.static(__dirname + '/dist'));

server.get('/', function(req, res) {
  var markup = React.renderToString(reactApp());
  res.send('<!DOCTYPE html>' + markup);
});

server.listen(3000, '0.0.0.0', function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
