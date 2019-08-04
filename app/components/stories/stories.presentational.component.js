import storiesTemplate from './stories.presentational.component.html';

var storiesComponentController = [function(){
  var $ctrl = this;
}];

export default {
  bindings: {
    stories: '=',
    description: '=',
  },
  template: storiesTemplate,
  controller: storiesComponentController
};
