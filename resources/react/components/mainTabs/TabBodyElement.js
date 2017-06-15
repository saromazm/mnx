/*
 * File: TabBodyElement.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   16 Mar, 2017 | 7:3 PM
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
/*global dd */
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';
import {Helmet} from "react-helmet";


import Loading from '../global/Loading';
import TabModuleSelector from './TabModuleSelector';


class TabBodyElement extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    state = {
        code   : '',
        loading: false
    };

    views = {
        loading: <div>Loading</div>,
        current: null,
        next   : null
    };

    shouldComponentUpdate( nextProps ){
        return !shallowEqual( this.props.location, nextProps.location )
            || !shallowEqual( this.props.match.params, nextProps.match.params )
            || !shallowEqual( this.props.tabData, nextProps.tabData );
    }

    /** R E N D E R **/
    /** ************************************************* **/
    render() {

        const { loading } = this.state;
        const { match }   = this.props;
        const { module }  = match.params;
        const tab         = this.props.tabUniqueID;

        return (

            <div className="TabBody--CT" >
                <Loading visible={loading} message={"Loading content"} overlay={true} />
                {this.props.visible && <Helmet title={'Monoux Tab' + tab + " " + module } />}
                <TabModuleSelector tabData={this.props.tabData} match={match} location={this.props.location}/>
            </div>
        );

    }

    static propTypes = {
        tabData    : PropTypes.object,
        tabOrder   : PropTypes.number,
        tabUniqueID: PropTypes.string,
        tabIndex   : PropTypes.number,
        location   : PropTypes.object,
    };

    static defaultProps = {
        tabData: null,
    };
}

export default TabBodyElement;