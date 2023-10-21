/* globals Swiper */
const enablePromoSlider = () => {
  const promo = new Swiper('.promo__slider', {
    a11y: {
      notificationClass: 'promo__notification',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    containerModifierClass: 'promo__slider--',
    slideClass: 'promo__slide',
    slideActiveClass: 'promo__slide--active',
    slideNextClass: 'promo__slide--next',
    slidePrevClass: 'promo__slide--prev',
    slideDuplicateActiveClass: 'promo__slide--duplicate-active',
    slideDuplicateClass: 'promo__slide--duplicate',
    slideDuplicatePrevClass: 'promo__slide--duplicate-prev',
    slideDuplicateNextClass: 'promo__slide--duplicate-next',
    wrapperClass: 'promo__wrapper',
    loop: true,
    spaceBetween: 170,
    pagination: {
      el: '.promo__pagination',
      clickable: true,
      bulletClass: 'promo__bullet',
      bulletActiveClass: 'promo__bullet--active',
      clickableClass: 'promo__pagination--clickable',
      modifierClass: 'promo__pagination--',
      bulletElement: 'button',
    },
  });

  return promo;
};

export {
  enablePromoSlider
};
