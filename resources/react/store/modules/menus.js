/*
 * File: menus.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Mar, 2017 | 10:40 PM
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

/* global lg */

import {Map, List, OrderedMap} from 'immutable';
import {setTabContentToLoad} from "./tabs";
import axios from "axios";

const MENU_SET             = 'MENU_SET';
const MENU_SET_CURRENT     = 'MENU_SET_CURRENT';
const MENU_INSERT_INITIAL  = 'MENU_INSERT_INITIAL';
const MENU_GO_BACK         = 'MENU_GO_BACK';
const MENU_SAVE_STATE      = 'MENU_SAVE_STATE';
const MENU_LOAD_AND_INSERT = 'MENU_LOAD_AND_INSERT';

const baseMenu = {
    cells   : null,
    selected: 0,
    active  : 0,
    focused : 0,
    filter  : '',
    init    : 0,
    end     : 60
};


const initialState = {
    structure : new OrderedMap( {} ),
    navigation: new Map( {
        menusIDs    : new List(),
        menusHistory: new List( [1] ),
        selectedID  : false
    } )
};

export default function reducer( state = new OrderedMap( initialState ), action = {} ) {

    Object.freeze( state );
    lg.store( "MENUS STORE", action.type, state );
    let newState = state.asMutable();

    switch ( action.type ) {

        case MENU_INSERT_INITIAL:
            newState.setIn( ['navigation', 'selectedID'], 1 )
                .setIn( ['navigation', 'menusIDs'], action.data.menus.keySeq().toList() )
                .setIn( ['structure'], action.data.menus )
                .updateIn( ['structure'], menus => {
                    return menus.map( menu => {
                        menu.cells = new OrderedMap( menu.cells );
                        return { ...baseMenu, ...menu };
                    } );
                } );
            break;

        case MENU_LOAD_AND_INSERT:
            newState.setIn( ['structure', action.data.selectedID.toString()], action.data.menu )
                .updateIn( ['navigation', 'menusIDs'], v => v.push( action.data.selectedID.toString() ) )
                .setIn( ['navigation', 'selectedID'], action.data.selectedID )
                .updateIn( ['navigation', 'menusHistory'], history => {
                    return history.push( action.data.selectedID )
                } );

            break;

        case MENU_SET_CURRENT:
            newState.setIn( ['navigation', 'selectedID'], action.data.selectedID )
                .updateIn( ['navigation', 'menusHistory'], history => {
                    return history.push( action.data.selectedID )
                } );
            break;

        case MENU_SAVE_STATE:
            newState.updateIn( ['structure', action.data.selectedID.toString()], menu => {
                return Object.assign( {}, menu, action.data.updateData )
            } );
            break;

        case MENU_GO_BACK:
            let newLast = 1;
            newState.updateIn( ['navigation', 'menusHistory'], history => {
                const last = history.butLast();
                newLast    = last.takeLast( 1 ).get( 0 );
                return last;
            } );
            newState.setIn( ['navigation', 'selectedID'], newLast );
            break;

        case MENU_SET:
            state.merge( action.data );
            break;

        default:
            newState = state;
    }
    return newState.asImmutable()
}

export function setMenus( type = MENU_SET, data ) {
    return { type, data };
}


export function setInitialMenus( method = 'POST' ) {
    return dispatch => {
        axios( { url: 'menus', method } )
            .then( ( { data } ) => {
                dispatch( setMenus( MENU_INSERT_INITIAL, {
                    menus     : new Map( data.menus ).delete( '0' ),
                    selectedID: 1
                } ) );
            } )
            .catch()
    }
}

export function loadMenu( url, expectedId, method = 'POST' ) {
    return dispatch => {
        axios( { url, method  } )
            .then( ( { data } ) => {
                const newMenu = Object.assign( {}, baseMenu, {
                    cells: new OrderedMap( data.cells ),
                    id   : expectedId
                } );
                dispatch( setMenus( MENU_LOAD_AND_INSERT, {
                    menu      : newMenu,
                    selectedID: expectedId
                } ) );
            } )
            .catch();
    }
}

export function setCurrentMenu( menuID, selectingCell = null ) {
    return setMenus( MENU_SET_CURRENT, {
        selectedID: menuID, selectingCell
    } );
}

export function saveMenuState( menuID, updateData ) {
    return setMenus( MENU_SAVE_STATE, {
        selectedID: menuID, updateData
    } );
}

export function goBackMenu() {
    return setMenus( MENU_GO_BACK );
}

export function menuCellClick( event, info ) {
    const { id, target, kind, code } = info;

    if ( target && kind !== 'dynamic' ) {
        return setTabContentToLoad( info, event )
    }

    return function ( dispatch, getState ) {

        const menusIDs = getState().menus.getIn( ['navigation', 'menusIDs'] );

        if ( menusIDs.findIndex( v => v === id.toString() ) > -1 ) {
            if ( ( kind === "dynamic" && !event.metaKey) || kind !== 'dynamic' ) {
                return dispatch( setCurrentMenu( info.id ) );
            }
        }
        return dispatch( loadMenu( target || (code + '/menu'), id ) );
    }
}

export const actions = {
    setMenus, setInitialMenus, setCurrentMenu, goBackMenu, saveMenuState, loadMenu, menuCellClick
};