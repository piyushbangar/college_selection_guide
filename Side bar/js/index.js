'use strict';

var menuToggler = document.getElementById('menuToggler');
var menuTogglerLabel = document.getElementById('menuTogglerLabel');
var sidebar = document.getElementById('sidebar');
var menuItems = document.getElementsByClassName('menu__link');

menuToggler.addEventListener('change', function () {
  if (menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  for (var _iterator = menuItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var menuItem = _ref;

    if (menuToggler.checked) {
      menuItem.setAttribute('tabindex', '0');
    } else {
      menuItem.setAttribute('tabindex', '-1');
    }
  }
});