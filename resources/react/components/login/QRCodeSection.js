/*
 * File: QRCode.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   25 Feb, 2017 | 1:28 PM
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
import QRCode from 'qrcode.react';
import TokenField from '../forms/TokenField';

import {red600, blueGrey50} from 'material-ui/styles/colors';

class QRCodeSection extends React.Component {

    state = {
        token: ''
    };

    onTokenChange = ( token, isFull, isLastField ) => {
        this.props.onChange( 'token', token );
    };

    componentDidMount() {
        this.refs['tokenField'].focusField();
    }

    render() {

        return (
            <div>
                <TokenField onChange={this.onTokenChange} align={'center'} ref="tokenField" tokenLength={6}
                            label={"Secret Token"} />

                <div className="qrCodeContainerSection" >
                    <QRCode size={100} value={this.props.qrCode} fgColor={red600} bgColor={blueGrey50} />
                    <div className="note" style={{ marginTop: 20 }} >
                        Use <b>Google Authenticator</b> to read this code<br/>
                        and get your token key.<br/>
                        <a href="" tabIndex={-1} >Get Google Authenticator</a>
                    </div>
                </div>

            </div>
        );
    }

    static propTypes = {
        qrCode  : PropTypes.string,
        onChange: PropTypes.func,
    }
}


export default QRCodeSection;