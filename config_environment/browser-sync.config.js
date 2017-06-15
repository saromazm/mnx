/*
 * File: browser-sync.config.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 12:8 PM
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

const path = require( 'path' );
import {settings} from './settings/settings';
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );

function browserSyncConfig( bundle = false ) {
    return {
        proxy: {
            target      : settings.serversData.proxy['simple'],
            ws          : true,
            proxyOptions: {
                xfwd: true,
            }
        },

        port: settings.serversData.server['port'],
        ui  : {
            port: parseInt( settings.serversData.server['port'], 10 ) - 1
        },

        browser        : "google chrome",
        reloadOnRestart: true,
        injectChanges  : true,
        open           : false,

        middleware: [

            webpackDevMiddleware( bundle, {
                publicPath: settings.serversData.server.full + "/",
                quiet     : false,
                noInfo    : false,
                stats     : { colors: true, chunks: false }
            } ),

            webpackHotMiddleware( bundle || {} ),

            // When accessing from outside localhost using a domain name,
            // this is necessary to avoid cross domain errors
            function ( req, res, next ) {
                res.setHeader( 'Access-Control-Allow-Origin', '*' );
                res.setHeader( 'Content-Type', 'text/event-stream;charset=utf-8' );
                res.setHeader( 'Cache-Control', 'no-cache, no-transform' );
                res.setHeader( 'Connection', 'keep-alive' );
                next();
            }
        ],

        socket: {
            port  : parseInt( settings.serversData.server['port'], 10 ) - 2,
            domain: settings.serversData.server['simple'] + ":" + (parseInt( settings.serversData.server['port'], 10 ) - 2)
        },

        files    : [
            './public/css/**/*.css',
            './public/vendor/**/*.css'
        ],
        ghostMode: false,
        https    : {
            key : path.join( require('os').homedir(), '.localhost-ssl/app.key' ),
            cert: path.join( require('os').homedir(), '.localhost-ssl/app.crt' ),
        }
    }
}

export default browserSyncConfig;