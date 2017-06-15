/*
 * File: CMLogo.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   21 Feb, 2017 | 11:10 PM
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

class CMLogo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width : 81,
            height: 39
        }
    }

    getSize(){

        const { sizeW, sizeH, oSizeW, oSizeH }   = this.props;

        const sizeInfo = !sizeW && !sizeH ? "none" : (  sizeW ? 'width' : 'height');
        let newWidth, newHeight;

        switch ( sizeInfo ) {
            case 'none':
                newWidth  = oSizeW;
                newHeight = oSizeH;
                break;
            case 'width':
                newWidth  = sizeW;
                newHeight = (newWidth / oSizeW) * oSizeH;
                break;
            case 'height':
                newHeight = sizeH;
                newWidth  = (newHeight / oSizeH) * oSizeW;
                break;
            default:
                newWidth  = oSizeW;
                newHeight = oSizeH;
                break;
        }

        this.setState( { width: Math.round( newWidth ), height: Math.round( newHeight ) } )
    }

    componentWillMount() {
        this.getSize()
    }


    componentDidUpdate(prevProps, prevState) {
        if( !prevProps ) return;
        if ( prevState.width !== this.state.width || prevState.height !== this.state.height ) {
            this.getSize();
        }
    }

    render(){

        const { width, height } = this.state;
        return (
            <svg id='cm-logo' width={ width + "px" } height={ height + "px" } viewBox="0 0 81 39" version="1.1"  fill={this.props.color} xmlns="http://www.w3.org/2000/svg">
                <title>CapitalMental Logo - 2016</title>
                <desc>This is the logo of CapitalMental - www.capitalmental.com</desc>
                <defs/>
                <path d="M34.412,3.85814964 C34.412,4.85714964 34.02,5.76614964 33.388,6.44814964 C32.693,7.20714964 31.695,7.67514964 30.583,7.67514964 L19.108,7.67514964 C12.777,7.67514964 7.647,
                        12.8181496 7.647,19.1491496 C7.647,25.4811496 12.777,30.6241496 19.108,30.6241496 C21.232,30.6241496 22.937,32.3301496 22.937,34.4401496 C22.937,36.5511496 21.232,
                        38.2691496 19.108,38.2691496 C12.866,38.2691496 7.317,35.2621496 3.817,30.6241496 C1.416,27.4271496 0,23.4461496 0,19.1491496 C0,14.8401496 1.416,10.8721496 3.817,
                        7.67514964 C7.317,3.02414964 12.866,0.0291496433 19.108,0.0291496433 L30.583,0.0291496433 C32.693,0.0291496433 34.412,1.73514964 34.412,3.85814964 Z M32.935,37.9818496 L33.092,
                        38.0408496 C35.018,38.7648496 37.166,37.7918496 37.891,35.8648496 L49.467,5.09784964 C50.192,3.17184964 49.218,1.02284964 47.292,0.297849643 L47.135,0.239849643 C45.209,
                        -0.485150357 43.06,0.488849643 42.335,2.41484964 L30.76,33.1828496 C30.035,35.1088496 31.009,37.2568496 32.935,37.9818496 Z M48.2415,37.9818496 L48.3985,38.0408496 C50.3245,
                        38.7648496 52.4725,37.7918496 53.1975,35.8648496 L64.7735,5.09784964 C65.4985,3.17184964 64.5245,1.02284964 62.5985,0.297849643 L62.4415,0.239849643 C60.5155,-0.485150357 58.3665,
                        0.488849643 57.6415,2.41484964 L46.0665,33.1828496 C45.3415,35.1088496 46.3155,37.2568496 48.2415,37.9818496 Z M63.5479,37.9818496 L63.7049,38.0408496 C65.6309,
                        38.7648496 67.7789,37.7918496 68.5039,35.8648496 L80.0799,5.09784964 C80.8049,3.17184964 79.8309,1.02284964 77.9049,0.297849643 L77.7479,0.239849643 C75.8219,-0.485150357 73.6729,
                        0.488849643 72.9479,2.41484964 L61.3729,33.1828496 C60.6479,35.1088496 61.6219,37.2568496 63.5479,37.9818496 Z"/>
            </svg>
        )
    }
}

CMLogo.defaultProps = {
    color : "#AB2430",
    oSizeW: 81,
    oSizeH: 39,
    sizeW : 0,
    sizeH : 0
};

CMLogo.propTypes = {
    color : PropTypes.string,
    oSizeW: PropTypes.number,
    oSizeH: PropTypes.number,
    sizeW : PropTypes.number,
    sizeH : PropTypes.number
};

export default CMLogo;