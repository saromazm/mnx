/*
 * File: Loading.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   17 Mar, 2017 | 1:25 PM
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

class Loading extends React.Component {

    static dots( props ) {

        const elements  = 10;
        const elemArray = [];

        for ( let i = 0; i < elements; i++ ) {
            elemArray.push( i );
        }

        return (
            <div className='contain-dots' >
                <div className="message" >{props.message}</div>
                { elemArray.map( indx => {
                    return (
                        <svg key={'elem_' + indx} >
                            <ellipse />
                        </svg>
                    )
                } ) }
            </div>
        )
    }

    static progressBar( props ) {
        return (
            <div className="contain-progressBar" >
                <div className="message" >{props.message}</div>
                <div className="progress" />
            </div>
        );
    }

    render() {
        if(!this.props.visible) return null;
        const Loader = this.props.style === 'dots' ? Loading.dots : Loading.progressBar;
        return (
            <div className='Loading--SC' >
                <Loader message={this.props.message} />
                { this.props.overlay && <div className="overlay"/> }
            </div>

        );
    }

    static propTypes    = {
        message: PropTypes.string,
        style  : PropTypes.string,
        overlay: PropTypes.bool,
        visible: PropTypes.bool,
    };
    static defaultProps = {
        message: '',
        style  : 'dots',
        overlay: false,
        visible: false,
    };
}

export default Loading;