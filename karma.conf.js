// Karma configuration
// Generated on Tue May 19 2015 19:32:58 GMT0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai-sinon', 'jquery-chai'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'app/bower_components/backbone/backbone.js', included: false},
      {pattern: 'app/bower_components/lodash/lodash.js', included: false},
      {pattern: 'app/bower_components/marionette/lib/core/backbone.marionette.js', included: false},
      {pattern: 'app/bower_components/backbone.babysitter/lib/backbone.babysitter.js', included: false},
      {pattern: 'app/bower_components/backbone.wreqr/lib/backbone.wreqr.js', included: false},
      {pattern: 'app/bower_components/handlebars/handlebars.runtime.js', included: false},
      {pattern: 'app/scripts/**/*.js', included: false},
      {pattern: 'app/scripts/helpers/**/*.js', included: false},
      {pattern: 'test/spec/**/*.spec.js', included: false},

      'test/test-main.js'
    ],

    // fix 404 warning for images. Works only if app is started (gulp serve).
    proxies: {
      '/images/': 'http://localhost:3000/images/'
    },

    // list of files to exclude
    exclude: [
      'app/scripts/init.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'app/scripts/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    // browsers: ['Chrome', 'Safari', 'PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
