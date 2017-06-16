/*
 * File: TopBar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   2 Mar, 2017 | 10:30 AM
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

/* global axios */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';
import AppBar from 'material-ui/AppBar';

import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Divider from 'material-ui/Divider';
import BadgeAnt from 'antd/lib/badge';
import Switch from 'antd/lib/switch';
import MonouxLogo from '../../components/global/MonouxLogo'

class TopBar extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    /** E V E N T S **/
    /** ************************************************* **/

    onDoubleClickLogo() {
        this.props.actions.openDialog( 'about' );
    }

    onSwitchChange( checked ) {
        this.props.actions.rightBarStatus( checked );
    }

    onTestConnection() {
        this.props.actions.openDialog( 'timeout' );
    }

    onLogout() {
        this.props.actions.endSession();
    }


    /** L I F E C Y C L E **/
    /** ************************************************* **/

    shouldComponentUpdate( nextProps, nextState ) {
        return nextProps.status > 0 &&
            (!shallowEqual( nextProps, this.props ) || !shallowEqual( nextState, this.state ));
    }

    /** I N T E R N A L   C O M P O N E N T S **/
    /** ************************************************* **/
    brandSection() {
        return (
            <div className="leftContainer">
                <IconButton onClick={ this.props.drawerCloser }>
                    <MenuIcon/>
                </IconButton>
                <div className="brand" onDoubleClick={this.onDoubleClickLogo} >
                    <MonouxLogo width={32} borderRadius={3} />
                    <div className="slogan" >
                        <h3>monoux</h3>
                        <span>apps made for humans</span>
                    </div>
                </div>
            </div>
        );
    };

    barTopRightOptions( props ) {

        const RightMenu = this.barMenu;

        return (
            <div className="mui-appBar-options" >
                <div className="mui-appBar-option" >
                    <BadgeAnt dot={false} >
                        <div className="option" >Notifications</div>
                    </BadgeAnt>
                </div>
                <div className="mui-appBar-option" >
                    <BadgeAnt dot >
                        <div className="option" >Messages</div>
                    </BadgeAnt>
                </div>
                <div className="mui-appBar-option" ><b>{props.user.get( 'username' )}</b></div>
                <RightMenu/>
            </div>
        );
    };

    barMenu() {
        const menuStyle   = { horizontal: 'right', vertical: 'top' };
        const preferences = this.props.preferences;
        const BarSwitch   = <div>
            <span style={{ fontSize: 12 }} >RightBar: </span>
            <Switch checked={preferences.rightBar}
                    onChange={this.onSwitchChange}
                    size={"small"} />
        </div>;
        return (
            <IconMenu
                iconButtonElement={this.barMenuIcon}
                targetOrigin={menuStyle}
                anchorOrigin={menuStyle} >
                <MenuItem className='subMenu' primaryText="Refresh" />
                <MenuItem className='subMenu' primaryText="Help" />
                <Divider />
                <MenuItem className='subMenu' primaryText="Sign out" onClick={this.onLogout} />
                <MenuItem className='subMenu' primaryText="Test Connection" onClick={this.onTestConnection} />
                <MenuItem primaryText={ BarSwitch} />
            </IconMenu>
        );
    }

    barMenuIcon = (
        <IconButton><MoreVertIcon /></IconButton>
    );

    /** R E N D E R **/
    /** ************************************************* **/
    render() {
        const BarOptions = this.barTopRightOptions;
        const MainLogo   = this.brandSection;
        return (
            <AppBar
                className="topBar"
                titleStyle={{ fontSize: 13 }}
                iconStyleLeft={{ display: 'flex' }}
                iconElementLeft={<MainLogo/>}
                iconElementRight={<BarOptions user={this.props.user} />}
            />
        );
    }

    static defaultProps = {};
    static propTypes    = {
        drawerCloser: PropTypes.func
    };
}


/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as session_actions} from '../../store/modules/session';
import {actions as dialogs_actions} from '../../store/modules/dialogs';

const mapToStateProps = ( { session } ) => {
    return {
        status     : session.get( 'status' ),
        preferences: session.get( 'preferences' ),
        user       : session.get( 'user' )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators( { ...session_actions, ...dialogs_actions }, dispatch )
    }
};

export default connect( mapToStateProps, mapDispatchToProps )( TopBar );