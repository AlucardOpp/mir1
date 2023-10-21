const triggers = document.querySelectorAll('.nav__name-links');
const items = document.querySelectorAll('.nav__item');

const headerTabs = () => {
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      let parent = trigger.parentNode;
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        items.forEach((child) => {
          child.classList.remove('active');
          document.addEventListener('click', (evt) => {
            if (!evt.target.closest('.nav__name-links')) {
              child.classList.remove('active');
            }
          });
        });
        parent.classList.add('active');
      }
    });
  });
};

const onPopupEscPress = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    items.forEach((item) => {
      item.classList.remove('active');
    });
  }
};
document.addEventListener('keydown', onPopupEscPress);

export {headerTabs};
