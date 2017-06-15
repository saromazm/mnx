/*
 * File: LeftBarSearchField.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   28 Mar, 2017 | 11:54 PM
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

/* global mnx, dd */
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

import Left from 'material-ui/svg-icons/navigation/chevron-left';
import EnhancedTextField from '../forms/EnhancedTextField';

class LeftBarSearchField extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    state = {
        name: 'component'
    };

    onChange( event, value ) {
        this.props.onChange( value, event );
    }

    render() {
        const cssClass = classNames( 'LeftBarSearchField--SC', {
            isInvisible   : !this.props.isVisible,
            isInFirstMenu : !this.props.isBackVisible,
            isBackDisabled: !this.props.isBackEnabled
        } );

        return (
            <div className={cssClass} >
                <EnhancedTextField
                    ref="container"
                    isSearchable={true}
                    floatingLabelFixed={false}
                    floatingLabelText={""}
                    hintText={this.props.hintText || "search" }
                    onChange={ this.onChange }
                    value={this.props.value}
                    onKeyUp={this.props.onKeyUp}
                >
                    <Left className="goBack" style={{ width: 16, height: 16 }} onClick={this.props.onGoBack} />
                    <div className="recordCounter" >{this.props.counter}</div>
                </EnhancedTextField>
            </div>
        );

    }

    static defaultProps = {
        onChange     : mnx.noop,
        onKeyUp      : mnx.noop,
        onGoBack     : mnx.noop,
        isVisible    : true,
        isBackEnabled: true,
    };
    static propTypes    = {
        className    : PropTypes.string,
        onChange     : PropTypes.func,
        onKeyUp      : PropTypes.func,
        onGoBack     : PropTypes.func,
        value        : PropTypes.any,
        counter      : PropTypes.any,
        isVisible    : PropTypes.bool,
        isBackEnabled: PropTypes.bool,
        isBackVisible: PropTypes.bool,
        hintText     : PropTypes.string
    };
}

export default LeftBarSearchField;