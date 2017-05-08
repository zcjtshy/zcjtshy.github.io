import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Stories": "stories"
  };
}

export var navComponent = {
  template: navTemplate,
  controller: navController
};
