/*
 * File: DateCard.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 1:48 AM
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

import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class DateCard extends Component {

    render() {
        const thisDate = this.props.date.split( ' ' )[0].split( '-' );
        return (
            <div className="DateCard--SC" >
                <div className="day" >{thisDate[2]}</div>
                <div className="month" >{months[parseInt( thisDate[1], 10 )]}</div>
                <div className="year" >{thisDate[0]}</div>
            </div>
        );
    }

    static propTypes = {
        date: PropTypes.string
    }
}

export class SingleDateCard extends Component {
    render() {
        if ( !this.props.show ) return null;
        return (
            <DateCard date={this.props.date} />
        );
    }

    static defaultProps = {
        show: true
    };

    static propTypes = {
        date     : PropTypes.string,
        show     : PropTypes.bool,
        datesData: PropTypes.object
    }
}

export class DoubleDateCard extends PureComponent {

    render() {
        return (
            <div className="card-wrapper" >
                <DateCard date={this.props.start} />
                <div className="arrow"/>
                <DateCard date={this.props.end} />
            </div>
        );
    }

    static propTypes = {
        start    : PropTypes.string,
        end      : PropTypes.string,
        datesData: PropTypes.object
    }
}

export default DateCard;