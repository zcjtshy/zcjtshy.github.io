import storiesTemplate from './otherStories.component.html';

var storiesComponentController = ['otherStoriesService', function(otherStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  otherStoriesService.getStories().then(stories => {
    $ctrl.stories = stories;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
