import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/modals/init-modals';

import {visibleSearchField} from './modules/visible-search';
import {mobileMenu} from './modules/mobile-menu';
import {headerTabs} from './modules/header-tabs';
import {enablePromoSlider} from './modules/slider-promo';
import {enableMainProjectsSlider} from './modules/slider-main-projects';
import {enableSliderWithText} from './modules/slider-with-text';
import {enableSliderTextPage} from './modules/slider-text-page';
import {enableSliderImage} from './modules/slider-image';
import {enableSpecialOfferSlider} from './modules/slider-spec-offer';
import {enableRelatedProductsSlider} from './modules/slider-related-products';
import {setAccordions} from './modules/qanda-accordions';
import {setCheckboxAccordions} from './modules/checkbox-accordions';
import {setCatalogSelect} from './modules/catalog-select';
import {setCatalogForm} from './modules/catalog-form';
import {initPhoneMask} from './modules/phone-mask';
import {initConfigurationTab} from './modules/configuration-tabs';
import {enableSwiperTabs} from './modules/configuration-tabs';
import {disableTabIndex, enableTabIndex} from './modules/tabIndex';
import {initAutoResizeTextarea} from './modules/auto-resize-textarea';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  visibleSearchField();
  mobileMenu();
  headerTabs();
  enablePromoSlider();
  enableMainProjectsSlider();
  enableSliderWithText();
  enableSliderTextPage();
  enableSliderImage();
  enableSpecialOfferSlider();
  enableRelatedProductsSlider();
  enableSwiperTabs();
  setAccordions();
  setCheckboxAccordions();
  setCatalogSelect();
  setCatalogForm();
  initPhoneMask();
  initConfigurationTab();
  disableTabIndex();
  enableTabIndex();
  initAutoResizeTextarea();


  window.addEventListener('load', () => {
    initModals();
  });
});
