'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var normalize = require('normalize.css/normalize.css');
var Root = require('./components/root.component');
var Home = require('./components/home.component');
var Page = require('./components/page.component');

var App = React.createClass({
  render: function () {
    return (
      <Root>
        <h1>Index</h1>
        <RouteHandler />
      </Root>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Home} />

    <Route name='page' handler={Page} />
  </Route>
);


if (BROWSER) {
  window.React = React;
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document);
  });
}

module.exports = routes;
