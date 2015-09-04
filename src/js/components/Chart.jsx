'use strict';

var React             = require("react");
var ReactBootstrap    = require("react-bootstrap");
var Router            = require('react-router');
var ChartistGraph     = require('react-chartist');

var R                 = React.DOM
var r                 = React.createElement

module.exports = React.createClass({
  render: function() {
        return(
          <div className="chart-wrapper">
            <ChartistGraph data={this.props.data} options={this.props.options} type={this.props.type} />
            <p className="chart-description">{ this.props.description }</p>
          </div>
        );
  }
});

