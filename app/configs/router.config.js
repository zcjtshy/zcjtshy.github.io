export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  [
    {
      name: 'home',
      url: '/home',
      component: 'srHome'
    },
    {
      name: 'stories',
      url: '/stories',
      component: 'srStories'
    },
    {
      name: 'otherStories',
      url: '/otherStories',
      component: 'srOtherStories'
    },
    {
      name: 'aboutUs',
      url: '/aboutUs',
      component: 'srAboutUs'
    },
  ].forEach((s) => $stateProvider.state(s));

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];
