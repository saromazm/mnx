/*
 * File: webpack.karma.config.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   28 Apr, 2017 | 2:10 AM
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

const path    = require( 'path' );
const webpack = require( 'webpack' );
//const loaderUtils = require( 'loader-utils' );
const fs      = require( 'fs' );

import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


import {settings, cleanFiles, paths} from './settings/settings';
import babelSettings from './babel.config';




export default function (  ) {


    const isDevelopment     = !process.argv.includes( '--production' ) && !process.argv.includes( '--production-hot' );
    const isProduction      = process.argv.includes( '--production' ) || process.argv.includes( '--production-hot' );
    const isHot             = process.argv.includes( '--hot' ) || process.argv.includes( '--production-hot' );
    const browseSyncVersion = require( '../package.json' ).devDependencies['browser-sync'].replace( "^", "" );

    const extractLESS = new ExtractTextPlugin( { filename: 'css/[name].css', allChunks: true } );
    const extractCSS  = new ExtractTextPlugin( 'css/[name]-two.css' );

    return  {
        devtool: isProduction ? 'source-map' : /*'source-map',//*/'cheap-module-source-map',

        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias     : {
                react       : fs.realpathSync( path.join( paths.node, 'react' ) ),
                immutable   : fs.realpathSync( path.join( paths.node, 'immutable' ) ),
                lodash      : fs.realpathSync( path.join( paths.node, 'lodash' ) ),
                shallowequal: fs.realpathSync( path.join( paths.node, 'shallowequal' ) ),
            },
        },

        resolveLoader: {
            moduleExtensions: ['-loader']
        },

        module : {

            noParse: [
                /moment/
            ],

            loaders: [
                //  E S L I N T */
                {
                    test   : /\.jsx?$/,
                    loader : 'eslint',
                    include: [paths.react, paths.resJS],
                    enforce: "pre",
                    options: {
                        configFile : path.join( __dirname, 'eslint.js' ),
                        useEslintrc: false
                    }
                },

                // B A B E L  J S X  */
                {
                    test   : /\.jsx?$/,
                    include: [
                        paths.react,
                        paths.resJS,
                        paths.config,
                        path.join( paths.node, 'material-ui2' ),
                        path.join( paths.node, 'scrollbars2' ),
                    ],
                    loader : 'babel',
                    query  : babelSettings( true, false, false )
                },
                {
                    test   : /\.css$/,
                    include: [paths.resCSS, paths.resMedia],
                    loader : extractCSS.extract( {
                        fallback: [{
                            loader: 'style',
                        }],
                        use     : ['css', 'postcss']
                    } )
                },
                {
                    test   : /\.less$/,
                    include: [paths.resLESS, path.join( paths.node, 'antd/' )],
                    loader : extractLESS.extract( {
                        fallback: [{
                            loader: 'style',
                        }],
                        use     : [{
                            loader : 'css',
                            options: {
                                sourceMap: !isProduction,
                                minimize : isProduction
                            }
                        }, {
                            loader : 'postcss',
                            options: {
                                ident  : 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                                plugins: function () {
                                    if ( isDevelopment ) return [];
                                    return [
                                        autoprefixer( {
                                            browsers: [
                                                '>2%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9', // React doesn't support IE8 anyway
                                            ]
                                        } )
                                    ]
                                }
                            }
                        }, 'less']
                    } )
                },
                {
                    test   : /\.(jpg|png|gif|svg)(\?.*)?$/,
                    include: [paths.resMedia],
                    loader : 'file',
                    query  : {
                        name: 'media/images/img-[sha512:hash:base64:7].[ext]'
                    }
                },
                {
                    test   : /\.(eot|(font\.svg)|ttf|woff|woff2)(\?.*)?$/,
                    include: [paths.resMedia, paths.semantic],
                    loader : 'file',
                    query  : {
                        name: 'fonts/[name].[ext]'
                    }
                },
                {
                    test   : /\.(mp4|webm)(\?.*)?$/,
                    include: [paths.resMedia],
                    loader : 'url',
                    query  : {
                        limit: 10000,
                        name : paths.publicMedia + '/[name].[ext]'
                    }
                },
            ]
        },

    };

}