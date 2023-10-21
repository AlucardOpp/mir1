const setCatalogForm = () => {
  const catalogForm = document.querySelector('.catalog-form__form');
  const clearButton = document.querySelector('.catalog-form__clear');
  const openFilters = document.querySelector('.catalog-form__open');
  const catalogContainer = document.querySelector('.catalog-form__container');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      catalogForm.reset();
    });
  }
  if (openFilters) {
    openFilters.addEventListener('click', () => {
      catalogContainer.classList.toggle('catalog-form__container--show');
      openFilters.classList.toggle('catalog-form__open--show');
      if (openFilters.classList.contains('catalog-form__open--show')) {
        openFilters.setAttribute('aria-label', 'Закрыть форму');
        openFilters.setAttribute('aria-pressed', 'true');
      } else {
        openFilters.setAttribute('aria-pressed', 'false');
        openFilters.setAttribute('aria-label', 'Открыть форму');
      }
    });
    openFilters.addEventListener('keydown', () => {
      if (openFilters.classList.contains('catalog-form__open--show')) {
        catalogContainer.classList.add('catalog-form__container--show');
        openFilters.classList.add('catalog-form__open--show');
        openFilters.setAttribute('aria-label', 'Закрыть форму');
        openFilters.setAttribute('aria-pressed', 'true');
      } else {
        catalogContainer.classList.remove('catalog-form__container--show');
        openFilters.classList.remove('catalog-form__open--show');
        openFilters.setAttribute('aria-label', 'Открыть форму');
        openFilters.setAttribute('aria-pressed', 'false');
      }
    });
  }
};

export {
  setCatalogForm
};
