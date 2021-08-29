import storiesTemplate from './stories.component.html';

var storiesComponentController = ['$sce', 'hcwStoriesService', function($sce, hcwStoriesService){
  var $ctrl = this;
  $ctrl.stories = [];
  $ctrl.description = '';
  hcwStoriesService.getStories().then(data => {
    $ctrl.stories = data.stories;
    $ctrl.description = $sce.trustAsHtml(data.description);
  });
}];

export default {
  template: storiesTemplate,
  controller: storiesComponentController,
};