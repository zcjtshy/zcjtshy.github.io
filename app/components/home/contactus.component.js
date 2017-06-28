import contactusTemplate from './contactus.component.html';
import { requireImage } from '../../webpack-require';

export var contactusComponent = {
  template: contactusTemplate,
  controller: function(){
    this.backgroundImg = requireImage('contactus.jpg'); 
  }
};
