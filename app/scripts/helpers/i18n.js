define([],

function () {
  'use strict';

  var keys = {
    'home.hello': 'Hello I\'m kiki le singe',
    'home.welcome': 'Welcome in my "Marionette Boilerplate" project!',
    'home.play': 'Play with it and... Have fun!',
    'home.enjoy': 'Enjoy coding!',
    brand: 'Marionette Boilerplate',
    menu: 'menu',
    'menu.welcome': 'Welcome',
    'menu.libraries': 'Libraries',
    'menu.hello': 'Hello',
    'hello.world': 'Hello World!',
    'hello.whatsup': 'What\'s up ?',
    'hello.do.you.enjoy.this.boilerplate': 'Do you enjoy this boilerplate?',
    'libraries.you.now.have': 'You now have',
    'libraries.installed': 'installed.',
    'libraries.enjoy.coding': 'Enjoy coding!',
  };
  var i18n = Object.create(null);

  i18n.t = function (key) {
    return keys[key] || key;
  };

  return i18n;
});
