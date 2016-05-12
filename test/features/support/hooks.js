'use strict';

var poWorld =require('./world');

var hooks = function () {

  this.Before(function (scenario) {
  poWorld.screenshot.reset(scenario.getName());

  });

};


module.exports = hooks;
