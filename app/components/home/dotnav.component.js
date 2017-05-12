import dotnavTemplate from './dotnav.component.html';


var dotnavComponentController = ['$anchorScroll', function($anchorScroll){
  this.scroll = function(){
    $anchorScroll(); 
  };
}];

export var dotnavComponent = {
  template: dotnavTemplate,
  controller: dotnavComponentController
};
