define([
  'marionette',
  'templates',
  'vent'
],

function (Marionette, templates, vent) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello/hello'],

    initialize: function () {
      console.log('initialize: helloView');
      this.runTimer();
    },

    // behavior
    onRender: function () {
      this.$el.fadeIn();
    },

    // behavior
    hide: function () {
      this.killTimer();
      this.$el.fadeOut();

      var index = this.getOption('index') || 0;
      vent.trigger('module:show', index);
    },

    // behavior
    runTimer: function (timeout) {
      var self = this;
      timeout = timeout || 10000;

      this.killTimer();

      this.timer = setTimeout(function () {
        self.hide();
      }, timeout);
    },

    // behavior
    killTimer: function () {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = undefined;
      }
    }
  });
});
