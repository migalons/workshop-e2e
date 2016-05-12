'use strict';
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
  }

};

module.exports = actions;
