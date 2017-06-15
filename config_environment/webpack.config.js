/*
 * File: webpack.config.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 9:18 AM
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
import WebpackNotifierPlugin from 'webpack-notifier';
import CaseSensitivePlugin from 'case-sensitive-paths-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {settings, cleanFiles, paths} from './settings/settings';
import babelSettings from './babel.config';

//HMR STYLE
const newHot = false;


export default function () {

    cleanFiles();

    const isDevelopment     = !process.argv.includes( '--production' ) && !process.argv.includes( '--production-hot' );
    const isProduction      = process.argv.includes( '--production' ) || process.argv.includes( '--production-hot' );
    const isHot             = process.argv.includes( '--hot' ) || process.argv.includes( '--production-hot' );
    const browseSyncVersion = require( '../package.json' ).devDependencies['browser-sync'].replace( "^", "" );

    const extractLESS = new ExtractTextPlugin( { filename: 'css/[name].css', allChunks: true } );
    const extractCSS  = new ExtractTextPlugin( 'css/[name]-two.css' );

    const config = {
        devtool: isProduction ? 'source-map' : /*'source-map',//*/'cheap-module-source-map',

        entry: {
            base: [
                'babel-polyfill',
                //'pace-js',
                path.join( paths.resJS, 'base.js' )
            ],
            app : [
                path.join( paths.resJS, 'bootstrap.js' ),
                path.join( paths.resJS, 'app.js' )
            ],
            //vendor: ['react', 'react-dom', 'axios', 'moment', 'jquery']
        },

        output: {
            path         : path.resolve( 'public/' ),
            pathinfo     : true,
            filename     : "js/[name].js",
            chunkFilename: "js/zyx[chunkhash].js",
            publicPath   : settings.serversData.server.full + "/"
        },

        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias     : {
                react                   : fs.realpathSync( path.join( paths.node, 'react' ) ),
                //'react-dom '            : fs.realpathSync( path.join( paths.node, 'react-dom' ) ),
                immutable               : fs.realpathSync( path.join( paths.node, 'immutable' ) ),
                lodash                  : fs.realpathSync( path.join( paths.node, 'lodash' ) ),
                shallowequal            : fs.realpathSync( path.join( paths.node, 'shallowequal' ) ),
                //'react-tap-event-plugin': fs.realpathSync( path.join( paths.node, 'react-tap-event-plugin' ) ),
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
                    include: [paths.react, paths.resJS, paths.material2],
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
                        path.resolve( '/Users/MiKE/Development/github/material-ui2/' ),
//                        path.join( paths.node, 'material-ui2/src' ),
                        //path.join( paths.node, 'material-ui2/build' ),
                        //path.join( paths.node, 'material-ui/' ),
                        path.join( paths.node, 'scrollbars2' ),
                    ],
                    loader : 'babel',
                    query  : babelSettings( isDevelopment, isHot, newHot )
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
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin( {
                'process.env': {
                    'NODE_ENV'   : JSON.stringify( isDevelopment ? 'development' : 'production' ),
                    'SERVER_PORT': JSON.stringify( settings.serversData.server.port ),
                    'BS_VER'     : JSON.stringify( browseSyncVersion || false ),
                }
            } ),

            /**
             * Optimizes and moves all common files up to their
             * parents
             */
            new webpack.optimize.CommonsChunkPlugin( {
                names   : ['app', 'base'],
                children: true,
            } ),

            /**
             * Gathers all common elements and node module packages
             * to the app file
             */
            new webpack.optimize.CommonsChunkPlugin( {
                name    : 'app',
                children: true,
                minChunks( module, count ) {
                    const context = module.context;
                    return count >= 2 || context.indexOf( 'node_modules' ) >= 0;
                }
            } ),

            /**
             * Collects the bootstrap webpack files to the
             * boot.js file
             */
            new webpack.optimize.CommonsChunkPlugin( {
                name     : 'boot',
                minChunks: Infinity
            } ),

            /**
             * Gathers all files needed once users are logged in
             */
            new webpack.optimize.CommonsChunkPlugin( {
                async    : 'vendor-internals',
                minChunks: ( { resource, context } ) => {
                    const targets = [
                        /moment/,
                        /scrollbars/,
                        /react-color/,
                    ];
                    return targets.find( t => t.test( context ) )
                },
            } ),

            /**
             * Manifest file
             */
            new ManifestPlugin( {
                fileName: 'js/asset-manifest.json'
            } ),
            new WriteFilePlugin( { test: /(js|css|media|fonts)\// } ),
            extractLESS,
            extractCSS
        ]
    };


    if ( isDevelopment ) {
        config.plugins.push( new CaseSensitivePlugin() );
        config.plugins.push( new WebpackNotifierPlugin( {
            title          : 'Monoux',
            excludeWarnings: true,
            alwaysNotify   : true,
            contentImage   : path.resolve( 'configuration/helpers/monoux-badge-orange.png' )
        } ) );
    }

    if ( isProduction ) {
        config.plugins.push( new webpack.optimize.UglifyJsPlugin( settings.uglify ) );
        config.plugins.push( new CompressionPlugin( {
            asset    : "[path].gz[query]",
            algorithm: "gzip",
            test     : /\.js$|\.css$|\.html$/,
            minRatio : 0.8
        } ) );

    }

    if ( isHot ) {
        config.plugins.push( new webpack.HotModuleReplacementPlugin() );
        config.plugins.push( new webpack.NamedModulesPlugin() );
        if ( newHot ) config.entry.app.push( 'react-hot-loader/patch' );
        config.entry.app.push( 'webpack-hot-middleware/client' + '?path=' + settings.serversData.server.full + '/__webpack_hmr' );
        config.entry.app.push( require.resolve( './helpers/bs_duplicate.js' ) );
    }

    //if ( isDevelopment ) {
    /*    config.plugins.push(
     new BundleAnalyzerPlugin( {
     analyzerMode: 'static'
     } )
     );*/
    //}

    return config;
}