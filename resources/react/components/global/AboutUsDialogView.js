/*
 * File: AboutUs.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   10 Mar, 2017 | 10:39 PM
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

/* global dd */

import React from 'react';
import autobind from 'react-autobind-helper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui2/src/FlatButton/FlatButton';

class AboutUsDialogView extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }


    handleClose() {
        return this.props.actions.closeDialog( 'about' );
    }

    aboutUSButton = [
        <FlatButton
            label="OK"
            primary={true}
            onTouchTap={this.handleClose.bind( this )} />
    ];

    Content = () => (
        <div>
            <b>CapitalMental MX</b><br/>
            We are a company dedicated to ...
        </div>
    );


    render() {

        const Content = this.Content;
        const status  = this.props.dialogs.get( 'about' );

        return (
            <Dialog className="mui-dialog"
                    bodyClassName="mui-dialog-body"
                    titleClassName="mui-dialog-title"
                    contentClassName="mui-dialog-content"
                    title="About US | CapitalMental"
                    modal={false}
                    actions={this.aboutUSButton}
                    open={status}
                    onRequestClose={this.handleClose}
            >
                <Content/>
            </Dialog>
        );

    }
}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dialog_actions from '../../store/modules/dialogs';

const mapToStateProps = ( { dialogs } ) => {
    return { dialogs }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators( { ...dialog_actions }, dispatch )
    }
};

export default connect( mapToStateProps, mapDispatchToProps )( AboutUsDialogView );