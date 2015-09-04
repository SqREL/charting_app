'use strict';

var React              = require("react");
var RouteHandler       = require('react-router').RouteHandler;
var Header             = require('components/Header')
var Chart              = require('components/Chart')
var SessionStore       = require('store/sessions_store')

var R = React.DOM
var r = React.createElement

module.exports = React.createClass({
  displayName: 'App',
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    return(
      <div>
        <div><Header /></div>
        <div className="charting wrapper container">
          <div className="chart-block-wrapper">
            <h2>Data by days</h2>
            <Chart data={SessionStore.stackData()} options={ { stackBars: true } } type={ 'Bar' } description={ 'Success/Fails per day' } />
            <Chart data={SessionStore.durationDataByDays()} options={ { showArea: true } } type={ 'Line' } description={ 'Average duration per day' } />
            <Chart data={SessionStore.abnormalFailures()} options={ {} } type={ 'Bar' } description={ 'Abnormal amount of failure builds' } />
          </div>
          <div className="chart-block-wrapper">
            <h2>Data by created at</h2>
            <Chart data={SessionStore.durationData()} options={ { showArea: true } } type={ 'Line' } description={ 'Duration per each build' } />
          </div>
        </div>
      </div>
    );
  }
});