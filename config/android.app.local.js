var _ = require('lodash');

var config = _.cloneDeep(require('./base.app.local').config);

config.capabilities = [
  {
    browserName: '',
    appiumVersion: '1.5.2',
    deviceName: 'Android Emulator',
    avd: 'Nexus7',
    deviceOrientation: 'portrait',
    platformVersion: '5.1',
    platformName: 'Android',
    app: '....',
    autoWebview: true,
    autoWebviewTimeout: 300000,
    avdLaunchTimeout: 300000,
    autoLaunch: true,
    name: 'android-cordova-webview'
  }
];
config.environment = 'app';
config.cucumber =  {
  features: [
    './test/features'
  ],
  require: [
    './test/features/support',
    './test/features/step_definitions'
  ],
  tags: ['@sample'],
  stepTimeout: 300000
};

module.exports.config = config;
