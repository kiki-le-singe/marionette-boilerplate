define([
  'marionette',
  '#timer/views/timer'
],

function (Marionette, TimerView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    timer: function () {
      return this.contentRegion.show(new TimerView({
        index: 0
      }));
    }
  });
});
