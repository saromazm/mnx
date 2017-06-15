/*
 * File: Dashboard.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Apr, 2017 | 7:28 AM
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

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Dash1 = ()=> (
    <div>Dashboard 1</div>
);
const Dash2 = ()=> (
    <div>Dashboard 2</div>
);

class Dashboard extends Component{

    constructor( props ) {
        super( props );
        autobind( this );
    }

    state = {
        name: 'component'
    };

    render(){
        dd(this.props);
        const cssClass = classNames( this.props.className );
        return (
            <div className={cssClass}>
                <Router history={null}>
                    <div>
                        <ul>
                            <li><Link to="/dashboard">Dash 1</Link></li>
                            <li><Link to="/dashboard/twod">Dash 2</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/dashboard" component={Dash1}/>
                        <Route path="/dashboard/twod" component={Dash2}/>
                    </div>
                </Router>
            </div>
        );

    }


    static defaultProps = {};
    static propTypes = {
        className: PropTypes.string,
    };
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
}

export default Dashboard;