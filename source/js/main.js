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
  slidesPerView: 7,
  slidesPerGroup: 1,
  spaceBetween: 25,
});
