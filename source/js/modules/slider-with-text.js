/* globals Swiper */
const enableSliderWithText = () => {
  const sliderWithText = new Swiper('.slider-with-text', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    shortSwipes: false,
    pagination: {
      el: '.slider-with-text__pagination',
      clickable: true,
      bulletClass: 'page-text-slider__bullet',
      bulletActiveClass: 'page-text-slider__bullet--active',
      clickableClass: 'page-text-slider__pagination--clickable',
      modifierClass: 'page-text-slider__pagination--',
    },
    navigation: {
      nextEl: '.slider-with-text__button--next',
      prevEl: '.slider-with-text__button--prev',
      disabledClass: '.slider-with-text__button--disabled',
    },
  });

  return sliderWithText;
};

export {
  enableSliderWithText
};
