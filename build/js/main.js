/* eslint-disable new-cap, no-undef, no-undef, no-unused-vars */
'use strict';

// Слайдер bonuses
var sliderBonuses = new Swiper('.bonuses-slider', {
  navigation: {
    nextEl: '.bonuses__button-prev',
    prevEl: '.bonuses__button-next'
  },
  loop: true,
  pagination: {
    el: '.bonuses__pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Слайдер winners
var sliderWinners = new Swiper('.winners-slider', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    430: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 25
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 25
    },
    1400: {
      slidesPerView: 7,
      slidesPerGroup: 1,
      spaceBetween: 25
    }
  }
});

//Открыть меню
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var pageHeader = document.querySelector('.header__wrapper--mobile');
var headerToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('header__wrapper--no-js');

var onMenuEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    hideMenu();
  }
};

var showMenu = function () {
  pageHeader.classList.add('header__wrapper--close');
  document.addEventListener('keydown', onMenuEscPress);
};

var hideMenu = function () {
  pageHeader.classList.remove('header__wrapper--open');
  pageHeader.classList.add('header__wrapper--close');
  document.removeEventListener('keydown', onMenuEscPress);
};

if (headerToggle) {
  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('header__wrapper--close')) {
      pageHeader.classList.remove('header__wrapper--close');
      pageHeader.classList.add('header__wrapper--open');
      document.addEventListener('keydown', onMenuEscPress);
    } else {
      pageHeader.classList.add('header__wrapper--close');
      pageHeader.classList.remove('header__wrapper--open');
      document.removeEventListener('keydown', onMenuEscPress);
    }
  });

  headerToggle.addEventListener('keydown', function (evt) {
    if (pageHeader.classList.contains('header__wrapper--close')) {
      if (evt.key === ENTER_KEY) {
        showMenu();
      }
    } else if (pageHeader.classList.contains('header__wrapper--open')) {
      if (evt.key === ENTER_KEY) {
        hideMenu();
      }
    }
  });
}

// Открывает и закрывает Аккордеон
var accordions = document.querySelectorAll('.footer-nav__accordion');
var accordionsButton = document.querySelectorAll('.footer-nav__button-accordion');
var accordionsList = document.querySelectorAll('.footer-nav__accordion-list');
var accordionsOpen = document.querySelectorAll('.footer-nav__accordion-open-block');

if(accordions) {
  accordions.forEach(function (accordion) {
    var button = accordion.querySelector('.footer-nav__button-accordion');
    var list = accordion.querySelector('.footer-nav__accordion-list');
    var openBlock = accordion.querySelector('.footer-nav__accordion-open-block');

    button.classList.remove('footer-nav__button-accordion--nojs');
    list.classList.remove('footer-nav__accordion-list--nojs');

    openBlock.addEventListener('click', function () {
      if (button.classList.contains('footer-nav__button-accordion--opened')) {
        button.classList.remove('footer-nav__button-accordion--opened');
      } else {
        accordionsButton.forEach(function (accordionButton) {
          accordionButton.classList.remove('footer-nav__button-accordion--opened');
        });
        button.classList.add('footer-nav__button-accordion--opened');
      }
      if (list.classList.contains('footer-nav__accordion-list--opened')) {
        list.classList.remove('footer-nav__accordion-list--opened');
      } else {
        accordionsList.forEach(function (accordionList) {
          accordionList.classList.remove('footer-nav__accordion-list--opened');
        });
        list.classList.add('footer-nav__accordion-list--opened');
      }
    });
  });
}
