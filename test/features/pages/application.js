'use strict';

var _ = require('lodash');

var _contextsLoaded = function _contextsLoaded() {
	return browser
		.contexts()
		.then(function(result) {
			return result.value && (result.value.length === 2);
		});
};

var _webViewContext = function _webViewContext() {
	return browser
		.contexts()
		.then(function(result) {
			var found = _.find(result.value, function(item) {
				return item !== 'NATIVE_APP';
			});
			return browser.context(found);
		});
};

var entryPoint = {

	web: function() {
		return browser
			.url('/index.html');
	},

	app: function() {
		return browser
			.waitUntil(_contextsLoaded)
			.then(_webViewContext);
	}

};

var view = {

	activeTemplate: '#templateContainer [template-active=true]'

};

var actions = {

  start: function() {
    var environment = browser.options.environment || 'web';
		return entryPoint[environment]();
	},

	activeTemplate: function() {
		return browser.element(view.activeTemplate)
	}

};

module.exports = actions;
