/*
 * File: session.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Mar, 2017 | 8:38 PM
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
import axios from 'axios';

const SESSION_INIT         = 'SESSION_INIT';
const SESSION_END          = 'SESSION_END';
const SESSION_RESTART      = 'SESSION_RESTART';
const SESSION_SECURE       = 'SESSION_SECURE';
const SESSION_LOGIN        = 'SESSION_LOGIN';
const SESSION_LOGIN_CANCEL = 'SESSION_LOGIN_CANCEL';
const SESSION_SET_ERROR    = 'SESSION_SET_ERROR';
const SESSION_SET          = 'SESSION_SET';

const SESSION_PREFERENCES_SET              = 'SESSION_PREFERENCES_SET';
const SESSION_PREFERENCES_LEFT_BAR_STATUS  = 'SESSION_PREFERENCES_LEFT_BAR_STATUS';
const SESSION_PREFERENCES_RIGHT_BAR_STATUS = 'SESSION_PREFERENCES_RIGHT_BAR_STATUS';

const WRONG_PASS  = 401;
const WRONG_TOKEN = 403;
const SIGNED_IN   = 202;
const SECURED     = 200;

const initialState = {
    init   : false,
    auth   : false,
    secured: false,
    user   : null,
    status : 0,
    qrCode : null,

    /*init       : false,
     logged     : false,
     secured    : false,
     user       : new Map( {} ),
     appKey     : null,
     status     : null,
     error      : null,
     token      : null,*/
    preferences: {
        theme   : 'default',
        leftBar : true,
        rightBar: false
    }
};

export default function reducer( state = new Map( initialState ), action = {} ) {

    Object.freeze( state );
    lg.store( "SESSION STORE", action.type, state );

    switch ( action.type ) {
        case SESSION_INIT:
        case SESSION_LOGIN:
        case SESSION_LOGIN_CANCEL:
        case SESSION_SECURE:
        case SESSION_SET_ERROR:
        case SESSION_SET:
            return state.merge( action.data );

        case SESSION_PREFERENCES_LEFT_BAR_STATUS:
        case SESSION_PREFERENCES_RIGHT_BAR_STATUS:
        case SESSION_PREFERENCES_SET:
            return state.set( 'preferences', Object.assign( {}, state.get( 'preferences' ), action.data ) );

        case SESSION_RESTART:
        case SESSION_END:
            return new Map( initialState );

        default:
            return state;
    }
}

export function setSession( type = SESSION_SET, data ) {
    return { type, data };
}


export function secureSession( user, status ) {
    return setSession( SESSION_SECURE, {
        init   : true,
        error  : false,
        auth   : true,
        secured: true,
        qrCode : null,
        user   : new Map( user ),
        status : status
    } );
}

export function loginSession( qrCode, status ) {
    return setSession( SESSION_LOGIN, {
        init   : true,
        error  : false,
        auth   : true,
        secured: false,
        qrCode : qrCode,
        user   : null,
        status : status
    } );
}


export function initSession() {
    return setSession( SESSION_INIT, {
        init   : true,
        error  : false,
        auth   : false,
        secured: false,
        qrCode : null,
        user   : null,
        status : 0
    } );
}


export function setPreferences( type = SESSION_PREFERENCES_SET, data ) {
    return { type, data };
}

export function leftBarStatus( status = true ) {
    return setPreferences( SESSION_PREFERENCES_LEFT_BAR_STATUS, {
        leftBar: status
    } );
}

export function rightBarStatus( status = true ) {
    return setPreferences( SESSION_PREFERENCES_RIGHT_BAR_STATUS, {
        rightBar: status
    } );
}

/** ************************************************* **/
/** A S Y N C   A C T I O N S */
/** ************************************************* **/

/**
 * Check Status
 * @param url
 * @param method
 * @returns {Function}
 */
export function checkStatus( url = 'sessions/check', method = 'POST' ) {

    return function ( dispatch ) {
        return new Promise( ( resolve, reject ) => {

            axios( { url, method } )
            //after server response
                .then( ( { data } ) => {


                    switch ( data.status ) {

                        case SIGNED_IN:
                            dispatch( loginSession( data.qrCode, data.status ) );
                            break;

                        case SECURED:
                            dispatch( secureSession( data.user, data.status ) );
                            break;

                        default:
                            dispatch( initSession() );
                            break;
                    }
                    resolve();
                } )

                //If response has errors
                .catch( error => {
                    reject( error.message );
                } );
        } )
    }
}

/**
 * LoginAttempt
 * @param authData
 * @param url
 * @param method
 * @returns {Function}
 */
export function loginAttempt( authData, url = 'sessions/', method = 'POST' ) {
    return function ( dispatch, getState ) {
        return new Promise( function ( resolve, reject ) {

            const isTokenValidation = getState().session.get( 'status' ) === SIGNED_IN;
            const authenticationURL = url + ( isTokenValidation ? 'attempt2fa' : 'attempt' );

            axios( { url: authenticationURL, method, data: authData } )

                .then( function ( { data: receivedData } ) {

                    switch ( receivedData.status ) {

                        case SIGNED_IN:
                            dispatch( loginSession( receivedData.qrCode, receivedData.status ) );
                            break;
                        case SECURED:
                            dispatch( secureSession( receivedData.user, receivedData.status ) );
                            break;
                        case WRONG_PASS:
                        case WRONG_TOKEN:
                        default:
                            resolve( receivedData );
                            break;
                    }
                } )

                .catch( error => dispatch( setSession( null, {
                    error,
                } ) ) );
        } );
    }
}


/**
 * End Session
 * @returns {Function}
 */
export function endSession( method = "POST" ) {
    return function ( dispatch ) {
        axios( { url: 'sessions/logout', method } )
            .then( () => dispatch( setSession( SESSION_END ) ) )
            .catch( () => dispatch( setSession( SESSION_END ) ) );
        return Promise.resolve();
    }
}


/** ************************************************* **/

const urlParser      = function ( _url ) {
    const urlParts = _url.split( ':' );
    const method   = urlParts[1] || 'get';
    const url      = urlParts[0];
    return { url, method }
};
const URL_auth_check = 'sessions/check:post';

export function checkAuthStatus() {
    return function ( dispatch ) {
        return new Promise( function ( resolve, reject ) {
            axios( urlParser( URL_auth_check ) )

                .then( ( { data } ) => {

                    switch ( data.status ) {

                        case SIGNED_IN:
                            dispatch( loginSession( data.qrCode, data.status ) );
                            break;

                        case SECURED:
                            dispatch( secureSession( data.user, data.status ) );
                            break;

                        default:
                            dispatch( initSession() );
                            break;
                    }
                    resolve( data.status )
                } )

                .catch( error => {
                    dispatch( setError( error.message ) ).then( ()=>{
                        return reject( error );
                    } );
                } );
        } );
    }
}

export function setError( error, endSession = false ) {
    return function ( dispatch ) {
        dispatch( setSession( SESSION_SET_ERROR, {
            ...( endSession && initialState ),
            error
        } ) );
        return Promise.resolve();
    }
};

export const actions = {
    setSession,
    secureSession,
    loginSession,
    //loginCancel,
    initSession,
    endSession,
    leftBarStatus,
    rightBarStatus,
    checkStatus, checkAuthStatus,
    loginAttempt
};

