'use strict';

var React                = require('react')
var _                    = require('lodash')
var R                    = React.DOM
var dataCsv              = require('session_history.csv');
var ChartistGraph        = require('react-chartist');

module.exports = {

  durationData: function() {
    return {
      labels: _.map(dataCsv, 'created_at'),
      series: [_.map(dataCsv, 'duration')]
    }
  },

  durationDataByDays: function() {
    var groupedByDays = this.groupByDays()

    var days   = _.keys(groupedByDays)
    var values = _.map(groupedByDays, function(elements, day) {
      return _.sum(elements, function(el) { return el.duration }) / elements.length
    });

    return {
      labels: days,
      series: [values]
    }
  },

  stackData: function() {
    var groupedByDays = this.groupByDays()
    var days = _.keys(groupedByDays)

    var dataChart = function() {
      var result = {}
      _.each(groupedByDays, function(elements, day) {
        var values = _.countBy(elements, function(el) { return el.summary_status });

        if(!values["error"]) { values["error"] = 0 }
        if(!values["success"]) { values["success"] = 0 }
        if(values["failed"]) { values["error"] += values["failed"] }
        if(values["passed"]) { values["success"] += values["passed"] }

        result[day] = values;
      });
      return result;
    };


    var statsData = function(valuesData) {
      return _.map(['success', 'error'], function(state) {
        return { name: state, data: _.map(days, function(day) { return valuesData[day][state] }) }
      });
    };

    return { labels: days, series: statsData(dataChart()) }
  },

  abnormalFailures: function() {
    var groupedByDays = this.groupByDays()
    var days = _.keys(groupedByDays)
    var data = this.stackData().series;
    var coefs = [];

    for (var i = 0; i < data[0].data.length; i++) { 
      coefs.push((1/(data[0].data[i] + data[1].data[i])) * data[1].data[i] )
    }

    return { labels: days, series: [coefs] };
  },

  groupByDays: function() {
    return _.groupBy(dataCsv, function(el) {
      return el.created_at.split(' ')[0];
    });
  }

}