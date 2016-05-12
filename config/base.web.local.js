var _ = require('lodash');

var config = _.cloneDeep(require('./base.local').config);

delete config.user;
delete config.key;

config.selenium = {};
config.selenium.host = 'localhost';
config.selenium.port = 4444;

config.host = 'localhost';
config.port = 4444;
config.environment = 'web';

exports.config = config;
