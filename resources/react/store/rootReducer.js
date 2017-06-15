/*
 * File: rootReducer.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Mar, 2017 | 10:28 AM
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

/*global dd */
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import session from './modules/session';
import menus from './modules/menus';
import dialogs from './modules/dialogs';
import tabs from './modules/tabs';

const appReducer = combineReducers( { session, menus, dialogs, tabs, router: routerReducer } );

const rootReducer = ( state, action ) => {

    if ( action.type === 'SESSION_END' ) {
        dd( "\u2757\uFE0F\u2757\uFE0F RESETTING STORE", action.type, state );
        state = undefined
    }
    return appReducer( state, action )
};

export default rootReducer;