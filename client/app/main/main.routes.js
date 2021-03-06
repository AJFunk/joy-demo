'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    template: require('./main.pug'),
    controller: 'MainController',
    controllerAs: 'vm',
    authenticate: true,
    resolve: {
      currentUser: (Auth) =>
        Auth
          .getCurrentUser()
          .then(currentUser => currentUser)
          .catch(err => console.log(err)),
      posts: (Post) =>
        Post
          .mine()
          .then(posts => posts)
          .catch(err => console.log(err))
    },
  });
}
