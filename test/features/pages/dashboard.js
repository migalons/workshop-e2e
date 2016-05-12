'use strict';

var view = {
  css: {
    header:'#header',
    graphic:'#app__main > buzz-ui-organism-saving-investment-chart-ps > buzz-ui-organism-saving-investment-chart',
    iWantTo: '#contentHeader > p'
  },
  xpath: {}
};


var actions = {

  waitForLoad: function() {
    return browser
      .waitForVisible(view.css.header)
      .waitForVisible(view.css.graphic)
      .waitForVisible(view.css.iWantTo)
  }

};

module.exports = actions;
