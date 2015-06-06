var tests = [];
for (var file in window.__karma__.files) {
  if (/spec.js$/.test(file)) {
    tests.push(file);
  }
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/scripts',

  shim: {
    backbone: {
      deps: ['underscore', 'jquery']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  paths: {
    // modules
    '#hello': 'modules/hello',
    '#libraries': 'modules/libraries',
    '#library': 'modules/library',

    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/lodash',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    text: '../bower_components/requirejs-text/text',
    helpers: 'helpers',
    helpersHBS: 'helpers/handlebars',
    bluebird: '../bower_components/bluebird/js/browser/bluebird',
    json: '../bower_components/requirejs-plugins/src/json',
    handlebars: '../bower_components/handlebars/handlebars.runtime'
  },

  // dynamically load all test files
  deps: tests,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
