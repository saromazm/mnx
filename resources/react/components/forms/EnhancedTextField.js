/*
 * File: EnhancedTextField.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   2 Mar, 2017 | 7:24 PM
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
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import TextField from 'material-ui2/src/TextField/TextField';
import TextField from 'material-ui2/src/TextField/TextField';
import Checkbox from 'material-ui/Checkbox';
import Search from 'material-ui/svg-icons/action/search';
import TooltipMaterial from 'material-ui/internal/Tooltip';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

class EnhancedTextField extends Component {

    state = {
        focus            : false,
        passwordVisible  : false,
        visibilityTooltip: false
    };

    exposedObjects = {
        textField: null,
        checkBox : null,
        tooltip  : null,
    };

    onFocus = () => {
        this.setState( { focus: true } );
        this.props.onFocus();
    };

    onBlur = () => {
        this.setState( { focus: false } );
        this.props.onBlur();
    };

    visibilityChange = () => {
        this.setState( { passwordVisible: !this.state.passwordVisible } );
    };

    tooltipVisibilityOn = () => {
        this.setState( { visibilityTooltip: true } );
    };

    tooltipVisibilityOff = () => {
        this.setState( { visibilityTooltip: false } );
    };

    getValue = () => {
        const { textField } = this.exposedObjects;
        if ( !textField ) return false;
        return textField.input.value;
    };

    focus = () => {
        const { textField } = this.exposedObjects;
        if ( textField ) textField.input.focus();
        return this;
    };

    select = () => {
        const { textField } = this.exposedObjects;
        if ( textField ) textField.input.select();
        return this;
    };

    render() {
        const cssClass = classNames( 'enhancedTextField', 'EnhancedTextField--SC', this.props.className, {
            isFocused   : this.state.focus,
            isBlured    : !this.state.focus,
            isFixed     : !this.props.floatingLabelFixed,
            isSearchable: this.props.isSearchable,
            isSearching : this.props.isSearchable && this.props.value && this.props.value.trim() !== ''
        } );

        const textFieldCSS = classNames('TextField--Material', this.props.className);

        const values = {
            ...( !this.props.defaultValue && { value: this.props.value }),
            ...( this.props.defaultValue && { defaultValue: this.props.defaultValue }),
        };

        const visibilityColor = this.props.visibilityColor || this.context.muiTheme.palette.primary3Color;

        return (
            <div className={cssClass} >
                <TextField
                    ref={( elem ) => {
                        this.exposedObjects.textField = elem
                    }}
                    className={textFieldCSS}
                    hintText={this.props.hintText}
                    floatingLabelText={this.props.floatingLabelText}
                    floatingLabelFixed={this.props.floatingLabelFixed}
                    floatingLabelStyle={this.props.floatingLabelStyle}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    autoComplete={!this.props.autoComplete ? 'off' : ''}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyUp={this.props.onKeyUp}
                    onKeyDown={this.props.onKeyDown}
                    onKeyPress={this.props.onKeyPress}
                    type={this.props.type === 'password' && !this.state.passwordVisible ? 'password' : 'text'}
                    {...values}
                />
                { this.props.type === 'password' && this.props.revealCheck &&

                <div className="checkboxContainer"
                     onMouseOver={this.tooltipVisibilityOn}
                     onMouseOut={this.tooltipVisibilityOff} >

                    <Checkbox
                        ref={( elem ) => {
                            this.exposedObjects.checkBox = elem
                        }}
                        onClick={this.visibilityChange}
                        iconStyle={{ fill: visibilityColor }}
                        checkedIcon={<VisibilityOff/>}
                        uncheckedIcon={<Visibility />}
                        checked={ !this.state.passwordVisible }
                        tabIndex={-1}
                    />

                    { this.props.revealTooltipText &&
                    <TooltipMaterial
                        ref={( elem ) => {
                            this.exposedObjects.tooltip = elem
                        }}
                        className="tooltip"
                        verticalPosition="top"
                        horizontalPosition="center"
                        show={this.state.visibilityTooltip}
                        label={this.props.revealTooltipText}
                    />}
                </div>}
                {this.props.isSearchable &&
                <Search className="search" style={{ width: 16, height: 16 }} />
                }
                {this.props.children}
            </div>
        );

    }

    static defaultProps = {
        autoComplete      : true,
        floatingLabelFixed: true,
        type              : 'text',
        onFocus           : mnx.noop,
        onBlur            : mnx.noop,
        revealCheck       : true,
        visibilityColor   : null,
        revealTooltipText : null,
        isSearchable      : false,
    };

    static propTypes = {
        hintText          : TextField.propTypes.hintText,
        floatingLabelText : TextField.propTypes.floatingLabelText,
        onChange          : TextField.propTypes.onChange,
        name              : TextField.propTypes.name,
        value             : TextField.propTypes.value,
        floatingLabelFixed: TextField.propTypes.floatingLabelFixed,
        floatingLabelStyle: TextField.propTypes.floatingLabelStyle,
        autoComplete      : PropTypes.bool,
        onFocus           : TextField.propTypes.onFocus,
        onBlur            : TextField.propTypes.onBlur,
        onKeyDown         : PropTypes.func,
        onKeyUp           : PropTypes.func,
        onKeyPress        : PropTypes.func,
        type              : TextField.propTypes.type,
        revealCheck       : PropTypes.bool,
        visibilityColor   : PropTypes.string,
        revealTooltipText : PropTypes.string,
        defaultValue      : TextField.propTypes.defaultValue,
        isSearchable      : PropTypes.bool
    }

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

export default EnhancedTextField;