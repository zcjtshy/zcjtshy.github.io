import homeTemplate from './home.component.html';

function homeComponentController(){
  this.activeImage = 'http://soulrelicsmuseum.me/pebble.jpg';
}

export var homeComponent = {
  template: homeTemplate,
  controller: homeComponentController
};
