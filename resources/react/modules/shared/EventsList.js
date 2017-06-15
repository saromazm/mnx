/*
 * File: EventsList.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 2:12 AM
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

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import {SingleDateCard} from "../../components/global/DateCard";

class EventsList extends PureComponent {

    render() {
        if ( !this.props.showEvents ) return null;

        return (
            <div className="eventsList" >
                {this.props.events.map( event => {
                    const { event_type, title, starts_at, dates, id }      = event.data;
                    const { isOpen, isClosed, distantPast, distantFuture } = event.status;

                    const momentNow   = moment();
                    const momentStart = moment( starts_at );
                    const cssClass    = classNames( {
                        past   : momentStart.isBefore( momentNow, 'month' ),
                        future : momentStart.isAfter( momentNow, 'month' ),
                        current: momentStart.isSame( momentNow, 'month' ),
                        isOpen,
                        isClosed,
                        distantPast,
                        distantFuture
                    } );
                    return (
                        <div key={'event_' + id} className={cssClass} >
                            <div className="title" >{title}</div>
                            <SingleDateCard date={starts_at} datesData={dates} />
                            <div className="type" >{event_type}</div>
                        </div>
                    );
                } )}
            </div>
        );
    }


    static defaultProps = {
        events: []
    };

    static propTypes = {
        events    : PropTypes.array,
        showEvents: PropTypes.bool
    };
}
export default EventsList;