import facebookShareTemplate from './facebook-share.component.html';

const facebookShareComponentController = ['$sce', function($sce){
  var $ctrl = this;

  $ctrl.$onInit = () => {
    $ctrl.facebook_share_iframe_url = $sce.trustAsResourceUrl(`https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent($ctrl.link)}&layout=button&size=small&mobile_iframe=true&width=59&height=20`);
  };
}];

export default {
  bindings: {
    link: '@',
  },
  template: facebookShareTemplate,
  controller: facebookShareComponentController
};
