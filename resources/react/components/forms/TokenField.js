/*
 * File: TokenField.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   27 Feb, 2017 | 11:25 AM
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

/* globals mnx */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import EnhancedTextField from './EnhancedTextField';
import classNames from 'classnames';
import {orange600, grey400} from 'material-ui/styles/colors';


class TokenField extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        const newState = {
            focus: false,
            token: ''
        };

        for ( let i = 0; i < this.props.tokenLength; i++ ) {
            newState['v' + (i + 1)] = '';
        }

        this.state = newState;
    }

    setFocusTrue() {
        this.setState( { focus: true } );
    }

    setFocusFalse() {
        this.setState( { focus: false } );
    }

    onTokenKeyChange( event, nv ) {
        const key = event.target.name;
        const val = event.target.value;
        const num = parseInt( key.charAt( 1 ), 10 );

        if ( !isNaN( val ) ) {
            const newValue  = val.charAt( val.length - 1 );
            const fullToken = this.getTokenValue( num, newValue );
            this.setState( { [key]: newValue, token: fullToken }, () => {
                if ( num < this.props.tokenLength && val !== '' ) {
                    this.focusField( num + 1, true );
                }
                this.props.onChange( fullToken, fullToken.length === this.props.tokenLength, num === this.props.tokenLength );
            } );
        }
    }

    onTokenKeyUp( event ) {

        const key = event.target.name;
        const num = parseInt( key.charAt( 1 ), 10 );

        if ( event.key === 'ArrowLeft' ) {
            if ( num > 1 ) {
                this.focusField( num - 1, true );
            }
        }
        else if ( event.key === 'ArrowRight' ) {
            if ( num < this.props.tokenLength ) {
                this.focusField( num + 1, true );
            }
        }
        else if ( event.key === 'Backspace' ) {
            if ( num > 1 && event.target.value === '' ) {
                this.focusField( num - 1, true );
            }
        }


    }

    focusField( indx = 1, select = false ) {
        const fieldIndex = this.refs[`v${ indx }`] ? indx : 1;
        if ( this.refs[`v${ fieldIndex}`] ) {
            this.refs[`v${ fieldIndex}`].exposedObjects.textField.focus();
            if ( select ) {
                this.refs[`v${ fieldIndex}`].exposedObjects.textField.select();
            }
        }
    }

    cleanTokenField() {

        if ( this.state.token !== '' ) {
            const newState = {};

            for ( let i = 0; i < this.props.tokenLength; i++ ) {
                newState['v' + (i + 1)] = '';
            }
            newState.token = '';
            this.setState( newState );
        }

        this.focusField( 1, true );
    }

    getTokenValue( settingKey, settingValue ) {
        let tokenValue = '';

        for ( let i = 0; i < this.props.tokenLength; i++ ) {
            if ( i + 1 === settingKey ) {
                tokenValue += settingValue;
            }
            else {
                tokenValue += this.state['v' + (i + 1)].trim();
            }

        }
        return tokenValue;
    }

    render() {
        const fields = [];

        for ( let i = 0; i < this.props.tokenLength; i++ ) {
            fields.push( { key: 'v' + (i + 1) } )
        }

        const { palette } = this.context.muiTheme;

        const format = {
            floatingLabelFixed: true,
            autoComplete      : false,
            hintText          : this.props.hint,

            onFocus           : this.setFocusTrue,
            onBlur            : this.setFocusFalse,
            onChange          : this.onTokenKeyChange,
            onKeyUp           : this.onTokenKeyUp,
            floatingLabelStyle: {
                color: this.state.focus ? palette.primary1Color : palette.disabledColor
            }
        };

        const cssClass = classNames( 'token', {
            focused: this.state.focus,
            blured : !this.state.focus,
        } );

        return (

            <div style={{ marginBottom: 0, textAlign: this.props.align }} >
                { fields.map( ( field, index ) => {
                    return (
                        <EnhancedTextField
                            className={cssClass}
                            name={field.key}
                            key={field.key + index}
                            ref={field.key}
                            value={this.state[field.key]}
                            floatingLabelText={ !index ? this.props.label : " " }
                            {...format}
                        />
                    );
                } ) }
                { this.props.cleanButton && this.renderCleanButton() }
            </div>
        );
    }

    renderCleanButton() {

        const buttonBG = this.state.token.length ? orange600 : grey400;

        return (
            <div style={{ display: 'inline-block' }} >
                <IconButton
                    tabIndex={-1}
                    onClick={this.cleanTokenField}
                    style={{ width: 24, height: 24, padding: 6 }}
                    iconStyle={{ width: 13, height: 13, backgroundColor: buttonBG, borderRadius: 90, padding: 2 }} >
                    <NavigationClose color="#FFFFFF" />
                </IconButton>
            </div>
        );
    }

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };

    static defaultProps = {
        tokenLength: 6,
        hint       : '#',
        label      : ' ',
        align      : 'left',
        cleanButton: false,
        onChange   : mnx.noop
    };

    static propTypes = {
        tokenLength: PropTypes.number,
        label      : PropTypes.string,
        hint       : PropTypes.string,
        align      : PropTypes.string,
        labelColor : PropTypes.string,
        cleanButton: PropTypes.bool,
        onChange   : PropTypes.func
    };
}


export default TokenField;