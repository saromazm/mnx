/*
 * File: UserPassword.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 6:28 PM
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
import Checkbox from 'material-ui/Checkbox';
import {ListItem} from 'material-ui/List';
import EnhancedTextField from '../forms/EnhancedTextField';

class UserPassword extends React.Component {

    state = {
        prd     : '',
        usn     : '',
        remember: false,
    };

    handleChange = ( event, newValue ) => {
        const tgt = event.target.name === 'usn' ? 'username' : 'password';
        this.props.onChange( tgt, newValue );
    };

    handleCheck = ( event ) => {
        this.props.onChange( 'rememberMe', event.target.checked );
    };


    render() {

        const checkBox = <Checkbox
            name="remember"
            tabIndex={-1}
            onCheck={this.handleCheck}
            checked={this.props.remember || false}
            style={{ left: 0 }}
        />;

        return (
            <div>

                <div className="formRow" >
                    <EnhancedTextField
                        floatingLabelFixed={true}
                        floatingLabelText={"Username"}
                        hintText={"Type your username"}
                        name="usn"
                        onChange={this.handleChange}
                        autoComplete={false}
                        value={this.props.username}
                    />
                </div>

                <div className="formRow" >
                    <EnhancedTextField
                        floatingLabelFixed={true}
                        floatingLabelText={"Password"}
                        hintText={"Type your password"}
                        name="prd"
                        onChange={this.handleChange}
                        autoComplete={false}
                        value={this.props.password}
                        type="password"
                        revealCheck={true}
                        revealTooltipText={'reveal password'}
                    />
                </div>

                <div className="formRow" >
                    <ListItem
                        leftCheckbox={checkBox}
                        primaryText="Remember me"
                        secondaryText={<span style={{ fontSize: 13 }} >On this computer</span>}
                        style={{ fontSize: 13, paddingLeft: '37px' }} />
                </div>
            </div>
        );
    }

    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        onChange: PropTypes.func,
        remember: PropTypes.bool
    };
}

export default UserPassword ;