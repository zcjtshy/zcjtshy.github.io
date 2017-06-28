import aboutTemplate from './about.component.html';
import backgroundImg from '../../../images/aboutus.jpg';

export var aboutComponent = {
  template: aboutTemplate,
  controller: function(){
    this.backgroundImg = backgroundImg; 
  }
};
