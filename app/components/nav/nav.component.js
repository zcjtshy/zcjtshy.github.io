import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Mental Health stories": "stories",
    "Immigrant stories": "immigrantStories",
    "Other stories": "otherStories",
    "About Us": "aboutUs"
  };
}

export default {
  template: navTemplate,
  controller: navController
};
