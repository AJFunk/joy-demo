'use strict';

export default class MainController {

  addingPost = false;
  newPost = {
    imageUrl: '',
    caption: '',
    author: null
  };

  /*@ngInject*/
  constructor(currentUser, Post, posts) {
    Object.assign(this, { currentUser, Post, posts })
    this.newPost.author = currentUser._id;
  }

  $onInit() {
    console.log("HERE", this);
  }

  toggleAddPost() {
    this.addingPost = !this.addingPost;
  }

  upload() {
    console.log(this.newPost)
    this.Post.create(this.newPost)
      .then(res => {
        this.posts.unshift(angular.copy(this.newPost))
        this.newPost.imageUrl = '';
        this.newPost.caption = '';
        this.addingPost = false;
        console.log(res)
      })
      .catch(err => console.log(err));
  }


}
