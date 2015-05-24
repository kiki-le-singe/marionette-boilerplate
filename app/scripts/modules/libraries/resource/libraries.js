define([
  'bluebird',
  '#libraries/models/libraries'
],

function (Promise, LibrariesCollection) {
  'use strict';

  return function (options) {
    options = options || {};

    return new Promise(function (resolve, reject) {
      var libraries = new LibrariesCollection(options);

      libraries.fetch({
        success: function () {
          resolve(libraries);
        },
        error: function () {
          reject();
        }
      });
    });
  };
});
