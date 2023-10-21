/* globals Swiper */
const enableMainProjectsSlider = () => {
  const mainProjects = new Swiper('.main-projects__slider', {
    a11y: {
      notificationClass: 'main-projects__notification',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
    navigation: {
      nextEl: '.main-projects__button--next',
      prevEl: '.main-projects__button--prev',
      disabledClass: 'main-projects__button--disabled',
    },
    containerModifierClass: 'main-projects__slider--',
    slideClass: 'main-projects__slide',
    slideActiveClass: 'main-projects__slide--active',
    slideNextClass: 'main-projects__slide--next',
    slidePrevClass: 'main-projects__slide--prev',
    wrapperClass: 'main-projects__wrapper',
    slideDuplicateActiveClass: 'main-projects__slide--duplicate-active',
    slideDuplicateClass: 'main-projects__slide--duplicate',
    slideDuplicatePrevClass: 'main-projects__slide--duplicate-prev',
    slideDuplicateNextClass: 'main-projects__slide--duplicate-next',
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: '.main-projects__pagination',
      clickable: true,
      bulletClass: 'main-projects__bullet',
      bulletActiveClass: 'main-projects__bullet--active',
      clickableClass: 'main-projects__pagination--clickable',
      modifierClass: 'main-projects__pagination--',
      bulletElement: 'button',
    },
  });

  return mainProjects;
};

export {
  enableMainProjectsSlider
};
