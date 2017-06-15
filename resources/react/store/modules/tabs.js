/*
 * File: tabs.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   16 Mar, 2017 | 11:5 AM
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

/* global lg, dd */
import {push, replace} from 'react-router-redux';
import {Map, List} from 'immutable';
import UrlFixerForTabs, {TabsOrderManager} from '../../utilities/UrlFixerForTabs';
import {uniqueId} from 'lodash';

const TABS_SET    = 'TABS_SET';
const TABS_ADD    = 'TABS_ADD';
const TABS_REMOVE = 'TABS_REMOVE';
const TABS_SELECT = 'TABS_SELECT';
const TABS_UPDATE = 'TABS_UPDATE';

const SET_SPECIFIC_TAB_INFO = 'SET_SPECIFIC_TAB_INFO';
const SET_GLOBAL_TABS_INFO  = 'SET_GLOBAL_TABS_INFO';

const TABS_SET_CURRENT_TAB = 'TABS_SET_CURRENT_TAB';
let _tabCounter            = 0;

const assignEmpty = function ( ...args ) {
    return Object.assign( {}, ...args );
};

const tabCounter = function ( increment = true ) {
    if ( increment ) _tabCounter++;
    return _tabCounter.toString();
};

const individualTabState = {
    title        : 'New Tab',
    closable     : true,
    badge        : false,
    content      : false,
    isLoading    : true,
    loadingStatus: 'toLoad',
    url          : '/',
    isDirty      : false,
    uniqueID     : null,
};

export const initialState = {
    tabs    : new List( [assignEmpty( individualTabState, {
        title   : 'Main',
        closable: false,
        uniqueID: tabCounter(),
    } )] ),
    selected: "1",
    mainTab : "1"
};

export default function reducer( state = new Map( initialState ), action = {} ) {
    Object.freeze( state );
    let newState = state.asMutable();

    switch ( action.type ) {
        case TABS_ADD:
            newState.updateIn( ['tabs'], tabs => tabs.push(
                assignEmpty( individualTabState, action.data, {
                    uniqueID: tabCounter(),
                } )
            ) );
            break;

        case TABS_REMOVE:
            newState.updateIn( ['tabs'], tabs => tabs.delete( action.data.targetTab ) );
            newState.updateIn( ['tabs'], tabs => tabs.map(
                ( tab, index ) => assignEmpty( tab, { tabOrder: index + 1 } )
            ) );
            break;

        case TABS_SELECT:
            newState = state;
            break;

        case TABS_UPDATE:
            newState.updateIn( ['tabs', action.data.targetTab], tab => assignEmpty( tab, action.data.updatingData ) );
            break;

        case TABS_SET:
            newState = state;
            break;

        case TABS_SET_CURRENT_TAB:
        case SET_GLOBAL_TABS_INFO:
            newState.merge( action.data );
            break;

        case SET_SPECIFIC_TAB_INFO:
            newState.updateIn( ['tabs', action.targetTab], tabData => assignEmpty( tabData, action.data ) );
            break;

        default:
            newState = state;
    }
    return newState.asImmutable()
};


/**
 * Sets Global Data fot Tabs
 * @param type
 * @param data
 * @returns function
 */
export function setGlobalTabsInfo( type = SET_GLOBAL_TABS_INFO, data ) {
    return dispatch => {
        return dispatch( { type, data } );
    }
    //return { type, data };
}


export function setTab( type = TABS_SET, data ) {
    return { type, data };
}

/**
 * Adds a new Tab and Selects it
 * @param extraData
 * @returns {Function}
 */
export function addTab( extraData = {} ) {
    return function ( dispatch, getState ) {

        const nextID = (_tabCounter + 1).toString();

        dispatch( setTab( TABS_ADD, { ...extraData } ) );
        dispatch( setCurrentTab( nextID ) );
        dispatch( push( '/' + nextID ) );

        return Promise.resolve();
    }
}


/**
 * Removes Specific Tab and Selects the previous one
 * @param targetUniqueID
 * @returns {Function}
 */
export function removeTab( targetUniqueID ) {
    return function ( dispatch, getState ) {
        let deletingTabIndex   = null;
        const state            = getState();
        const tabsStore        = state.tabs;
        const allTabs          = tabsStore.get( 'tabs' );
        const selectedUniqueID = tabsStore.get( 'selected' );

        //noinspection JSUnusedLocalSymbols
        const removingTab = allTabs.find( ( tab, indx ) => {
            deletingTabIndex = indx;
            return tab.uniqueID === targetUniqueID;
        } );

        const manager   = new TabsOrderManager( allTabs );
        const nextIndex = manager.getNextTabIndex( deletingTabIndex )
            || manager.getPrevTabIndex( deletingTabIndex );
        const nextTab   = manager.getTabFromIndex( nextIndex );

        //Tab Removal
        dispatch( setTab( TABS_REMOVE, {
            targetTab: deletingTabIndex
        } ) );

        //If deleting the selected one
        if ( selectedUniqueID === targetUniqueID ) {
            dispatch( setGlobalTabsInfo( TABS_SET_CURRENT_TAB, {
                selected: nextTab.uniqueID
            } ) );
            dispatch( replace( UrlFixerForTabs.urlFromTabIndex( nextTab.uniqueID, nextTab.url ) ) );
        }
    }
}

export function updateTab( id, updatingData = {} ) {
    return setTab( TABS_UPDATE, {
        targetTab: id,
        updatingData
    } );
}

export function setTabContentToLoad( cellInfo, clickedEvent ) {
    return function ( dispatch, getState ) {

        const state            = getState();
        const stateLocation    = state.router.location;
        const stateTabs        = state.tabs;
        const allTabs          = stateTabs.get( 'tabs' );
        const selectedUniqueID = stateTabs.get( 'selected' );
        const tabObject        = allTabs.find( tab => tab.uniqueID === selectedUniqueID );
        const newURL           = UrlFixerForTabs.clickedCell( tabObject.uniqueID, cellInfo.target );

        //Avoid reload unless explicitly request
        if ( stateLocation.pathname === newURL && !clickedEvent.metaKey ) {
            return;
        }

        if ( tabObject.url === "/" ) {
            dispatch( replace( newURL ) );
            return
        }
        dispatch( push( newURL ) );
    }
}

/**
 * Sets the Current Tab Index
 * @param tabUniqueID
 * @param url
 * @returns function
 */
export function setCurrentTab( tabUniqueID, url = null ) {
    return function ( dispatch ) {
        return new Promise( function ( resolve, ) {
            dispatch( setGlobalTabsInfo( TABS_SET_CURRENT_TAB, {
                selected: tabUniqueID
            } ) );
            if ( url !== null ) {
                dispatch( push( url ) );
            }
            resolve();
        } );
    };
}

export function setURLForTab( index, storableURL, selectableTab = false, routableURL = false ) {
    return ( dispatch ) => {

        dispatch( updateTab( index, { url: storableURL } ) );

        if ( selectableTab ) {
            dispatch( setCurrentTab( selectableTab ) );
        }

        if ( routableURL || routableURL === '' ) {
            dispatch( replace( routableURL ) );
        }

        return Promise.resolve();
    };
}


export const actions = {
    setTab, addTab, removeTab, updateTab, setTabContentToLoad, setCurrentTab, setURLForTab
};
