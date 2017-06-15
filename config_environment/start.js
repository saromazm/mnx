/*
 * File: start.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 12:54 AM
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

import webpackConfig from './webpack.config';
import browserSyncServer from 'browser-sync';
import browserSyncConfig from './browser-sync.config';
import webpack from 'webpack';
import gzipConnect from 'connect-gzip-static';
let gzip = gzipConnect( './public' );

function start() {

    const isProduction = process.argv.includes( '--production' ) || process.argv.includes( '--production-hot' );

    return new Promise( ( resolve, reject ) => {
        const bundler     = webpack( webpackConfig() );
        const browserSync = browserSyncServer.create( 'mainBrowserSyncServer' );

        browserSync.emitter.on( "init", function () {
            console.log( "---" );
        } );

        browserSync.init( browserSyncConfig( bundler ), function ( err, bs ) {
            //if( isProduction ){

                bs.addMiddleware( "*", gzip, {
                    override: true
                } );
            //}
            if ( err ) return console.log( err );
        } );

    } );

}

export default start;