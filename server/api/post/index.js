'use strict';

const express = require('express');
const controller = require('./post.controller');
const router = express.Router();

router
  .get('/', controller.index)
  .get('/:id', controller.show)
  .post('/', controller.create)
  .put('/:id', controller.upsert)
  .patch('/:id', controller.patch)
  .delete('/:id', controller.destroy);

module.exports = router;
