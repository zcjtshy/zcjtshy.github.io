import storiesTemplate from './stories.component.html';

var storiesComponentController = ['otherStoriesService', function(otherStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = '';
  otherStoriesService.getStories().then(data => {
    $ctrl.stories = data.stories;
    $ctrl.description = data.description;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
