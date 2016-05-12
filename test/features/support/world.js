'use strict';

var World = function World() {

  //settimeout
  browser.timeoutsImplicitWait(30000)

};

var screenshot = {

  reset: function(scenario) {
    this._archive = scenario.replace(/ /g, '_') + '_' + process.pid;
    this._screenShotIdx = 0;
  },

  take: function() {
    var scrnsht = this._archive + '_' + this._screenShotIdx + '.png';
    this._screenShotIdx += 1;
    return browser.saveScreenshot(scrnsht);
  }
};


function run_cmd(cmd, args, callBack ) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on('data', function (buffer) { resp += buffer.toString() });
  child.stdout.on('end', function() { callBack (resp) });
};

module.exports.World = World;
module.exports.screenshot = screenshot;
