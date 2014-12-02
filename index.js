'use strict';

var express = require('express');
var server = express();
var React = require('react');
var Router = require('react-router');
var routes = require('./dist/node.bundle');
var fs = require('fs');
var path = require('path');
var appRoot = require('app-root-path').path;


server.use(require('morgan')('dev'));
server.use('/dist', express.static(__dirname + '/dist'));

server.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var content = React.renderToString(React.createElement(Handler));

    fs.readFile(path.resolve(appRoot, 'index.html'), {encoding: 'utf8'}, function(err, data) {
      if (err) { throw err; }
      res.send(data.replace('{{content}}', content));
    });
  });
});

server.listen(3000, '0.0.0.0', function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
