'use strict';

const express = require('express');
const controller = require('./post.controller');
const router = express.Router();
import * as auth from '../../auth/auth.service';

router
  .get('/me', auth.isAuthenticated(), controller.mine)
  .get('/:id', controller.show)
  .post('/', controller.create)
  .delete('/:id', controller.destroy);

module.exports = router;
