/*
 * File: SimpleSvgImageLoader.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Mar, 2017 | 2:17 PM
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
import classNames from 'classnames';


const SimpleSvgImageLoader = ( props ) => {

    const classCSS = classNames( 'SimpleSvgImageLoader--SC', props.className || '' );

    return (
        <div className={classCSS} >
            <img src={props.imageName} alt="" style={props.style} />
        </div>
    );
};

SimpleSvgImageLoader.defaultProps = { imageName: '' };
SimpleSvgImageLoader.propTypes    = {
    imageName: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SimpleSvgImageLoader;