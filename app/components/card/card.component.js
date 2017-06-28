import cardTemplate from './card.component.html';

export default {
  bindings: {
    image: '@',
    title: '@',
    meta: '@',
    hover: '@',
  },
  transclude: true,
  template: cardTemplate,
  controller: () => {}
};
