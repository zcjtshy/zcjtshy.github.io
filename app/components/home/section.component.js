import sectionTemplate from './section.component.html';


var sectionComponentController = function(){
};

export var sectionComponent = {
  bindings: {
    innerid: "@",
    backgroundImg: "@",
  },
  transclude: true,
  template: sectionTemplate,
  controller: sectionComponentController
};
