var _ = require('lodash');
var config = _.cloneDeep(require('./base.local').config);

delete config.user;
delete config.key;

config.appium = {};
config.appium.host = 'localhost';
config.appium.port = 4723;

config.host = 'localhost';
config.port = 4723;
config.environment = 'app';

exports.config = config;
