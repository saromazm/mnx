/*
 * File: ProjectsList.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 1:47 AM
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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import {InfiniteList} from 'react-scrollbars2';

import EventsList from './EventsList';
import {DoubleDateCard} from "../../components/global/DateCard";
import ListCell from "../../components/global/ListCell";

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ProjectsList extends Component {

    constructor( props ) {
        super( props );
        autobind( this );
        this.state = {
            activeWithEvents   : null,
            activeWithoutEvents: null
        };
    }

    onCellClick( element ) {
        const { activeWithEvents, activeWithoutEvents } = this.state;

        if( activeWithEvents && this.props.showEvents ){
            activeWithEvents.deactivate();

        }
        if( activeWithoutEvents && !this.props.showEvents ){
            activeWithoutEvents.deactivate();

        }
        if(this.props.showEvents){
            this.setState( { activeWithEvents: element } )
        }
        else{
            this.setState( { activeWithoutEvents: element } )
        }
    }

    componentWillReceiveProps(){
        dd("RECEIVING");
    }

    renderProject( project, indx, index ) {
        const { starts_at, ends_at, title, description, id } = project.data;
        const { eventsCount, events, dates }                 = project;
        const cssClass                                       = classNames( '__ProjectElement--SC mxn genericCell', project.status );
        const style                                          = {
            animationDelay: (indx * 35) + "ms"
        };

        if ( 1 === 1 ) {
            return (
                <ListCell
                    key={'project_' + id}
                    titleIndex={0}
                    subtitleIndex={1}
                    counter={index}
                    index={indx}
                    underlinedTitle={true}
                    descriptionIndex={this.props.showEvents ? 3 : 2}
                    iconFont={'icon icon-briefcase08'}
                    iconSize={'small'}
                    onClick={this.onCellClick}
                    usesInfiniteList={true}
                >
                    <div>{title}</div>
                    <div>{description}</div>
                    {!this.props.showEvents &&
                    <div className="eventsList" >
                        <DoubleDateCard start={starts_at} end={ends_at} datesData={dates} />
                    </div>
                    }
                    {this.props.showEvents &&
                    <EventsList events={events} showEvents={this.props.showEvents} />
                    }
                </ListCell>
            );
        }

        return (
            <div className={cssClass} key={'project_' + id} style={style} >
                <div className="counter" >
                    {index + 1}
                </div>
                <div className="left" >

                </div>
                <div className="center" >
                    <div className="mnx title tiny" >
                        {title}
                        <div className="subtitle" >
                            {description}
                        </div>
                    </div>
                    {/*<h1>{title}</h1>
                     <div className="description" >{description}</div>*/}
                    <div className="division" />
                    <div className="details" >
                        <div className="mnx tag" >
                            Events
                            <div className="sub" >{eventsCount}</div>
                        </div>
                    </div>
                    { !this.props.showEvents &&
                    <div className="eventsList" >
                        <DoubleDateCard start={starts_at} end={ends_at} datesData={dates} />
                    </div>
                    }
                    <EventsList events={events} showEvents={this.props.showEvents} />
                </div>
                <div className="right" >


                    <IconMenu className="icon-menu"
                              useLayerForClickAway={true}
                              iconButtonElement={<IconButton className="iButton" ><MoreVertIcon /></IconButton>}
                              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        <MenuItem className="sub-menu" primaryText="Refresh" />
                        <MenuItem className="sub-menu" primaryText="Send feedback" />
                        <MenuItem className="sub-menu" primaryText="Settings" />
                        <MenuItem className="sub-menu" primaryText="Help" />
                        <MenuItem className="sub-menu" primaryText="Sign out" />
                    </IconMenu>
                </div>

            </div>
        )
    }

    shouldComponentUpdate( nextProps ) {
        return !shallowEqual( nextProps, this.props )
    }

    render() {

        const projects = this.props.filteredProjects;

        if ( !projects.length ) {
            return (
                <div className="module-no-events" >
                    <i className="icon icon-briefcase10" />
                    <span>
                        There are no <b>Projects</b> programmed.
                    </span>
                </div>
            );
        }

        const cssClass = classNames( 'ProjectsList--SC', this.props.showEvents ? 'showEvents' : 'noEvents' );

        return (
            <InfiniteList
                className={cssClass}
                visibles={20}
                items={projects}
                defaultRowHeight={90}
                totalItems={projects.length}
                renderFunc={this.renderProject} />
        )
    }

    static propTypes = {
        /*projects  : PropTypes.array,
         events    : PropTypes.oneOfType( [
         PropTypes.object,
         PropTypes.array
         ] ),*/
        showEvents      : PropTypes.bool,
        filteredProjects: PropTypes.array
    };
}

export default ProjectsList;