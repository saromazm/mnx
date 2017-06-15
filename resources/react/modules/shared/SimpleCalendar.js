/*
 * File: SimpleCalendar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   5 May, 2017 | 7:43 PM
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

/* globals mnx */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';
import classNames from 'classnames';
import moment from 'moment';
import Month from 'calendar-months';
import {Scrollbars2} from 'react-scrollbars2';


const days   = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function dblDigit( val ) {
    const newVal = parseInt( val, 10 );
    return newVal > 9 ? newVal.toString() : '0' + newVal.toString();
}

function monthObjectToMomentObject( monthObject ) {
    const { year } = monthObject;
    const month    = dblDigit( monthObject.month + 1 );
    const day      = dblDigit( 1 );
    return moment( year + "-" + month + '-' + day, "YYYY-MM-DD" );
}

class SimpleCalendar extends Component {

    constructor( props ) {
        super( props );
        autobind( this );

        const month = Month.thisMonth();

        this.state = {
            currentMonth      : month,
            currentMonthMoment: monthObjectToMomentObject( month ),
            today             : moment(),
            selectedDay       : null
        }
    }


    changeMonth( month ) {
        this.setState( {
            currentMonth      : month,
            currentMonthMoment: monthObjectToMomentObject( month ),
            today             : moment()
        } );
    }

    /** E V E N T S **/
    /** ************************************************* **/

    onResetSelectedDay() {
        this.setState( {
            selectedDay: null,
        } );
    }

    onDayClick( momentDay ) {
        this.setState( {
            selectedDay: momentDay,
        } );
    }

    onMonthClick( targetMonth ) {
        const { month, year } = this.state.currentMonth;

        if ( targetMonth !== month ) {
            this.changeMonth( Month.create( targetMonth, year ) );
        }
    }

    onClickNext() {
        this.changeMonth( this.state.currentMonth.nextMonth() );
    }

    onClickPrev() {
        this.changeMonth( this.state.currentMonth.previousMonth() );
    }

    onClickToday() {
        this.changeMonth( Month.thisMonth() );
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/


    componentWillReceiveProps( nextProps ) {
        if ( !shallowEqual( nextProps.events, this.props.events ) || !shallowEqual( nextProps.projects, this.props.projects ) ) {

            this.setState( {
                today      : moment(),
                selectedDay: null
            } );
        }
    }

    /** R E N D E R **/
    /** ************************************************* **/

    render() {
        const { today, currentMonth: _month, selectedDay, currentMonthMoment } = this.state;

        const { projectsManager } = this.props;
        const { month, year }     = _month;
        const weeks               = _month.calendarWeeks();
        const monthEvents         = projectsManager.getMonthEvents( year, month );

        return (
            <div className="SimpleCalendar--SC" >

                <DateDetails selectedDay={selectedDay}
                             currentMonthMoment={currentMonthMoment}
                             projectsManager={projectsManager}
                             monthEvents={monthEvents}
                             onReset={this.onResetSelectedDay}
                />
                <div className="calendar" >
                    <table cellPadding={0} cellSpacing={0} >
                        <thead>
                        <tr>
                            <CalendarHeader counter={monthEvents.length}
                                            onNext={this.onClickNext}
                                            onPrev={this.onClickPrev}
                                            onToday={this.onClickToday}
                                            currentMonthMoment={currentMonthMoment}
                            />
                        </tr>
                        <tr>
                            <td colSpan={7} className="months" >
                                <MonthsBar selectedMonth={this.state.currentMonth}
                                           onMonthClick={this.onMonthClick} />
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            { days.map( wd => <WeekDay key={'wd' + wd } weekday={wd} /> ) }
                        </tr>
                        {weeks.map( ( w, i ) => {
                            return (
                                <Week key={'week' + i}
                                      days={w}
                                      today={today}
                                      onDayClick={this.onDayClick}
                                      currentMonthMoment={currentMonthMoment}
                                      month={month}
                                      year={year}
                                      selectedDay={selectedDay}
                                      projectsManager={projectsManager} />
                            )
                        } )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    static propTypes = {
        projects       : PropTypes.array,
        projectsManager: PropTypes.object,
        events         : PropTypes.object
    }
}

/** D A T E  D E T A I L S **/
/** ************************************************* **/
class DateDetails extends Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    onReset() {
        this.props.onReset();
    }

    render() {

        const { selectedDay, projectsManager, currentMonthMoment } = this.props;

        if ( !selectedDay ) {

            const { monthEvents } = this.props;
            let currentDay        = false;

            return (
                <div className="details" >

                    <div className="main-title monthly" >
                        <div className="center" >
                            <div className="month" >{currentMonthMoment.format( 'MMMM' )}</div>
                            <div className="year" >{currentMonthMoment.format( 'YYYY' )}</div>
                        </div>
                        <div className="close" onClick={this.onReset} >
                            <span className="anticon anticon-close-circle" />
                        </div>
                    </div>
                    <div className="events-container" >
                        <Scrollbars2>
                            {!monthEvents.length && <NoEvents/>}
                            {monthEvents.map( ( ev, indx ) => {

                                const project = ev.parent.data;
                                const sameDay = ev.date.day !== currentDay;
                                const time    = ev.momentEvent.format( 'hh:mm a' );
                                currentDay    = ev.date.day;

                                return (
                                    <div className="events-day" key={ev + indx} >
                                        { sameDay &&
                                        <div className="day-separator" >{ev.momentEvent.format( 'D MMM' )}</div> }
                                        <EventDetail
                                            title={project.title}
                                            time={ time}
                                            type={ ev.type }
                                            kind={ ev.kind }
                                            hasProjectsStarting={ ev.parentStart && ev.kind === 'start'}
                                            hasProjectsEnding={ ev.parentEnd && ev.kind === 'end'}
                                            className={ev.status}
                                        />
                                    </div>
                                )
                            } )}
                        </Scrollbars2>
                    </div>

                </div>
            )
        }

        const year        = selectedDay.format( 'YYYY' );
        const month       = selectedDay.format( 'MMM' ).toLowerCase();
        const day         = selectedDay.format( 'DD' );
        const dayEvents   = projectsManager.getDayEvents( year, month, day );
        const dayProjects = projectsManager.getDayProjects( year, month, day );

        return (
            <div className="details" >
                <div className="main-title daily" >
                    <div className="left" >
                        <div className="day" >{selectedDay.format( 'Do' )}</div>
                    </div>
                    <div className="right" >
                        <div className="weekday" >{selectedDay.format( 'dddd' )}</div>
                        <div className="month" >{selectedDay.format( 'MMMM, YYYY' )}</div>
                    </div>
                    <div className="close" onClick={this.onReset} >
                        <span className="anticon anticon-close-circle" />
                    </div>
                </div>
                {!dayEvents.length && <NoEvents/>}
                {dayEvents.map( ( ev, indx ) => {

                    const project    = ev.parent.data;
                    const time       = ev.momentEvent.format( 'hh:mm a' );

                    return (
                        <div className="events-day" key={ev + indx} >
                            <EventDetail
                                title={project.title}
                                time={time}
                                type={ ev.type }
                                kind={ ev.kind }
                                hasProjectsStarting={ dayProjects.starting === time}
                                hasProjectsEnding={ dayProjects.ending === time}
                                className={ev.status}
                            />
                        </div>
                    )
                } )}
            </div>
        );
    }

    static defaultProps = {
        className: '',
        onReset  : mnx.noop
    };

    static propTypes = {
        className      : PropTypes.string,
        selectedDay    : PropTypes.object,
        onReset        : PropTypes.func,
        projectsManager: PropTypes.object,
        monthEvents    : PropTypes.array
    };

}

class EventDetail extends Component {

    render() {

        const { title, time, type, kind, hasProjectsStarting, hasProjectsEnding } = this.props;

        const cssClass = classNames( 'content', type, kind, this.props.className || '', {
            hasProjectsStarting,
            hasProjectsEnding,
        } );


        return (
            <div className={cssClass} >
                <div className="time" >{time}</div>
                <div className="title" >
                    {title}
                </div>
                <div className="kind" >
                    {type} | {kind}
                </div>
            </div>
        );
    }

}

const NoEvents = () => {
    return (
        <div className="no-events" >
            <i className="anticon anticon-calendar" />
            <span>
              No Events Scheduled for this day.
          </span>
        </div>
    )
};

/** C A L E N D A R  H E A D E R **/
/** ************************************************* **/

class CalendarHeader extends Component {

    render() {

        const { onNext, onPrev, onToday, counter, currentMonthMoment } = this.props;

        return (
            <th colSpan={7} >

                <div className="prev nav-button" onClick={onPrev} >
                    <span className="anticon anticon-left" />
                </div>

                <div className="head" onClick={onToday} >
                    <span className="month" >{currentMonthMoment.format( "MMM" )}</span>
                    <span className="year" >{currentMonthMoment.format( "YYYY" )}</span>
                    <span className="events" >
                        Events in Month:
                        <strong>{counter}</strong>
                    </span>
                </div>

                <div className="next nav-button" onClick={onNext} >
                    <span className="anticon anticon-right" />
                </div>

            </th>
        );
    }

}

/** M O N T H S  B A R  **/
/** ************************************************* **/
class MonthsBar extends Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    onClick( event ) {
        const targetMonth = parseInt( event.target.getAttribute( 'data-month' ), 10 );
        this.props.onMonthClick( targetMonth );
    }

    render() {

        const { selectedMonth } = this.props;
        const { month }         = selectedMonth;

        return (
            <div>
                { months.map( ( loopMonth, index ) => {
                    const cssClass = classNames( {
                        current: index === month
                    } );
                    return (
                        <span key={loopMonth}
                              className={cssClass}
                              onClick={this.onClick}
                              data-month={ index } >
                            {loopMonth}
                        </span>
                    )
                } ) }
            </div>
        );
    }

    static defaultProps = {
        className   : '',
        onMonthClick: mnx.noop
    };
    static propTypes    = {
        className    : PropTypes.string,
        selectedMonth: PropTypes.object,
        onMonthClick : PropTypes.func
    };

}


/** W E E K D A Y S **/
/** ************************************************* **/
class WeekDay extends Component {

    render() {
        return (
            <th>{this.props.weekday}</th>
        );
    }
}


/** W E E K  C O M P O N E N T **/
/** ************************************************* **/
class Week extends Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    dayRender( day, index ) {

        const { today, onDayClick, month, year, selectedDay, currentMonthMoment, projectsManager } = this.props;

        return (
            <Day key={'day' + index}
                 day={day}
                 month={month}
                 year={year}
                 today={today}
                 onDayClick={onDayClick}
                 dayOfTheWeek={index}
                 currentMonthMoment={currentMonthMoment}
                 projectsManager={projectsManager}
                 selectedDay={selectedDay} />
        )
    }

    render() {
        return (
            <tr>{ this.props.days.map( this.dayRender ) }</tr>
        );
    }

    static defaultProps = {};
    static propTypes    = {};
}

/** D A Y  C O M P O N E N T **/
/** ************************************************* **/
class Day extends Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    onClick() {
        this.props.onDayClick( this.props.day )
    }


    render() {
        const { day, today, selectedDay, month, year, dayOfTheWeek, currentMonthMoment, projectsManager } = this.props;

        const dayEvents   = projectsManager.getDayEvents( year, day.format( 'MMM' ).toLowerCase(), day.format( 'DD' ) );
        const dayProjects = projectsManager.getDayProjects( year, day.format( 'MMM' ).toLowerCase(), day.format( 'DD' ) );

        const cssClass = classNames( {
            isWeekend          : dayOfTheWeek === 0 || dayOfTheWeek === 6,
            isToday            : day.isSame( today, 'day' ),
            isMuted            : !day.isSame( currentMonthMoment, 'month' ),
            selected           : day.isSame( selectedDay, 'day' ),
            hasProjects        : dayProjects.starting || dayProjects.ending,
            hasProjectsStarting: dayProjects.starting,
            hasProjectsEnding  : dayProjects.ending,
        } );


        return (
            <td className={cssClass} onClick={this.onClick} >
                <div className="day" >{day.format( 'D' )}</div>
                <div className="events" >
                    {dayEvents.map( ( ev, k ) => {
                        return (
                            <div key={'event' + k} className={'event ' + ev.kind + ' ' + ev.type} />
                        )
                    } )}
                </div>
            </td>
        );
    }
}

class CalendarizedEvents {
    constructor() {
        autobind( this, false, false, false );
        this.projects     = {};
        this.events       = {};
        this._eventsArr   = [];
        this._projectsArr = [];
    }

    addProjects( projects ) {
        projects.forEach( this.addProject );
    }

    addProject( project ) {
        const momentStart = moment( project['starts_at'], 'YYYY-MM-DD HH:mm:ss' );
        const momentEnd   = moment( project['ends_at'], 'YYYY-MM-DD HH:mm:ss' );

        this.projects[project['id']] = project;

        this._projectsArr.push( {
            momentEvent: momentStart,
            kind       : 'start',
            project    : project,
            type       : 'project',
            date       : momentStart.format( 'YYYY-MM-DD HH:mm:ss' )
        } );

        this._projectsArr.push( {
            momentEvent: momentEnd,
            kind       : 'end',
            project    : project,
            type       : 'project',
            date       : momentEnd.format( 'YYYY-MM-DD HH:mm:ss' )
        } );
    }

    addEvents( events ) {
        Object.keys( events ).forEach( k => {
            events[k].forEach( this.addEvent );
        } );
    }

    addEvent( event ) {
        if ( !this.projects[event['project_id']] ) return;
        const momentStart = moment( event['starts_at'], 'YYYY-MM-DD HH:mm:ss' );
        const momentEnd   = moment( event['ends_at'], 'YYYY-MM-DD HH:mm:ss' );


        this._eventsArr.push( {
            momentEvent: momentStart,
            kind       : 'start',
            event      : event,
            type       : event['event_type'],
            date       : momentStart.format( 'YYYY-MM-DD HH:mm:ss' )
        } );

        this._eventsArr.push( {
            momentEvent: momentEnd,
            kind       : 'end',
            event      : event,
            type       : event['event_type'],
            date       : momentEnd.format( 'YYYY-MM-DD HH:mm:ss' )
        } );
    }


    projectsFor( targetCompare = 'month', targetMoment ) {
        return this._projectsArr.filter( eObject => eObject.momentEvent.isSame( targetMoment, targetCompare ) )
    }

    projectsStartsFor( targetCompare = 'month', targetMoment ) {
        return this._projectsArr.find(
            eObject => eObject.momentEvent.isSame( targetMoment, targetCompare ) &&
            eObject.kind === 'start'
        )
    }

    projectsEndsFor( targetCompare = 'month', targetMoment ) {
        return this._projectsArr.find(
            eObject => eObject.momentEvent.isSame( targetMoment, targetCompare ) &&
            eObject.kind === 'end'
        )
    }


    eventsFor( targetCompare = 'month', targetMoment ) {
        return this._eventsArr.filter( eObject => eObject.momentEvent.isSame( targetMoment, targetCompare ) ).sort( ( a, b ) => {
            if ( a.date === b.date ) return 0;
            return a.date > b.date ? 1 : -1;
        } );
    }

}


export default SimpleCalendar;