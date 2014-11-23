'use strict';
var React = require('react');
var normalize = require('normalize.css/normalize.css');

var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>React Blog</title>
          <link rel='stylesheet' href='main.css' />
        </head>
        <body>
          {this.props.children}
          <script src='browser.bundle.js' />
        </body>
      </html>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <Root>
        <div>Hello World!</div>
      </Root>
    );
  }
});

if (!!BROWSER) {
  global.React = React;
}

module.exports = App;
