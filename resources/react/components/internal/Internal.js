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
import {Layout} from 'antd';

import MainContent from './MainContent';
import LeftBar from '../sideBars/LeftBar';
import RightBar from '../sideBars/RightBar';
import TopBar from './TopBar';

import AboutUsDialogView from '../global/AboutUsDialogView';
import ReLoginDialogView from '../global/ReLoginDialogView';


const Internal = () => {
    return (
        <Layout className="InternalContainer--CT" >
            <TopBar/>

            <Layout className="mainContainer-layout">

                <LeftBar className="leftBar-layout"/>
                <MainContent className="mainContent-layout"/>
                <RightBar className="rightBar-layout"/>
            </Layout>

            <ReLoginDialogView/>
            <AboutUsDialogView/>
        </Layout>
    )
};

export default Internal
