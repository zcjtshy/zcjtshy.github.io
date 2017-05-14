import storyTemplate from './story.component.html';

const MAX_WORD_COUNT = 50;

var storyComponentController = ['$sce', '$location', function($sce, $location){
  var modal_id;
  var $ctrl = this;
  $ctrl.zoomed = false;

  $ctrl.facebook_share_iframe_url = $sce.trustAsResourceUrl(`https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent(window.location.href)}&layout=button&size=small&mobile_iframe=true&width=59&height=20`);
  

  $ctrl.$onInit = () => {
    modal_id = 'story' + $ctrl.story.id;
    $ctrl.story.short = $ctrl.story.story.split(' ', MAX_WORD_COUNT).join(' ');
    $ctrl.story.name = $ctrl.story.name || '(Anonymous)';

    $ctrl.zoom = () => {
      $location.hash(modal_id);
      $ctrl.zoomed = true;
    };
  };

  // set timeout with 0 so that the listening is registered when all the DOM are rendered
  setTimeout(() => {
    $(`#${modal_id}`).on('hidden', function(){
      window.location.hash = '';
      $ctrl.zoomed = false;
    });
    if(modal_id === $location.hash()) $(`a[href="#${modal_id}"]`).trigger('click');
  }, 0);
}];

export var storyComponent = {
  bindings: {
    story: '=',
  },
  template: storyTemplate,
  controller: storyComponentController
};
