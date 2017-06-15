/*
 * File: colorEvents.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 9:53 AM
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

import moment from 'moment';
import colorSelector from './colorsSelector';

function colorizeEvents( projects ) {
    return projects.map( project => {

        /*project['color']         = colorSelector();
        project['calendarEvent'] = {
            id         : project.id,
            title      : project.title,
            start      : project['starts_at'].replace( ' ', 'T' ),
            end        : project['ends_at'].replace( ' ', 'T' ),
            color      : project.color,
            className  : "_ev" + project.id,
            momentStart: moment( project['starts_at'] )
        };*/
        //return project;
        const colorP = colorSelector();
        return Object.assign({}, project, {
            color: colorP,
            calendarEvent: {
                id         : project.id,
                title      : project.title,
                start      : project['starts_at'].replace( ' ', 'T' ),
                end        : project['ends_at'].replace( ' ', 'T' ),
                color      : colorP,
                className  : "_ev" + project.id,
                momentStart: moment( project['starts_at'] )
            }
        } );
    } );
}

export default colorizeEvents;