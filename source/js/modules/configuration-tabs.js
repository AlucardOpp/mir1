/* globals Swiper */
const contents = document.querySelectorAll('.tab-info__content');
const tabs = document.querySelectorAll('.tab-info__control');

const findClearActiveClass = (elements, className = 'active') => {
  Array.from(elements).find((item) => item.classList.remove(`${className}`));
};

const setActiveClass = (element, index, className = 'active') => {
  element[index].classList.add(`${className}`);
};

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      return;
    }

    const currentItem = index;

    findClearActiveClass(tabs);
    findClearActiveClass(contents);

    setActiveClass(tabs, currentItem);
    setActiveClass(contents, currentItem);
  });
};

const initConfigurationTab = () => {
  tabs.forEach(checkoutTabs);
};

const enableSwiperTabs = () => {
  const swiperTabs = new Swiper('.tab-info__controls', {
    simulateTouch: true,
    breakpoints: {
      1024: {
        watchOverflow: true,
        slidesPerView: 'auto',
      },
      1023: {
        slidesPerView: 4.5,
        sliderPerGroup: 1,
      },
      768: {
        slidesPerView: 3.5,
        sliderPerGroup: 1,
      },
      350: {
        slidesPerView: 2.5,
        sliderPerGroup: 1,
      },
      320: {
        slidesPerView: 1.5,
        sliderPerGroup: 1,
      },
    },
    a11y: {
      notificationClass: 'tab-info__controls-notification',
    },
    containerModifierClass: 'product-card-info__tabs--',
    slideClass: 'tab-info__controls-item',
    slideActiveClass: 'tab-info__controls-item--active',
    slideNextClass: 'tab-info__controls-item--next',
    slidePrevClass: 'tab-info__controls-item--prev',
    wrapperClass: 'tab-info__controls-list',
  });

  const swiperContainerTabs = new Swiper('.tab-info__contents', {
    direction: 'horizontal',
    thumbs: {
      swiper: swiperTabs,
    },
  });

  return swiperTabs;
};

export {initConfigurationTab, enableSwiperTabs};
