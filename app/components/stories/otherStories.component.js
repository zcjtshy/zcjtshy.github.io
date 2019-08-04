import storiesTemplate from './stories.component.html';

var description = "Copy for immigrant stories."

var storiesComponentController = ['otherStoriesService', function(otherStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = description;
  otherStoriesService.getStories().then(stories => {
    $ctrl.stories = stories;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
