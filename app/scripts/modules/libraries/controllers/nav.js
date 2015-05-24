define([
  'marionette',
  '#libraries/models/libraries',
  '#libraries/views/librariesComposite'
],

function (Marionette, LibrariesCollection, LibrariesCompositeView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    libraries: function () {
      return this.contentRegion.show(new LibrariesCompositeView({
        collection: new LibrariesCollection()
      }));
    }
  });
});
