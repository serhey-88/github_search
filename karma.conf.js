'use strict';

module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: __dirname,
        browsers: [
            'PhantomJS', 'PhantomJS_custom' /*'Chrome'*/
        ],
        customLaunchers: {
          'PhantomJS_custom': {
            base: 'PhantomJS',
            options: {
              windowName: 'my-window',
              settings: {
                webSecurityEnabled: false
              },
            },
            flags: ['--load-images=true'],
            debug: true
          }
        },

        phantomjsLauncher: {
          // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
          exitOnResourceError: true
        },
        files: [
            'test/test.bundle.js'
        ],
        frameworks: [
            'mocha',
            'chai-sinon'
        ],
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-mocha',
            'karma-chai-sinon',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        singleRun: false

    });
};
