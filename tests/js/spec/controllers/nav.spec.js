define([
  'backbone',
  'marionette',
  'controllers/nav',
  'models/librariesCollection'
],

function (Backbone, Marionette, NavController, LibrariesCollection) {
  'use strict';

  describe('NavController', function () {

    // Create a div#content element and append it to the body.
    // This allows to add the views(this.controller.[*].currentView) within the "#content" region
    var $div = $('div');
    $div.attr({id: 'content'});

    var librariesMock = [
      {
        name: 'HTML5 Boilerplate',
        url: 'http://www.w3.org/TR/html5/'
      },
      {
        name: 'jQuery',
        url: 'http://jquery.com/'
      },
      {
        name: 'Backbone.js',
        url: 'http://backbonejs.org/'
      }
    ];

    before(function () {
      this.collection = new LibrariesCollection(librariesMock);
    });

    beforeEach(function () {
      $('body').append($div);

      var region = new Marionette.Region({
        el: '#content'
      });
      this.controller = new NavController({contentRegion: region});
    });

    afterEach(function () {
      this.controller.destroy();
      this.controller = null;

      $div.remove();
    });

    describe('render', function () {
      describe('home()', function () {
        it('should render the home view', sinon.test(function () {
          var view = this.controller.home().currentView;
          var $el = view.$el;

          $el.should
            .exist.and // https://github.com/chaijs/chai-jquery#exist
            .have.class('hello-world'); // https://github.com/chaijs/chai-jquery#classclassname
        }));

        it('should contain some texts', sinon.test(function () {
          var view = this.controller.home().currentView;
          var $el = view.$el;

          $el.should.contain('CONGRATS!');
          $el.should.contain('Welcome in my "Marionette Boilerplate" project !');
          $el.should.contain('Play with this boilerplate and... Have fun!');
          $el.should.contain('Enjoy coding!');
        }));
      });

      describe('libraries()', function () {
        it('should render the libraries view', sinon.test(function () {
          var view = this.controller.libraries().currentView;
          var $el = view.$el;

          /* jshint -W030 */
          $el.should.exist; // https://github.com/chaijs/chai-jquery#exist
          $el.should.descendants('ul.libraries'); // https://github.com/chaijs/chai-jquery#descendantsselector
        }));

        it('should render the libraries item view', sinon.test(function () {
          var view = this.controller.libraries().currentView;
          var $el = view.$el;
          // sets the collection of the view with the fake collection
          view.collection = this.collection;
          // and rerender the view (because it was rendered a first time by the region)
          view.render();

          // https://github.com/chaijs/chai-jquery#descendantsselector
          $el.should.descendants('ul.libraries li.library');
        }));
      });
    });
  });
});
