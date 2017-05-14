import coverTemplate from './cover.component.html';


var coverComponentController = ['$interval', function($interval){
  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map((f) => '/images/' + f);
  this.active = 0;
  $interval(() => {
    this.active = (this.active + 1) % this.images.length
  }, 3500);
}];

export var coverComponent = {
  template: coverTemplate,
  controller: coverComponentController
};
