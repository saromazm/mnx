/*
 * File: dialogs.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Mar, 2017 | 11:42 PM
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

/* global lg */

import {Map} from 'immutable';

const DIALOG_SET       = 'DIALOG_SET';
const DIALOG_OPEN      = 'DIALOG_OPEN';
const DIALOG_CLOSE     = 'DIALOG_CLOSE';
const DIALOG_CLOSE_ALL = 'DIALOG_CLOSE_ALL';

const initialState = {
    about  : false,
    timeout: false,
};

export default function reducer( state = new Map( initialState ), action = {} ) {

    Object.freeze( state );
    lg.store( "DIALOGS STORE", action.type, state );

    switch ( action.type ) {
        case DIALOG_CLOSE_ALL:
        case DIALOG_OPEN:
        case DIALOG_CLOSE:
        case DIALOG_SET:
            return state.merge( action.data );

            default:
            return state;
    }
}

export function setDialog( type = DIALOG_SET, data ) {
    return { type, data };
}


export function openDialog( name, extraData = {} ) {
    return setDialog( DIALOG_OPEN, {
        [name]: true,
        ...extraData
    } );
}

export function closeDialog( name, extraData = {} ) {
    return setDialog( DIALOG_CLOSE, {
        [name]: false,
        ...extraData
    } );
}

export const actions = {
    setDialog, openDialog, closeDialog
};