import aboutTemplate from './about.component.html';
import { requireImage } from '../../webpack-require';

export var aboutComponent = {
  template: aboutTemplate,
  controller: function(){
    this.backgroundImg = requireImage('aboutus.jpg'); 
  }
};
