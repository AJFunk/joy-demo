'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import api from '../components/api/api.module';
import account from './account';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main';
import constants from './app.constants';
import util from '../components/util/util.module';
import imageViewer from '../components/image-viewer';
import createPost from '../components/create-post';
import 'alertify.js/dist/js/ngAlertify.js'; // 'ngAlertify'

import './app.scss';
import 'sweetalert/dist/sweetalert.css';

angular.module('joyDemoApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, _Auth,
  api, account, 'validation.match', navbar, footer, main, constants, util, imageViewer, createPost,
  'ngAlertify'
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          console.log("HERE");
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['joyDemoApp'], {
      strictDi: true
    });
  });
