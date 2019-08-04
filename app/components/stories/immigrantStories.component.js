import storiesTemplate from './stories.component.html';

var description = "Copy for immigrant stories."

var storiesComponentController = ['immigrantStoriesService', function(immigrantStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = description;
  immigrantStoriesService.getStories().then(stories => {
    $ctrl.stories = stories;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
