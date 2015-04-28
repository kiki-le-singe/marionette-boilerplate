define([
  'marionette',
  'views/helloWorldItemView',
  'views/librariesCompositeView',
  'models/helloWorldModel',
  'models/librariesCollection',
  'vent',
  'backbone'
],

function (
  Marionette,
  HelloWorldItemView,
  LibrariesCompositeView,
  HelloWorldModel,
  LibrariesCollection,
  vent,
  Backbone) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
      vent.on('module:show', this.show, this);
    },

    show: function (index) {
      var modules = ['timer', 'hello'];
      var lastItem = modules.length - 1;

      if (index === modules.indexOf(modules[lastItem])) {
        Backbone.history.navigate('timer', {trigger:true});
      }
      else {
        index += 1;
        var route = modules[index];
        Backbone.history.navigate(route, {trigger:true});
      }
    },

    home: function () {
      return this.contentRegion.show(new HelloWorldItemView({
        model: new HelloWorldModel()
      }));
    },

    libraries: function () {
      return this.contentRegion.show(new LibrariesCompositeView({
        collection: new LibrariesCollection()
      }));
    }
  });

  return NavController;
});
