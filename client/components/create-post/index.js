'use strict';

import angular from 'angular';

export function CreatePostController() {
  'ngInject';
  const post = {
    imageUrl: '',
    caption: '',
    author: null
  };
}

export default angular.module('accesscode.createPost', [])
  .directive('createPost', function() {
    return {
      template: require('./create-post.pug'),
      restrict: 'EA',
      controller: CreatePostController,
      controllerAs: 'vm',
      scope: {
        upload: '<',
        cancel: '<'
      }
    };
  })
  .name;
