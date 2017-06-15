/*
 * File: bs_duplicate.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   14 Feb, 2017 | 9:2 AM
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

(function browserSyncLoader( win, doc ) {
    console.log( "[BS] checking for script existence..." );
    if ( !win || !doc ) return;
    const currentScript = doc.getElementById( '__bs_script__' );

    if ( !currentScript && process.env.BS_VER && process.env.SERVER_PORT ) {
        doc.write( "<script async src='" + `//localhost:${process.env.SERVER_PORT}/browser-sync/browser-sync-client.js?v=${process.env.BS_VER}` + "'><\/script>" );
        console.log( "[BS] Script inserted successfully! [ browser-sync-client." + process.env.BS_VER + " ]" );
        return;
    }
    console.log( "[BS] Nothing to Insert!" );
})( window, document );