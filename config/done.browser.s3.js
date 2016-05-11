var _ = require('lodash');

var config = _.cloneDeep(require('./base.web.local').config);

var testName = 'Workshop cucumber-js';
var buildName = 'whatever';

exports.config = config;

config.environment = 'web';
config.server = 'selenium';
config.baseUrl = '';

config.capabilities = [
  {
    browserName: 'firefox',
    name: testName,
    build: buildName,
    // tags: [
    //   process.env.CELLS_BUILD_BRANCH
    // ]
  }
];

config.cucumber =  {
        features: [
            './test/features'
        ],
       require: [
           './test/features/support',
           './test/features/step_definitions'
       ],
        tags: ['@done'],
        stepTimeout: 10000
    };
