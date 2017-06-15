/*
 * File: ListCell.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   9 Jun, 2017 | 12:56 AM
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

/* globals mnx, dd */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

import TouchRipple from 'material-ui/internal/TouchRipple';
import Checkbox from 'material-ui/Checkbox';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class ListCell extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.container      = null;
        this.wrapper        = null;
        this.page           = null;
        this.superContainer = null;

        this.parent      = null;
        this.grandParent = null;

        this.mounted = false;
        this.state   = {
            active : false,
            focused: false
        }
    }

    state = {
        name: 'component'
    };

    onCheckBoxClick( event ) {
        event.stopPropagation();
        event.preventDefault();
        dd( "here" );
    }

    setContainer( container ) {
        this.container = container;
        if( !container ) return;
        if ( this.props.usesInfiniteList ) {
            this.wrapper        = container.parentNode;
            this.page           = this.wrapper.parentNode;
            this.superContainer = this.page.parentNode;
            return;
        }
        this.superContainer = container.parentNode;
    }

    onKeyDown( event ) {
        const { key, metaKey } = event;
        if ( key === 'ArrowDown' || key === 'ArrowUp' || key === 'Tab' ) return;
        if ( key === 'Enter' || key === 'ArrowRight' ) return;
        //this.context.keyboardControl( event );
        if ( (key === 'F' || key === 'f') && metaKey ) {
            event.preventDefault();
            this.context.focusSearchField( event, this, this.superContainer );
            //this.focusSearchFilter( event );
        }
    }

    onKeyUp( event ) {
        const { key } = event;

        if ( key === 'ArrowDown' || key === 'ArrowUp' || key === 'Tab' ) {
            const isDown = key !== 'ArrowUp';
            this.moveFocus( event, isDown ? 'down' : 'up' );
        }
        else if ( key === 'Enter' || key === 'ArrowRight' ) {
            this.onClick( event );
        }
    }

    moveFocus( event, direction ) {
        dd( "MOVING FOCUS TO", direction );
        this.context.keyboardControl( event );
        const { key }   = event;
        let nextElement = null;
        let prevElement = null;

        if ( !this.props.usesInfiniteList ) {
            nextElement = this.container.nextSibling;
            prevElement = this.container.previousSibling;
        }
        else {
            const parentContainer = this.container.parentNode;
            const pageContainer   = parentContainer.parentNode;

            const prevContainer = parentContainer.previousSibling;
            const nextContainer = parentContainer.nextSibling;

            const prevPage = pageContainer ? pageContainer.previousSibling : null;
            const nextPage = pageContainer ? pageContainer.nextSibling : null;

            nextElement = nextContainer ? nextContainer.firstChild : nextPage ? nextPage.firstChild.firstChild : null;
            prevElement = prevContainer ? prevContainer.firstChild : prevPage ? prevPage.lastChild.firstChild : null;
        }

        if ( direction === 'down' ) {
            nextElement.focus();
            return;
        }
        if ( direction === 'up' ) {
            if ( prevElement ) prevElement.focus();
            if ( !prevElement ) this.context.focusSearchField( event, this );
        }

        /*switch ( key ) {
         case 'ArrowDown':
         dd( " - - - - -  Arrow down" );
         if ( nextElement ) {
         nextElement.focus();
         }
         break;
         case 'ArrowUp':
         if ( prevElement ) {
         prevElement.focus();
         }
         if ( !prevElement && this.props.onTopLimitReach ) {
         this.context.focusSearchField();
         }
         break;
         default:
         this.props.onKeyboardEvent( event );
         break;
         }*/
    }

    onClick( event ) {
        if ( !this.mounted ) return;
        event.persist();
        this.setState( { active: true, focused: true }, () => {
            this.props.onClick( event, this.props.index, this );
        } );
    }


    deactivate() {
        if ( !this.mounted ) return;
        this.setState( { active: false, focused: false } );
    }

    setFocused() {
        if ( !this.mounted ) return;
        this.props.onFocus( this );
        this.setState( { focused: true } );
    }

    setUnfocused() {
        if ( !this.mounted ) return;
        this.setState( { focused: false } );
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;
    }

    render() {
        const { titleIndex, subtitleIndex, descriptionIndex, iconIndex, children, menuItems }             = this.props;
        const { checkbox, labels, counter, index, ripple, iconURL, iconFont, iconSize }                   = this.props;
        const { cellDivisions, verticalDivision, underlinedTitle, activeTitle, animate, verticalSpacing } = this.props;

        const cssClass = classNames( 'ListCell--SC', this.props.className, {
            checkboxed                     : checkbox,
            divided                        : cellDivisions,
            countered                      : counter !== null,
            iconed                         : iconURL || iconFont || iconIndex,
            [iconSize + 'IconSize']        : iconSize,
            verticalDivision               : (typeof (index || counter) !== 'undefined' || checkbox || iconFont || iconURL) && verticalDivision,
            menued                         : menuItems.length > 0,
            animated                       : animate && !isNaN( index || counter ),
            active                         : this.state.active,
            focused                        : this.state.focused,
            noLabels                       : !labels,
            ['vSpacing-' + verticalSpacing]: verticalSpacing
        } );
        const cssTitle = classNames( "mnx title tiny", {
            underlined: underlinedTitle, block: !underlinedTitle, active: activeTitle
        } );

        const style = {
            animationDelay: ((index || counter) * 35) + "ms"
        };

        const labelsArr = Array.isArray( labels ) ? labels : [labels];
        const Ripple    = ripple ? TouchRipple : 'div';

        return (
            <div ref={ c => this.setContainer(c)}
                 className={cssClass}
                 style={style}
                 onClick={this.onClick}
                 onKeyUp={this.onKeyUp}
                 onKeyDown={this.onKeyDown}
                 onFocus={this.setFocused}
                 tabIndex={0} >
                <Ripple>

                    <div className="leftContainer" >
                        <div className="counter" >{counter === null ? '' : counter + 1}</div>
                        {iconURL && <img className="icon" src={iconURL} alt="" />}
                        {iconFont && <i className={"icon " + iconFont} src={iconFont} alt="" />}
                        {iconIndex && children[iconIndex]}
                        <Checkbox className="checkbox" />
                    </div>

                    <div className={cssTitle} >
                        {children && children[titleIndex]}
                        <div className="subtitle" >
                            {children && children[subtitleIndex]}
                        </div>

                    </div>
                    <div className="description" >
                        {children && children[descriptionIndex]}
                    </div>
                    <div className="labels tag mnx" >
                        {labelsArr.map( ( label, indx ) => <div key={'label' + indx} >{label}</div> )}
                    </div>

                    {menuItems.length > 0 &&
                    <IconMenu className="icon-menu"
                              useLayerForClickAway={true}
                              iconButtonElement={<IconButton className="iButton" ><MoreVertIcon /></IconButton>}
                              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        {menuItems.map( menu => (
                            <MenuItem className="sub-menu" primaryText={menu.label} key={'menu' + menu.label} />
                        ) )}
                    </IconMenu>
                    }

                </Ripple>
            </div>
        );

    }


    static defaultProps = {
        cellDivisions     : true,
        ripple            : true,
        iconSize          : 'small',
        counter           : null,
        index             : null,
        verticalDivision  : true,
        underlinedTitle   : false,
        activeTitle       : false,
        menuItems         : [],
        animate           : true,
        selected          : false,
        active            : false,
        onClick           : mnx.noop,
        onFocus           : mnx.noop,
        onBottomLimitReach: mnx.noop,
        onTopLimitReach   : mnx.noop,
        onKeyboardEvent   : mnx.noop,
        usesInfiniteList  : false,
        verticalSpacing   : 'huge',
    };
    static propTypes    = {
        className: PropTypes.string,

        //Extra Configuration
        checkbox        : PropTypes.bool,
        ripple          : PropTypes.bool,
        activeTitle     : PropTypes.bool,
        animate         : PropTypes.bool,
        usesInfiniteList: PropTypes.bool,
        verticalSpacing : PropTypes.string,

        //Elements
        labels   : PropTypes.any,
        menuItems: PropTypes.array,

        //Count And Index
        counter: PropTypes.number,
        index  : PropTypes.number,

        //Lines and Divisions
        underlinedTitle : PropTypes.bool,
        cellDivisions   : PropTypes.bool,
        verticalDivision: PropTypes.bool,

        //Icon Params
        iconFont: PropTypes.string,
        iconURL : PropTypes.string,
        iconSize: PropTypes.string,

        //Object's Index
        titleIndex      : PropTypes.number,
        subtitleIndex   : PropTypes.number,
        menuIndex       : PropTypes.number,
        descriptionIndex: PropTypes.number,
        contentIndex    : PropTypes.number,
        iconIndex       : PropTypes.number,

        //Cell Status
        active  : PropTypes.bool,
        selected: PropTypes.bool,

        //Actions and Events
        onClick           : PropTypes.func,
        onFocus           : PropTypes.func,
        onBottomLimitReach: PropTypes.func,
        onTopLimitReach   : PropTypes.func,
        onKeyboardEvent   : PropTypes.func,
    };

    static contextTypes = {
        muiTheme        : PropTypes.object.isRequired,
        keyboardControl : PropTypes.func.isRequired,
        focusSearchField: PropTypes.func.isRequired,
    };
}

export default ListCell;