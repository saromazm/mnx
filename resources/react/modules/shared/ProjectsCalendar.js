/*
 * File: ProjectsCalendar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   9 Apr, 2017 | 1:0 PM
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

/* globals dd, mnx */

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';

import {Scrollbars2} from 'react-scrollbars2';

import 'fullcalendar';
import $ from 'jquery';
import moment from 'moment';



class ProjectsCalendar extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
        this.state = {
            projects: props.projects
        }
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/

    componentWillReceiveProps( nextProps ) {
        if ( !shallowEqual( nextProps.projects, this.props.projects ) ) {
            this.setState( {
                projects: nextProps.projects
            } )
        }
    }

    /** R E N D E R **/
    /** ************************************************* **/

    render() {
        return (
            <ProjectsCalendarContent
                projects={this.state.projects}
                filter={this.props.filter}
                events={this.props.events}
                isVisible={this.props.isVisible}
            />
        );
    }

    /** P R O P T Y P E S  A N D  D E F A U L T S **/
    /** ************************************************* **/
    static propTypes    = {
        isVisible: PropTypes.bool,
        projects : PropTypes.array,
        events   : PropTypes.any
    };
    static defaultProps = {
        projects : [],
        isVisible: true,
        events   : {}
    }

}

class ProjectsCalendarContent extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        const momentDate = moment();

        this.state = {
            projects       : props.projects,
            selectedDate   : momentDate.format( 'MMM DD, YYYY' ),
            selectedDayWeek: momentDate.format( 'dddd' ),
            momentDate     : momentDate,
            selectedProject: null
        };

        this.$calendar = null;
    }

    projectsByDate() {
        const projectsDates = [];

        this.state.projects.forEach( project => {
            const projectMoment = moment( project['starts_at'] );
            const dateFormat    = projectMoment.format( "YYYY, MMMM" );

            if ( !projectsDates.hasOwnProperty( dateFormat ) ) {
                projectsDates[dateFormat] = [];
            }
            projectsDates[dateFormat].push( project );
        } );

        return projectsDates;
    }

    setupCalendar() {

        this.$calendar.fullCalendar( 'destroy' );

        this.$calendar.fullCalendar( {
            header        : false,
            height        : 'parent',
            events        : this.state.projects.map( project => project.calendarEvent ),
            eventMouseover: ProjectsCalendarContent.eventMouseOver,
            eventMouseout : ProjectsCalendarContent.eventMouseOut,
            eventClick    : this.eventClick
        } );

        this.$calendar.fullCalendar( 'gotoDate', this.state.momentDate );
    }

    updateCalendarDate() {
        const newDate = this.$calendar.fullCalendar( 'getDate' );
        this.gotoDate( newDate );
    }

    /** E V E N T S **/
    /** ************************************************* **/

    nextCalendar() {
        this.$calendar.fullCalendar( 'next' );
        this.updateCalendarDate();
    }

    prevCalendar() {
        this.$calendar.fullCalendar( 'prev' );
        this.updateCalendarDate();
    }

    gotoDate( date, id = null ) {
        const newDate = moment( date );

        this.setState( {
            selectedDate   : newDate.format( 'MMM DD, YYYY' ),
            selectedDayWeek: newDate.format( 'dddd' ),
            momentDate     : newDate
        }, () => {
            if ( id ) {
                this.$calendar.fullCalendar( 'gotoDate', this.state.momentDate );
                $( ".fc-event" ).removeClass( 'selected' );
                $( "._ev" + id ).addClass( 'selected' );
            }
        } );
    }

    static eventMouseOver( calendarEvent ) {
        const { className } = calendarEvent;
        $( '.' + className ).addClass( "selected" );
    }

    static eventMouseOut( calendarEvent ) {
        const { className } = calendarEvent;
        $( '.' + className ).removeClass( "selected" );
    }

    eventClick( calendarEvent ) {
        dd( calendarEvent );
        const { id, className } = calendarEvent;
        $( '.' + className ).addClass( "selected" );
        this.setState( { selectedProject: id } )
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/
    componentWillReceiveProps( nextProps ) {
        if ( !shallowEqual( nextProps.projects, this.props.projects ) ) {

            this.setState( {
                projects       : nextProps.projects,
                selectedProject: null
            } );
        }
    }

    componentWillUnmount() {
        this.$calendar.fullCalendar( 'destroy' );
    }

    componentDidUpdate( prevProps ) {
        if ( !shallowEqual( prevProps, this.props ) || ( !prevProps.isVisible && this.props.isVisible) ) {
            this.setupCalendar();
        }
    }

    componentDidMount() {
        const { cal }  = this.refs;
        this.$calendar = $( cal );
        this.setupCalendar();
    }

    /** I N T E R N A L   C O M P O N E N T S **/
    /** ************************************************* **/

    calNavigation() {
        return (
            <div className="buttons" >
                <div className="btn prev" onClick={this.prevCalendar} >
                    <span className="icon-arrows18" />
                </div>
                <div className="btn next" onClick={this.nextCalendar} >
                    <span className="icon-arrows19" />
                </div>
            </div>
        )
    }

    calHeader() {
        const CalendarNavigation = this.calNavigation;
        return (
            <div className="currentDate" >
                <div className="day" >{this.state.selectedDayWeek}</div>
                <div className="monthYear" >{this.state.selectedDate}</div>
                <CalendarNavigation/>
            </div>
        );
    }


    /** R E N D E R **/
    /** ************************************************* **/

    render() {

        const cssClass       = classNames( 'ProjectsCalendar--CT', this.props.className );
        const projectsByDate = this.projectsByDate();
        let eventsCounter    = 0;

        //Internal Components
        const CalendarSideHeader = this.calHeader;

        return (
            <div className={cssClass} >

                <div className="calendarSide" >

                    <CalendarSideHeader/>
                    <Scrollbars2>

                        { Object.keys( projectsByDate ).map( dateFormatted => {

                            return (
                                <div key={'projectSeparator_' + dateFormatted} className="elementSlot" >
                                    <div className="elementHeader" >
                                        {dateFormatted} |
                                        <span className="counter" >
                                            &nbsp;{projectsByDate[dateFormatted].length} Events
                                        </span>
                                    </div>
                                    <div>
                                        { projectsByDate[dateFormatted].map( project => {
                                            eventsCounter++;
                                            //dd( project.calendarEvent );
                                            return (
                                                <CalendarListElement
                                                    key={'projectCal_' + project.id}
                                                    index={ eventsCounter }
                                                    project={ project }
                                                    color={ project.color }
                                                    onClick={ this.gotoDate }
                                                    selected={ this.state.selectedProject === project.id }
                                                />
                                            )
                                        } ) }
                                    </div>
                                </div>
                            )
                        } ) }

                    </Scrollbars2>

                </div>
                <div ref="cal" />
            </div>
        )
    }

    /** P R O P T Y P E S  A N D  D E F A U L T S **/
    /** ************************************************* **/

    static propTypes    = {
        projects : PropTypes.array,
        events   : PropTypes.any,
        isVisible: PropTypes.bool,
    };
    static defaultProps = {
        projects : [],
        events   : {},
        isVisible: true,
    }
}

class CalendarListElement extends React.Component {

    onClick = () => {
        const { starts_at, id } = this.props.project;
        this.props.onClick( starts_at, id );
    };

    render() {
        const { project, color, selected } = this.props;

        const cssClass    = classNames( 'element', { selected } );
        const momentEvent = project.calendarEvent.momentStart;

        return (
            <div key={'projectCal_' + project.id } className={cssClass} onClick={this.onClick} >
                <div className="color" style={{
                    backgroundColor: color
                }} />
                <div className="index" >{momentEvent.format( 'DD' )}</div>
                <span>{project.title}</span>
            </div>
        );
    }

    static propTypes = {
        project : PropTypes.object,
        index   : PropTypes.number,
        color   : PropTypes.string,
        onClick : PropTypes.func,
        selected: PropTypes.bool
    };
}
const CalendarListElement_ = function ( props ) {

    const { project, color, selected } = props;

    const cssClass    = classNames( 'element', { selected } );
    const momentEvent = project.calendarEvent.momentStart;
    return (
        <div key={'projectCal_' + project.id } className={cssClass} onClick={props.onClick} >
            <div className="color" style={{
                backgroundColor: color
            }} />
            <div className="index" >{momentEvent.format( 'DD' )}</div>
            <span>{project.title}</span>

        </div>
    );
};

CalendarListElement_.propTypes = {
    project : PropTypes.object,
    index   : PropTypes.number,
    color   : PropTypes.string,
    onClick : PropTypes.func,
    selected: PropTypes.bool
};

export default ProjectsCalendar;