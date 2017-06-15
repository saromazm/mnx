/*
 * File: RightBar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   19 Mar, 2017 | 3:1 AM
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

//noinspection JSUnresolvedVariable
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

import SideBar from './SideBar';

class RightBar extends React.Component{

    constructor( props ) {
        super( props );
        autobind( this );
    }

    render(){

        const {preferences, className} = this.props;
        const cssClass = classNames( className );

        return (
            <SideBar enabled={preferences.rightBar} className={cssClass}>
                Component
            </SideBar>
        );

    }

    static defaultProps = {};
    static propTypes = {
        className: PropTypes.string,
    };
}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';

const mapToStateProps = ( { session } ) => {
    return { preferences: session.get('preferences') }
};

export default connect( mapToStateProps )( RightBar );