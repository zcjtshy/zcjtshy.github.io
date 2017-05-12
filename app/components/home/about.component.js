import aboutTemplate from './about.component.html';


var aboutComponentController = ['$interval', function($interval){
  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map((f) => 'http://soulrelicsmuseum.me/' + f);
  this.active = 0;
  $interval(() => {
    this.active = (this.active + 1) % this.images.length
  }, 3500);
}];

export var aboutComponent = {
  template: aboutTemplate,
  controller: aboutComponentController
};
