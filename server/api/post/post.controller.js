'use strict';

import Post from './post.model';
import {
  respondWithResult,
  removeEntity,
  handleEntityNotFound,
  handleError
} from '../util.js';

module.exports = {

  mine: (req, res) =>
    Post
      .find({ author: req.user._id })
      .sort('-createdAt')
      .then(respondWithResult(res))
      .catch(handleError(res)),

  show: (req, res) =>
    Post
      .findById(req.params.id)
      .then(handleEntityNotFound(res))
      .then(respondWithResult(res))
      .catch(handleError(res)),

  create: (req, res) =>
    Post
      .create(req.body)
      .then(respondWithResult(res, 201))
      .catch(handleError(res)),

  destroy: (req, res) =>
    Post
      .findById(req.params.id)
      .then(handleEntityNotFound(res))
      .then(removeEntity(res))
      .catch(handleError(res))

}
