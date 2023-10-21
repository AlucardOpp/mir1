/* globals Swiper */
const enableSliderImage = () => {
  const sliderImage = new Swiper('.slider-image', {
    a11y: {
      notificationClass: 'slider-image__notification',
    },
    containerModifierClass: 'slider-image--',
    slideClass: 'slider-image__slide',
    slideActiveClass: 'slider-image__slide--active',
    slideNextClass: 'slider-image__slide--next',
    slidePrevClass: 'slider-image__slide--prev',
    wrapperClass: 'slider-image__wrapper',
    loop: true,
    shortSwipes: false,
    pagination: {
      el: '.slider-image__pagination',
      clickable: true,
      bulletClass: 'slider-image__pagination-bullet',
      bulletActiveClass: 'slider-image__pagination-bullet--active',
      clickableClass: 'slider-image__pagination--clickable',
      modifierClass: 'slider-image__pagination--',
    },
    navigation: {
      nextEl: '.slider-image__btn--next',
      prevEl: '.slider-image__btn--prev',
      disabledClass: '.slider-image__btn--disabled',
    },
  });

  return sliderImage;
};

export {enableSliderImage};
