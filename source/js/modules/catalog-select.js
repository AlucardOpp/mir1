import customSelect from '../vendor/custom-select';

const setCatalogSelect = () => {
  customSelect('select');
  if (document.querySelector('#catalog-select')) {
    let select = document.querySelector('#catalog-select').customSelect;
    const something = () => {
      return select;
    };
    something();
  }
};

export {
  setCatalogSelect
};
