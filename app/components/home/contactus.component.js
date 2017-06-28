import contactusTemplate from './contactus.component.html';
import backgroundImg from '../../../images/contactus.jpg';


export var contactusComponent = {
  template: contactusTemplate,
  controller: function(){
    this.backgroundImg = backgroundImg; 
  }
};
