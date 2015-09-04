'use strict';

var R, React, r;

React = require("react");

R = React.DOM;

r = React.createElement;

module.exports = React.createClass({
  displayName: 'NotFound',
  getDefaultProps: function() {
    return {
      message: 'Nothing Found'
    };
  },
  render: function() {
    return R.p({
      className: "nothing-found"
    }, this.props.message);
  }
});
