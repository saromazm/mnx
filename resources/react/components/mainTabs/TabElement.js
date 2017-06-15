/*
 * File: TabElement.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   16 Mar, 2017 | 7:3 PM
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

//noinspection JSUnresolvedVariable
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import FontIcon from 'material-ui/FontIcon';

import {Icon} from 'antd';

class TabElement extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    onClose( event ) {
        this.props.onClose( event, this.props.uniqueID )
    }

    render() {

        return (
            <span className="TabElement--SC" >
                <span>
                    { this.props.icon && <Icon type={this.props.icon} />}
                    {this.props.title}
                </span>
                { this.props.closable && <FontIcon
                    className="anticon anticon-close-circle closer"
                    onClick={this.onClose}
                />}
            </span>
        );
    }

    static propTypes    = {
        title   : PropTypes.string,
        closable: PropTypes.bool,
        icon    : PropTypes.string,
        onClose : PropTypes.func,
        uniqueID: PropTypes.string

    };
    static defaultProps = {
        icon    : '',
        closable: true,
    };
}

export default TabElement;