define([
  'helpers/i18n'
],

function (i18nHelper) {
  'use strict';

  describe('i18nHelper', function () {
    describe('[i18n]', function () {
      it('should return the translation key', function () {
        var result = i18nHelper.t('i18n.key');
        result.should.be.eql('i18n.key');
      });

      it('should return the translated sring', function () {
        var result = i18nHelper.t('home.hello');
        result.should.be.eql('Hello I\'m kiki le singe');
      });
    });
  });
});
