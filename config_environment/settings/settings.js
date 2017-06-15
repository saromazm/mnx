/*
 * File: settings.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 8:49 AM
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
const fs   = require( 'fs' );
const glob = require( 'glob' );

import getURLData from '../helpers/getURLData';

export const paths = {
    node     : path.resolve( 'node_modules' ),
    resources: path.resolve( 'resources/' ),
    resJS    : path.resolve( 'resources/assets/js' ),
    resCSS   : path.resolve( 'resources/assets/css' ),
    resLESS  : path.resolve( 'resources/assets/less' ),
    resMedia : path.resolve( 'resources/assets/media' ),
    react    : path.resolve( 'resources/react' ),
    semantic : path.resolve( 'resources/assets/semantic' ),
    config   : path.resolve( 'configuration' ),

    //Public
    public     : path.resolve( 'public' ),
    publicJS   : path.resolve( 'public/js' ),
    publicCSS  : path.resolve( 'public/css' ),
    publicMedia: path.resolve( 'public/media' ),

    //Packages
    material2: path.resolve( 'node_modules/material-ui2/src/' ),
};

export const settings = {
    uglify      : {
        compress: {
            warnings    : false,
            screw_ie8   : true,
            conditionals: true,
            unused      : true,
            comparisons : true,
            sequences   : true,
            dead_code   : true,
            evaluate    : true,
            if_return   : true,
            join_vars   : true,
        },
        mangle  : {
            screw_ie8: true
        },
        output  : {
            comments : false,
            screw_ie8: true,
        }
    },
    autoprefixer: {
        browsers: [
            '>2%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9'
        ]
    },
    serversData : {
        name    : 'Development Server',
        inlined : false,
        server  : getURLData( 'https://localhost:5555' ),
        proxy   : getURLData( 'https://cmonoux.com:80' ),
        recipe  : 'useWebpackDevServer',
        compiled: null
    }
};

export function cleanFiles() {
    let dFiles = glob.sync( "**/*.@(css|js|jpg|svg|eot|ttf|woff2|woff|less|gz|map)", { cwd: 'public/' } );
    dFiles.forEach( function ( fName ) {
        fs.unlink( "public/" + fName );
    } );
}

export function resolveApp( relativePath ) {
    return path.resolve( relativePath );
}