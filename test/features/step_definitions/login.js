'use strict';

var poWorld = require('../support/world')
var poApplication = require('../pages/application');
var poWelcome = require('../pages/welcome');
var poLogin = require('../pages/login');
var poDashboard = require('../pages/dashboard')

module.exports = function() {

  this.Given(/^a valid user who is at login screen$/, function () {

    poWorld.World();
    poWorld.setUser(require('../../config/validUser.json'));
    this.page = poLogin;
    return poApplication
      .start()
      .then(poWelcome.waitForLoad)
      .then(poWelcome.touchAccessButton)
      .then(poLogin.waitForLoad)
  });

  this.When(/^he introduces his credentials$/, function () {
    return this.page.credentials();
  });

  this.Then(/^he should see his dashboard$/, function () {
    return poDashboard.waitForLoad();
  });

}
