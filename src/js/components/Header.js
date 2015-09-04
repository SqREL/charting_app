'use strict';

var React             = require("react");
var ReactBootstrap    = require("react-bootstrap");
var Router            = require('react-router');
var Navbar            = ReactBootstrap.Navbar;
var Nav               = ReactBootstrap.Nav;
var NavItem           = ReactBootstrap.NavItem;
var Input             = ReactBootstrap.Input;
var DropdownButton    = ReactBootstrap.DropdownButton;
var CollapsibleNav    = ReactBootstrap.CollapsibleNav;
var MenuItem          = ReactBootstrap.MenuItem;
var Link              = Router.Link;
var R                 = React.DOM
var r                 = React.createElement


module.exports = React.createClass({
  nav: function() {
    return r(Nav, {
        right: true
      });
  },
  displayName: 'Header',
  render: function() {
    return r(Navbar, {
      fluid: true,
      inverse: false,
      toggleNavKey: 0,
      className: 'no-padding-and-margin header navbar',
      brand: r(Link, {
        to: 'app'
      }, 'Charting App')
    }, this.nav());
  }
});
