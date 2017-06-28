import supportTemplate from './support.component.html';
import backgroundImg from '../../../images/infosupport.jpg';

var supports = [
  {
    title: 'General Mental Health Support',
    meta: 'Organisations offering information and support on a wide range of mental health problems',
    links: { 
      'Mind': 'http://www.mind.org.uk/information-support/',
      'Rethink': 'https://www.rethink.org/',
      'Big White Wall': 'https://www.bigwhitewall.com/landing-pages/landingV3.aspx?ReturnUrl=%2f',
      'Time to Change': 'http://www.time-to-change.org.uk/',
    }
  },
  {
    title: 'For those suffering from depression',
    links: { 
      'Charlie Waller Memorial Trust': 'http://www.cwmt.org.uk/',
    }
  },
  {
    title: 'For those suffering from anxiety',
    links: { 
      'Anxiety UK': 'https://www.anxietyuk.org.uk/',
    }
  },
  {
    title: 'For those suffering from Obsessive Compulsive Disorder',
    links: { 
      'OCD Action': 'http://www.ocdaction.org.uk/',
    }
  },
  {
    title: 'For those suffering from Body Dysmorphic Disorder',
    links: { 
      'Body Dysmorphic Disorder Foundation': 'http://bddfoundation.org/',
    }
  },
];


var supportComponentController = [function(){
  var $ctrl = this;
  $ctrl.supports = supports;
  $ctrl.backgroundImg = backgroundImg;
}];

export var supportComponent = {
  template: supportTemplate,
  controller: supportComponentController
};
