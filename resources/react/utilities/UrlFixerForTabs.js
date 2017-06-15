/*
 * File: AddressBarManager.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   17 Apr, 2017 | 1:45 AM
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


export class UrlFixerForTabs {
    constructor( pathname, targetTabUniqueID, tabsList, selectedUniqueID ) {

        //Received Data
        this.pathname         = pathname;
        this.tabsList         = tabsList;
        this.selectedUniqueID = selectedUniqueID;
        this.tabRequiredIndex = 0;

        //Fixing OriginalData
        this.originalReqID   = targetTabUniqueID;
        this.targetUniqueID  = isNaN( targetTabUniqueID ) ? '1' : parseInt( targetTabUniqueID, 10 ).toString();
        this.targetTabObject = tabsList.find( this.tabFinder );
        this.requiredIDExist = !!this.targetTabObject;


        this.validateTargetObjectExistence();
        if ( this.targetUniqueID !== this.originalReqID ) {
            this.targetTabObject = tabsList.find( this.tabFinder );
        }

        //Basic URL
        this.url_noHiddenTab = this.removeHiddenTabsFromURL();
        this.url_noTargetTab = this.removeTargetTabFromURL();

    }

    tabFinder = ( tab, index ) => {
        const eq = tab.uniqueID === this.targetUniqueID;
        if ( eq ) this.tabRequiredIndex = index;
        return eq
    };

    validateTargetObjectExistence() {
        this.targetUniqueID = this.requiredIDExist ? this.targetUniqueID : '1';
    }

    removeHiddenTabsFromURL() {
        const regex         = /((.(?!\d)0*1(?!\d))|^0+)\/*/;
        const pathname      = this.pathname;
        const fixedPath     = pathname.replace( regex, '' );
        const pathnameParts = pathname.split( "/" );
        const newPathName   = pathnameParts.shift();
        const newTabNumber  = newPathName.replace( regex, '' );
        pathnameParts.unshift( newTabNumber );

        //dd( pathname, pathnameParts, newPathName.replace( regex, '' ), pathnameParts );
        if ( this.targetUniqueID !== '0' && this.targetUniqueID !== '1' ) {
            return UrlFixerForTabs.setTrailingSlash( pathname );
        }
        return UrlFixerForTabs.setTrailingSlash( fixedPath );
    }

    removeTargetTabFromURL() {
        const regex     = new RegExp( '/*' + this.originalReqID + '(?!\\d)' );
        const fixedPath = this.url_noHiddenTab.replace( regex, '' );
        return UrlFixerForTabs.setTrailingSlash( fixedPath );
    }

    needsUpdate() {
        return this.needsMakeItSelectable()
            || this.needsRouteUpdate()
            || this.needsStoreUpdate();
    }

    needsRouteUpdate() {
        const { pathname, requiredIDExist, url_noHiddenTab, url_noTargetTab } = this;
        return pathname !== (requiredIDExist ? url_noHiddenTab : url_noTargetTab);
    }

    needsStoreUpdate() {
        return this.targetTabObject.url !== this.url_noTargetTab;
    }

    needsMakeItSelectable() {
        return this.selectedUniqueID !== this.targetUniqueID;
    }


    get index() {
        return this.tabRequiredIndex;
    }

    get id() {
        return this.targetUniqueID;
    }

    get routableURL() {
        const { tabRequiredExist, url_noHiddenTab, url_noTargetTab } = this;
        return tabRequiredExist ? url_noHiddenTab : url_noTargetTab;
    }

    get storableURL() {
        return this.url_noTargetTab;
    }


    static clickedTab( tabUniqueID, tabsList ) {
        const tabObject = tabsList.find( tab => tab.uniqueID === tabUniqueID );
        const baseUrl   = tabObject.url;
        const finalURL  = (tabUniqueID !== '1' ? '/' + tabUniqueID : '') + baseUrl;
        return finalURL.replace( /\/+$/, '' );
    }

    static setTrailingSlash( url ) {
        const needsTrailing = url.indexOf( "/" ) !== 0;
        return (needsTrailing ? '/' : '') + url;
    }

    static clickedCell( uniqueID, _targetURL ) {
        const targetURL = _targetURL === '/' ? '' : UrlFixerForTabs.setTrailingSlash( _targetURL );
        const finalURL  = (uniqueID !== '1' ? uniqueID : '') + targetURL;
        return UrlFixerForTabs.setTrailingSlash( finalURL );
    }


    static urlFromTabOrder( index, url ) {
        return UrlFixerForTabs.clickedCell( index, url );
    }

    static urlFromTabIndex( uniqueID, url ) {
        return UrlFixerForTabs.clickedCell( uniqueID, url );
    }
}


export class TabsOrderManager {
    constructor( tabsList ) {
        this.tabsList = tabsList;
        this.tabsSize = tabsList.size;
    }

    getNextTabIndex( index ) {
        const next = index + 1;
        return next >= this.tabsSize ? false : next;
    }

    getPrevTabIndex( index ) {
        const prev = index - 1;
        return prev < 0 ? 0 : prev;
    }

    getTabFromIndex( index ) {
        return this.tabsList.get( index );
    }

    getTabFromOrder( order ) {
        const index = order - 1;
        return index < 0 ? null : this.tabsList.get( index );
    }

    getPropFromIndex( index, prop ) {
        const tabData = this.getTabFromIndex( index );
        return tabData[prop];
    }

    getPropFromOrder( order, prop ) {
        const tabData = this.getTabFromOrder( order );
        return tabData[prop];
    }

    getURLFromIndex( index ) {
        return this.getPropFromIndex( index, 'url' );
    }

    getURLFromOrder( order ) {
        return this.getPropFromOrder( order, 'url' );
    }

}

export default UrlFixerForTabs;