define([
  'backbone',
  'json!config/api.json',
  'models/library'
],

function (Backbone, api, LibraryModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: LibraryModel,
    url: api.libraries,

    initialize: function () {
      console.log('initialize: librariesCollection');
    }
  });
});
