define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello/hello'],
    className: 'row',

    initialize: function () {
      console.log('initialize: helloView');
    }
  });
});
