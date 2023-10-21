const BREAKPOINT_TABLET = window.matchMedia('(max-width: 1023px)');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const body = document.body;
const modal = document.querySelector('.modal');

if (header) {
  header.classList.remove('header--nojs');
}

const mobileMenu = () => {
  if (burger) {
    burger.addEventListener('click', () => {
      if (header.classList.contains('opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
};

const deleteOpened = () => {
  if (!BREAKPOINT_TABLET.matches) {
    closeMenu();
  }
};

const openMenu = () => {
  header.classList.add('opened');
  body.style.position = 'fixed';
};

const closeMenu = () => {
  header.classList.remove('opened');
  body.style.position = 'relative';
};

const onPopupEscPress = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (header && !modal.classList.contains('is-active')) {
      header.classList.remove('opened');
      body.style.position = 'relative';
    }
  }
};
document.addEventListener('keydown', onPopupEscPress);
document.addEventListener('click', (evt) => {
  if (!evt.target.closest('.header') && modal.classList.contains('is-active')) {
    if (header) {
      header.classList.remove('opened');
    }
  }
});

BREAKPOINT_TABLET.addListener(deleteOpened);

export {mobileMenu};
