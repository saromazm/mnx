/*
 * File: karma.config.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   28 Apr, 2017 | 12:41 AM
 *
 * This file is part of a package and all the information, intellectual
 * and technical concepts contained here are property of their owners.
 * Any kind of use, reproduction, distribution, publication, etc. without
 * express written permission from CapitalMental && BackLogics Technologies
 * is strictly forbidden.
 *
 * CapitalMental && BackLogics Technologies
 * Copyright 2014-present. | All rights reserved.
 */

const path          = require( "path" );
const webpack       = require( 'webpack' );
import wpConfig from './webpack.karma.config.js';
const wpConfigSettings = wpConfig();

/*delete wpConfig.entry;
delete wpConfig.output;
delete wpConfig.plugins;*/


const resolver = function (dirOrSrc) {
    return path.resolve( __dirname, dirOrSrc );
};

const appPath = {
    tests     : resolver("../resources/react/tests"),
    testsFile     : resolver( '../resources/react/tests/test.config.js' ),
};

module.exports = function (config) {
    config.set( {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [ 'mocha' ],


        // list of files / patterns to load in the browser
        files: [
            appPath.testsFile
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // './test.config.js': [ 'webpack', 'sourcemap' ]
            [appPath.testsFile]: [ 'webpack', 'sourcemap' ]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters    : [ 'mocha', 'notify' ],
        mochaReporter: {
            showDiff: true,
        },

        notifyReporter: {
            reportEachFailure: true, // Default: false, Will notify on every failed sepc
            reportSuccess: true, // Default: true, Will notify when a suite was successful
        },

        webpack: wpConfigSettings,

        webpackMiddleware: {
            noInfo: true
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [ 'Chrome' ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    } )
};