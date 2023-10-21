import {desktopWidth} from './constants';

const setAccordions = () => {
  let questionsAccordionTriggers;
  let questionsTriggersExist = false;
  const windowWidth = window.innerWidth;
  const questions = document.querySelector('.main-qanda');

  if (questions) {
    questionsTriggersExist = true;
    questionsAccordionTriggers = questions.querySelectorAll('h3');

    const onQuestionAccordionClick = (evt) => {
      const id = evt.target.getAttribute('data-accordion');
      const item = questions.querySelector('li[data-accordion="' + id + '"]');
      const title = item.querySelector('h3');

      if (!item.classList.contains('accordion__item--show')) {
        item.classList.add('accordion__item--show');
        title.blur();
      } else {
        item.classList.remove('accordion__item--show');
        title.blur();
      }
    };

    const onQuestionAccordionKeydown = (evt) => {
      const id = evt.target.getAttribute('data-accordion');
      const item = questions.querySelector('li[data-accordion="' + id + '"]');
      const title = item.querySelector('h3');

      if (evt.key === ' ' || evt.key === 'Enter') {
        evt.preventDefault();
        if (!item.classList.contains('accordion__item--show')) {
          item.classList.add('accordion__item--show');
          if (windowWidth < desktopWidth) {
            title.blur();
          }
        } else {
          item.classList.remove('accordion__item--show');
          if (windowWidth < desktopWidth) {
            title.blur();
          }
        }
      }
    };

    if (questionsTriggersExist) {
      questionsAccordionTriggers.forEach((trigger) => {
        trigger.addEventListener('click', onQuestionAccordionClick);
        trigger.addEventListener('keydown', onQuestionAccordionKeydown);
      });
    }
  }
};

export {
  setAccordions
};
