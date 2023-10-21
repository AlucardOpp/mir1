const setCheckboxAccordions = () => {
  let checkboxAccordionTriggers;
  let checkboxTriggersExist = false;

  const checkboxes = document.querySelector('.catalog-form__fieldset');

  if (checkboxes) {
    checkboxTriggersExist = true;
    checkboxAccordionTriggers = checkboxes.querySelectorAll('button');

    const onCheckboxAccordionClick = (event) => {
      const id = event.target.getAttribute('data-accordion');
      const item = checkboxes.querySelector('li[data-accordion="' + id + '"]');
      const showItem = document.querySelector('.catalog-form__item--show');
      const onEscKeydown = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          item.classList.remove('catalog-form__item--show');
          document.removeEventListener('keydown', onEscKeydown);
          document.removeEventListener('click', onOverlayClick);
        }
      };
      const onOverlayClick = (evt) => {
        const target = evt.target;
        const button = item.querySelector('button');
        const itsCheckbox = target === button || item.contains(target);
        if (!itsCheckbox) {
          item.classList.remove('catalog-form__item--show');
          document.removeEventListener('keydown', onEscKeydown);
          document.removeEventListener('click', onOverlayClick);
        }
      };
      document.addEventListener('keydown', onEscKeydown);
      document.addEventListener('click', onOverlayClick);


      if (showItem) {
        showItem.classList.remove('catalog-form__item--show');
      }
      if (item) {
        item.classList.toggle('catalog-form__item--show');
      }
      if (showItem === item) {
        item.classList.remove('catalog-form__item--show');
      }
    };

    if (checkboxTriggersExist) {
      checkboxAccordionTriggers.forEach((trigger) => {
        trigger.addEventListener('click', onCheckboxAccordionClick);
      });
    }
  }
};

export {
  setCheckboxAccordions
};
