import cardTemplate from './card.component.html';

export var cardComponent = {
  bindings: {
    image: '@',
    title: '@',
    body: '@',
    meta: '@',
  },
  template: cardTemplate,
  controller: () => {}
};
