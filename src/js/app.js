require("app.scss");


var React   = require('react');
var Router  = require('react-router');
var routes  = require('routes');

var Home    = require('components/Home');

var r       = React.createElement
Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  return React.render(r(Handler, {}), document.getElementById('app'));
});

