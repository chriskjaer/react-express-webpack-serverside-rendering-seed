'use strict';

var express = require('express');
var server = express();
var React = require('react');
var Router = require('react-router');
var ENV = process.env.NODE_ENV || 'development';


if (ENV === 'development') {
  server.use(require('morgan')('dev'));
  require('./config/dev-middleware')(server, {port: 3001});
}

server.use('/dist', express.static(__dirname + '/dist'));

server.use(function(req, res) {
  var routes = require('./dist/node.bundle');

  Router.run(routes, req.path, function(Handler, state) {
    var markup = React.renderToString(React.createElement(Handler));
    if (state.routes.length) {
      res.send('<!DOCTYPE html>' + markup);
    } else {
      res.redirect('/');
    }
  });
});

server.listen(3000, '0.0.0.0', function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
