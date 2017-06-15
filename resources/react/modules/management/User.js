/*
 * File: User.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   16 Mar, 2017 | 9:6 PM
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

/* global dd */
/* exported fullCalendar */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import shallowEqual from 'shallowequal';


import ProjectsCalendar from '../shared/ProjectsCalendar';
import colorSelector from '../../utilities/colorsSelector';
import moment from 'moment';

import {matchPath} from 'react-router-dom';


// import Pusher from 'pusher-js';
//const ModuleHeader = ModuleContainer.ModuleHeader;

import colorizeEvents from '../../utilities/colorEvents';

import LeftBarSearchField from '../../components/sideBars/LeftBarSearchField';
import ProjectsList from '../shared/ProjectsList';
import ModuleContainer, {
    ModuleTopContainer,
    ModuleBodyContainer,
    ModuleBodyView,
    ModuleHeader,
    ModuleViewSelector
} from '../../components/global/ModuleContainer';

const FEMALE_ICON = require( '../../../assets/media/images/optimized/female02.svg' );
const MALE_ICON   = require( '../../../assets/media/images/optimized/male02.svg' );

const TABS = {
    details    : { label: "Details", code: '#details' },
    permissions: { label: "Permissions", code: '#permissions' },
    projects   : { label: "Projects", code: '#projects' },
    events     : { label: "Events", code: '#events' },
    calendar   : { label: "Calendar", code: '#calendar' }
};

/*const pusher = new Pusher('e97fad1bbf203f8e489c', {
 encrypted: true
 });

 const channel = pusher.subscribe('my-channel');
 channel.bind('my-event', function(data) {
 console.log(data.message);
 });*/


class User extends Component {

    constructor( props ) {
        super( props );
        autobind( this );

        const projectsFixed = colorizeEvents( props.participation.projects );

        this.state = {
            currentView     : 'projects',
            filter          : '',
            projects        : projectsFixed,
            projectsFiltered: projectsFixed,
        };
    }

    /** O P E R A T I O N S **/
    /** ************************************************* **/


    projectFilter = function ( project, filter ) {
        const title = project.title.toLowerCase();
        return title.indexOf( filter ) > -1;
    };

    /** E V E N T S **/
    /** ************************************************* **/

    /*onViewChange( event, newValue ) {
     //history.push( this.props.location.pathname + "#" + newValue );
     //this.props.dispatch( push( this.props.location.pathname + newValue ) );
     //        this.setState( { currentView: newValue } );
     }*/

    onFilterChange( filter ) {
        const { projects } = this.props.participation;
        this.setState( {
            filter,
            projectsFiltered: projects.filter( project => this.projectFilter( project, filter ) )
        } );
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/
    shouldComponentUpdate( nextProps, nextState ) {

        const isDataEqual          = shallowEqual( nextProps.data, this.props.data );
        const isParticipationEqual = shallowEqual( nextProps.participation, this.props.participation );
        const isHashEqual          = shallowEqual( nextProps.location.hash, this.props.location.hash );
        const isStateEqual         = shallowEqual( nextState, this.state );

        return !isDataEqual
            || !isParticipationEqual
            || (!isHashEqual && isDataEqual && nextProps.location.hash !== '')
            || !isStateEqual;
    }

    componentWillReceiveProps( nextProps ) {
        if ( !shallowEqual( nextProps.participation, this.props.participation ) ) {

            const projectsFixed = colorizeEvents( nextProps.participation.projects );

            this.setState( {
                projects        : projectsFixed,
                projectsFiltered: projectsFixed.filter(
                    project => this.projectFilter( project, this.state.filter
                    ) )
            } );
        }
    }


    /** R E N D E R **/
    /** ************************************************* **/


    render() {
        const { location, dispatch, data, companies, roles } = this.props;
        const { pathname, hash }                             = location;
        const { contact }                                    = data;
        const { last_names, preferred_name, gender, bday }   = contact;

        const match  = matchPath( pathname, {
            path: '/:routerTabID(\\d+)?/:module?/:elementID(\\d+)?/:action?'
        } );
        const action = match.params.action;

        const { first_names } = data['contact'];
        const icon            = gender === 'male' ? MALE_ICON : FEMALE_ICON;


        //dd( "R E N D E R I N G   U S E R  ", hash, first_names, location );
        const mainRole = randomIntFromInterval( 1, 8 );
        return (
            <ModuleContainer>
                <div className="extra-actions" >
                    <span className="anticon-plus anticon" />
                    <span className="anticon-delete anticon" />
                </div>
                <ModuleTopContainer headerIndex={0} optionsIndex={1} viewSelectorIndex={2} >
                    <ModuleHeader title={first_names}
                                  subtitle={data.username}
                                  icon={ icon }
                                  status={data.status}
                                  extra={<CompaniesList companies={companies} />}
                    />
                    <div className="optionsWrapper" >
                        <div style={{ overflow: 'hidden', display: 'inline-block' }} >
                            <LeftBarSearchField
                                value={this.state.filter}
                                isBackEnabled={false}
                                counter={this.state.projectsFiltered.length}
                                onChange={this.onFilterChange} />
                        </div>
                    </div>
                    <ModuleViewSelector views={TABS} location={location} dispatch={dispatch} />
                </ModuleTopContainer>

                <ModuleBodyContainer>

                    <ModuleBodyView selector={'#details' || ''} current={hash} >
                        <div>
                            <div className="infoBox" >
                                <div>
                                    <strong>Name:</strong> { first_names } { last_names }
                                </div>
                                <div>
                                    <strong>Preferred Name:</strong> { preferred_name }
                                </div>
                                <div>
                                    <strong>Email:</strong> { data.username }
                                </div>
                                <div>
                                    <strong>Gender:</strong> { gender }
                                </div>

                                <div>
                                    <strong>Bday:</strong> { bday }
                                </div>
                            </div>
                        </div>
                        <CompaniesList companies={companies} />

                    </ModuleBodyView>

                    <ModuleBodyView selector="#permissions" current={hash} >
                        <RolesList roles={roles} mainRole={mainRole} />
                    </ModuleBodyView>

                    <ModuleBodyView selectors={['#projects', '#events']} current={hash} >
                        <ProjectsList
                            projects={this.state.projectsFiltered}
                            events={this.props.participation.events}
                            showEvents={hash === '#events'}
                        />
                    </ModuleBodyView>

                    <ModuleBodyView selector="#calendar" current={hash} >
                        <ProjectsCalendar
                            projects={this.state.projectsFiltered}
                            isVisible={hash === "#calendar"}
                        />
                    </ModuleBodyView>

                </ModuleBodyContainer>
            </ModuleContainer>
        );

    }

    static propTypes    = {
        participation: PropTypes.any
    };
    static defaultProps = {};
    static contextTypes = {
        muiTheme     : PropTypes.object.isRequired,
        filteredRoute: PropTypes.object.isRequired
    };
}

/** ************************************************* **/
import Checkbox from 'material-ui/Checkbox';
const CompaniesList = ( { companies } ) => {
    return (
        <div>
            { companies.map( cia => <div key={"cia" + cia.id} >{cia.short_name}</div> ) }
        </div>
    )
};

const RolesList = ( { roles, mainRole } ) => {
    return (
        <div>
            { roles.map( role => {
                const isActive = mainRole === role.id;
                return (
                    <Checkbox
                        key={"role" + role.id}
                        label={role.name}
                        checked={isActive}
                    />
                )
            } ) }
        </div>
    )
};


function randomIntFromInterval( min, max ) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

/** R E D U X   S T O R E **/
/** ************************************************* **/
import {connect} from 'react-redux';
export default connect()( User );