import { requireImage } from '../webpack-require';

var description = 'Please submit your story to our google form here';

var stories = [
  {
  	id: 1,
    title: 'pandemic yoga',
    name: 'Shehani',
    image: 'yoga.jpg',
    filter: 'pandemic',
    story: `Around Feb 2020 I experienced bouts of anxiety over my final year thesis and future plans. It made me feel breathless and made my heart beat raise. It was different from other times I had felt anxious, which was mostly feelings of butterflies in my stomach. With my 2020 anxiety, it was more physiological and I couldn’t just shrug it off. My relic reminding me of these times is my yoga mat, an accidental encounter that helped me through my anxiety. Practicing 30 days of yoga with a YouTuber called Adriene helped me regulate my heart rate and breath. I felt more in control when I experienced anxiety. It helped me just enough to cope and get through.`
  }
  
];// append each image with the directory

stories.forEach((s) => {
  if(s.image) s.image = requireImage(s.image);
});

export default {
  stories,
  description,
};