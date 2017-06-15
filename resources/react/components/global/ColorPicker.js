/*
 * File: colorPicker.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   31 Mar, 2017 | 5:58 PM
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
import autobind from 'react-autobind-helper';
import classNames from 'classnames';
import { lightBlack, deepOrange400, blue400 } from 'material-ui/styles/colors';

import {BlockPicker} from 'react-color';

class ColorPicker extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.state = {
            showPicker: false,
            color     : props.color
        };
    }

    /** E V E N T S **/
    /** ************************************************* **/
    addEvents() {
        window.addEventListener( 'click', this.onClosePicker );
    }

    removeEvents() {
        window.removeEventListener( 'click', this.onClosePicker );
    }

    onChangeColor( color ) {
        const rgb = color.rgb;
        const colorRGBA =`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
        this.props.onChangeColor( color );
        this.setState( { color:colorRGBA, showPicker: !this.props.closeOnSelect } );
    }

    onOpenPicker( event = null ) {
        if ( event ) event.stopPropagation();
        this.props.onOpenPicker();
        this.setState( { showPicker: true }, this.addEvents );

    }

    onClosePicker( event = null ) {
        if ( event ) event.stopPropagation();
        this.props.onClosePicker();
        this.setState( { showPicker: false }, this.removeEvents );

    }

    /** R E N D E R **/
    /** ************************************************* **/
    render() {
        const cssClass = classNames( 'ColorPicker--SC', this.props.className );
        return (
            <div className={cssClass} onClick={this.onOpenPicker} >
                <div className="content" style={{ backgroundColor: this.state.color }} />
                {this.renderPickerControl()}
            </div>
        );
    }

    renderPickerControl() {
        if ( !this.state.showPicker ) return null;
        const cssClass = classNames( 'color-picker', this.props.openDirection );
        const colors   = this.props.colors;
        return (
            <div className={cssClass} >
                <BlockPicker colors={ colors } color={this.state.color} onChange={this.onChangeColor} />
            </div>
        );
    }


    static defaultProps = {
        color        : lightBlack,
        colors       : ['#CCC', lightBlack, deepOrange400, blue400],
        openDirection: 'left',
        onChangeColor: mnx.noop,
        onOpenPicker : mnx.noop,
        onClosePicker: mnx.noop,
        closeOnSelect: false,
    };
    static propTypes    = {
        className    : PropTypes.string,
        color        : PropTypes.string,
        colors       : PropTypes.array,
        openDirection: PropTypes.string,
        onChangeColor: PropTypes.func,
        onOpenPicker : PropTypes.func,
        onClosePicker: PropTypes.func,
        closeOnSelect: PropTypes.bool
    };
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

export default ColorPicker;