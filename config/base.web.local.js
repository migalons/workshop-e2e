var _ = require('lodash');

var config = _.cloneDeep(require('./base.local').config);

delete config.user;
delete config.key;

config.server = 'selenium';
config.host = 'localhost';
config.port = 4444;
config.environment = 'web';

exports.config = config;
