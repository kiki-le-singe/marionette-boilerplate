'use strict';

module.exports = {
  handlebars: {
    src: {
      templates: 'app/scripts/**/*.hbs',
      partials: 'app/scripts/**/_*.hbs'
    },
    dest: 'app/scripts/'
    // dest: '.tmp/scripts/'
  }
};
