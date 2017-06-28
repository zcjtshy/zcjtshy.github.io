import contactusTemplate from './contactus.component.html';
import { requireImage } from '../../webpack-require';

export default {
  template: contactusTemplate,
  controller: function(){
    this.backgroundImg = requireImage('contactus.jpg'); 
  }
};
