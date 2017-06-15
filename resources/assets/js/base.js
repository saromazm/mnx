/*
 * File: base.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 10:20 AM
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

import '../less/base.less';

class LogManager {
    constructor() {
        this.kind = '';
    }

    store( name, type, state ) {
        /*this.kind = "store";
         const isRedux = type.indexOf('@@redux') > -1;
         const isInit = type.indexOf('@@INIT') > -1;

         if( isRedux ) return;
         if( isInit ) return;

         console.log( " - - - - - - - = " + name + " = - - - - - - -" + type );*/
    }
}

self.dd  = console.log;
self.lg  = new LogManager();
self.mnx = {
    noop     : () => null,
    noopFalse: () => false,

};

