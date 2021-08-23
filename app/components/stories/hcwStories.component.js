import storiesTemplate from './stories.component.html';

var storiesComponentController = ['hcwStoriesService', function(hcwStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = '';
  hcwStoriesService.getStories().then(data => {
    $ctrl.stories = data.stories;
    $ctrl.description = data.description;
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController,
};