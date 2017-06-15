/*
 * File: TabModuleSelector.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   30 Apr, 2017 | 2:6 AM
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

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TabComponentLoader from './TabComponentLoader';

class TabModuleSelector extends Component {

    shouldComponentUpdate( nextProps ) {
        const { routerTabID } = nextProps.match.params;
        const { uniqueID }    = nextProps.tabData;

        return routerTabID === uniqueID
            || (typeof routerTabID === 'undefined' && this.props.tabData.uniqueID === "1");
    }

    render() {

        const { params } = this.props.match;

        switch ( params.module ) {
            case 'testing':
            case 'companies':
            case 'users':
                return (
                    <TabComponentLoader
                        key={this.props.tabData.uniqueID + params.module}
                        tabData={this.props.tabData}
                        match={this.props.match}
                        location={this.props.location}/>
                );
            case 'xtesting':
                return <div>TESTING</div>;
            default:
                return ( <div>NADA {params.module} {this.props.match.params['routerTabID']}</div> );
        }
    }

    static propTypes = {
        parentIndex: PropTypes.object,
        tabData    : PropTypes.object,
        match      : PropTypes.object,
        location   : PropTypes.object,
    };
}

export default TabModuleSelector;