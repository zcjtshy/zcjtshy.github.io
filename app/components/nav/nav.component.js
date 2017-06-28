import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Stories": "stories"
  };
}

export default {
  template: navTemplate,
  controller: navController
};
