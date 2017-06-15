/*
 * File: MonouxLogo.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   22 Feb, 2017 | 4:32 PM
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

class MonouxLogo extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            originalWidth : 5270,
            originalHeight: 5270
        }
    }

    calculateSize() {
        const { originalWidth, originalHeight } = this.state;

        const propWidth  = this.props.width;
        const propHeight = this.props.height;
        const _radio     = propWidth ? originalWidth / propWidth : originalHeight / propHeight;
        const width      = propWidth ? propWidth : originalWidth / _radio;
        const height     = propHeight ? propHeight : originalHeight / _radio;

        return { width, height, };
    }

    render() {
        const newStyle = Object.assign( {}, this.props.style, {
            lineHeight: 0, display: 'flex', alignSelf: 'center',
        } );
        return (
            <div style={newStyle} className={this.props.className} >
                {this.renderLogo()}
            </div>
        );
    }

    renderLogo() {

        const { width, height } = this.calculateSize();
        const innerStyle = {
            ...( this.props.borderRadius && {
                borderRadius: this.props.borderRadius,
                borderWidth : 1,
                borderStyle : 'solid', borderColor: 'transparent',
                overflow: 'hidden'
            })
        };
        //dd( this.calculateSize() );
        return (
            <svg style={innerStyle} id='cm-logo' width={ width + "px" } height={ height + "px" } viewBox="0 0 5270 5270" version="1.1"
                 fill={this.props.color} xmlns="http://www.w3.org/2000/svg" >
                <title>CapitalMental Logo - 2016</title>
                <desc>This is the logo of CapitalMental - www.capitalmental.com</desc>
                <defs/>
                <g id="Group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                    <path d="M0,0 L5270,0 L5270,5270 L0,5270 L0,0 Z M1742.77396,3115.20871 C1741.49971,3134.48006 1740.85249,
                            3153.92278 1740.85249,3173.51669 C1740.85249,3654.38128 2130.67027,4044.19906 2611.53487,4044.19906 C3092.39947,
                            4044.19906 3482.21724,3654.38128 3482.21724,3173.51669 C3482.21724,3153.92278 3481.57002,3134.48006 3480.29577,
                            3115.20871 C3823.73044,2998.57992 4070.84758,2673.43419 4070.84758,2290.57118 C4070.84758,1809.70658 3681.02981,
                            1419.8888 3200.16521,1419.8888 C2973.19987,1419.8888 2766.51781,1506.73186 2611.53487,1649.00214 C2456.55193,
                            1506.73186 2249.86987,1419.8888 2022.90452,1419.8888 C1542.03993,1419.8888 1152.22215,1809.70658 1152.22215,
                            2290.57118 C1152.22215,2673.43419 1399.33929,2998.57992 1742.77396,3115.20871 Z M3212.42834,2646.20201 C3049.88256,
                            2646.20201 2918.11317,2514.43262 2918.11317,2351.88684 C2918.11317,2189.34106 3049.88256,2057.57167 3212.42834,
                            2057.57167 C3374.97412,2057.57167 3506.74351,2189.34106 3506.74351,2351.88684 C3506.74351,2514.43262 3374.97412,
                            2646.20201 3212.42834,2646.20201 Z M2035.16766,2646.20201 C1872.62188,2646.20201 1740.85249,2514.43262 1740.85249,
                            2351.88684 C1740.85249,2189.34106 1872.62188,2057.57167 2035.16766,2057.57167 C2197.71344,2057.57167 2329.48283,
                            2189.34106 2329.48283,2351.88684 C2329.48283,2514.43262 2197.71344,2646.20201 2035.16766,2646.20201 Z"
                          id="Combined-Shape" fill="#EF5D38" fillRule="nonzero" />
                </g>
            </svg>
        )
    }
}

MonouxLogo.defaultProps = {
    color : "#AB2430",
    width : 0,
    height: 0,
};

MonouxLogo.propTypes = {
    color       : PropTypes.string,
    style       : PropTypes.object,
    className   : PropTypes.string,
    width       : PropTypes.number,
    height      : PropTypes.number,
    borderRadius: PropTypes.number,
};

export default MonouxLogo;