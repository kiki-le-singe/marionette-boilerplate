define([
  'models/helloWorld',
  'views/helloWorld',
  'templates',
  'helpersHBS'
],

function (HelloWorldModel, HelloWorldItemView, templates) {
  'use strict';

  describe('HelloWorldItemView', function () {

    before(function () {
      this.server = sinon.fakeServer.create();
    });

    after(function () {
      this.server.restore();
    });

    beforeEach(function () {
      this.model = new HelloWorldModel();
      this.view = new HelloWorldItemView({
        model: this.model
      });
    });

    afterEach(function () {
      this.view.destroy();
      this.view = null;
      this.model.clear();
    });

    describe('structure', function () {

      it('should have templates[hello-world] as template', function () {
        this.view.template.should.be.equal(templates['hello-world']);
      });

      it('should have "hello-world" as className', function () {
        this.view.className.should.be.equal('hello-world row');
      });
    });

    describe('render', function () {

      it.only('should render a div element with "hello-world" class name', sinon.test(function () {
        var $el = this.view.render().$el;
        $el.should.have.class('hello-world');
      }));
    });
  });
});
