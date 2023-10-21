const fieldSearch = document.querySelector('.header__search');

const visibleSearchField = () => {
  document.addEventListener('click', (evt) => {
    let target = evt.target;
    if (fieldSearch) {
      if (target.closest('.header__contact-button--search')) {
        fieldSearch.classList.toggle('active');
      } else if (!target.closest('.header__contact-button--search') && !target.closest('.header__search')) {
        fieldSearch.classList.remove('active');
      }
    }
  });
};

const onPopupEscPress = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (fieldSearch) {
      fieldSearch.classList.remove('active');
    }
  }
};
document.addEventListener('keydown', onPopupEscPress);

export {visibleSearchField};
