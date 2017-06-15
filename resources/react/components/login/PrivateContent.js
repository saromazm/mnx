/*
 * File: PrivateContent.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   18 Apr, 2017 | 1:55 AM
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

//React Basics
//noinspection JSUnresolvedVariable
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';

//Router
import {withRouter} from 'react-router-dom';

//Components
import SimpleLoader from '../global/SimpleLoader';
import {ComponentLoader} from '../global/Bundle';
import loginLoader from 'bundle-loader?lazy&name=[name]!../login/Login';
import internalLoader from 'bundle-loader?lazy&name=[name]!../internal/Internal';

class PrivateContent extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    /** O P E R A T I O N S **/
    /** ************************************************* **/

    checkStatus() {
        this.props.actions.checkAuthStatus().catch( () => {
            this.props.history.push( '/error' );
        } );
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/

    componentWillUpdate(nextProps) {

        const { secured, auth, error } = nextProps;

        if ( error ) {
            return
        }

        if ( !secured || !auth ) {
            this.checkStatus();
        }
    }


    componentWillMount() {
        this.checkStatus();
    }


    /** R E N D E R **/
    /** ************************************************* **/

    render() {
        const { secured, auth, init, error } = this.props;

        const authenticated = !secured || !auth;
        const authComponent = authenticated ? loginLoader : internalLoader;

        return init && !error
            ? <ComponentLoader loader={authComponent} />
            : <SimpleLoader/>;

    }

    static propTypes    = {
        className: PropTypes.string,
    };

}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkAuthStatus} from '../../store/modules/session';

const mapToStateProps = ( { session } ) => {
    return {
        preferences: session.get( 'preferences' ),
        auth       : session.get( 'auth' ),
        secured    : session.get( 'secured' ),
        init       : session.get( 'init' ),
        error      : session.get( 'error' ),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators( { checkAuthStatus }, dispatch )
    }
};

export default withRouter( connect( mapToStateProps, mapDispatchToProps )( PrivateContent ) );