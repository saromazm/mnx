/*
 * File: SlidingMenu.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   12 Mar, 2017 | 12:39 AM
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

/* globals dd, mnx */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import {InfiniteList} from 'react-scrollbars2';
import SlidingMenuCell from './SlidingMenuCell';
import ListCell from '../../components/global/ListCell';

class SlidingMenu extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
        this.menu  = null;
        this.state = {
            focusedCellObject: null,
            activeCellObject : null
        };
    }


    /** E V E N T S **/
    /** ************************************************* **/

    onClickCell___( event, info ) {

        const { id, selected, active } = this.props.menuData;

        //Avoid cell re-selection
        if ( selected !== info.id || active !== info.id ) {
            this.props.actions.saveMenuState( id, {
                selected: info.id, active: info.id
            } );
        }

        this.props.actions.menuCellClick( event, info );
    }

    onClickCell( event, index, object ) {
        const { activeCellObject }     = this.state;
        const info                     = this.props.filteredCells.get( index.toString() );
        const { id, selected, active } = this.props.menuData;

        if ( activeCellObject && activeCellObject !== object ) {
            activeCellObject.deactivate();
        }

        this.setState( { activeCellObject: object } );

        //Avoid cell re-selection
        if ( selected !== info.id || active !== info.id ) {
            this.props.actions.saveMenuState( id, {
                selected: info.id, active: info.id
            } );
        }

        this.props.actions.menuCellClick( event, info );
    }

    onCellFocus( object ) {
        const { focusedCellObject } = this.state;
        if ( focusedCellObject ) {
            focusedCellObject.setUnfocused();
        }
        this.setState( { focusedCellObject: object } );
    }


    /** R E N D E R **/
    /** ************************************************* **/

    renderCells( cellInfo, index, indx = null ) {
        return (
            <ListCell
                index={ parseInt( index ) }
                titleIndex={0}
                //subtitleIndex={1}
                descriptionIndex={1}
                iconFont={cellInfo.icon}
                verticalDivision={true}
                animate={false}
                onClick={this.onClickCell}
                usesInfiniteList={true}
                verticalSpacing="big"
                onFocus={this.onCellFocus}
                onTopLimitReach={this.props.onTopLimitReach}
                onKeyboardEvent={this.props.keyboardControl}
            >
                <div>{cellInfo.label}</div>

                <div>This is menu cell description for the { cellInfo.label } menu</div>
            </ListCell>
        )
    }

    renderCells__( cellInfo, index, indx = null ) {

        return (
            <SlidingMenuCell
                cellIndex={ index.toString() }
                indx={indx}
                info={cellInfo}
                onClick={this.onClickCell}
                isActive={ this.props.menuData.active === cellInfo.id }
                isSelected={ this.props.menuData.selected === cellInfo.id }
            />
        )
    }

    focusFirstOrSelected() {
        dd( "focusFirstOrSelected", this.menu );
        if( this.menu ){
            dd( this.menu.getElementsByClassName('ListCell--SC focused')[0].focus() );
        }

    }

    render() {

        const { menuData, filteredCells } = this.props;
        if ( !menuData ) return null;

        return (
            <div className="SlidingMenu--CT" ref={ m => this.menu = m }>
                <InfiniteList
                    defaultRowHeight={100}
                    totalItems={ menuData.cells.size }
                    items={filteredCells} offset={10}
                    renderFunc={this.renderCells}
                    visibles={12}
                    scrollbarProps={{ injectStyle: false }}
                />
            </div>
        );
    }


    static propTypes = {
        menuData          : PropTypes.any,
        filteredCells     : PropTypes.any,
        onBottomLimitReach: PropTypes.func,
        onTopLimitReach   : PropTypes.func,
        keyboardControl   : PropTypes.func,
    };

    static defaultProps = {
        onBottomLimitReach: mnx.noop,
        onTopLimitReach   : mnx.noop,
    };
}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as menu_actions} from '../../store/modules/menus';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators( { ...menu_actions }, dispatch )
});

export default connect( null, mapDispatchToProps, null, { withRef: true } )( SlidingMenu );