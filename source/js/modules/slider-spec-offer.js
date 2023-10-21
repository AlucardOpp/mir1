/* globals Swiper */
const enableSpecialOfferSlider = () => {
  const specialOferImage = new Swiper('.product-card-offer__slider', {
    a11y: {
      notificationClass: 'product-card-offer__notification',
    },
    containerModifierClass: 'product-card-offer__slider--',
    slideClass: 'product-card-offer__slide',
    slideActiveClass: 'product-card-offer__slide--active',
    slideNextClass: 'product-card-offer__slide--next',
    slidePrevClass: 'product-card-offer__slide--prev',
    wrapperClass: 'product-card-offer__slider-wrapper',
    loop: true,
    shortSwipes: false,
    pagination: {
      el: '.product-card-offer__slider-pagination',
      clickable: true,
      bulletClass: 'product-card-offer__slider-pagination-bullet',
      bulletActiveClass: 'product-card-offer__slider-pagination-bullet--active',
      clickableClass: 'product-card-offer__slider-pagination--clickable',
      modifierClass: 'product-card-offer__slider-pagination--',
    },

    navigation: {
      nextEl: '.product-card-offer__slider-btn--next',
      prevEl: '.product-card-offer__slider-btn--prev',
      disabledClass: '.product-card-offer__slider-btn--disabled',
    },
  });

  return specialOferImage;
};

export {enableSpecialOfferSlider};
