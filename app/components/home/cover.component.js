import coverTemplate from './cover.component.html';

const pathToImages = require.context('../../../images', true);


var coverComponentController = ['$interval', function($interval){
  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map((f) => '/dist/' + pathToImages('./' + f));
  this.active = 0;
  $interval(() => {
    this.active = (this.active + 1) % this.images.length
  }, 3500);
}];

export var coverComponent = {
  template: coverTemplate,
  controller: coverComponentController
};
