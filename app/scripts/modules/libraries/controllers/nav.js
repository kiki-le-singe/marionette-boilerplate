define([
  'marionette',
  '#libraries/resource/libraries',
  '#libraries/views/librariesComposite'
],

function (Marionette, librariesResource, LibrariesCompositeView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    libraries: function () {
      var self = this;
      librariesResource(null).then(function (collection) {
        // shows the libraries view.
        var librariesCompositeView = new LibrariesCompositeView({
          collection: collection
        });
        self.contentRegion.show(librariesCompositeView);
      });
    }
  });
});
