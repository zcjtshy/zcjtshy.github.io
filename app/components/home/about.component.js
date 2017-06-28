import aboutTemplate from './about.component.html';
import { requireImage } from '../../webpack-require';

export default {
  template: aboutTemplate,
  controller: function(){
    this.backgroundImg = requireImage('aboutus.jpg'); 
  }
};
