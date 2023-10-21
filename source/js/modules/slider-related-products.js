/* globals Swiper */
const enableRelatedProductsSlider = () => {
  const sliderCards = new Swiper('.product-similar__slider', {
    a11y: {
      notificationClass: 'product-similar__slider-notification',
    },
    containerModifierClass: 'product-similar__slider--',
    slideClass: 'product-similar__slide',
    slideActiveClass: 'product-similar__slide--active',
    slideNextClass: 'product-similar__slide--next',
    slidePrevClass: 'product-similar__slide--prev',
    wrapperClass: 'product-similar__slider-wrapper',
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: '.product-similar__slider-pagination',
      clickable: true,
      bulletClass: 'product-similar__slider-pagination-bullet',
      bulletActiveClass: 'product-similar__slider-pagination-bullet--active',
      clickableClass: 'product-similar__slider-pagination--clickable',
      modifierClass: 'product-similar__slider-pagination--',
    },

    navigation: {
      nextEl: '.product-similar__slider-btn--next',
      prevEl: '.product-similar__slider-btn--prev',
      disabledClass: '.product-similar__slider-btn--disabled',
    },
  });

  return sliderCards;
};

export {enableRelatedProductsSlider};
