import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Stories": "stories",
    "Other stories": "otherStories",
  };
}

export default {
  template: navTemplate,
  controller: navController
};
