define([
  'handlebars',
  'helpers/i18n'
],

function (Handlebars, i18n) {
  'use strict';

  var bar = function (context, options) { // jshint unused:false
    return context;
  };

  var foo = function (context, options) { // jshint unused:false
    return context;
  };

  Handlebars.registerHelper('bar', bar);
  Handlebars.registerHelper('foo', foo);
  Handlebars.registerHelper('t', i18n.t);

  // more handlebar helpers...
});
