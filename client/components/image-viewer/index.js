'use strict';

import angular from 'angular';

export function ImageViewerController() {
  'ngInject';
}

export default angular.module('accesscode.imageViewer', [])
  .directive('imageViewer', function() {
    return {
      template: require('./image-viewer.pug'),
      restrict: 'EA',
      controller: ImageViewerController,
      controllerAs: 'vm',
      scope: {
        post: '<',
        hide: '<'
      }
    };
  })
  .name;
