define([
  'marionette',
  '#libraries/controllers/nav',
  '#libraries/routers/routers',
  'vent'
],

function (Marionette, NavController, Routers, vent) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.routers = new Routers({
        controller: new NavController(options)
      });

      console.log('initialize: librariesIndexObject');
      vent.trigger('module:libraries:bootstrapped');
    }
  });
});
