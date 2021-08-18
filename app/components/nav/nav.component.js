import navTemplate from './nav.component.html';

function navController(){
  this.navs = {
    "Home": "home",
    "Mental Health stories": "stories",
    "Vietnamese and Chinese Migrants in London stories": "immigrantStories",
    "International Healthcare Workers' stories and COVID-19": "hcwStories",
    "Other stories": "otherStories",
    "About Us": "aboutUs"
  };
}

export default {
  template: navTemplate,
  controller: navController
};
