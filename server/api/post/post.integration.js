'use strict';

var app = require('../..');
import request from 'supertest';

var newPost;

describe('Post API:', function() {

  describe('POST /api/posts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/posts')
        .send({
          imageUrl: 'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/18298609_656105014579200_364748426870521856_n.jpg',
          caption: 'This is the brand new post!!!',
          author: '123'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPost = res.body;
          done();
        });
    });

    it('should respond with the newly created post', function() {
      expect(newPost.imageUrl).to.equal('https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/18298609_656105014579200_364748426870521856_n.jpg');
      expect(newPost.caption).to.equal('This is the brand new post!!!');
    });
  });

  describe('GET /api/posts/:id', function() {
    var post;

    beforeEach(function(done) {
      request(app)
        .get(`/api/posts/${newPost._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          post = res.body;
          done();
        });
    });

    afterEach(function() {
      post = {};
    });

    it('should respond with the requested post', function() {
      expect(post.name).to.equal('New Post');
      expect(post.info).to.equal('This is the brand new post!!!');
    });
  });

  describe('DELETE /api/posts/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/posts/${newPost._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when post does not exist', function(done) {
      request(app)
        .delete(`/api/posts/${newPost._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
