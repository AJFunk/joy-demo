'use strict';

import jsonpatch from 'fast-json-patch';

module.exports = {

  respondWithResult: (res, statusCode) => {
    statusCode = statusCode || 200;
    return function(entity) {
      if(entity) {
        return res.status(statusCode).json(entity);
      }
      return null;
    };
  },

  removeEntity: res =>
    function(entity) {
      if(entity) {
        return entity.remove()
          .then(() => {
            res.status(204).end();
          });
      }
    },

  handleEntityNotFound: res =>
    function(entity) {
      if(!entity) {
        res.status(404).end();
        return null;
      }
      return entity;
    },

  handleError: (res, statusCode) => {
    statusCode = statusCode || 500;
    return function(err) {
      console.log('ERROR: ', err);
      res.status(statusCode).send(err);
    };
  },

};
