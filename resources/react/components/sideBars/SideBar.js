/*
 * File: leftBar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   2 Mar, 2017 | 10:1 AM
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

/* global mnx */

//noinspection JSUnresolvedVariable
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Layout} from 'antd';
const { Sider } = Layout;

class SideBar extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = () => {
        this.setState( { collapsed: !this.state.collapsed } );
    };

    render() {

        if ( !this.props.enabled ) return null;
        const cssClass = classNames( 'SideBar--CT', this.props.className );

        return (
            <div className={cssClass}
                   //collapsible
                   //width={250}
                   //collapsed={this.state.collapsed}
                   //onCollapse={this.onCollapse} onKeyDown={this.props.onKeyDown} >
                >
                {this.props.children}
            </div>
        );
    }

    static defaultProps = {
        enabled  : true,
        onKeyDown: mnx.noop
    };

    static propTypes = {
        className: PropTypes.string,
        onKeyDown: PropTypes.func,
        enabled  : PropTypes.bool,
    };
}

export default SideBar;