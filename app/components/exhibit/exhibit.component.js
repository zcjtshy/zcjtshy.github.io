import exhibitTemplate from "./exhibit.component.html";

//var exhibitComponentController = [function() {  var $ctrl = this;}]

function exhibitComponentController(){
 this.navs = {
    "Start": "start",
    "End": "end",
    "Back to Homepage": "home",
 };
}

export default {
  template: exhibitTemplate,
  controller: exhibitComponentController
};
