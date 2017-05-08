'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';

import { PostService } from './post.service';

export default angular.module('joyDemoApp.api', [constants, util])
  .factory('Post', PostService)
  .name;
