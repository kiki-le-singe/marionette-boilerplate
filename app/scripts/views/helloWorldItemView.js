define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello-world'],
    className: 'hello-world row',

    initialize: function () {
      console.log('initialize: helloWorldItemView');
    }
  });
});
