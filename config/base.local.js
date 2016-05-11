'use strict';

var config = {
  host: 'localhost',
  port: '4723',
  // user: process.env.CELLS_TEST_USER,
  // key: process.env.CELLS_TEST_KEY,
  // baseUrl: process.env.CELLS_BASE_URL,
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
