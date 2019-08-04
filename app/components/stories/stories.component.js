import storiesTemplate from './stories.component.html';

var description = "Copy for mental health stories."

var storiesComponentController = ['storiesService', function(storiesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = description;
  storiesService.getStories().then(stories => {
    $ctrl.stories = stories;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
