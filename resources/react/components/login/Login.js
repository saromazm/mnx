/*
 * File: Login.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 5:56 PM
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
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import shallowEqual from "shallowequal";

import UserPassword from './UserPassword';
import QRCodeSection from './QRCodeSection';
import CMLogo from '../global/CMLogo';

import Divider from 'material-ui/Divider';
//import FlatButton from 'material-ui2/src/FlatButton/FlatButton';
import FlatButton from 'material-ui2/src/FlatButton/FlatButton';
//import FlatButton from 'material-ui2/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import {
    grey100 as buttonRippleColor,
    lightBlue100 as logoColor,
} from 'material-ui/styles/colors';

const WRONG_PASS  = 401;
const WRONG_TOKEN = 403;
const SIGNED_IN   = 202;
const SECURED     = 200;
const UNSIGNED    = 0;

class Login extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.state = {
            //Snackbar
            snackbarVisible: false,
            snackbarMessage: '',

            //UserPassword
            tokenLength: 6,
            username   : 'mzamoras@backlogics.com',
            password   : 'my.querty',
            rememberMe : false,
            token      : '',

            systemName   : 'Monoux',
            systemVersion: '1.0'
        };
    }


    /** O P E R A T I O N S **/
    /** ************************************************* **/

    snackbarControl( visible, message = '' ) {
        this.setState( { snackbarVisible: visible, snackbarMessage: message } );
    };

    dismissSnackbar() {
        this.snackbarControl( false, this.state.snackbarMessage );
    }


    /** C A L C U L A T I O N S **/
    /** ************************************************* **/

    isUserPasswordInvalid() {
        const { username, password } = this.state;
        return (!username || !password || username.length < 3 || password.length < 6 || username.indexOf( "@" ) < 0 || username.indexOf( "." ) < 0 );
    }

    isQRTokenInvalid() {
        return this.state.token.length < this.state.tokenLength;
    }

    isButtonDisabled() {
        return this.state.snackbarVisible
            ? true
            : this.props.status === UNSIGNED
                ? this.isUserPasswordInvalid()
                : this.isQRTokenInvalid();
    }


    /** E V E N T S **/
    /** ************************************************* **/

    handleCancel() {
        return this.props.actions.endSession();
    }

    onChangeHandler( field, value ) {
        this.setState( { [field]: value } );
    };

    handleSubmit() {

        const { username, password, rememberMe, token } = this.state;

        this.props.actions.loginAttempt( { username, password, rememberMe, token } )

            .then( ( { status } ) => {

                switch ( status ) {

                    case WRONG_PASS:
                        this.snackbarControl( true, this.userPasswordError );
                        break;
                    case WRONG_TOKEN:
                        this.snackbarControl( true, this.qrCodeError );
                        break;
                    default:
                        break;
                }

            } )
            .catch( error => this.snackbarControl( true, error.message ) );
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/

    shouldComponentUpdate( nextProps, nextState ) {
        return nextProps.status !== SECURED &&
            (!shallowEqual( nextProps, this.props ) || !shallowEqual( nextState, this.state ));
    }

    /** I N T E R N A L   C O M P O N E N T S **/
    /** ************************************************* **/

    authComponent() {
        if ( this.props.status === UNSIGNED ) {
            return (
                <UserPassword
                    username={this.state.username}
                    password={this.state.password}
                    remember={this.state.rememberMe}
                    onChange={this.onChangeHandler} />
            );
        }

        return (
            <QRCodeSection
                qrCode={this.props.qrCode}
                onChange={this.onChangeHandler} />
        );
    }

    headerComponent() {
        return (
            <div className="headerSection" >
                <h2 className="mnx fit" >
                    Welcome to {this.state.systemName}
                    <span className="mini semi-bold" > v {this.state.systemVersion}</span>
                </h2>
                Please Fill your Data
                <Divider style={{ marginTop: 20 }} />
            </div>
        );
    }

    snackbarHolder() {
        return (
            <div className="snackBarHolder" >
                <Snackbar
                    open={this.state.snackbarVisible}
                    message={this.state.snackbarMessage}
                    action="ok"
                    onActionTouchTap={this.dismissSnackbar}
                    autoHideDuration={5000}
                    onRequestClose={this.dismissSnackbar}
                />
            </div>
        );
    }

    submitComponent() {
        return (
            <FlatButton rippleColor={buttonRippleColor}
                        className="submitButton"
                        ref={( btn ) => {
                            this.submitButton = btn ? btn.enhancedButton : btn
                        }}
                        label="Login"
                        primary={true}
                        onClick={this.handleSubmit}
                        disabled={this.isButtonDisabled()}
                        keyboardFocused={true}
            />
        );
    }

    cancelComponent() {
        if ( this.props.status !== SIGNED_IN ) return null;
        return (
            <FlatButton
                className="submitButton"
                label="Cancel"
                default={true}
                onClick={this.handleCancel}
                disabled={false} />
        )
    }

    submitButton      = {};
    userPasswordError = <span><b>Wrong username / password</b> please try again!</span>;
    qrCodeError       = <span><b>Wrong TokenKey</b> please try again!</span>;

    /** R E N D E R **/
    /** ************************************************* **/

    render() {

        const { palette }     = this.context.muiTheme;
        const AuthComponent   = this.authComponent;
        const HeaderComponent = this.headerComponent;
        const SnackbarHolder  = this.snackbarHolder;
        const SubmitComponent = this.submitComponent;
        const CancelComponent = this.cancelComponent;

        return (
            <div className="loginContainer" >
                <div className="loginBoxContainer animated bounceInDown" >

                    <div className="left" style={{ backgroundColor: palette.primary1Color }} >
                        <CMLogo color={logoColor} />
                    </div>

                    <div className="right" >

                        {/* H E A D E R */}
                        <HeaderComponent/>

                        {/* S E L E C T E D   C O M P O N E N T S */}
                        {/*<form onSubmit={this.handleSubmit} className="login-form" >*/}
                            <AuthComponent/>
                        {/*</form>*/}

                        {/* B O T T O M  C O N T R O L S */}
                        <div className="formRow" >
                            <Divider className='bottomDivider' />
                            <SubmitComponent/>
                            <CancelComponent/>
                        </div>
                    </div>

                    {/* S N A C K B A R */}
                    <SnackbarHolder/>

                </div>

                {/* F O O T E R */}
                <div className="bottomBar animated bounceInDown" >
                    Created and Designed by <strong>CapitalMental ®</strong> 2017.<br/>
                    <strong style={{ color: logoColor }} >From Monterrey with Love!</strong>
                </div>

            </div>
        );
    }

    //noinspection JSUnusedGlobalSymbols
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as act} from '../../store/modules/session';

const mapToStateProps = ( { session } ) => {
    return {
        status : session.get( 'status' ),
        auth   : session.get( 'auth' ),
        secured: session.get( 'secured' ),
        qrCode : session.get( 'qrCode' )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators( { ...act }, dispatch ),
    }
};

export default connect( mapToStateProps, mapDispatchToProps )( Login );
