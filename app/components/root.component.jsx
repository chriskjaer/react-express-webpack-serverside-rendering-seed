'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'Root',
  render: function () {
    return (
      <html>
        <head>
          <title>React Blog</title>
          <link rel='stylesheet' href='/dist/main.css' />
        </head>
        <body>
          {this.props.children}
          <script src='/dist/browser.bundle.js' />
        </body>
      </html>
    );
  }
});
