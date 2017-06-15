/*
 * File: babel.config.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 1:1 AM
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

const path   = require( 'path' );

export default function ( isDevelopment = true, isHot = true, newHot = false ) {

    const presets = [
        [require.resolve( 'babel-preset-latest' ), { 'es2015': { modules: false } }],
        require.resolve( 'babel-preset-stage-2' ),
        require.resolve( 'babel-preset-react' ),
    ];

    const plugins = [
        require.resolve( 'babel-plugin-transform-class-properties' ),
        [require.resolve( 'babel-plugin-transform-object-rest-spread' ), { useBuiltIns: true }],
        [require.resolve( 'babel-plugin-transform-runtime' ), {
            helpers    : false,
            polyfill   : false,
            regenerator: true,
            moduleName : path.dirname( require.resolve( 'babel-runtime/package' ) )
        }],
        [require.resolve( 'babel-plugin-import' ), [
            { libraryName: "antd", /*style: true*/ },
            { libraryName: "material-ui", libraryDirectory: "components", camel2DashComponentName: false }]]
    ];

    if( isHot || newHot ){
        presets.push(
            require.resolve( newHot ? 'react-hot-loader/babel'  : 'babel-preset-react-hmre' )
        );
    }

    return {
        babelrc       : false,
        cacheDirectory: false,
        presets       : presets,
        plugins       : plugins
    }

}