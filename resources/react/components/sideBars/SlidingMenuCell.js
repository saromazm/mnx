/*
 * File: SlidingMenuCell.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   12 Mar, 2017 | 1:25 AM
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
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';
import classNames from 'classnames';
import TouchRipple from 'material-ui/internal/TouchRipple';

class SlidingMenuCell extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
        this.state = {
            showPrivateInfo: false
        }
    }


    onClick( event ) {
        this.props.onClick( event, this.props.info, event.metaKey );
    }

    componentDidMount() {
        if ( this.props.isActive ) {
            //this.refs['container'].focus();
        }
    }

    shouldComponentUpdate( nextProps, nextState ) {
        return !shallowEqual( nextProps, this.props ) || !shallowEqual(nextState, this.state);
    }

    /*onKeyDown(event){
        const nextCell = this.refs.container.parentNode.nextSibling.firstChild;
        dd( event.key, this.refs.container , this.refs.container.parentNode.nextSibling.firstChild.focus());
    }*/

    onMouseOver(event){
        const {metaKey} = event;

        if( metaKey ){
            this.setState({ showPrivateInfo: true });
        }
    }

    onMouseLeave(){
        if( this.state.showPrivateInfo ){
            this.setState({ showPrivateInfo: false });
        }
    }

    render() {

        const { label, description, icon, id } = this.props.info;

        const cssClass = classNames( 'SlidingMenuCell--SC', {
            active  : this.props.isActive,
            selected: this.props.isSelected
        } );

        return (
            <div className={cssClass}
                 onClick={this.onClick}
                 tabIndex="1"
                 ref="container"
                 style={this.props.style}
                 onMouseEnter={this.onMouseOver}
                 onMouseLeave={this.onMouseLeave}
            >
                <TouchRipple abortOnScroll={true} >
                    { this.state.showPrivateInfo && <span className="id">ID: {id}</span> }
                    <div className={"icon " + icon} />
                    <div className="body" >

                        <h4>{label}</h4>
                        <p>
                            {this.props.indx + 1} This this is the menu cell description for {label.toLowerCase()} menu
                        </p>
                        <p className="fixed" >
                            {description}
                        </p>
                    </div>
                </TouchRipple>
            </div>
        );

    }

    static propTypes    = {
        cellIndex   : PropTypes.string,
        info        : PropTypes.object,
        onChangeMenu: PropTypes.func,
        onClick     : PropTypes.func,
        isActive    : PropTypes.bool,
        isSelected  : PropTypes.bool,
        isFocused   : PropTypes.bool,
        style       : PropTypes.object,
    };
    static defaultProps = {};
}

export default SlidingMenuCell;