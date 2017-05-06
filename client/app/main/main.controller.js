'use strict';

export default class MainController {
  /*@ngInject*/
  constructor(currentUser) {
    Object.assign(this, { currentUser })
  }

  $onInit() {
    console.log("HERE", this);
  }


}
