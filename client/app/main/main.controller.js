'use strict';

export default class MainController {

  addingPost = false;
  viewing = false;
  post = null;

  /*@ngInject*/
  constructor(currentUser, Post, posts, alertify) {
    Object.assign(this, { currentUser, Post, posts, alertify })
    //this.newPost.author = currentUser._id;
    this.hideImage = this.hideImage.bind(this);
    this.upload = this.upload.bind(this);
    this.toggleAddPost = this.toggleAddPost.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggleAddPost() {
    this.addingPost = !this.addingPost;
  }

  upload(post) {
    const newPost = Object.assign(
      {},
      post,
      { author: this.currentUser._id }
    )
    this.Post.create(newPost)
      .then(res => {
        this.posts.unshift(angular.copy(newPost))
        this.addingPost = false;
      })
      .catch(err => console.log(err));
  }

  viewImage(post) {
    this.post = post;
    this.viewing = true;
  }

  hideImage() {
    this.viewing = false;
    this.post = {};
  }

  delete() {
    this.alertify.confirm(
      'Are you sure you want to delete this post?',
      () => {
        this.Post.delete(this.post._id)
          .then(res => {
            this.posts = this.posts.filter(p => p._id !== this.post._id)
            this.hideImage();
          })
          .catch(err => console.log(err));
      },
      () => {
        // do nothing
      });
  }

}
