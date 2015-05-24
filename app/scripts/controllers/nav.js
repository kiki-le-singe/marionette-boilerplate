define([
  'marionette',
  'views/helloWorld',
  'models/helloWorld'
],

function (Marionette, HelloWorldItemView, HelloWorldModel) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      return this.contentRegion.show(new HelloWorldItemView({
        model: new HelloWorldModel()
      }));
    }
  });

  return NavController;
});
