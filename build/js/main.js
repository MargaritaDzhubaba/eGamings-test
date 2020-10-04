'use strict';
var slider = document.querySelector('.bonuses-slider');

var sliderBonuses = new Swiper(slider, {
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
