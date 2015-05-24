define([
  'marionette',
  'vent'
],

function (Marionette, vent) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      console.log('initialize: libraryIndexObject');
      vent.trigger('module:library:bootstrapped');
    }
  });
});
