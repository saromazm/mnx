/*
 * File: Company.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   3 May, 2017 | 10:47 PM
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
import throttle from 'lodash/throttle';


import LeftBarSearchField from '../../components/sideBars/LeftBarSearchField';
import TagFilter from '../../components/global/TagFilter';
import ProjectsList from '../shared/ProjectsList';
import ProjectsManagerUtility from '../shared/ProjectsManagerUtility';

import SimpleCalendar from '../shared/SimpleCalendar';
import ModuleContainer, {
    ModuleTopContainer,
    ModuleBodyContainer,
    ModuleBodyView,
    ModuleHeader,
    ModuleViewSelector,
    ModuleInnerPreview,
    redirectToDefaultView,
    saveHashAsCurrentView
} from '../../components/global/ModuleContainer';


const BUILDING_ICON = require( '../../../assets/media/images/optimized/building2.svg' );
const USER_ICON     = require( '../../../assets/media/images/optimized/user 1.svg' );
const ARROWS_ICON   = require( '../../../assets/media/images/optimized/arrows.2.svg' );

const TABS = {
    details : { label: "Details", code: '#details' },
    users   : { label: "Users", code: '#users' },
    projects: { label: "Projects", code: '#projects' },
    events  : { label: "Events", code: '#events' },
    calendar: { label: "Calendar", code: '#calendar' }
};


class Company extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        const { participation, users } = props.dataLoaded;

        this.state            = {
            defaultView      : '#details',
            currentView      : props.location.hash,
            projectsFilter   : '',
            projectsSubFilter: [],
            usersFilter      : '',
            usersFiltered    : users,
            projectsManager  : new ProjectsManagerUtility( participation.projects, participation.events )
        };
        this.doFilterThrothle = throttle( this.doFilter, 300 );
    }


    /** O P E R A T I O N S **/
    /** ************************************************* **/


    usersFilter = function ( contact, filter ) {

        const fName = contact['first_names'].toLowerCase();
        const lName = contact['last_names'].toLowerCase();
        const uName = contact.user['username'].toLowerCase();
        return fName.indexOf( filter ) > -1
            || lName.indexOf( filter ) > -1
            || uName.indexOf( filter ) > -1;
    };

    doFilter( filter ) {
        this.state.projectsManager.filterProjects( filter );
    }

    /** E V E N T S **/
    /** ************************************************* **/

    onProjectsFilterChange( filter ) {
        this.doFilterThrothle( filter );
        this.setState( {
            projectsFilter: filter,
        } );
    }

    onProjectsSubFilterFilterChange( filters ) {
        this.state.projectsManager.subFilterProjects( filters );
        this.setState( {
            projectsSubFilter: filters,
        } );
    }

    onUsersFilterChange( filter ) {
        const { users } = this.props;
        this.setState( {
            usersFilter  : filter,
            usersFiltered: users.filter( user => this.usersFilter( user, filter ) )
        } );
    }

    /** L I F E C Y C L E **/
    /** ************************************************* **/

    shouldComponentUpdate( nextProps, nextState ) {
        //dd( 'equal props', shallowEqual( this.props, nextProps ), nextProps );
        //dd( 'equal props DATA', shallowEqual( this.props.data, nextProps.data ) );
        //dd( 'equal props DATALoaded', shallowEqual( this.props.dataLoaded, nextProps.dataLoaded ) );
        //dd( 'equal props participation', shallowEqual( this.props.participation, nextProps.participation ) );
        //dd( 'equal props users', shallowEqual( this.props.users, nextProps.users ) );
        //dd( 'equal props location', shallowEqual( this.props.location, nextProps.location ), this.props.location, nextProps.location );
        //dd( 'equal state', shallowEqual( this.state, nextState ), nextState );
        //return !shallowEqual( this.props.data, nextProps.data );
        return true;
    }

    componentWillReceiveProps( nextProps ) {
        const nextLocation = nextProps.location;
        const prevLocation = this.props.location;
        saveHashAsCurrentView( nextLocation, prevLocation, this );


        if ( !shallowEqual( nextProps.participation, this.props.participation ) ) {
            //dd( 'UPDATING PROPS' );
            const { events, projects } = nextProps.participation;

            this.setState( {
                projectsManager: new ProjectsManagerUtility( projects, events, this.state.projectsFilter ),
                usersFiltered  : nextProps.users.filter(
                    user => this.usersFilter( user, this.state.usersFilter
                    ) ),
            } );
        }

    }

    componentWillMount() {
        const { location, dispatch } = this.props;
        const { defaultView }        = this.state;
        redirectToDefaultView( location, defaultView, dispatch );
    }


    dataForCurrentView() {

        let hint;
        let counter;
        let filter;
        let search;
        let searchVisible;
        let subSearchVisible;
        let subOptions;

        switch ( this.state.currentView ) {

            case '#projects':
            case '#events':
            case '#calendar':
                hint             = "projects";
                counter          = this.state.projectsManager.getVisibleProjectsCount();
                filter           = this.onProjectsFilterChange;
                search           = this.state.projectsFilter;
                searchVisible    = true;
                subSearchVisible = true;
                subOptions       = ['open', 'closed', 'upcoming', 'all'];
                break;

            case '#users':
                hint             = "users";
                counter          = this.state.usersFiltered.length;
                filter           = this.onUsersFilterChange;
                search           = this.state.usersFilter;
                searchVisible    = true;
                subSearchVisible = true;
                subOptions       = ['active', 'inactive', 'cancelled', 'expired', 'suspended', 'all'];
                break;

            default:
                hint             = '';
                counter          = 0;
                filter           = mnx.noop;
                search           = '';
                searchVisible    = false;
                subSearchVisible = false;
                subOptions       = [];
        }

        return { hint, counter, filter, search, searchVisible, subSearchVisible, subOptions };
    }

    /** R E N D E R **/
    /** ************************************************* **/


    render() {
        const viewData        = this.dataForCurrentView();
        const cssClass        = classNames( this.props.className );
        const { currentView } = this.state;

        const { name, short_name } = this.props.data;
        //dd( 'rendering', short_name.toUpperCase() );
        //const pp                   = new ProjectsManager( this.state.projects, this.state.events );
        //dd( pp );
        //dd("F", this.state.projectsManager.filteredProjects);

        if(1 === 1){
            return(
                <div>MODULE</div>
            )
        }

        return (
            <ModuleContainer className={cssClass} >
                <ModuleTopContainer headerIndex={0} optionsIndex={1} viewSelectorIndex={2} >
                    <ModuleHeader title={short_name}
                                  icon={null}
                                  subtitle={name}
                    />
                    <div className="optionsWrapper" >
                        <div>
                            <LeftBarSearchField
                                hintText={"search " + viewData.hint}
                                value={viewData.search}
                                isVisible={viewData.searchVisible}
                                isBackEnabled={false}
                                counter={viewData.counter}
                                onChange={viewData.filter} />
                        </div>
                        <div>
                            <TagFilter
                                options={viewData.subOptions}
                                default={['open']}
                                exclusive={['all']}
                                onFilterChange={this.onProjectsSubFilterFilterChange}
                                isVisible={viewData.subSearchVisible}
                            />
                        </div>
                    </div>
                    <ModuleViewSelector views={TABS}
                                        location={location}
                                        dispatch={this.props.dispatch}
                                        default={this.state.defaultView}
                                        current={currentView} />
                </ModuleTopContainer>
                <ModuleBodyContainer>

                    <ModuleBodyView selector="#details" current={currentView} isDefault={true} >
                        Details
                    </ModuleBodyView>

                    <ModuleBodyView selector="#users" current={currentView} >
                        <UsersList users={this.state.usersFiltered} />
                    </ModuleBodyView>

                    <ModuleBodyView selector={'#projects'} current={currentView} >
                        {/*<ProjectsList
                         filteredProjects={this.state.projectsManager.getVisibleProjects()}
                         showEvents={false}
                         />*/}
                        <PList projects={this.state.projectsManager.getVisibleProjects()} showEvents={false} />
                    </ModuleBodyView>

                    <ModuleBodyView selector={'#events'} current={currentView} >
                        {/*<ProjectsList
                         filteredProjects={this.state.projectsManager.getVisibleProjects()}
                         showEvents={true}
                         />*/}
                        <PList projects={this.state.projectsManager.getVisibleProjects()} showEvents={true} />
                    </ModuleBodyView>

                    <ModuleBodyView selector="#calendar" current={currentView} >
                        <div className="cal-container" >
                            <SimpleCalendar
                                projectsManager={this.state.projectsManager}
                                projects={this.state.projectsFiltered}
                                events={this.state.events} />
                        </div>

                    </ModuleBodyView>

                </ModuleBodyContainer>

            </ModuleContainer>
        );

    }


    static defaultProps = {};
    static propTypes    = {
        className: PropTypes.string,
    };
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

/** R E D U X   S T O R E **/
/** ************************************************* **/
import {connect} from 'react-redux';
export default connect()( Company );




class PList extends React.PureComponent {

    constructor( props ) {
        super( props );
        this.baseDelay    = 35;
        this.state        = {
            selected: null
        };
        this.projectsCell = this.projectsCell.bind( this );
    }

    projectsCell() {

    }

    render() {

        return (
            <ModuleInnerPreview icon={USER_ICON} renderFunction={this.userCell} simple={false} >
                <div className="mnx title small underlined centered" >
                    User Details
                    <div className="subtitle uppercased" >
                        Choose a users to see their details.
                    </div>
                </div>

                <div className="title" >
                    Projects Preview List
                </div>
                <div className="counter" >
                    Total projects: {this.props.projects.length}
                    <span>+</span>
                </div>
                <ProjectsList
                    filteredProjects={this.props.projects}
                    showEvents={this.props.showEvents}
                />
            </ModuleInnerPreview>
        );
    }

}

import ListCell from '../../components/global/ListCell';
class UsersList extends React.PureComponent {

    constructor( props ) {
        super( props );
        //this.scrollbarObj = null;
        this.baseDelay   = 35;
        this.state       = {
            selected: null,
            active  : null
        };
        this.userCell    = this.userCell.bind( this );
        this.onClick     = this.onClick.bind( this );
        this.userPreview = this.userPreview.bind( this );
    }


    onClick( element, index ) {
        const { active } = this.state;
        if ( active ) {
            active.deactivate();
        }
        this.setState( { active: element, selected:index } );
    }

    userCell( user, indx ) {
        const { first_names, last_names } = user;
        const { username, status }        = user.user;

        const style = {
            animationDelay: (indx * this.baseDelay) + "ms"
        };

        const items = [
            { label: 'Something', action: '' }
        ];

        return (
            <ListCell
                key={user.id}
                titleIndex={0}
                subtitleIndex={1}
                iconIndex={2}
                descriptionIndex_={3}
                menuIndex_={3}
                counter={indx}
                index={indx}
                labels={status}
                iconURL_={USER_ICON}
                iconFont_={'icon icon-user13'}
                iconSize={'small'}
                menuItems={items}
                underlinedTitle={false}
                onClick={this.onClick}
            >
                <div>{first_names} { last_names } </div>
                <div>{username}</div>
                <i className="icon material-icons">account_circle</i>
                <div>This is the description of the current user and allows to try to test</div>
            </ListCell>
        );
        /*return (
         <div style={style} className={"fadeInRight previewCell " + status}
         key={user.id} onClick={()=>{ this.onClick(indx) }} data-indx={indx} >
         <img className="icon" src={USER_ICON} alt="" />
         {/!*<div className="main" >{first_names} { last_names }</div>
         <div>{username}</div>*!/}
         <div className="mnx title tiny block">
         {first_names} { last_names }
         <div className="subtitle">
         {username}
         </div>
         </div>
         <div className={"mnx tag " + status} >{status}</div>
         </div>
         );*/
    }

    userPreview() {
        const { selected }   = this.state;
        const emptySelection = selected === null || typeof selected === 'undefined';
        if ( emptySelection ) {
            return (
                <div className="message" >
                    <h2>User Details {this.state.selected}</h2>
                    Choose a users to see their details.
                </div>
            );
        }

        const { users } = this.props;
        const user      = users[selected] || users[0];
        return <UserPreview user={user} />
    }

    render() {

        const { selected }   = this.state;
        const emptySelection = selected === null || typeof selected === 'undefined';
        return (
            <ModuleInnerPreview empty={emptySelection} icon={USER_ICON} elements={this.props.users}
                                renderFunction={this.userCell} >
                {this.userPreview()}
                <div className="title" >
                    Users Preview List
                </div>
                <div className="counter" >
                    Total users: {this.props.users.length}
                    <span>+</span>
                </div>
            </ModuleInnerPreview>
        );
    }
}




const FEMALE_ICON = require( '../../../assets/media/images/optimized/female02.svg' );
const MALE_ICON   = require( '../../../assets/media/images/optimized/male02.svg' );

class UserPreview extends React.Component {
    constructor( props ) {
        super( props );
        autobind( this );
    }

    render() {
        dd( this.props );
        const { user }                                            = this.props;
        const { first_names, last_names, preferred_name, gender } = user;
        return (
            <div className="element-preview" >
                {/*<div className="marker"/>*/}
                {/*<div className="iconHolder" >
                    <div className={ gender === 'male' ? 'maleIcon' : 'femaleIcon' } />
                </div>*/}
                {/*<div className={ gender === 'male' ? 'maleIcon' : 'femaleIcon' } />*/}
               {/* <br/>*/}
                <div className="mnx title medium underlined centered" >
                    {preferred_name}
                    <div className="subtitle" >
                        {first_names} {last_names}
                    </div>
                </div>
                <div>
                    {user.user.username}
                </div>
                <div>
                    <div className="mnx title tiny reversed">
                        <span>
                            {first_names} {last_names}
                        </span>
                        <div className="subtitle uppercased" >
                            Full name
                        </div>
                    </div>
                    <div className="mnx title tiny reversed">
                        <span>
                            {user.bday}
                        </span>
                        <div className="subtitle uppercased" >
                            Birth Day
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    static defaultProps = {
        user: '',
    };

    static propTypes = {
        user: PropTypes.object,
    };
}