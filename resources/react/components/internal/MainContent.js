/*
 * File: MainContent.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   16 Mar, 2017 | 2:12 PM
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

import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

import {Layout, Tabs as AntTabs} from 'antd';
const { Content } = Layout;
const TabPane     = AntTabs.TabPane;
import TabElement from '../mainTabs/TabElement';
import TabBodyElement from '../mainTabs/TabBodyElement';
import FontIcon from 'material-ui/FontIcon';
import {matchPath} from 'react-router-dom';
import UrlFixerForTabs from '../../utilities/UrlFixerForTabs';
//let fu = 0; todo: remove
class MainContent extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    getChildContext(){
        return {
            filteredRoute: this.props.match.params
        }
    }

    /** O P E R A T I O N S **/
    /** ************************************************* **/
    tabIDFixer( props/*, up = false todo: remove*/ ) {

        const { location, match } = props;
        const { pathname }        = location;
        const { routerTabID }     = match.params;

        const urlFixer = new UrlFixerForTabs(
            pathname,
            routerTabID,
            props.tabsList,
            props.selectedTab.uniqueID
        );

        if ( urlFixer.needsUpdate() ) {
            /*console.table( [{
                ...urlFixer,
                selected: urlFixer.selectedUniqueID,
                us      : urlFixer.needsStoreUpdate(),
                ru      : urlFixer.needsRouteUpdate(),
                rt      : urlFixer.routableURL,
                st      : urlFixer.storableURL,
                update  : urlFixer.needsUpdate(),
                //fu todo: remove
            }] );*/
            //if(up && fu < 10) todo: remove
            this.props.actions.setURLForTab(
                urlFixer.index,
                urlFixer.storableURL,
                urlFixer.needsMakeItSelectable() ? urlFixer.targetUniqueID : false,
                urlFixer.needsRouteUpdate() ? urlFixer.routableURL : false
            );
        }
    }


    /** E V E N T S **/
    /** ************************************************* **/

    onTabClick( tabUniqueID ) {

        const { selectedTab, tabsList } = this.props;
        if ( selectedTab.uniqueID === tabUniqueID ) return;

        const url = UrlFixerForTabs.clickedTab( tabUniqueID, tabsList );
        this.props.actions.setCurrentTab( tabUniqueID, url );

    }

    onAddTab() {
        const newIndex = this.props.tabsList.size + 1;
        this.props.actions.addTab( { title: "Tab" + newIndex, url: '/' } );
    }

    onRemoveTab( event, uniqueID ) {
        event.stopPropagation();
        this.props.actions.removeTab( uniqueID );
    }


    /** L I F E C Y C L E **/
    /** ************************************************* **/
    componentWillUpdate( nextProps ) {
        this.tabIDFixer( nextProps/*, fu todo: remove*/ );
        //fu++; todo: remove
    }

    componentWillMount() {
        this.tabIDFixer( this.props, true );
    }


    /** I N T E R N A L   C O M P O N E N T S **/
    /** ************************************************* **/

    addButtonComponent() {
        const cssClass = 'extraTab anticon anticon-plus';
        return (
            <FontIcon className={cssClass} onClick={this.onAddTab} />
        )
    }

    tabTitleComponent( { data } ) {

        const { uniqueID, title, closable } = data;
        return (
            <TabElement
                uniqueID={uniqueID}
                title={title}
                icon={'user'}
                onClose={this.onRemoveTab}
                closable={closable}
            />
        )
    }

    tabComponent( data, index ) {

        const { match, selectedTab } = this.props;
        const nKey                   = data.uniqueID;
        const nKeyString             = nKey.toString();
        const TabTitle               = this.tabTitleComponent;
        const isVisible              = selectedTab.uniqueID === nKey;

        return (
            <TabPane
                className="TabPane--AntDesign"
                closable={true}
                tab={<TabTitle index={index} data={data} />}
                key={nKeyString}
            >

                <TabBodyElement
                    tabData={data}
                    tabUniqueID={ nKeyString }
                    tabIndex={index}
                    visible={isVisible}
                    match={match}
                    location={this.props.location}
                />

            </TabPane>
        )
    }

    /** R E N D E R **/
    /** ************************************************* **/

    render() {

        const { tabsList }    = this.props;
        const { routerTabID } = this.props.match.params;

        const cssClass     = classNames( "MainContent--CT", this.props.className );
        const cssClassTabs = classNames( "Tabs--AntDesign" , {single: tabsList.size <= 1} );
        const NewTabButton = this.addButtonComponent;
        return (
            <Layout className={cssClass} >

                <Content className="contentAreaContainer" >
                    <AntTabs className={cssClassTabs}
                             activeKey={routerTabID || "1"}
                             animated={false}
                             renderTabBar=""
                             renderTabContent=""
                             tabBarExtraContent={<NewTabButton/>}
                             onTabClick={ this.onTabClick } >

                        { tabsList.map( this.tabComponent ) }

                    </AntTabs>

                </Content>
            </Layout>
        );

    }

    static propTypes    = {};
    static defaultProps = {
        className: PropTypes.string,
    };
    static childContextTypes = {
        filteredRoute: PropTypes.object
    }
}

/** R E D U X   S T O R E **/
/** ************************************************* **/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as tabs_actions} from '../../store/modules/tabs';

const mapToStateProps = ( { tabs, router } ) => {

    const allTabs    = tabs.get( 'tabs' );
    const selectedID = tabs.get( 'selected' );
    const match      = matchPath( router.location.pathname, {
        path: '/:routerTabID(\\d+)?/:module?/:elementID(\\d+)?/:action?'
    } );

    return {
        match      : match,
        params     : match.params,
        location   : router.location,
        tabsList   : allTabs,
        selectedTab: allTabs.find( tab => tab.uniqueID === selectedID ),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators( { ...tabs_actions }, dispatch )
    }
};

export default connect( mapToStateProps, mapDispatchToProps )( MainContent );