"use strict";

document.getElementsByClassName('menu-nav__burger')[0].addEventListener('click', burgerClick);
var bugerOpen = false;
var icon = document.getElementsByClassName('menu-nav__burger')[0];
var menuBtn = document.getElementsByClassName('menu-nav__links-ul')[0].getElementsByTagName('li');
timeLine = new gsap.timeline();

function burgerClick() {
  var timeLineBurger = new TimelineMax();

  if (bugerOpen) {
    bugerOpen = false;
    icon.setAttribute("src", "../asset/images/icon-hamburger.svg");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = menuBtn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var btn = _step.value;
        timeLineBurger.to(btn, 0.2, {
          x: -300,
          opacity: '0',
          ease: Circ.easeOut
        }, '-=0.14');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    document.querySelectorAll("html")[0].style.overflow = "scroll";
    timeLineBurger.to('.menu-nav__links-ul', 0.2, {
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      ease: Circ.easeOut
    }, '-=0.14');
    timeLineBurger.to('.menu-nav__links-ul', {
      display: 'none'
    });
  } else {
    bugerOpen = true;
    document.querySelectorAll("html")[0].style.overflow = "hidden";
    timeLineBurger.to('.menu-nav__links-ul', {
      display: 'block'
    });
    icon.setAttribute("src", "../asset/images/icon-close.svg");
    timeLineBurger.to('.menu-nav__links-ul', 0.3, {
      transform: 'scaleY(1)',
      transformOrigin: 'top',
      ease: Circ.easeOut
    }, 0, '+=0.14');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = menuBtn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var btn = _step2.value;
        timeLineBurger.to(btn, 0.30, {
          x: 0,
          ease: Circ.easeOut
        }, '-=0.30');
        timeLineBurger.to(btn, 0.35, {
          opacity: '1',
          ease: Circ.easeOut
        }, '-=0.22');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
}