import cardTemplate from './card.component.html';

export var cardComponent = {
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
