import { requireImage } from '../webpack-require';

var description = 'Copy for immigrant stories.';

var stories = [
  {
    id:0,
    title:'Immigrant Story 1',
    name:'Immigrant Story 1',
    image:'deardiary.jpg',
    filter:[],
    story: `Exchanged presents stories you won’t hear anywhere else. Part installation and part story-telling space, Exchanged is a display of objects from around the UK that offers a snapshot of what is happening in detention centres, in squats, in alternative communities, in hostels, day centres and on the streets, objects have been donated from a wide range of sources including homelessness workers, volunteers, activists and people experiencing various forms of homelessness.The objects were grouped into four zones that show responses to homelessness – compassion, cruelty, resistance and process. We have the objects in zones related to these words for the show and we invite our audience to choose where they would place them, once they have heard the testimony. If you have a story to share inspired by these objects, you can do that too by speaking to one of our team.`,
  },
  {
    id: 1,
    title:'Immigrant Story 2',
    name:'Immigrant Story 2',
    image:'deardiary.jpg',
    filter:[],
    story:`The exhibition gave marginalised young men from the project an opportunity to display their artwork. This artwork took audience through different aspects of their life including school, mental health, poverty, safety, violence & criminal justice. This was a powerful interactive exhibition that used objects to tell stories about struggles. 
    “An exhibition which takes you on a journey of the reality of a young person’s life in the shadows, the story most people don’t get to see. The pain, the suffering, the scars, the hurdles and the struggles we go through and overcome. Come and take the journey with us to feel and understand the life behind the scenes of a young person. As young people who are often labelled as either a “gang member”, “criminal” or “bad kid” we will show you the side of the story that doesn’t get heard. We’ll also share with you our ideas on what makes a difference.” – cited from the event page`
  },
];// append each image with the directory

stories.forEach((s) => {
  if(s.image) s.image = requireImage(s.image);
});

export default {
  stories,
  description,
};
