import stories from './hcwStories.data';

export default [function(){
  // Promise is used so that later one could easily change this service to call asynchronously to a server to fetch stories
  this.getStories = () => Promise.resolve(JSON.parse(JSON.stringify(stories)));
}];
