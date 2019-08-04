import storiesTemplate from './stories.component.html';

var storiesComponentController = ['storiesService', function(storiesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = '';
  storiesService.getStories().then(data => {
    $ctrl.stories = data.stories;
    $ctrl.description = data.description;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
