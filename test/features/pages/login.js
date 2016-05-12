'use strict';

var poWorld = require('../support/world')

var view = {
  css: {
    header:'#login > buzz-ui-organism-process-view > div > header',
    userIdInput:'#user',
    passwordInput: '#password',
    accessButton: '#form > button > cells-i18n-msg[msgid="Aceptar"]'
  },
  xpath: {}
};


var actions = {

  waitForLoad: function() {
    return browser
      .waitForVisible(view.css.header)
      .waitForVisible(view.css.userIdInput)
      .waitForVisible(view.css.passwordInput)
      .waitForVisible(view.css.accessButton)
  },

  credentials: function() {
    return browser
        .waitForVisible(view.css.userIdInput)
        .setValue(view.css.userIdInput, poWorld.user.id)
        .waitForVisible(view.css.passwordInput)
        .setValue(view.css.passwordInput, poWorld.user.password)
        .waitForVisible(view.css.accessButton)
        .click(view.css.accessButton)
  }

};

module.exports = actions;
