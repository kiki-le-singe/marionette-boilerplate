define([
  '#libraries/index',
  '#hello/index'
],

function (Libraries, Hello) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Libraries(options),
      new Hello(options)
    ];

    return modules;
  };
});
