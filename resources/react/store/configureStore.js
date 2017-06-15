/*
 * File: configureStore.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Mar, 2017 | 10:25 AM
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


import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './rootReducer';

const isDev      = process.env.NODE_ENV !== 'production';
const devTools   = window['devToolsExtension'] && isDev ? window['devToolsExtension']() : f => f;
const history    = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];

/*if ( isDev ) {
    const createLogger = require( 'redux-logger' ).createLogger;
    middleware.push( createLogger( {
        collapsed: true
    } ) );
}*/

export function getStoreHistory(){
    return history;
}

export default function configureStore( initialState ) {
    const store = createStore( rootReducer, initialState, compose(
        applyMiddleware( ...middleware ),
        devTools
    ) );

    if ( module.hot ) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept( './rootReducer', () => {
            //noinspection JSUnresolvedVariable
            const nextReducer = require( './rootReducer' ).default;
            store.replaceReducer( nextReducer );
        } );
    }

    return store;
}