import {Modals} from './modals';

let modals;

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
      if (isMobile) {
        el.classList.add('modal--mobile');
      }
    });
  }

  modals = new Modals(settings);
  window.modals = modals;
};

export {modals, initModals};
