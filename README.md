# Marionette Boilerplate

## Introduction

> This project is first to train with tools like [GruntJS](http://gruntjs.com/), [Yeoman](http://yeoman.io/), [Backbone.js](http://backbonejs.org/), [Marionette.js](http://marionettejs.com/)... And then I used it like Boilerplate.

## Requirements

 * [nodejs](http://nodejs.org/)
 * [GruntJS](http://gruntjs.com/)
 * [bower](http://bower.io/)
 * [compass](http://compass-style.org/)

## Optional

 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 * [Yeoman](http://yeoman.io/): **required by [generator-marionette](https://github.com/mrichard/generator-marionette)**
 * [generator-marionette](https://github.com/mrichard/generator-marionette): Allows the use of **yo** command to generate **routers**, **models**, **views** ...

## Installation

* `$ git clone git@github.com:kiki-le-singe/marionette-boilerplate.git`
* `$ cd marionette-boilerplate`
* `$ npm install`
* `$ bower install`

## Grunt tasks

* `$ grunt serve`

Then serve the app on `localhost:9000` and opens your default browser

* `$ grunt serve --stub`

Makes the same thing that the above command, except that the 'stub' option allows to enabled or not the retrieving of fake datas.

* `$ grunt test`

Runs tests located in `/tests/js/spec`.

> You can access tests in your browser, simply create a vhost.

* `$ grunt dist`

Build the application in `/dist`.

* `$ grunt build`

Create a .tgz archive named `marionette-boilerplate-[version]`.

* `$ grunt docs`

Generates a html doc of your documented code in `/docs` and open it in your browser.

* `$ grunt plato`

Generate complexity analysis reports in `/reports` with [plato](https://github.com/es-analysis/plato).

## Included JavaScript libraries

 * [Backbone.js](http://backbonejs.org/)
 * [Marionette.js](http://marionettejs.com/)
 * [Backbone.babysitter](https://github.com/marionettejs/backbone.babysitter)
 * [Backbone.wreqr](https://github.com/marionettejs/backbone.wreqr)
 * [Require.js](http://requirejs.org/)
 * [jQuery 2](http://jquery.com/)
 * [Lo-Dash V3](http://lodash.com/)
 * [Handlebars](http://handlebarsjs.com/)
 * [Modernizr](http://modernizr.com/)

## API

By default the root access for the API is http://localhost:9000/api. Available example: http://localhost:9000/api/libraries

## Tests

The library used for tests are :

 * [mocha](http://visionmedia.github.io/mocha/)
 * [sinon](http://sinonjs.org/)
 * [chai](http://chaijs.com/)

## App configuration

The configuration of the application is located in `/app/config`

## Handlebars helpers

Handlebars helpers is located in `/app/scripts/helpers`

## Sources

 * [Yeoman](http://yeoman.io/)
 * [generator-marionette](https://github.com/mrichard/generator-marionette): **Marionette Boilerplate** is based on it

## Tips and tricks

 * [mongo-express](https://www.npmjs.org/package/mongo-express): If you use MongoDB, look at this node modules. It's an convenient admin interface for MongoDB.
 * To enjoy livereload don't forget download the chrome plugin.
