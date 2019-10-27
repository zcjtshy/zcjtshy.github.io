import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Mental Health stories": "stories",
    "Vietnamese and Chinese Migrants in London stories": "immigrantStories",
    "Other stories": "otherStories",
    "About Us": "aboutUs"
  };
}

export default {
  template: navTemplate,
  controller: navController
};
