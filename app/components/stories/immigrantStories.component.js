import storiesTemplate from './stories.component.html';

var storiesComponentController = ['immigrantStoriesService', function(immigrantStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = '';
  immigrantStoriesService.getStories().then(data => {
    $ctrl.stories = data.stories;
    $ctrl.description = data.description;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController
};
