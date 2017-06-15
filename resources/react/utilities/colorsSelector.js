/*
 * File: colorsSelector.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   9 Apr, 2017 | 4:11 AM
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

import * as materialColors from 'material-ui/styles/colors';

const allColors   = [
    'amber',
    'blue',
    'blueGrey',
    'brown',
    'cyan',
    'deepOrange',
    'deepPurple',
    'green',
    'grey',
    'indigo',
    'lightBlue',
    'lightGreen',
    'lime',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'yellow',
];
const intensities = [300, 400, 500, 600];

export default function () {
    const ck  = Math.floor( Math.random() * allColors.length );
    const ik  = Math.floor( Math.random() * intensities.length );
    const res = allColors[ck] + intensities[ik];
    return materialColors[res];
}