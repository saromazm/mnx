/*
 * File: BigError.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 Mar, 2017 | 1:57 PM
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
import PropTypes from 'prop-types';
import CMLogo from '../global/CMLogo';
import {lightBlue100 as logoColor, blueGrey50 } from 'material-ui/styles/colors';

class BigError extends React.Component{

    render(){
        const { palette } = this.context.muiTheme;

        return (
            <div className="loginContainer" >
                <div className="loginBoxContainer animated bounceInDown">
                    <div className="left" style={{ backgroundColor: palette.primary1Color }} >
                        <CMLogo color={logoColor} />
                    </div>
                    <div className="right" style={{ backgroundColor: blueGrey50, padding:50 }} >
                        <h2>Whoops!</h2>
                        <div>Houston, we have a problem!</div>
                        <div className="note" style={{ marginTop: 20 }} >
                            There seems to be some communication issues right now,
                            <strong> please give a few minutes and try again.</strong>
                            <br/><br/>
                            <a href="" tabIndex={-1} >support@capitalmental.com</a>
                            <br/><br/>
                            <strong>Description:</strong> <br/>
                            { this.props.error }
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    static propTypes = {};
    static defaultProps = {};

    //noinspection JSUnusedGlobalSymbols
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

export default BigError;