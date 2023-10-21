/* globals Swiper */
const enableSliderTextPage = () => {
  const slider = new Swiper('.text-page__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.text-page__slider-pagination',
      clickable: true,
      bulletClass: 'page-text-slider__bullet',
      bulletActiveClass: 'page-text-slider__bullet--active',
      clickableClass: 'page-text-slider__pagination--clickable',
      modifierClass: 'page-text-slider__pagination--',
    },
    navigation: {
      nextEl: '.text-page__slider-button--next',
      prevEl: '.text-page__slider-button--prev',
      disabledClass: '.text-page__slider-button--disabled',
    },
    a11y: {
      notificationClass: 'page-text-slider__notification',
    },
  });

  return slider;
};

export {
  enableSliderTextPage
};
