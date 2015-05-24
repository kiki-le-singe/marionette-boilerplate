define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.menu,
    tagName: 'nav',
    className: 'top-bar',
    attributes: {
      'data-topbar': '',
      role: 'navigation'
    },

    initialize: function () {
      console.log('initialize: menuItemView');
    }
  });
});
