define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['library/library'],
    tagName: 'li',
    className: 'library',

    initialize: function () {
      console.log('initialize: libraryItemView');
    }
  });
});
