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
      name: 'immigrantStories',
      url: '/immigrantStories',
      component: 'srImmigrantStories'
    },
    {
      name: 'hcwStories',
      url: '/hcwStories',
      component: 'srHcwStories'
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
    {
      name: 'start',
      url: '/exhibit/start',
      component: 'srstart'
    },
    {
      name: 'end',
      url: '/exhibit/end',
      component: 'srend'
    },
    {
      name: 'exhibit',
      url: '/exhibit',
      component: 'srExhibit'
    },
  ].forEach((s) => $stateProvider.state(s));

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];
