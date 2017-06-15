/*
 * File: TabComponentLoader.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   30 Apr, 2017 | 1:56 AM
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
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';
import axios from 'axios';

import Loading from '../global/Loading';
import Bundle from '../../components/global/Bundle';

import usersLoader from 'bundle-loader?lazy&name=[name]!../../modules/management/User';
import fontsLoader from 'bundle-loader?lazy&name=[name]!../../modules/testing/Fonts';
import companiesLoader from 'bundle-loader?lazy&name=[name]!../../modules/management/Company';

const modules = {
    usersLoader, fontsLoader, companiesLoader
};


class TabComponentLoader extends Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.loading = false;
        this.state   = {
            dataOrigin: null,
            dataLoaded: null
        }
    }

    loadAndPassData( url ) {
        if ( this.loading ) return;
        this.loading = true;
        axios.post( url )
            .then( this.onDataLoaded )
    }

    onDataLoaded( { data } ) {
        this.loading = false;
        this.setState( {
            dataLoaded: data
        } )
    }

    componentWillReceiveProps( nextProps ) {
        if ( !shallowEqual( this.props.tabData, nextProps.tabData ) ) {
            this.loadAndPassData( nextProps.tabData.url );
        }
    }

    componentWillMount() {
        const { match }  = this.props;
        const { params } = match;

        const { elementID, module } = params;

        if ( elementID ) {
            this.loadAndPassData( module + "/" + elementID )
        }
    }

    render() {

        const { dataLoaded }     = this.state;
        const { module, action } = this.props.match.params;
        const loader             = modules[action + "Loader"] || modules[module + 'Loader'];

        return (
            <Bundle load={loader} >
                {( Component ) => Component && dataLoaded
                    ? <Component {...dataLoaded} dataLoaded={dataLoaded} location={this.props.location} />
                    : <Loading visible={true} message={"Loading content"} overlay={true} />}
            </Bundle>
        );
    }

    static propTypes = {
        location: PropTypes.object,
        match   : PropTypes.object,
        tabData : PropTypes.object
    }
}

export default TabComponentLoader;