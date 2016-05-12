'use strict';
var poWorld = require('../support/world')
var view = {
  css: {
    header:'#header',
    banner:'#app__main > buzz-ui-organism-welcome-ps > buzz-ui-organism-welcome > div.banner.style-scope.buzz-ui-organism-welcome > a > img',
    accessButton: '#app__main > buzz-ui-organism-welcome-ps > buzz-ui-organism-welcome > div.main.style-scope.buzz-ui-organism-welcome > button'
  },
  xpath: {}
};


var actions = {

  waitForLoad: function() {
    return browser
      .waitForVisible(view.css.header)
      .waitForVisible(view.css.banner)
      .waitForVisible(view.css.accessButton)
  },

  touchAccessButton: function() {
    return browser
      .waitForVisible(view.css.accessButton)
      .pause(1000)
      .click(view.css.accessButton)
  }


};

module.exports = actions;
