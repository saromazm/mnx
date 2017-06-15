/*
 * File: app.js | Package: monoux
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
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import configureStore, {getStoreHistory} from '../../react/store/configureStore';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mountPoint = document.getElementById( 'appRoot' );
const reduxStore = configureStore();
const history    = getStoreHistory();

function render() {
    //noinspection JSUnresolvedVariable
    const Next = require( '../../react/App' ).default;
    return ReactDOM.render(
        <Provider store={reduxStore} >
            <ConnectedRouter history={history} >
                <Next/>
            </ConnectedRouter>
        </Provider>, mountPoint
    );
}

render();

if ( module.hot ) {
    module.hot.accept( '../../react/App', () => {
        render();
    } );
}