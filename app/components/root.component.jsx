'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'Root',
  render: function () {
    return (
      <main>{this.props.children}</main>
    );
  }
});

