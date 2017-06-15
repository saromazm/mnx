/*
 * File: LeftBar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   11 Mar, 2017 | 3:55 AM
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

/* global dd */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';
import {List} from 'immutable';

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import SlidingMenu from './SlidingMenu';
import SideBar from './SideBar';
import LeftBarSearchField from './LeftBarSearchField';

const FWD = 'forward';
const BKW = 'backward';

class LeftBar extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.focusedElements = [];
        this.cellContainer   = [];
        this.currentCell     = [];
        this.currentMenu     = null;

        this.state = {
            menuDirection: '',
        };
    }

    keyboardControl( event, object = null, index = null ) {
        dd( "CONTROLLING KEYBOARD EVENTS", event.key );

        const { target, metaKey, key, keyCode } = event;

        //Do Search
        if ( (key === 'F' || key === 'f') && metaKey ) {
            event.preventDefault();
            this.focusSearchFilter( event );
        }

    }

    getChildContext() {
        return {
            keyboardControl : this.keyboardControl,
            focusSearchField: this.focusSearchField
        }
    }

    /** K E Y B O A R D  E V E N T S **/
    /** ************************************************* **/

    getSelectedOrFirstCell___() {
        const { menuID } = this.props;
        //try to get previously selected
        if ( this.focusedElements[menuID] ) return this.focusedElements[menuID].focus();

        //try to get the active one
        const active = document.getElementsByClassName( 'SlidingMenuCell--SC active' );
        if ( active.length > 0 ) return active[0].focus();

        //try to get the first
        const first = document.getElementsByClassName( 'SlidingMenuCell--SC' );
        if ( first.length > 0 ) return first[0].focus();
    }

    onKeyDown____( event ) {
        dd( "left bar keydown" );
        const { target, metaKey, key, keyCode } = event;

        if ( target.tagName === 'INPUT' ) {

            if ( key === 'Escape' || key === 'ArrowDown' ) {
                this.getSelectedOrFirstCell();
            }
            return;
        }

        event.preventDefault();

        const currentCell        = document.activeElement;
        const currentCellWrapper = currentCell.parentNode;
        const currentPage        = currentCellWrapper.parentNode;

        if ( key === 'ArrowDown' || key === 'Tab' ) {

            const nextWrapper = currentCellWrapper.nextSibling;
            const nextPage    = currentPage.nextSibling;

            if ( nextWrapper ) return nextWrapper.firstChild.focus();
            if ( nextPage ) return nextPage.firstChild.firstChild.focus();
        }


        if ( key === 'ArrowUp' ) {

            const prevWrapper = currentCellWrapper.previousSibling;
            const prevPage    = currentPage.previousSibling;

            if ( prevWrapper ) return prevWrapper.lastChild.focus();
            if ( prevPage ) return prevPage.lastChild.firstChild.focus();

            return this.focusSearchFilter( event );
        }


        if ( key === 'Enter' || key === 'ArrowRight' || keyCode === 32 ) {
            currentCell.click();
        }

        if ( (key === 'F' || key === 'f') && metaKey ) {
            event.preventDefault();

            this.focusSearchFilter( event );
        }

    }

    focusSearchFilter____( event, object, objectContainer ) {
        dd( "FOCUSING SEARCH FILTER ", object );
        const { searchFilter } = this.refs;
        const { container }    = searchFilter.refs;
        const { menuID }       = this.props;

        this.focusedElements[menuID] = event.target;
        container.focus();
    }

    focusSearchField( event, object, objectContainer ) {
        dd( object );
        const { searchFilter } = this.refs;
        const { container }    = searchFilter.refs;
        const { menuID }       = this.props;

        this.currentCell[menuID]   = object;
        this.cellContainer[menuID] = objectContainer;

        container.focus();
    }


    /** E V E N T S **/
    /** ************************************************* **/

    onSearchFieldKeyDown( event ){
        const { key, metaKey } = event;
        if( this.currentMenu ){
            if( key === 'ArrowDown' ){
                this.currentMenu.getWrappedInstance().focusFirstOrSelected();
            }
        }
    }

    onSearchChange( newValue, event = null ) {
        if ( !event ) return;
        const { menuID, actions } = this.props;
        actions.saveMenuState( menuID, { filter: newValue } );
    }

    onGoBack() {
        this.props.actions.goBackMenu();
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/

    componentDidMount() {
        this.props.actions.setInitialMenus();
    }

    componentWillReceiveProps( nextProps ) {

        //Disables Initial Menu Direction as Backwards
        if ( this.props.menuID === -1 ) return;
        this.setState( {
            menuDirection: nextProps.historySteps > this.props.historySteps ? FWD : BKW
        } );
    }


    /** R E N D E R **/
    /** ************************************************* **/
    render() {

        const { className, preferences, filter, menuID, menuData, filteredCells } = this.props;

        const transition = "menu-" + this.state.menuDirection;
        const cssClass   = classNames( 'LeftBar--CT', className );

        return (
            <SideBar className={cssClass} enabled={preferences.leftBar} >
                <LeftBarSearchField
                    onChange={this.onSearchChange}
                    onKeyUp={this.onSearchFieldKeyDown}
                    onGoBack={this.onGoBack}
                    value={filter}
                    isBackVisible={this.props.historySteps > 1}
                    menuID={menuID}
                    counter={filteredCells.size}
                    ref="searchFilter" />

                <CSSTransitionGroup
                    className="container"
                    transitionName={transition}
                    transitionEnterTimeout={ 260 }
                    transitionLeaveTimeout={ 260 }
                    component='div' >

                    <SlidingMenu
                        key={'leftMenu_' + menuID}
                        menuData={menuData}
                        filteredCells={filteredCells}
                        onTopLimitReach={this.focusSearchFilter}
                        keyboardControl={this.onKeyDown}
                        ref={ m => this.currentMenu = m }
                        //ref="slidingMenuRef"
                    />

                </CSSTransitionGroup>

            </SideBar>
        );

    }

    /** P O S S I B L E   D E L E T I O N S **/
    /** ************************************************* **/


    static propTypes         = {};
    static defaultProps      = {
        className: PropTypes.string
    };
    static childContextTypes = {
        keyboardControl : PropTypes.func,
        focusSearchField: PropTypes.func,
    }
}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as session_actions} from '../../store/modules/session';
import {actions as menus_actions} from '../../store/modules/menus';

const cellFilters = ( info, filter, fields = ["label"] ) => {
    if ( !Array.isArray( fields ) ) fields = [fields];
    for ( let f in fields ) {
        if ( fields.hasOwnProperty( f ) ) {
            if ( info[fields[f]] && info[fields[f]].toLowerCase().indexOf( filter ) > -1 ) return true;
        }
    }
    return false;
};

const mapToStateProps = ( { session, menus } ) => {

    const nav  = menus.get( 'navigation' );
    const id   = nav.get( 'selectedID' ) || -1;
    const menu = menus.getIn( ['structure', id.toString()] );

    const filterFunc = data => cellFilters( data, menu.filter, ['label'] );

    return {
        preferences  : session.get( 'preferences' ),
        historySteps : nav.get( 'menusHistory' ).size,
        menusIDs     : nav.get( 'menusIDs' ),
        menuID       : id || -1,
        menuData     : menus.getIn( ['structure', id.toString()] ),
        filteredCells: id !== -1 ? menu.cells.filter( filterFunc ) : new List( [] ),
        filter       : id !== -1 ? menu.filter : ''
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators( { ...session_actions, ...menus_actions }, dispatch )
});

export default connect( mapToStateProps, mapDispatchToProps )( LeftBar );