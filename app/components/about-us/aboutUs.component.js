import aboutUsTemplate from "./aboutUs.component.html";
import { requireImage } from '../../webpack-require';

var aboutUsComponentController = [function() {
  var $ctrl = this;
  this.vanessaImage = requireImage("vanessa.jpg");
}]

export default {
  template: aboutUsTemplate,
  controller: aboutUsComponentController
};
