'use strict';

var config = {
  host: 'localhost',
  port: '4723',
  capabilities: [],
  waitforTimeout: 120000

};

config.cucumber =  {
  features: [
    './test/features'
  ],
  require: [
    './test/features/support',
    './test/features/step_definitions'
  ],
  stepTimeout: 120000
};

exports.config = config;
