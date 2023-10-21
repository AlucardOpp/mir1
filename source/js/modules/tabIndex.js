const disableTabIndex = () => {
  const duplicateSlides = document.querySelectorAll('.main-projects__slide--duplicate');
  if (duplicateSlides) {
    duplicateSlides.forEach((slide) => {
      const duplicateLink = slide.querySelector('.main-projects__link');
      duplicateLink.tabIndex = '-1';
    });
  }
};

const enableTabIndex = () => {
  const selectOptions = document.querySelectorAll('.select__option');
  if (selectOptions) {
    selectOptions.forEach((option) => {
      option.tabIndex = '0';
    });
  }
};

export {
  disableTabIndex,
  enableTabIndex
};
