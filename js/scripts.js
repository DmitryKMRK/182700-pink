var toggle = document.querySelector('.header__toggle');
var header = document.querySelector('.header__top');
var menu = document.querySelector('.header__nav');
var state = 'close';

menu.classList.remove('header__nav--open');
toggle.classList.remove('header__toggle--nojs');
header.classList.remove('header__top--open');

toggle.addEventListener('click', function() {
  if(state === 'close') {
    header.classList.add('header__top--open');
    menu.classList.add('header__nav--open');
    toggle.classList.add('header__toggle--open');
    state = 'open';
  } else {
    header.classList.remove('header__top--open');
    menu.classList.remove('header__nav--open');
    toggle.classList.remove('header__toggle--open');
    state = 'close';
  }
});

/*
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
  }
});
*/
