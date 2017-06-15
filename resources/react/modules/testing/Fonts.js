/*
 * File: Fonts.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   31 Mar, 2017 | 2:26 AM
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
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind-helper';
import classNames from 'classnames';

import {InfiniteList} from 'react-scrollbars2';

/*import ModuleContainer from '../../components/global/ModuleContainer';
const { ModuleTopContainer, ModuleBodyContainer, ModuleHeader } = ModuleContainer;*/


import LeftBarSearchField from '../../components/sideBars/LeftBarSearchField';
import ColorPicker from "../../components/global/ColorPicker";
import ModuleContainer, {
    ModuleTopContainer,
    ModuleBodyContainer,
    ModuleHeader
} from '../../components/global/ModuleContainer';


const FONT_ICON = require( '../../../assets/media/images/optimized/font.svg' );

class Fonts extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    state = {
        name  : 'component',
        filter: '',
        color : null
    };


    /** E V E N T S **/
    /** ************************************************* **/
    onColorChange( color ) {
        const rgb = color.rgb;
        const colorRGBA =`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
        this.setState( { color: colorRGBA } );
    }


    renderCells( cellInfo, index, indx = null ) {

        const iconLabel    = cellInfo.replace( /icon/g, " " ).replace( /(-|\.)/g, "" ).replace( /(\s*\w+\s+)([0-9]+?)/g, " $1 $2" );
        const isAntIcon    = cellInfo.indexOf( 'anticon' ) > -1;
        const iconCssClass = classNames( cellInfo, {
            anticon: isAntIcon,
            icon   : !isAntIcon
        } );
        return (
            <FontCard
                color={this.state.color}
                index={indx}
                title={iconLabel}
                toCopy={cellInfo}
                icon={iconCssClass} />
        );
        /*return (
         <div className="FontCard--SC" >
         <div className="index" >{indx}</div>
         <div className="title" >{iconLabel}</div>
         <i className={iconCssClass} />
         </div>
         )*/
    }

    onFilterChange( filter ) {
        this.setState( { filter } )
    }

    _render() {

        return (
            <div>FONTS</div>
        );
    }

    render() {
        const { lines } = this.props;

        const filteredLines = lines.filter( val => val.indexOf( this.state.filter ) > -1 );

        return (
            <ModuleContainer>
                <ModuleTopContainer headerIndex={0} optionsIndex={1} >
                    <ModuleHeader title="Fonts"
                                  subtitle="showing font sets"
                                  icon={FONT_ICON}
                                  status='disabled' />
                    <div className="optionsWrapper">
                        <div style={{ overflow: 'hidden', display: 'inline-block' }} >
                            <LeftBarSearchField
                                hintText={"search icon"}
                                value={this.state.filter}
                                isVisible={true}
                                isBackEnabled={false}
                                counter={filteredLines.length}
                                onChange={this.onFilterChange} />
                        </div>
                        <ColorPicker onChangeColor={this.onColorChange} />
                    </div>

                </ModuleTopContainer>
                <ModuleBodyContainer>
                    <InfiniteList
                        defaultRowHeight={170 / 4}
                        totalItems={ filteredLines.length }
                        items={filteredLines} offset={10}
                        renderFunc={this.renderCells}
                        visibles={36}
                        scrollbarProps={{ injectStyle: false }}
                        className="FontCard--SC-container"
                        pageClassName="FontCard--SC-pages"
                    />
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


/** F O N T  C A R D  C O M P O N E N T **/
/** ************************************************* **/
import TouchRipple from 'material-ui/internal/TouchRipple';
import CopyToClipboard from 'react-copy-to-clipboard';

class FontCard extends React.Component {

    constructor( props ) {
        super( props );
        autobind( this );
    }

    onCopy() {
        console.log( "copied" );
    }

    render() {
        const cssClass = classNames( "FontCard--SC", this.props.className );
        const iconStyle = { color: this.props.color };
        return (
            <div className={cssClass} tabIndex="0">
                <TouchRipple>
                    <div className="index" >{this.props.index + 1}</div>
                    <div className="title" >{this.props.title}</div>
                    <i style={iconStyle} className={this.props.icon} />
                    <CopyToClipboard text={this.props.toCopy} onCopy={this.onCopy} >
                        <div className="button" >
                            copy to clipboard
                        </div>
                    </CopyToClipboard>
                </TouchRipple>
            </div>
        );
    }


    static propTypes = {
        className: PropTypes.string,
        title    : PropTypes.string,
        icon     : PropTypes.string,
        color    : PropTypes.string,
        toCopy   : PropTypes.string,
        index    : PropTypes.number,
    };
}

export default Fonts;