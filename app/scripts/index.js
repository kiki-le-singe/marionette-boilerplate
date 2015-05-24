require([
  'backbone',
  'app',
  'foundation',
  'helpersHBS'
],

function (Backbone, App) {
  'use strict';

  App.start();
  Backbone.history.start();

  // init foundation with the topbar plugin
  $(document).foundation('topbar');
});
