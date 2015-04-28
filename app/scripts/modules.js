define([
  '#hello/index',
  '#timer/index'
],

function (Hello, Timer) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Hello(options),
      new Timer(options)
    ];

    return modules;
  };
});
