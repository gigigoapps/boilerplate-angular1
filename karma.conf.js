var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    files: [
      'dist/bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      {pattern: 'test/*.spec.js'}

      // each file acts as entry point for the webpack configuration
    ],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['coverage', 'progress'],
    preprocessors: {
      // add webpack as preprocessor
      './app/bundle.js': ['webpack'],
      './test/*.spec.js': ['webpack', 'coverage']

    },
    coverageReporter: {
      reporters: [
          {
              type: 'text-summary',
          },
          {
              type: 'html',
              dir: 'coverage/',
          }
      ]
  },
    webpack: webpackConfig,

     webpackMiddleware: {
       noInfo: true
     }
  });
};
