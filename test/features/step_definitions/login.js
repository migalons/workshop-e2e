'use strict';

var poApplication = require('../pages/application');
var poWelcome = require('../pages/welcome');
var poLogin = require('../pages/login');

module.exports = function() {

  this.Given(/^a valid user who is at login screen$/, function () {
    return poApplication
      .start()
      .then(poWelcome.waitForLoad)
      .then(poWelcome.touchAccessButton)
      .then(poLogin.waitForLoad)
  });

}
