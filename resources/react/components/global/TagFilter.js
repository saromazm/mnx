/*
 * File: TagFilter.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Jun, 2017 | 1:45 AM
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
import classNames from 'classnames';

export default class TagFilter extends React.Component {
    constructor( props ) {
        super( props );
        autobind( this );
        this.state = {
            options  : this.props.options,
            selected : this.props.default,
            exclusive: this.props.exclusive
        };
    }

    onOptionClicked( event ) {
        const val         = event.target.getAttribute( 'data-value' );
        const isSelected  = this.state.selected.find( el => el === val );
        const isExclusive = this.state.exclusive.find( el => el === val );
        const selected    = this.state.selected.slice( 0 ).filter(
            el => !this.state.exclusive.find( e => e === el )
        );

        if ( !isSelected ) {
            selected.push( val );
            this.props.onFilterChange( isExclusive ? [val] : selected );
            this.setState( {
                selected: isExclusive ? [val] : selected
            } )
        }
        else {
            const newSelected = this.state.selected.filter( el => el !== val );
            if ( newSelected.length === 0 ) return;
            this.props.onFilterChange( newSelected );
            this.setState( {
                selected: newSelected
            } )
        }
    }

    render() {
        const cssClass = classNames( 'filterBar', { isInvisible: !this.props.isVisible } );
        return (
            <div className={cssClass} >
                {this.props.options.map( opt => {
                    const selected = this.state.selected.find( el => opt === el );
                    return (
                        <span key={'opt' + opt}
                              className={ selected ? 'active' : '' }
                              onClick={this.onOptionClicked}
                              data-value={opt}
                        >
                            {opt}
                        </span>
                    )
                } )}
            </div>
        );
    }

    static propTypes    = {
        options       : PropTypes.array,
        default       : PropTypes.array,
        exclusive     : PropTypes.array,
        onFilterChange: PropTypes.func,
        isVisible     : PropTypes.bool,
    };
    static defaultProps = {
        options       : [],
        default       : [],
        exclusive     : [],
        onFilterChange: mnx.noop,
        isVisible     : true
    }
}