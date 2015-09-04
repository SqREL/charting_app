'use strict';

var React         = require("react");
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Redirect      = Router.Redirect;

var Home          = require('components/Home');
var r             = React.createElement

var NotFound      = require('components/NotFound');

module.exports = r(Route,
  {
    name: "app",
    path: "/",
    handler: Home
  }, r(NotFoundRoute, {
    handler: NotFound
  }), r(DefaultRoute, {
    handler: Home
  })
);


