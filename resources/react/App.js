/*
 * File: App.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Feb, 2017 | 5:20 PM
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

if ( process.env.NODE_ENV !== 'production' ) {
    self.Perf = require( 'react-addons-perf' );
}

//React Basics
import React from 'react';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

//Material Theme
import defaultTheme from './themes/defaultTheme';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Routes
import {Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

//Components
import {ComponentLoader} from './components/global/Bundle';
import bigErrorLoader from 'bundle-loader?lazy&name=[name]!./components/global/BigError';
import privateContentLoader from 'bundle-loader?lazy&name=[name]!./components/login/PrivateContent';
import {ConnectedRouter} from 'react-router-redux';

const history = createBrowserHistory();

class App extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );

        this.themes = {
            default: defaultTheme
        };
    }


    /** R E N D E R **/
    /** ************************************************* **/
    render() {
        const { preferences, error } = this.props;
        const { theme }              = preferences;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme( this.themes[theme] || this.themes.default )} >

                <ConnectedRouter history={history} >
                    <Route render={ props => {
                        const { pathname } = props.location;
                        const cssClass     = classNames( 'baseContainer', { clear: pathname !== '/' } );

                        return (
                            <div className={cssClass} >

                                <Switch>

                                    <Route exact={true} path={'/(error|status)'} render={ props => (
                                        <ComponentLoader loader={bigErrorLoader} error={error} />
                                    )} />
                                    <Route exact={true} path={'/about'} render={ props => (
                                        <div> About Page </div>
                                    )} />
                                    <Route path={'/:tabID(\\d+)?/:module?/:elementID(\\d+)?/:action?'}
                                           render={ props => (
                                               <ComponentLoader loader={privateContentLoader} />
                                           ) } />

                                </Switch>

                            </div>
                        )
                    } } />
                </ConnectedRouter>

            </MuiThemeProvider>
        );
    }

}

/** R E D U X   S T O R E **/
import {connect} from 'react-redux';

const mapToStateProps = ( { session } ) => {
    return {
        preferences: session.get( 'preferences' ),
        error      : session.get( 'error' ),
    }
};

export default connect( mapToStateProps )( App );