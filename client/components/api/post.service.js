'use strict';

export function PostService($http, $q) {
  'ngInject';

  const Post = {

    fetch: (id) =>
      $http
        .get(`/api/posts/${id}`)
        .then( res => res.data )
        .catch( err => $q.reject(err.data) ),

    mine: () =>
      $http
        .get(`/api/posts/me`)
        .then( res => res.data )
        .catch( err => $q.reject(err.data) ),

    create: post =>
      $http
        .post('/api/posts', post)
        .then( res => res.data )
        .catch( err => $q.reject(err.data) ),

    update: (id, patches) =>
      $http
        .patch(`/api/posts/${id}`, patches)
        .then( res => res.data )
        .catch( err => $q.reject(err.data) ),

  }

  return Post

};
