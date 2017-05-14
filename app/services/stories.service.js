import { stories } from './stories.data';

export var storiesService = [function(){
  // Promise is used so that later one could easily change this service to call asynchronously to a server to fetch stories
  this.getStories = () => Promise.resolve(stories);
}];
