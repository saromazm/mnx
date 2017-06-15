/*
 * File: ModuleContainer.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   19 Mar, 2017 | 12:23 AM
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

/* global mnx */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import autobind from 'react-autobind-helper';
import classNames from 'classnames';

/** M O D U L E   C O N T A I N E R **/
/** ************************************************* **/
class ModuleContainer extends Component {

    render() {
        return (
            <div className="ModuleContainer--CT" >
                {this.props.children}
            </div>
        );
    }

    static propTypes    = {};
    static defaultProps = {};
}


/** M O D U L E   T O P **/
/** ************************************************* **/
import {Row, Col} from 'antd';

export class ModuleTopContainer extends Component {

    render() {
        const { children, headerIndex, viewSelectorIndex, optionsIndex } = this.props;

        if ( !Array.isArray( children ) ) {
            return (
                <div className="ModuleContainer-Top--CT" >
                    {children}
                </div>
            )
        }

        return (
            <div className="ModuleContainer-Top--CT" >
                <Row type="flex" align="middle" justify="space-between" >
                    <Col xs={24} sm={{ span: 14, offset: 0 }} >
                        { headerIndex !== null && children[headerIndex] }
                    </Col>
                    <Col xs={24} sm={8} >
                        { optionsIndex !== null &&
                        <div className="options" >
                            { optionsIndex && children[optionsIndex]}
                        </div>
                        }
                    </Col>
                </Row>
                { viewSelectorIndex && children[viewSelectorIndex]}
            </div>
        );
    }

    static propTypes = {
        viewSelectorIndex: PropTypes.number,
        headerIndex      : PropTypes.number,
        optionsIndex     : PropTypes.number,
    };
}

/** M O D U L E   B O D Y **/
/** ************************************************* **/
export class ModuleBodyContainer extends Component {

    render() {
        return (
            <div className="ModuleContainer-Body--CT" >
                {this.props.children}
            </div>
        );
    }

}

/** M O D U L E   B O D Y   V I E W**/
/** ************************************************* **/
export class ModuleBodyView extends Component {

    render() {
        const { selector, selectors, current, visible, isDefault } = this.props;

        const inSelectors = selectors ? selectors.indexOf( current ) > -1 : false;
        const isSelected  = selector ? current === selector : false;
        const displayable = visible || isSelected || inSelectors || (isDefault && current === '');
        const style       = { display: displayable ? 'block' : 'none' };

        return (
            <div style={style} className="ModuleContainer-BodyView--CT" >
                {this.props.children}
            </div>
        );
    }

    static defaultProps = {
        isDefault: false,
        current  : ''
    };

    static propTypes = {
        visible  : PropTypes.bool,
        current  : PropTypes.string,
        selector : PropTypes.string,
        selectors: PropTypes.array,
        isDefault: PropTypes.bool
    }

}

/** M O D U L E   H E A D E R **/
/** ************************************************* **/
import SimpleSvgImageLoader from './SimpleSvgImageLoader';

export class ModuleHeader extends Component {

    render() {
        const { title, subtitle, icon, status, extra, details } = this.props;

        const iconCss = classNames( "image", status || '' );

        return (
            <div className="ModuleContainer-Header--CT" >
                { icon !== null &&
                <SimpleSvgImageLoader key="headerImage" imageName={icon} className={iconCss} />
                }
                <div className="content" >

                    <div className="mnx title big underlined active">
                        {title}
                        <div className="subtitle uppercased">
                            {subtitle}
                        </div>
                    </div>
                    {details !== null && <div key='detailsHeader' className="details" >{details}</div>}
                    {extra !== null && <div key='extraHeader' className="extra" >{extra}</div>}
                </div>
            </div>
        );
    }

    static propTypes = {
        title       : PropTypes.any,
        subtitle    : PropTypes.any,
        icon        : PropTypes.string,
        status      : PropTypes.string,
        extraIndex  : PropTypes.number,
        detailsIndex: PropTypes.number,
        extra       : PropTypes.element,
        details     : PropTypes.element
    }
}

/** M O D U L E   V I E W   S E L E C T O R **/
/** ************************************************* **/
import {Radio} from 'antd';
const RadioGroup  = Radio.Group;
const RadioButton = Radio.Button;
import {push, replace} from 'react-router-redux';

export class ModuleViewSelector extends Component {

    onChange = ( event ) => {
        const { pathname, hash } = this.props.location;
        const { value }          = event.target;
        //const isDefault          = value === this.props.defaultView;
        const newURL             = pathname + value;

        if ( newURL === pathname + hash ) return;

        this.props.dispatch( push( pathname + value ) );
        this.props.onChange( value, event );
    };

    render() {

        const groupCSS  = 'RadioGroup--AntDesign';
        const { views } = this.props;
        const viewsKeys = Object.keys( views );

        if ( views.length < 1 ) return null;

        return (
            <div className="ModuleContainer-ViewSelector--CT" >
                <RadioGroup className={groupCSS}
                            size="small"
                            value={this.props.current}
                            onChange={this.onChange} >
                    { viewsKeys.map( key =>
                        <RadioButton className='RadioButton--AntDesign'
                                     key={ key + "_view_selector" }
                                     value={this.props.views[key].code} >
                            {this.props.views[key].label}
                        </RadioButton>
                    )}
                </RadioGroup>
            </div>
        );
    }

    static defaultProps = {
        views   : {},
        onChange: mnx.noop
    };

    static propTypes = {
        views      : PropTypes.object,
        onChange   : PropTypes.func,
        location   : PropTypes.object,
        current    : PropTypes.string,
        defaultView: PropTypes.string,
        dispatch   : PropTypes.func.isRequired,
    };
}

/** M O D U L E  I N N E R  P R E V I E W **/
/** ************************************************* **/
import {Scrollbars2} from 'react-scrollbars2';

export class ModuleInnerPreview extends Component {
    constructor( props ) {
        super( props );
        this.scrollbarObj = null;
        this.state        = {
            selected: null
        };
        this.simpleList   = this.simpleList.bind( this );
        this.content   = this.content.bind( this );
    }

    componentDidUpdate() {
        if ( this.scrollbarObj ) {
            this.scrollbarObj.api.update();
        }
    }

    simpleList() {
        const { elements, renderFunction } = this.props;
        return (
            <Scrollbars2 ref={ ref => {
                this.scrollbarObj = ref
            } } >
                {elements.map( renderFunction )}
            </Scrollbars2>
        );
    }

    content(){
        if( !this.props.empty ) {
            return this.props.children[0];
        }

        return(
            <div className="arrows" >
                <object data={this.props.icon} type="image/svg+xml" />
                {this.props.children[0]}
            </div>
        );
    }

    render() {
        const { children, icon, elements } = this.props;
        const SimpleList                   = this.simpleList;
        const content                      = elements ? <SimpleList/> : children[3] || null;


        return (
            <div className="miniModule" >
                <div className="drawer" >
                    {this.content()}
                </div>
                <div className="content" >
                    {children[1]}
                    {content}
                    {children[2]}
                </div>
            </div>
        )
    }

    static propTypes = {
        icon          : PropTypes.string,
        renderFunction: PropTypes.func,
        simple        : PropTypes.bool,
        empty         : PropTypes.bool
    }
}


/** U T I L I T I E S **/
/** ************************************************* **/

export function redirectToDefaultView( location, defaultView, dispatch ) {
    const { pathname, hash } = location;
    if ( hash === '' ) {
        dispatch( replace( pathname + defaultView ) );
    }
}

export function redirectToCurrentView( location, currentView, dispatch ) {
    const { pathname, hash } = location;
    if ( hash === '' ) {
        dispatch( replace( pathname + currentView ) );
    }
}

export function saveHashAsCurrentView( newLocation, prevLocation, owner ) {

    const nextHash = newLocation.hash;
    const prevHash = prevLocation.hash;

    if ( nextHash !== prevHash && nextHash !== '' ) {
        owner.setState( {
            currentView: nextHash
        } );
    }
    else if ( nextHash === '' && owner.state.currentView ) {
        redirectToCurrentView( newLocation, owner.state.currentView, owner.props.dispatch );
    }
}

export default ModuleContainer;