/*
 * File: Internal.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   28 Feb, 2017 | 10:37 PM
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
import classNames from 'classnames';
import {Layout} from 'antd';
import Drawer from 'material-ui/Drawer';

import MainContent from './MainContent';
import LeftBar from '../sideBars/LeftBar';
import RightBar from '../sideBars/RightBar';
import TopBar from './TopBar';

import AboutUsDialogView from '../global/AboutUsDialogView';
import ReLoginDialogView from '../global/ReLoginDialogView';


class Internal extends React.Component {

    constructor( props ) {
        super( props );
        this.state       = { drawerOpen: true };
        this.closeDrawer = this.closeDrawer.bind( this );
    }

    closeDrawer() {
        this.setState( { drawerOpen: !this.state.drawerOpen } )
    }

    render() {
        const mainCSS = classNames( 'mainContainer-layout', {
            drawer: this.state.drawerOpen
        } );
        return (
            <Layout className="InternalContainer--CT" >
                <TopBar drawerCloser={this.closeDrawer}/>
                <Layout className={mainCSS} >
                    <Drawer width={250} open={this.state.drawerOpen} >
                        <LeftBar className="leftBar-layout" />
                    </Drawer>
                    <MainContent className="mainContent-layout" />
                    <RightBar className="rightBar-layout" />
                </Layout>

                <ReLoginDialogView/>
                <AboutUsDialogView/>
            </Layout>
        );
    }
}

export default Internal
