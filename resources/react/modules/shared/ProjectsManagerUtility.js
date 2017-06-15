/*
 * File: ProjectsManagerUtilitiy.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Jun, 2017 | 1:15 AM
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
import classNames from 'classnames';
import autobind from 'react-autobind-helper';
import _filter from 'lodash/filter';

export default class ProjectsManagerUtility {

    constructor( projects = [], events = {}, filterWord = '' ) {
        autobind( this, false, false, false );
        this.days   = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        this.now               = moment();
        this.pastLimit         = moment().add( -2, 'month' );
        this.futureLimit       = moment().add( 2, 'month' );
        this.original_projects = projects.slice( 0 );
        this.original_events   = Object.assign( {}, events );

        this.filterWord            = filterWord;
        this.filteredProjects      = [];
        this.filteredProjectsCount = 0;

        //this.subFilter           = [];
        //this.subFilteredProjects = [];
        //this.subFilteredCount    = 0;

        this.projects         = [];
        this.events           = [];
        this.singleTimeEvents = [];


        this.setupProjects();
        this.filterProjects( this.filterWord );
        //dd( this.filteredProjects );
        //dd( _filter( this.projects, { year: '2017', closed: false } ), this.projects );

    }

    filterProjects( filter ) {
        const lowerFilter          = filter.toLowerCase();
        this.filteredProjects      = _filter( this.projects, ( project ) => {
            const lowerTitle = project.data.title.toLowerCase();
            return lowerTitle.indexOf( lowerFilter ) > -1;
        } );
        this.filterWord            = filter;
        this.filteredProjectsCount = this.filteredProjects.length;
    }

    subFilterProjects( filters ) {
        if ( filters.find( e => e === 'all' ) ) {
            this.filterProjects( this.filterWord );
            //this.subFilter = ['all'];
            return;
        }
        const newFiltered          = _filter( this.projects, project => {
            return filters.find( e => project.status.indexOf( e ) > -1 );
        } );
        this.filteredProjects      = newFiltered;
        this.filteredProjectsCount = this.filteredProjects.length;
        dd( filters, newFiltered )
    }

    setupProjects() {
        this.original_projects.forEach( project => {
            this.projects.push( this.formatProject( project ) );
        } );
    }

    formatProject( project ) {
        const { id }     = project;
        const events     = [];
        const newProject = {
            ...this.formatObjectDate( project )
        };

        this.original_events[id].forEach( ev => {
            const newEvent = this.formatObjectDate( ev, newProject );
            this.events.push( newEvent );
            events.push( newEvent );

            this.singleTimeEvents.push( {
                ...newEvent,
                kind       : 'start',
                type       : newEvent.data['event_type'],
                momentEvent: newEvent.dates.mStart,
                flatEvent  : newEvent.dates.starts_at,
                date       : newEvent.start,
            } );
            this.singleTimeEvents.push( {
                ...newEvent,
                kind       : 'end',
                type       : newEvent.data['event_type'],
                momentEvent: newEvent.dates.mEnd,
                flatEvent  : newEvent.dates.ends_at,
                date       : newEvent.end,
            } );
        } );

        newProject.events      = events;
        newProject.eventsCount = events.length;
        return newProject;
    }

    formatObjectDate( object, parent ) {
        const { starts_at, ends_at } = object;

        //Moment Events
        const mStart = moment( starts_at );
        const mEnd   = moment( ends_at );

        //Status
        const hasStarted    = mStart.isBefore( this.now );
        const hasEnded      = mEnd.isBefore( this.now );
        const isOpen        = hasStarted && !hasEnded;
        const isClosed      = hasStarted && hasEnded;
        const distantPast   = mEnd.isBefore( this.pastLimit );
        const distantFuture = mEnd.isAfter( this.futureLimit );

        return {
            status     : classNames( {
                open    : isOpen,
                closed  : isClosed,
                upcoming: !isClosed && !isOpen,
                distantPast, distantFuture
            } ),
            start      : {
                year : mStart.format( 'YYYY' ),
                month: mStart.format( 'MMM' ).toLowerCase(),
                day  : mStart.format( 'DD' )
            },
            end        : {
                year : mEnd.format( 'YYYY' ),
                month: mEnd.format( 'MMM' ).toLowerCase(),
                day  : mEnd.format( 'DD' )
            },
            dates      : {
                mStart, mEnd, starts_at, ends_at,
            },
            data       : object,
            parent     : parent || null,
            parentStart: parent ? parent.dates.mStart.isSame( mStart ) : null,
            parentEnd  : parent ? parent.dates.mEnd.isSame( mEnd ) : null,
        }
    }

    getVisibleProjects() {
        return this.filteredProjects;
    }

    getVisibleProjectsCount() {
        return this.filteredProjectsCount;
    }

    getMonthEvents( _year, _month ) {

        const month = !isNaN( _month ) ? this.months[_month] : _month;
        const year  = _year.toString();

        const filtered =  _filter( this.singleTimeEvents, e => {
            return e.date.year === year && e.date.month === month
        } ) || [];

        return filtered.sort( ( a, b ) => {
            if ( a === b ) return 0;
            return a.flatEvent > b.flatEvent ? 1 : -1
        } );
    }

    getDayEvents( _year, _month, _day ) {

        const month = !isNaN( _month ) ? this.months[_month] : _month;
        const year  = _year.toString();
        const day   = _day.toString();

        return _filter( this.singleTimeEvents, e => {
            return e.date.year === year && e.date.month === month && e.date.day === day
        } );
    }

    getDayProjects( _year, _month, _day ) {
        const month = !isNaN( _month ) ? this.months[_month] : _month;
        const year  = _year.toString();
        const day   = _day.toString();

        const starts = this.projects.find( p => {
            return p.start.year === year && p.start.month === month && p.start.day === day
        } );
        const ends   = this.projects.find( p => {
            return p.end.year === year && p.end.month === month && p.end.day === day
        } );


        return {
            starting: starts ? starts.dates.mStart.format( 'hh:mm a' ) : false,
            ending  : ends ? ends.dates.mEnd.format( 'hh:mm a' ) : false,
        }
    }

}