webpackJsonp([4],{

/***/ "../scrollbars2/compiled/Scrollbars2/InfiniteList.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ../scrollbars2/compiled/Scrollbars2/InfiniteList.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../scrollbars2/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "../scrollbars2/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _index = __webpack_require__(/*! ../index */ "../scrollbars2/compiled/index.js");

var _reactAutobindHelper = __webpack_require__(/*! react-autobind-helper */ "../scrollbars2/node_modules/react-autobind-helper/lib/index.js");

var _reactAutobindHelper2 = _interopRequireDefault(_reactAutobindHelper);

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyArray = [];

var InfiniteList = function (_React$Component) {
    _inherits(InfiniteList, _React$Component);

    function InfiniteList(props) {
        _classCallCheck(this, InfiniteList);

        var _this = _possibleConstructorReturn(this, (InfiniteList.__proto__ || Object.getPrototypeOf(InfiniteList)).call(this, props));

        (0, _reactAutobindHelper2.default)(_this);

        _this.state = { currentPage: 0 };

        //Pages Info
        _this.pData = new _immutable.List();
        _this.pTotal = 0;
        _this.pLeftOvers = 0;
        _this.pRefs = {};

        //Heights
        _this.hGhost = 0;
        _this.hItems = 0;

        //Flags
        _this.isIterable = false;
        _this.isListening = false;

        _this.resetPagesObject(props);
        return _this;
    }

    /** C A L C U L A T I O N S **/
    /** ************************************************* **/

    _createClass(InfiniteList, [{
        key: 'resetPagesObject',
        value: function resetPagesObject(props) {
            var _this2 = this;

            //Flags
            this.isListening = false;
            this.isIterable = _immutable.Iterable.isIterable(props.items);

            var length = this.isIterable ? props.items.size : props.items.length;
            var baseHeight = length <= props.visibles ? 0 : props.defaultRowHeight * length;

            //Pages Info
            this.pTotal = Math.ceil(length / props.visibles);
            this.pLeftOvers = length % props.visibles;
            this.pData = new _immutable.List().setSize(this.pTotal).map(function (x, y) {
                return _this2.createPagesObject(y, props);
            });

            //Heights
            this.hGhost = baseHeight;
            this.hItems = baseHeight;
        }
    }, {
        key: 'createPagesObject',
        value: function createPagesObject(page, props) {
            var visibles = props.visibles,
                defaultRowHeight = props.defaultRowHeight;


            var length = this.isIterable ? props.items.size : props.items.length;
            var isLast = page === this.pTotal - 1;
            var from = page * visibles;
            var to = Math.min(from + visibles, length);
            var estimatedHeight = visibles * defaultRowHeight;
            var height = isLast && this.pLeftOvers > 0 ? this.pLeftOvers * defaultRowHeight : estimatedHeight;

            return {
                page: page, from: from, to: to, height: height,
                key: 'Page' + page,
                cssClass: 'infinityPage page' + page,
                limitTop: -1,
                limitBottom: 1000000000 * 100000000,
                initialized: false,
                itemsPerPage: visibles
            };
        }
    }, {
        key: 'calculateLimits',
        value: function calculateLimits() {
            var currentPage = this.state.currentPage;

            var currentPageData = this.pData.get(currentPage);

            if (!currentPageData) {
                return;
            }

            var itemsContainerRef = this.refs.itemsContainerRef;

            var currentPageDomObj = this.pRefs['Page' + currentPage];
            var isInitialized = currentPageData.initialized === true;

            if (currentPageData && currentPageDomObj && !isInitialized) {
                var offsetHeight = currentPageDomObj.offsetHeight,
                    offsetTop = currentPageDomObj.offsetTop;


                this.hItems = itemsContainerRef.offsetHeight;
                this.hGhost = this.pData.reduce(function (acc, obj) {
                    return acc + obj.height;
                }, 0);
                this.pData = this.pData.update(currentPage, function (val) {
                    return _extends({}, val, {
                        height: offsetHeight,
                        limitTop: offsetTop,
                        limitBottom: offsetTop + offsetHeight,
                        initialized: true
                    });
                });
                this.enableScrollListening();
            }
        }
    }, {
        key: 'enableScrollListening',
        value: function enableScrollListening() {
            this.isListening = true;
        }
    }, {
        key: 'disableScrollListening',
        value: function disableScrollListening() {
            this.isListening = false;
        }

        /** E V E N T S **/
        /** ************************************************* **/

    }, {
        key: 'onScrollFrame',
        value: function onScrollFrame(_ref) {
            var scrollTop = _ref.scrollTop,
                direction = _ref.direction,
                clientHeight = _ref.clientHeight,
                realMovY = _ref.realMovY;


            if (!this.isListening || !this.pData.get(this.state.currentPage)) return;

            var currentPage = this.state.currentPage;
            var pData = this.pData;
            var _props = this.props,
                defaultRowHeight = _props.defaultRowHeight,
                visibles = _props.visibles;

            var _pData$get = pData.get(currentPage),
                limitTop = _pData$get.limitTop,
                limitBottom = _pData$get.limitBottom,
                height = _pData$get.height;

            var fixedScrollTop = scrollTop + clientHeight;
            var nextPage = currentPage + 1;
            var prevPage = currentPage - 1;
            var isDown = direction === 'down';
            var isUp = direction === 'up';
            var isBigMove = Math.abs(realMovY) > height;

            //When Scroll moves big distances
            if (isBigMove) {
                var midList = pData.size / 2;
                var tgtPageCalc = fixedScrollTop / defaultRowHeight / visibles;
                var tgtPage = tgtPageCalc > midList ? Math.round(tgtPageCalc) : Math.floor(tgtPageCalc);

                this.disableScrollListening();
                this.setState({ currentPage: tgtPage }, this.enableScrollListening);
                return;
            }

            if (fixedScrollTop > limitBottom + 1 && isDown && nextPage < pData.size) {
                this.disableScrollListening();
                this.setState({ currentPage: nextPage }, this.enableScrollListening);
            }

            if (fixedScrollTop < limitTop - 1 && isUp && prevPage >= 0) {
                this.disableScrollListening();
                this.setState({ currentPage: prevPage }, this.enableScrollListening);
            }
        }

        /** L I F E C Y C L E **/
        /** ************************************************* **/

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            var _this3 = this;

            //When the number of items has changed
            //if ( !shallowEqual( this.props.items, nextProps.items ) ) {
            if (!(0, _immutable.is)(this.props.items, nextProps.items)) {
                console.log('differentItems', !(0, _shallowequal2.default)(this.props.items, nextProps.items));
                var scrollbarsRef = this.refs.scrollbarsRef;


                this.resetPagesObject(nextProps, false);
                this.disableScrollListening();

                this.setState({ currentPage: 0 }, function () {
                    if (!scrollbarsRef || !scrollbarsRef.api) return;
                    scrollbarsRef.api.update();
                    scrollbarsRef.api.toTop();
                    _this3.enableScrollListening();
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.calculateLimits();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.calculateLimits();
        }

        /** R E N D E R **/
        /** ************************************************* **/

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                scrollbarProps = _props2.scrollbarProps,
                className = _props2.className;
            var currentPage = this.state.currentPage;
            var pData = this.pData;


            return _react2.default.createElement(
                _index.Scrollbars2,
                _extends({}, scrollbarProps, { onScrollFrame: this.onScrollFrame, thumbMinSize: 30, ref: 'scrollbarsRef' }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('items', className), ref: 'itemsContainerRef',
                        style: { position: 'absolute', width: '100%' } },
                    pData.map(function (object) {
                        var page = object.page,
                            from = object.from,
                            to = object.to;


                        var isRenderable = page >= currentPage - 1 && page <= currentPage + 1;
                        var _loopItems = isRenderable ? _this4.props.items.slice(from, to) : emptyArray;
                        var loopItems = _this4.isIterable && isRenderable ? _loopItems.entrySeq() : _loopItems;

                        return _react2.default.createElement(PageInfiniteList, {
                            key: object.key,
                            ref: _this4.getPageRef,
                            pageData: object,
                            pageItems: loopItems,
                            renderFunc: _this4.props.renderFunc,
                            isRenderable: isRenderable,
                            isIterable: _this4.isIterable,
                            className: _this4.props.pageClassName
                        });
                    })
                ),
                _react2.default.createElement('div', { ref: 'ghost', className: 'ghost',
                    style: { height: Math.min(this.hItems, this.hGhost) } })
            );
        }
    }, {
        key: 'getPageRef',
        value: function getPageRef(obj) {
            if (obj) this.pRefs[obj.pageKey] = obj.refs['page'];
        }
    }]);

    return InfiniteList;
}(_react2.default.Component);

/**  P A G E   C O M P O N E N T **/
/** ************************************************* **/


InfiniteList.defaultProps = {
    scrollbarProps: {}
};
InfiniteList.propTypes = {
    items: _propTypes2.default.any.isRequired,
    visibles: _propTypes2.default.number,
    offset: _propTypes2.default.number,
    renderFunc: _propTypes2.default.func.isRequired,
    defaultRowHeight: _propTypes2.default.number.isRequired,
    totalItems: _propTypes2.default.number.isRequired,
    scrollbarProps: _propTypes2.default.object,
    className: _propTypes2.default.string,
    pageClassName: _propTypes2.default.string
};

var PageInfiniteList = function (_React$Component2) {
    _inherits(PageInfiniteList, _React$Component2);

    function PageInfiniteList(props) {
        _classCallCheck(this, PageInfiniteList);

        var _this5 = _possibleConstructorReturn(this, (PageInfiniteList.__proto__ || Object.getPrototypeOf(PageInfiniteList)).call(this, props));

        _this5.emptyStyle = {};
        _this5.pageKey = props.pageData.key;
        return _this5;
    }

    _createClass(PageInfiniteList, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !(0, _shallowequal2.default)(nextProps, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props3 = this.props,
                pageData = _props3.pageData,
                pageItems = _props3.pageItems,
                isRenderable = _props3.isRenderable,
                isIterable = _props3.isIterable,
                className = _props3.className;


            var pageStyle = isRenderable ? this.emptyStyle : { height: pageData.height };
            var cssClass = (0, _classnames2.default)(this.props.pageData.cssClass, className, {
                renderable: isRenderable
            });

            return _react2.default.createElement(
                'div',
                { ref: 'page', className: cssClass, style: pageStyle },
                isRenderable && pageItems.map(function (x, y) {

                    var object = isIterable ? x[1] : x;
                    var index = isIterable ? x[0] : y;
                    var indx = y + _this6.props.pageData.page * _this6.props.pageData.itemsPerPage;

                    return _react2.default.createElement(
                        'div',
                        { className: 'itemWrapper itemWrapper' + index, key: 'item_' + index },
                        isRenderable && _this6.props.renderFunc(object, index, indx)
                    );
                })
            );
        }
    }]);

    return PageInfiniteList;
}(_react2.default.Component);

PageInfiniteList.propTypes = {
    pageData: _propTypes2.default.any,
    pageItems: _propTypes2.default.any,
    renderFunc: _propTypes2.default.func,
    isRenderable: _propTypes2.default.bool,
    isIterable: _propTypes2.default.bool,
    className: _propTypes2.default.string
};
exports.default = InfiniteList;

/***/ }),

/***/ "../scrollbars2/compiled/Scrollbars2/Scrollbars.js":
/* no static exports found */
/* all exports used */
/*!*********************************************************!*\
  !*** ../scrollbars2/compiled/Scrollbars2/Scrollbars.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Scrollbars2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../scrollbars2/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobindHelper = __webpack_require__(/*! react-autobind-helper */ "../scrollbars2/node_modules/react-autobind-helper/lib/index.js");

var _reactAutobindHelper2 = _interopRequireDefault(_reactAutobindHelper);

var _tinyEmitter = __webpack_require__(/*! tiny-emitter */ "../scrollbars2/node_modules/tiny-emitter/index.js");

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _utils = __webpack_require__(/*! ./utils */ "../scrollbars2/compiled/Scrollbars2/utils.js");

var _scrollbarsStyle = __webpack_require__(/*! ./scrollbarsStyle */ "../scrollbars2/compiled/Scrollbars2/scrollbarsStyle.js");

var _scrollbarsStyle2 = _interopRequireDefault(_scrollbarsStyle);

var _scrollbarsClassNames = __webpack_require__(/*! ./scrollbarsClassNames */ "../scrollbars2/compiled/Scrollbars2/scrollbarsClassNames.js");

var _scrollbarsClassNames2 = _interopRequireDefault(_scrollbarsClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  File: index.js | Package: Scrollbars2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Created:   12 Sep, 2016 | 03:33 PM
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  This file is part of a package and all the information, intellectual
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  and technical concepts contained here are property of their owners.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Any kind of use, reproduction, distribution, publication, etc. without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  express written permission from CapitalMental && BackLogics Technologies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  is strictly forbidden.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  CapitalMental && BackLogics Technologies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Copyright 2014-present. | All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultParsedStyle = __webpack_require__(/*! to-string!css!less!./style/style.less */ "../scrollbars2/node_modules/to-string-loader/src/to-string.js!../scrollbars2/node_modules/css-loader/index.js!../scrollbars2/node_modules/less-loader/index.js!../scrollbars2/compiled/Scrollbars2/style/style.less");

var CSS_CLASS = 'sb2-scrollbars2';
var CSS_TAG_ID = 'sb2-tag';
var noop = function noop() {
    return null;
};

var Scrollbars2 = exports.Scrollbars2 = function (_React$Component) {
    _inherits(Scrollbars2, _React$Component);

    function Scrollbars2(props) {
        _classCallCheck(this, Scrollbars2);

        var _this = _possibleConstructorReturn(this, (Scrollbars2.__proto__ || Object.getPrototypeOf(Scrollbars2)).call(this, props));

        (0, _reactAutobindHelper2.default)(_this);

        _this.reactStyle = {
            container: true,
            view: true,
            bothThumbs: true,
            bothTracks: true,
            trackH: true,
            trackV: true,
            thumbH: true,
            thumbV: true
        };

        _this.reactStyle = (0, _scrollbarsStyle2.default)(props);
        _this.cssClasses = (0, _scrollbarsClassNames2.default)(props);
        return _this;
    }

    _createClass(Scrollbars2, [{
        key: 'setup',
        value: function setup() {
            this.emitter = new _tinyEmitter2.default();

            this._c = this.refs['container'];
            this._view = this.refs['view'];
            this._ht = this.refs['trackHorizontal'];
            this._vt = this.refs['trackVertical'];
            this._htn = this.refs['thumbHorizontal'];
            this._vtn = this.refs['thumbVertical'];

            this.scrollDataManager = new _utils.ScrollDataManager(this.refs, this.props, this.emitter);
            this.movementManager = new _utils.MovementManager(this.scrollDataManager, this.props, this.emitter);
            this.visualChangesManager = new _utils.VisualChangesManager();
            this.scrollingManager = new _utils.ScrollingManager(this.refs, this.props, this.scrollDataManager, this.movementManager, this.visualChangesManager);
            this.draggingManager = new _utils.DraggingManager(this.refs, this.scrollDataManager);

            this.emitter.on('scroll:start', this.onScrollStart);
            this.emitter.on('scroll:end', this.onScrollEnd);
            this.emitter.on('scroll:scrolling', this.onScrolling);

            this.emitter.on('scroll:atTop', this.atTop);
            this.emitter.on('scroll:atBottom', this.atBottom);
            this.emitter.on('scroll:atLeft', this.atLeft);
            this.emitter.on('scroll:atRight', this.atRight);

            this.addListeners();
            this.api = {};
            this.exposeApiFunctions();
        }
    }, {
        key: 'init',
        value: function init() {
            this.scrollingManager.initialize();

            this.props.onMount({
                containerView: this.refs['container'],
                scrollableView: this.refs['view'],
                scrollbarObject: this,
                initialData: this.scrollingManager.prepareExportableData()
            });
        }
    }, {
        key: 'exposeApiFunctions',


        /*** API FUNCTIONS ***/
        value: function exposeApiFunctions() {
            var _this2 = this;

            this.api.toTop = function () {
                var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return _this2.scrollingManager.toTop(dist);
            };
            this.api.toLeft = function () {
                var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return _this2.scrollingManager.toLeft(dist);
            };
            this.api.toBottom = function () {
                var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return _this2.scrollingManager.toBottom(dist);
            };
            this.api.toRight = function () {
                var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return _this2.scrollingManager.toRight(dist);
            };
            this.api.enable = function () {
                return _this2.scrollingManager.enable();
            };
            this.api.disable = function () {
                return _this2.scrollingManager.disable();
            };
            this.api.cancelFlash = function () {
                return _this2.scrollingManager.cancelFlash();
            };
            this.api.update = function () {
                return _this2.update();
            };
            this.api.data = function () {
                return _this2.scrollingManager.prepareExportableData();
            };

            this.api.getPositionY = function () {
                return _this2.scrollingManager.prepareExportableData().scrollTop;
            };
            this.api.getPositionX = function () {
                return _this2.scrollingManager.prepareExportableData().scrollLeft;
            };
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            if (!this.scrollDataManager) return;
            this.scrollDataManager.update();

            var to = setTimeout(function () {
                _this3.scrollingManager.initializeX();
                _this3.scrollingManager.initializeY();
                clearTimeout(to);
            }, 20);
        }
    }, {
        key: 'addListeners',


        /*** LISTENERS  ***/
        value: function addListeners() {
            var passive = this.props.passive;

            var capture = true;

            this._view.addEventListener('scroll', this.onScroll, { passive: passive, capture: capture });
            this._view.addEventListener('wheel', this.onScroll, { capture: capture });

            /** object events **/
            this._ht.addEventListener('mouseenter', this.onMouseEnterTrack);
            this._ht.addEventListener('mouseleave', this.onMouseLeaveTrack);
            this._ht.addEventListener('mousedown', this.onMouseDownTrack);
            this._htn.addEventListener('mousedown', this.onMouseDownThumb);

            this._vt.addEventListener('mouseenter', this.onMouseEnterTrack);
            this._vt.addEventListener('mouseleave', this.onMouseLeaveTrack);
            this._vt.addEventListener('mousedown', this.onMouseDownTrack);
            this._vtn.addEventListener('mousedown', this.onMouseDownThumb);

            this._ht.addEventListener('wheel', this.onScrollBarAndThumb, { capture: capture });
            this._vt.addEventListener('wheel', this.onScrollBarAndThumb, { capture: capture });
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            var passive = this.props.passive;

            var capture = true;

            this._view.removeEventListener('scroll', this.onScroll, { passive: passive, capture: capture });
            this._view.removeEventListener('wheel', this.onScroll, { capture: capture });

            /** object events **/
            this._ht.removeEventListener('mouseenter', this.onMouseEnterTrack);
            this._ht.removeEventListener('mouseleave', this.onMouseLeaveTrack);
            this._ht.removeEventListener('mousedown', this.onMouseDownTrack);
            this._htn.removeEventListener('mousedown', this.onMouseDownThumb);

            this._vt.removeEventListener('mouseenter', this.onMouseEnterTrack);
            this._vt.removeEventListener('mouseleave', this.onMouseLeaveTrack);
            this._vt.removeEventListener('mousedown', this.onMouseDownTrack);
            this._vtn.removeEventListener('mousedown', this.onMouseDownThumb);

            this._ht.removeEventListener('wheel', this.onScrollBarAndThumb, { capture: capture });
            this._vt.removeEventListener('wheel', this.onScrollBarAndThumb, { capture: capture });
        }
    }, {
        key: 'onScroll',


        /*** SCROLL EVENTS ***/
        value: function onScroll(event) {
            this.scrollingManager.onScroll(event);
        }
    }, {
        key: 'onScrollStart',
        value: function onScrollStart() {
            this.scrollingManager.onScrollStart();
        }
    }, {
        key: 'onScrollEnd',
        value: function onScrollEnd() {
            this.scrollingManager.onScrollEnd();
        }
    }, {
        key: 'onScrolling',
        value: function onScrolling() {
            this.scrollingManager.onScrolling();
        }
    }, {
        key: 'atTop',
        value: function atTop() {
            this.props.atTop();
        }
    }, {
        key: 'atBottom',
        value: function atBottom() {
            this.props.atBottom();
        }
    }, {
        key: 'atLeft',
        value: function atLeft() {
            this.props.atLeft();
        }
    }, {
        key: 'atRight',
        value: function atRight() {
            this.props.atRight();
        }
    }, {
        key: 'onScrollBarAndThumb',
        value: function onScrollBarAndThumb(event) {
            event.preventDefault();
            event.stopPropagation();
            this.scrollingManager.onScrollBarAndThumb(event);
        }
    }, {
        key: 'onMouseLeaveTrack',


        /*** TRACK EVENTS ***/
        value: function onMouseLeaveTrack(event) {
            this.scrollingManager.onMouseLeaveTrack(event);
        }
    }, {
        key: 'onMouseEnterTrack',
        value: function onMouseEnterTrack(event) {
            this.scrollingManager.onMouseEnterTrack(event);
        }
    }, {
        key: 'onMouseDownTrack',
        value: function onMouseDownTrack(event) {
            this.draggingManager.onTrackClicked(event);
        }
    }, {
        key: 'onMouseDownThumb',
        value: function onMouseDownThumb(event) {
            this.draggingManager.onDragStart(event);
        }
    }, {
        key: 'componentWillUnmount',


        /*** COMPONENT LIFECYCLE ***/
        value: function componentWillUnmount() {
            this.removeListeners();
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                cssStyleClass = _props.cssStyleClass,
                cssStylesheetID = _props.cssStylesheetID;


            var isDefaultStyle = cssStyleClass === CSS_CLASS;
            this.styleTagId = isDefaultStyle ? cssStylesheetID : CSS_TAG_ID + "_" + cssStyleClass;
            this.styleClass = cssStyleClass;
            this.styleManager = new _utils.StyleManager(this.styleTagId, this.styleClass);

            if (this.props.injectStyle || this.props.parsedStyle) {
                this.styleManager.setParsedRules(this.props.parsedStyle || defaultParsedStyle);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setup();
            this.init();
        }
    }, {
        key: 'render',
        value: function render() {
            var _reactStyle = this.reactStyle,
                container = _reactStyle.container,
                view = _reactStyle.view,
                trackV = _reactStyle.trackV,
                trackH = _reactStyle.trackH,
                thumbV = _reactStyle.thumbV,
                thumbH = _reactStyle.thumbH;
            var _cssClasses = this.cssClasses,
                cssContainer = _cssClasses.cssContainer,
                cssHTrack = _cssClasses.cssHTrack,
                cssVTrack = _cssClasses.cssVTrack,
                cssHThumb = _cssClasses.cssHThumb,
                cssVThumb = _cssClasses.cssVThumb;


            return _react2.default.createElement(
                'div',
                { ref: 'container', style: container, className: cssContainer },
                _react2.default.createElement(
                    'div',
                    { ref: 'view', className: 'sb2view', style: view },
                    this.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { ref: 'trackHorizontal', className: cssHTrack, style: trackH },
                    _react2.default.createElement('div', { ref: 'thumbHorizontal', className: cssHThumb, style: thumbH })
                ),
                _react2.default.createElement(
                    'div',
                    { ref: 'trackVertical', className: cssVTrack, style: trackV },
                    _react2.default.createElement('div', { ref: 'thumbVertical', className: cssVThumb, style: thumbV })
                )
            );
        }
    }]);

    return Scrollbars2;
}(_react2.default.Component);

/*** PROPS ***/


Scrollbars2.propTypes = {
    showVertical: _propTypes2.default.bool,
    showHorizontal: _propTypes2.default.bool,
    autoHide: _propTypes2.default.bool,
    autoHideTimeout: _propTypes2.default.number,
    autoHeight: _propTypes2.default.bool,
    autoHeightMin: _propTypes2.default.number,
    autoHeightMax: _propTypes2.default.number,
    thumbMinSize: _propTypes2.default.number,
    className: _propTypes2.default.string,

    onMount: _propTypes2.default.func,
    onScroll: _propTypes2.default.func,
    onScrollStart: _propTypes2.default.func,
    onScrollEnd: _propTypes2.default.func,
    onScrollFrame: _propTypes2.default.func,
    onUpdate: _propTypes2.default.func,
    atBottom: _propTypes2.default.func,
    atTop: _propTypes2.default.func,
    atRight: _propTypes2.default.func,
    atLeft: _propTypes2.default.func,

    cssStyleClass: _propTypes2.default.string,
    cssStylesheetID: _propTypes2.default.string,
    flashTime: _propTypes2.default.number,
    flashTimeDelay: _propTypes2.default.number,

    containerStyle: _propTypes2.default.object,
    viewStyle: _propTypes2.default.object,
    tracksStyle: _propTypes2.default.object,
    thumbsStyle: _propTypes2.default.object,
    parsedStyle: _propTypes2.default.string,
    injectStyle: _propTypes2.default.bool,

    preventScrolling: _propTypes2.default.bool,
    updateOnUpdates: _propTypes2.default.bool,
    expandTracks: _propTypes2.default.bool,
    syncTracks: _propTypes2.default.bool,
    hideUnnecessary: _propTypes2.default.bool,
    passiveEvent: _propTypes2.default.bool,
    usePerformantView: _propTypes2.default.bool
};
Scrollbars2.defaultProps = {
    showVertical: true,
    showHorizontal: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    thumbMinSize: 30,
    className: '',

    onMount: noop,
    onScroll: noop,
    onScrollStart: noop,
    onScrollEnd: noop,
    onScrollFrame: noop,
    onUpdate: noop,
    atBottom: noop,
    atTop: noop,
    atRight: noop,
    atLeft: noop,

    cssStyleClass: CSS_CLASS,
    cssStylesheetID: CSS_TAG_ID,
    flashTime: 0,
    flashTimeDelay: 0,

    containerStyle: {},
    viewStyle: {},
    tracksStyle: {},
    thumbsStyle: {},
    parsedStyle: null,
    injectStyle: true,

    preventScrolling: true,
    updateOnUpdates: true,
    expandTracks: false,
    syncTracks: false,
    hideUnnecessary: true,
    passiveEvent: false,
    usePerformantView: true
};

exports.default = Scrollbars2;

/***/ }),

/***/ "../scrollbars2/compiled/Scrollbars2/scrollbarsClassNames.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************************!*\
  !*** ../scrollbars2/compiled/Scrollbars2/scrollbarsClassNames.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return {
        cssContainer: (0, _classnames2.default)('sb2container', 'initial', props.cssStyleClass.toLowerCase().replace(".", " "), {
            'sb2-auto-hide': props.autoHide,
            'sb2-auto-height': props.autoHeight,
            'sb2-expand-tracks': props.expandTracks,
            'v-disabled': !props.showVertical,
            'h-disabled': !props.showHorizontal
        }),
        view: (0, _classnames2.default)('sb2-view', {
            performant: props.usePerformantView
        }),
        cssVTrack: 'sb2tracks sb2v',
        cssHTrack: 'sb2tracks sb2h',
        cssVThumb: 'sb2thumbs sb2v',
        cssHThumb: 'sb2thumbs sb2h',
        scrolling: 'sb2-scrolling',
        dragging: 'sb2-dragging',
        autoHideOn: 'sb2-auto-hide-on',
        expanded: 'sb2-expanded'
    };
};

var _classnames = __webpack_require__(/*! classnames */ "../scrollbars2/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../scrollbars2/compiled/Scrollbars2/scrollbarsStyle.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ../scrollbars2/compiled/Scrollbars2/scrollbarsStyle.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  File: ScrollbarsStyle.js | Package: Scrollbars2
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
                                                                                                                                                                                                                                                                   *  Created:   28 Mar, 2017 | 02:17 AM
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  This file is part of a package and all the information, intellectual
                                                                                                                                                                                                                                                                   *  and technical concepts contained here are property of their owners.
                                                                                                                                                                                                                                                                   *  Any kind of use, reproduction, distribution, publication, etc. without
                                                                                                                                                                                                                                                                   *  express written permission from CapitalMental && BackLogics Technologies
                                                                                                                                                                                                                                                                   *  is strictly forbidden.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  CapitalMental && BackLogics Technologies
                                                                                                                                                                                                                                                                   *  Copyright 2014-present. | All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */


exports.default = function (props) {
    var flashTime = props.flashTime,
        flashTimeDelay = props.flashTimeDelay,
        autoHide = props.autoHide,
        showVertical = props.showVertical,
        showHorizontal = props.showHorizontal;


    var startsHidden = flashTime > 0 && flashTimeDelay > 0 && autoHide || autoHide && !flashTime;
    var showBoth = !startsHidden && showVertical && showHorizontal;
    var showVerticalTrack = !startsHidden && !showBoth && showVertical;
    var showHorizontalTrack = !startsHidden && !showBoth && showHorizontal;
    var startInvisibleV = showVertical && startsHidden;
    var startInvisibleH = showHorizontal && startsHidden;

    return (0, _reactcss2.default)({

        default: {
            trackV: _extends({}, props.tracksStyle),
            trackH: _extends({}, props.tracksStyle),
            thumbV: _extends({}, props.thumbsStyle),
            thumbH: _extends({}, props.thumbsStyle),
            view: _extends({
                position: 'absolute',
                width: "100%",
                height: "100%",
                overflow: 'scroll', //#todo: check for disable scroll behaviour
                transform: 'translateZ(0)',
                willChange: 'transform'
            }, props.viewStyle),
            container: _extends({
                position: 'relative',
                width: "100%", // todo: review for fixed parent container width and height
                height: "100%", // todo: review for fixed parent container width and height
                overflow: 'hidden'
            }, props.containerStyle)
        },

        startsHidden: {
            trackV: {
                display: 'none'
            },
            trackH: {
                display: 'none'
            }
        },

        showBoth: {
            trackV: {
                display: 'block'
            },
            trackH: {
                display: 'block'
            }
        },

        showVerticalTrack: {
            trackV: {
                display: 'block'
            },
            trackH: {
                display: 'none'
            }
        },

        showHorizontalTrack: {
            trackV: {
                display: 'none'
            },
            trackH: {
                display: 'block'
            }
        },

        startInvisibleH: {
            trackH: {
                display: 'block',
                opacity: 0
            }
        },

        startInvisibleV: {
            trackV: {
                display: 'block',
                opacity: 0
            }
        }

    }, props, {
        startsHidden: startsHidden, showBoth: showBoth, showVerticalTrack: showVerticalTrack, showHorizontalTrack: showHorizontalTrack, startInvisibleH: startInvisibleH, startInvisibleV: startInvisibleV
    });
};

var _reactcss = __webpack_require__(/*! reactcss */ "../scrollbars2/node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../scrollbars2/compiled/Scrollbars2/utils.js":
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ../scrollbars2/compiled/Scrollbars2/utils.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *
 *  File: utils.js | Package: Scrollbars2
 *
 *  Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 *  Created:   12 Sep, 2016 | 04:33 PM
 *
 *  This file is part of a package and all the information, intellectual
 *  and technical concepts contained here are property of their owners.
 *  Any kind of use, reproduction, distribution, publication, etc. without
 *  express written permission from CapitalMental && BackLogics Technologies
 *  is strictly forbidden.
 *
 *  CapitalMental && BackLogics Technologies
 *  Copyright 2014-present. | All rights reserved.
 *
 *
 *
 */

window.sb2GlobalData = window.sb2GlobalData || {};
window.sb2GlobalData.scrollbarWidth = window.sb2GlobalData.scrollbarWidth || null;

var SCROLL = 'scroll';
var WHEEL = 'wheel';
var DOWN = 'down';
var UP = 'up';
var LEFT = 'left';
var RIGHT = 'right';
var NONE = 'none';

/** D E B O U N C E **/
/** ************************************************* **/

function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            //noinspection JSUnresolvedFunction
            fn.apply(context, args);
        }, delay);
    };
}

/** ************************************************* **/

if (window.sb2GlobalData.scrollbarWidth === null) {
    window.sb2GlobalData.scrollbarWidth = calculateScrollbarWidth();
}

function calculateScrollbarWidthAsPromise() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return new Promise(function (resolve) {
        calculateScrollbarWidth(force);
        resolve();
    });
}

function calculateScrollbarWidth() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


    if (window.sb2GlobalData.scrollbarWidth !== null && !force) {
        return window.sb2GlobalData.scrollbarWidth;
    }

    var div1 = void 0,
        div2 = void 0;

    div1 = document.createElement('div');
    div2 = document.createElement('div');

    div1.style.width = div2.style.width = div1.style.height = div2.style.height = '100px';
    div1.style.overflow = 'scroll';
    div2.style.overflow = 'hidden';

    document.body.appendChild(div1);
    document.body.appendChild(div2);

    window.sb2GlobalData.scrollbarWidth = Math.abs(div1.scrollHeight - div2.scrollHeight);

    document.body.removeChild(div1);
    document.body.removeChild(div2);

    return window.sb2GlobalData.scrollbarWidth;
}

var HOR = "axis:x";
var VER = "axis:y";
var AN = "axis:none";
var emptyThumb = {
    size: 0,
    pos: 0
};

var ScrollDataManager = exports.ScrollDataManager = function () {
    _createClass(ScrollDataManager, [{
        key: 'init',
        value: function init() {
            this.hasData = false;
            this.hasPrevData = false;

            this.data = {};
            this.dataTX = {};
            this.dataTY = {};
            this.prevData = {};
        }
    }]);

    function ScrollDataManager(refs, props, emitter) {
        _classCallCheck(this, ScrollDataManager);

        this.dx = 0;
        this.dy = 0;

        this.refs = refs;
        //noinspection JSUnresolvedVariable
        this.view = refs['view'];
        this.tX = refs['trackHorizontal'];
        this.tY = refs['trackVertical'];
        this.tnX = refs['thumbHorizontal'];
        this.tnY = refs['thumbVertical'];
        this.props = props;
        this.emitter = emitter;

        this.init();
        this.update();
    }

    /*** Collect Element Info ***/

    _createClass(ScrollDataManager, [{
        key: 'gatherDataFromElement',
        value: function gatherDataFromElement() {
            var savePrev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


            if (savePrev && this.hasData) {
                this.prevData = this.data;
                this.hasPrevData = true;
            }

            var _props = this.props,
                flashTime = _props.flashTime,
                flashTimeDelay = _props.flashTimeDelay,
                autoHide = _props.autoHide;


            var tmpEl = this.view;
            var tmpData = {};

            /** Basic Measures **/
            tmpData.barWidth = window.sb2GlobalData.scrollbarWidth;
            tmpData.scrollLeft = tmpEl.scrollLeft;
            tmpData.scrollTop = tmpEl.scrollTop;
            tmpData.scrollWidth = tmpEl.scrollWidth;
            tmpData.scrollHeight = tmpEl.scrollHeight;
            tmpData.clientWidth = tmpEl.clientWidth;
            tmpData.clientHeight = tmpEl.clientHeight;
            tmpData.trackHeight = this.getInnerSize(VER);
            tmpData.trackWidth = this.getInnerSize(HOR);

            /** Basic Calculations **/
            tmpData.maxScrollTop = tmpData.scrollHeight - tmpData.clientHeight;
            tmpData.maxScrollLeft = tmpData.scrollWidth - tmpData.clientWidth;
            tmpData.thumbWidth = Number(ScrollDataManager.thumbSize(HOR, tmpData, this.props).toFixed(0));
            tmpData.thumbHeight = Number(ScrollDataManager.thumbSize(VER, tmpData, this.props).toFixed(0));

            /** Movement Calculations **/
            tmpData.realMovY = tmpData.scrollTop - (!this.hasPrevData ? 0 : this.prevData.scrollTop) || this.dy !== 0;
            tmpData.realMovX = tmpData.scrollLeft - (!this.hasPrevData ? 0 : this.prevData.scrollLeft) || this.dx !== 0;

            /** Display Calculations **/
            tmpData.reqByDimensionsX = tmpData.scrollWidth > tmpData.clientWidth;
            tmpData.reqByDimensionsY = tmpData.scrollHeight > tmpData.clientHeight;
            tmpData.reqByConfigX = this.props.showHorizontal;
            tmpData.reqByConfigY = this.props.showVertical;
            tmpData.reqByMovementX = tmpData.realMovX !== 0;
            tmpData.reqByMovementY = tmpData.realMovY !== 0;

            tmpData.requireX = tmpData.scrollWidth > tmpData.clientWidth;
            tmpData.requireY = tmpData.scrollHeight > tmpData.clientHeight;

            tmpData.availableTrackX = tmpData.reqByConfigX && (tmpData.reqByDimensionsX || !this.props.hideUnnecessary);
            tmpData.availableTrackY = tmpData.reqByConfigY && (tmpData.reqByDimensionsY || !this.props.hideUnnecessary);
            tmpData.displayableTrackX = tmpData.availableTrackX && (tmpData.realMovX && autoHide || !autoHide);
            tmpData.displayableTrackY = tmpData.availableTrackY && (tmpData.realMovY && autoHide || !autoHide);
            tmpData.flashableTrackX = tmpData.availableTrackX; //&& this.props.flashTime > 0;
            tmpData.flashableTrackY = tmpData.availableTrackY; //&& this.props.flashTime > 0;
            tmpData.startHidden = flashTime > 0 && flashTimeDelay > 0 && autoHide || autoHide && !flashTime;

            tmpData.displayableThumbX = tmpData.availableTrackX;
            tmpData.displayableThumbY = tmpData.availableTrackY;

            this.data = tmpData;
            this.hasData = true;
        }
    }, {
        key: 'gatherDataFromThumbs',
        value: function gatherDataFromThumbs() {

            var tx = this.tnX.style.transform.match(/X\((.*)px/);
            var ty = this.tnY.style.transform.match(/Y\((.*)px/);
            this.dataTX = {
                pos: Number(tx ? tx[1] : 0),
                size: Number(this.tnX.style.width.replace('px', '') || 0),
                opacity: Number(this.tnX.style.opacity || 0)
            };
            this.dataTY = {
                pos: Number(ty ? ty[1] : 0),
                size: Number(this.tnY.style.height.replace('px', '') || 0),
                opacity: Number(this.tnY.style.opacity || 0)
            };
        }
    }, {
        key: 'getInnerSize',
        value: function getInnerSize(axis) {
            var el = axis === VER ? this.tY : this.tX;
            var offsetSize = axis === VER ? el.offsetHeight : el.offsetWidth;

            var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
            var marginLeft = parseInt(style.marginLeft, 10) || 0;
            var marginRight = parseInt(style.marginRight, 10) || 0;
            var marginTop = parseInt(style.marginTop, 10) || 0;
            var marginBottom = parseInt(style.marginBottom, 10) || 0;
            var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
            var paddingRight = parseInt(style.paddingRight, 10) || 0;
            var paddingTop = parseInt(style.paddingTop, 10) || 0;
            var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
            var borderLeft = parseInt(style.borderLeftWidth, 10) || 0;
            var borderRight = parseInt(style.borderRightWidth, 10) || 0;
            var borderTop = parseInt(style.borderTopWidth, 10) || 0;
            var borderBottom = parseInt(style.borderBottomWidth, 10) || 0;
            var borders = axis === VER ? borderTop + borderBottom : borderLeft + borderRight;
            var margins = axis === VER ? marginTop + marginBottom : marginLeft + marginRight;
            var paddings = axis === VER ? paddingTop + paddingBottom : paddingLeft + paddingRight;

            return offsetSize - (borders + margins + paddings);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { type: AN };


            this.dx = event.type === WHEEL ? event.dx : 0;
            this.dy = event.type === WHEEL ? event.dy : 0;

            if (force) {
                return calculateScrollbarWidthAsPromise(force).then(function () {
                    _this.gatherDataFromElement();
                    return _this.data;
                });
            }
            calculateScrollbarWidth();
            this.gatherDataFromElement();
            return this.data;
        }

        /** PUBLIC **/

        /*** STATICS ***/

    }, {
        key: 'values',


        /*** PROPS TO RESOLVE ***/

        get: function get() {
            return this.data;
        }
    }, {
        key: 'previous',
        get: function get() {
            return this.prevData;
        }
    }, {
        key: 'hasMovX',
        get: function get() {
            return this.data.realMovX > 0 || this.data.realMovX < 0;
        }
    }, {
        key: 'hasMovY',
        get: function get() {
            return this.data.realMovY > 0 || this.data.realMovY < 0;
        }
    }, {
        key: 'atTop',
        get: function get() {
            return this.data.scrollTop <= 0 && this.data.reqByDimensionsY;
        }
    }, {
        key: 'atBottom',
        get: function get() {
            return this.data.scrollTop >= this.data.maxScrollTop - 1 && this.data.reqByDimensionsY;
        }
    }, {
        key: 'atLeft',
        get: function get() {
            return this.data.scrollLeft <= 0 && this.data.reqByDimensionsX;
        }
    }, {
        key: 'atRight',
        get: function get() {
            return this.data.scrollLeft >= this.data.maxScrollLeft - 1 && this.data.reqByDimensionsX;
        }
    }, {
        key: 'thumbData',
        get: function get() {
            var axisX = this.data.requireX ? Object.assign({}, emptyThumb) : {};
            axisX.size = this.data.thumbWidth;

            axisX.pos = Number(ScrollDataManager.thumbPos(HOR, this.data, axisX.size).toFixed(3));
            axisX.sizeChanged = !this.dataTX.size === axisX.size;
            axisX.posChanged = !this.dataTX.pos === axisX.pos;

            var axisY = this.data.requireY ? Object.assign({}, emptyThumb) : {};
            axisY.size = this.data.thumbHeight;
            axisY.pos = Number(ScrollDataManager.thumbPos(VER, this.data, axisY.size).toFixed(3));
            axisY.sizeChanged = !(this.dataTY.size === axisY.size);
            axisY.posChanged = !(this.dataTY.pos === axisY.pos);

            return {
                x: axisX,
                y: axisY
            };
        }
    }], [{
        key: 'thumbSize',
        value: function thumbSize(axis, dataSource, props) {

            var windowSize = axis === VER ? dataSource.clientHeight : dataSource.clientWidth;
            var contentSize = axis === VER ? dataSource.scrollHeight : dataSource.scrollWidth;
            var trackSize = axis === VER ? dataSource.trackHeight : dataSource.trackWidth;
            var contentRatio = windowSize / contentSize;

            var size = trackSize * contentRatio;
            var minSize = props.thumbMinSize;
            var finalSize = minSize > size ? minSize : size;

            return finalSize - dataSource.barWidth / 2 + 2;
        }
    }, {
        key: 'thumbPos',
        value: function thumbPos(axis, dataSource, thumbSize) {

            var windowSize = axis === VER ? dataSource.clientHeight : dataSource.clientWidth;
            var contentSize = axis === VER ? dataSource.scrollHeight : dataSource.scrollWidth;
            var trackSize = axis === VER ? dataSource.trackHeight : dataSource.trackWidth;

            var scrollAreaSize = contentSize - windowSize;
            var windowPosition = axis === VER ? dataSource.scrollTop : dataSource.scrollLeft;
            var windowPositionRatio = windowPosition / (scrollAreaSize || 1);
            var trackScrollAreaSize = trackSize - thumbSize;

            return trackScrollAreaSize * windowPositionRatio;
        }
    }]);

    return ScrollDataManager;
}();

var MovementManager = exports.MovementManager = function () {
    _createClass(MovementManager, [{
        key: 'init',
        value: function init() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: AN };


            this.values = this.dataManager.values;
            var dy = event.deltaY || 0;
            var dx = event.deltaX || 0;

            this.event = event;
            this.eventType = event ? this.event.type : null;

            this.isScroll = event ? this.eventType === SCROLL : false;
            this.isWheel = event ? this.eventType === WHEEL : false;

            this.direction = event ? this.getEventAxis() : AN;
            this.isX = event ? this.direction.isX : false;
            this.isY = event ? this.direction.isY : false;

            this.movementAllowedY = this.props.showVertical || false;
            this.movementAllowedX = this.props.showHorizontal || false;

            this.movementRequiredY = this.values.requireY;
            this.movementRequiredX = this.values.requireX;

            this.needY = this.movementAllowedY && this.movementRequiredY && this.isY;
            this.needX = this.movementAllowedX && this.movementRequiredX && this.isX;

            this.needYWithMovement = this.needY && (this.dataManager.hasMovY || dy !== 0);
            this.needXWithMovement = this.needX && (this.dataManager.hasMovX || dx !== 0);

            this.lastValidDirection = this.direction.axis === AN ? this.lastValidDirection : this.direction;
        }
    }]);

    function MovementManager(dataManager, passedProps, emitter) {
        _classCallCheck(this, MovementManager);

        this.dataManager = dataManager;
        this.props = passedProps;
        this.emitter = emitter;
        this.scrollTimer = null;
        this.scrolling = false;
        this.lastValidDirection = AN;
        this.scrollStarted = false;

        //this.atTopEmitted    = false;
        //this.atBottomEmitted = false;
        //this.atLeftEmitted   = false;
        //this.atRightEmitted  = false;

        this.init();
    }

    _createClass(MovementManager, [{
        key: 'shouldContinue',
        value: function shouldContinue() {
            this.scrolling = true;
            this.startTimer();

            this.edgeChecker();
            //console.log(this.isScroll, this.isWheel,this.scrolling);
            //Event is explorable
            if ((this.needYWithMovement || this.needXWithMovement) && this.isScroll) {
                this.emitter.emit('scroll:scrolling');
                return true;
            }

            if (this.isWheel) {
                var isDeltaUp = this.event.deltaY <= 0;
                var isDeltaDown = this.event.deltaY >= 0;
                var isDeltaLeft = this.event.deltaX <= 0;
                var isDeltaRight = this.event.deltaX >= 0;
                var preventScrolling = false;

                if (this.isY && isDeltaUp && this.dataManager.atTop && this.needY) {
                    //console.log( "at atTop actions" );
                    preventScrolling = true;
                }

                if (this.isY && isDeltaDown && this.dataManager.atBottom && this.needY) {
                    //console.log( "at atBottom actions" );
                    preventScrolling = true;
                }

                if (this.isX && isDeltaLeft && this.dataManager.atLeft && this.needX) {
                    //console.log( "at atLeft actions" );
                    preventScrolling = true;
                }

                if (this.isX && isDeltaRight && this.dataManager.atRight && this.needX) {
                    //console.log( "at atRight actions" );
                    preventScrolling = true;
                }

                if (this.props.preventScrolling && preventScrolling) {
                    this.event.preventDefault();
                }

                return false;
            }
        }
    }, {
        key: 'edgeMarker',
        value: function edgeMarker(obj) {
            var object = obj + 'Emitted';
            if (this[object]) return;
            this[object] = true;
            this.emitter.emit('scroll:' + obj);
        }
    }, {
        key: 'edgeChecker',
        value: function edgeChecker() {

            var dir = this.direction.dir;
            var _dataManager = this.dataManager,
                atTop = _dataManager.atTop,
                atBottom = _dataManager.atBottom,
                atLeft = _dataManager.atLeft,
                atRight = _dataManager.atRight;


            if (!atTop && !atBottom) {
                //this.atTopEmitted    = false;
                //this.atBottomEmitted = false;
            }
            if (!atLeft && !atRight) {
                //this.atLeftEmitted  = false;
                //this.atRightEmitted = false;
            }

            if (this.dataManager.atTop && dir === UP) {
                this.edgeMarker('atTop');
            }

            if (this.dataManager.atBottom && dir === DOWN) {
                this.edgeMarker('atBottom');
            }

            if (this.dataManager.atLeft && dir === LEFT) {
                this.edgeMarker('atLeft');
            }

            if (this.dataManager.atRight && dir === RIGHT) {
                this.edgeMarker('atRight');
            }
        }
    }, {
        key: 'setEvent',
        value: function setEvent(event) {
            this.init(event);
            if (!this.scrollStarted) {
                this.emitter.emit('scroll:start');
                this.scrollStarted = true;
            }
            return this;
        }
    }, {
        key: 'getEventAxis',
        value: function getEventAxis() {

            var dx = this.isScroll ? this.values.realMovX : this.event.deltaX;
            var dy = this.isScroll ? this.values.realMovY : this.event.deltaY;
            var dirY = dy === 0 ? NONE : dy > 0 ? DOWN : UP;
            var dirX = dx === 0 ? NONE : dx > 0 ? RIGHT : LEFT;

            var deltaX = dx * (dx > 0 ? 1 : -1) || 0;
            var deltaY = dy * (dy > 0 ? 1 : -1) || 0;

            var majorDelta = deltaX > deltaY ? deltaX : deltaY > deltaX ? deltaY : -1;

            var directionRes = {
                dx: dx,
                dy: dy,
                deltaX: deltaX,
                deltaY: deltaY,
                et: this.eventType
            };

            directionRes.axis = majorDelta === deltaY ? VER : majorDelta === deltaX ? HOR : AN;
            directionRes.isX = directionRes.axis === HOR;
            directionRes.isY = directionRes.axis === VER;
            directionRes.dir = directionRes.isY ? dirY : dirX;
            directionRes.isUp = directionRes.isY && dirY === UP;
            directionRes.isDown = directionRes.isY && dirY === DOWN;
            directionRes.isLeft = directionRes.isX && dirX === LEFT;
            directionRes.isRight = directionRes.isX && dirX === RIGHT;

            return directionRes;
        }
    }, {
        key: 'startTimer',
        value: function startTimer() {
            var _this2 = this;

            //if ( this.scrolling ) return;
            if (this.scrolling) {
                clearInterval(this.scrollTimer);
            }

            this.scrollTimer = setInterval(function () {

                _this2.scrolling = false;
                clearInterval(_this2.scrollTimer);
                if (!_this2.scrolling) {
                    _this2.scrollStarted = false;
                    _this2.emitter.emit('scroll:end');
                }
            }, 100);
        }
    }]);

    return MovementManager;
}();

//const noop      = () => null;


var noopFalse = function noopFalse() {
    return false;
};
//const noopTrue  = () => false;

var DraggingManager = exports.DraggingManager = function () {
    function DraggingManager(refs, scrollDataManager) {
        _classCallCheck(this, DraggingManager);

        this.draggingCSSClass = 'sb2-dragging';
        this.dragging = false;
        this.direction = null;
        this.prevPositionX = null;
        this.prevPositionY = null;
        this.onSelectStartKeeper = null;
        this.target = null;

        this.tX = refs['trackHorizontal'];
        this.tY = refs['trackVertical'];
        this.tnX = refs['thumbHorizontal'];
        this.tnY = refs['thumbVertical'];
        //noinspection JSUnresolvedVariable
        this.view = refs['view'];

        this.data = scrollDataManager.values;

        this.eventsSetup = { passive: false, capture: true };
        this.onDragBinded = this.onDrag.bind(this);
        this.onDragEndBinded = this.onDragEnd.bind(this);

        //Data for constant calculation
        this.scrollDataManager = scrollDataManager;
    }

    _createClass(DraggingManager, [{
        key: 'setup',
        value: function setup() {
            //Save some data before change it
            this.onSelectStartKeeper = document.onselectstart;

            //Add events
            document.addEventListener('mousemove', this.onDragBinded, this.eventsSetup);
            document.addEventListener('mouseup', this.onDragEndBinded, this.eventsSetup);
            document.onselectstart = noopFalse();

            //Add Styles
            document.body.classList.add(this.draggingCSSClass);
        }
    }, {
        key: 'tearDown',
        value: function tearDown() {
            //Restore data and events
            document.onselectstart = this.onSelectStartKeeper;

            //Remove Events
            document.removeEventListener('mousemove', this.onDragBinded, this.eventsSetup);
            document.removeEventListener('mouseup', this.onDragEndBinded, this.eventsSetup);

            //Remove Styles
            document.body.classList.remove(this.draggingCSSClass);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            event.stopPropagation();

            var target = event.target,
                clientY = event.clientY,
                clientX = event.clientX;
            var offsetHeight = target.offsetHeight,
                offsetWidth = target.offsetWidth;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                top = _target$getBoundingCl.top,
                left = _target$getBoundingCl.left;

            this.dragging = true;
            this.direction = target === this.tnY ? VER : HOR;

            if (this.direction === VER) this.prevPositionY = offsetHeight - (clientY - top);
            if (this.direction === HOR) this.prevPositionX = offsetWidth - (clientX - left);

            this.setup();
        }
    }, {
        key: 'onDrag',
        value: function onDrag(event) {
            var clientX = event.clientX,
                clientY = event.clientY;

            var _tY$getBoundingClient = this.tY.getBoundingClientRect(),
                top = _tY$getBoundingClient.top;

            var _tX$getBoundingClient = this.tX.getBoundingClientRect(),
                left = _tX$getBoundingClient.left;

            var _data = this.data,
                thumbHeight = _data.thumbHeight,
                thumbWidth = _data.thumbWidth;


            var clickPositionY = thumbHeight - this.prevPositionY;
            var clickPositionX = thumbWidth - this.prevPositionX;
            var offsetY = -top + clientY - clickPositionY;
            var offsetX = -left + clientX - clickPositionX;

            if (this.prevPositionY) {
                this.move(VER, this.getScrollTopForOffset(offsetY));
            }
            if (this.prevPositionX) {
                this.move(HOR, this.getScrollLeftForOffset(offsetX));
            }

            return false;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {

            this.dragging = false;
            this.direction = null;
            this.tearDown();
        }
    }, {
        key: 'move',
        value: function move(axis, newPosition) {
            if (axis === VER) this.view.scrollTop = newPosition;
            if (axis === HOR) this.view.scrollLeft = newPosition;
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _scrollDataManager$va = this.scrollDataManager.values,
                scrollHeight = _scrollDataManager$va.scrollHeight,
                thumbHeight = _scrollDataManager$va.thumbHeight,
                clientHeight = _scrollDataManager$va.clientHeight; //keeps the data updated

            return offset / (clientHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _scrollDataManager$va2 = this.scrollDataManager.values,
                scrollWidth = _scrollDataManager$va2.scrollWidth,
                clientWidth = _scrollDataManager$va2.clientWidth,
                thumbWidth = _scrollDataManager$va2.thumbWidth; //keeps the data updated

            return offset / (clientWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'onTrackClicked',
        value: function onTrackClicked(event) {

            this.direction = event.target === this.tY ? VER : HOR;
            var offset = this.direction === VER ? this.getScrollTopForClickOffset(event) : this.getScrollLeftForClickOffset(event);
            this.move(this.direction, offset);
        }
    }, {
        key: 'getScrollTopForClickOffset',
        value: function getScrollTopForClickOffset(event) {
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                top = _target$getBoundingCl2.top;

            var _data2 = this.data,
                scrollHeight = _data2.scrollHeight,
                thumbHeight = _data2.thumbHeight;

            var clientHeight = this.view.clientHeight; //->read this values each time, they may have changed
            var trackHeight = target.offsetHeight; //->read this values each time, they may have changed

            var offset = Math.abs(top - clientY) - thumbHeight / 2;
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'getScrollLeftForClickOffset',
        value: function getScrollLeftForClickOffset(event) {
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            var _data3 = this.data,
                scrollWidth = _data3.scrollWidth,
                thumbWidth = _data3.thumbWidth;

            var clientWidth = this.view.clientWidth; //->read this values each time, they may have changed
            var trackWidth = target.offsetWidth; //->read this values each time, they may have changed

            var offset = Math.abs(left - clientX) - thumbWidth / 2;
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }]);

    return DraggingManager;
}();

var ScrollingManager = exports.ScrollingManager = function () {
    _createClass(ScrollingManager, [{
        key: 'prepareExportableData',
        value: function prepareExportableData() {
            var d = this.dataManager.data;
            var t = this.dataManager.thumbData;
            var m = this.movementManager.direction;

            return _extends({
                scrollTop: d.scrollTop,
                scrollLeft: d.scrollLeft,
                scrollHeight: d.scrollHeight,
                scrollWidth: d.scrollWidth,
                clientHeight: d.clientHeight,
                clientWidth: d.clientWidth,
                realMovY: d.realMovY,
                realMovX: d.realMovX,
                maxScrollTop: d.maxScrollTop,
                maxScrollLeft: d.maxScrollLeft,
                thumbHeightY: d.thumbHeight,
                thumbWidthX: d.thumbWidth,
                direction: m.dir,
                axis: m.axis,
                thumbsData: t
            }, this.dataManager.data);
        }
    }, {
        key: 'debouncedOnScrollProps',
        value: function debouncedOnScrollProps() {
            this.props.onScroll(this.prepareExportableData());
        }
    }, {
        key: 'debouncedOnScrollFrameProps',
        value: function debouncedOnScrollFrameProps() {
            this.props.onScrollFrame(this.prepareExportableData());
        }

        /** ************************************************* **/

    }]);

    function ScrollingManager(refs, props, dataManager, movementManager, visualChangesManager) {
        _classCallCheck(this, ScrollingManager);

        this.changesManager = visualChangesManager;
        this.dataManager = dataManager;
        this.props = props;
        this.movementManager = movementManager;

        //this.enabled         = true;
        this.scrolling = false;
        this.raf = null;
        this.autoHideTimeout = null;
        this.flashTimeout = null;
        this.cancelHiding = false;
        this.mouseOverX = false;
        this.mouseOverY = false;
        this.visibleX = false;
        this.disabledX = false;
        this.visibleY = false;
        this.disabledY = false;

        this.tX = refs['trackHorizontal'];
        this.tY = refs['trackVertical'];
        this.tnX = refs['thumbHorizontal'];
        this.tnY = refs['thumbVertical'];
        //noinspection JSUnresolvedVariable
        this.view = refs['view'];
        this.cont = refs['container'];

        this.loopBinded = this.rafLoop.bind(this);
        this.debouncedOnScrollProps = this.debouncedOnScrollProps.bind(this);
        this.debouncedOnScrollFrameProps = this.debouncedOnScrollFrameProps.bind(this);
        this.callOnScrollProps = debounce(this.debouncedOnScrollProps, 0);
    }

    /*** Initializer ***/


    _createClass(ScrollingManager, [{
        key: 'initialize',
        value: function initialize() {
            var _this3 = this;

            //Remove this class that is sett at rendering
            this.changesManager.removeClass(this.cont, 'initial');

            // Due to time to takes to objects to pick up styles
            // we set a mini timeout
            var to = setTimeout(function () {

                _this3.dataManager.update(true);

                _this3.initializeX();
                _this3.initializeY();
                _this3.flashBars(true);

                clearTimeout(to);
            }, 0);
        }
    }, {
        key: 'initializeX',
        value: function initializeX() {
            var _this4 = this;

            var _dataManager$values = this.dataManager.values,
                availableTrackX = _dataManager$values.availableTrackX,
                startHidden = _dataManager$values.startHidden;


            if (availableTrackX) {
                this.resizeThumbX();
                if (startHidden) this.hideBarX();
                if (!startHidden) this.showBarX();
                if (this.disabledX) {
                    this.dataManager.update(true).then(function () {
                        _this4.resizeThumbX();
                    });
                }
                return;
            }
            this.disableBarX();
        }
    }, {
        key: 'initializeY',
        value: function initializeY() {
            var _this5 = this;

            var _dataManager$values2 = this.dataManager.values,
                availableTrackY = _dataManager$values2.availableTrackY,
                startHidden = _dataManager$values2.startHidden;


            if (availableTrackY) {

                this.resizeThumbY();
                if (startHidden) this.hideBarY();
                if (!startHidden) this.showBarY();
                if (this.disabledY) {
                    this.dataManager.update(true).then(function () {
                        _this5.resizeThumbY();
                    });
                }
                return;
            }
            this.disableBarY();
        }

        /*** Events ***/

    }, {
        key: 'onScroll',
        value: function onScroll(event) {
            this.callOnScrollProps();
            this.dataManager.update(false, event);
            this.movementManager.setEvent(event);
            this.movementManager.shouldContinue();

            if (this.raf) return;
            this.raf = window.requestAnimationFrame(this.loopBinded);
        }
    }, {
        key: 'onScrollStart',
        value: function onScrollStart() {
            this.scrolling = true;
            this.cancelHiding = false;
            this.changesManager.scrollingOn();
        }
    }, {
        key: 'onScrolling',
        value: function onScrolling() {}
    }, {
        key: 'onScrollEnd',
        value: function onScrollEnd() {
            window.cancelAnimationFrame(this.raf);
            this.raf = undefined;
            this.scrolling = false;
            this.changesManager.scrollingOff();
            this.autoHide();
        }
    }, {
        key: 'onMouseEnterTrack',
        value: function onMouseEnterTrack(event) {

            var targetDirection = this.mouseEnterLeaveDetect(event.target);
            if (targetDirection === HOR) this.mouseOverX = true;
            if (targetDirection === VER) this.mouseOverY = true;

            clearTimeout(this.autoHideTimeout);
            this.autoHideTimeout = null;
        }
    }, {
        key: 'onMouseLeaveTrack',
        value: function onMouseLeaveTrack(event) {

            var targetDirection = this.mouseEnterLeaveDetect(event.target);
            if (targetDirection === VER) this.mouseOverY = false;
            if (targetDirection === HOR) this.mouseOverX = false;

            this.autoHide();
        }
    }, {
        key: 'mouseEnterLeaveDetect',
        value: function mouseEnterLeaveDetect(target) {
            return target === this.tY || target === this.tnY ? VER : target === this.tX || target === this.tnX ? HOR : NONE;
        }
    }, {
        key: 'onScrollBarAndThumb',
        value: function onScrollBarAndThumb() {
            event.preventDefault();
            this.movementManager.setEvent(event, true);

            var _movementManager$dire = this.movementManager.direction,
                dx = _movementManager$dire.dx,
                dy = _movementManager$dire.dy,
                isX = _movementManager$dire.isX,
                isY = _movementManager$dire.isY;
            var _dataManager$values3 = this.dataManager.values,
                scrollTop = _dataManager$values3.scrollTop,
                scrollLeft = _dataManager$values3.scrollLeft;


            if (isY) {
                this.toTop(scrollTop + dy);
            }
            if (isX) {
                this.toLeft(scrollLeft + dx);
            }
        }

        /*** animation frame ***/

    }, {
        key: 'rafLoop',
        value: function rafLoop() {
            this.rafActions();
            this.raf = window.requestAnimationFrame(this.loopBinded);
            this.props.onScrollFrame(this.prepareExportableData());
        }
    }, {
        key: 'rafActions',
        value: function rafActions() {
            this.showBars();
            this.changesManager.applyChanges();
        }

        /*** changers ***/

    }, {
        key: 'showBars',
        value: function showBars() {
            var _dataManager$values4 = this.dataManager.values,
                displayableTrackX = _dataManager$values4.displayableTrackX,
                displayableTrackY = _dataManager$values4.displayableTrackY;


            if (displayableTrackX) {
                this.showBarX();
                this.moveThumbX();
                this.resizeThumbX();
            }

            if (displayableTrackY) {
                this.showBarY();
                this.moveThumbY();
                this.resizeThumbY();
            }
        }
    }, {
        key: '__to_delete_showBar',
        value: function __to_delete_showBar(axis) {
            var disable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var object = axis === HOR ? this.tX : this.tY;
            if (!disable) {
                this.adjustCounterpart(axis, 'show');
                this['visible' + (axis === HOR ? 'X' : 'Y')] = true;
                this.changesManager.removeClass(object, 'inactive');

                if (this['disable' + (axis === HOR ? 'X' : 'Y')] === true) {
                    this['disable' + (axis === HOR ? 'X' : 'Y')] = false;
                    this.changesManager.changeProperty(object, 'display', 'block');
                    this.changesManager.changeProperty(object, 'opacity', '1');
                }
                return;
            }
            this['disable' + (axis === HOR ? 'X' : 'Y')] = false;
            this.changesManager.changeProperty(object, 'display', 'block');
            this.changesManager.changeProperty(object, 'opacity', '1');
        }
    }, {
        key: '__to_delete_hideBar',
        value: function __to_delete_hideBar(axis) {
            var disable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var object = axis === HOR ? this.tX : this.tY;
            if (!disable) {
                this.adjustCounterpart(axis, 'hide');
                this['visible' + (axis === HOR ? 'X' : 'Y')] = false;
                this.changesManager.addClass(object, 'inactive');
                //this.changesManager.changeProperty( object, 'opacity', '0' );
                return;
            }
            this['disable' + (axis === HOR ? 'X' : 'Y')] = true;
            this.changesManager.changeProperty(object, 'display', 'none');
            //this.changesManager.changeProperty( object, 'opacity', '0' );
        }
    }, {
        key: 'showBarX',
        value: function showBarX() {
            this.visibleX = true;
            this.adjustCounterpart(HOR, 'show');
            this.changesManager.removeClass(this.tX, 'inactive');
            this.changesManager.changeProperty(this.tX, 'opacity', '1');
            this.changesManager.changeProperty(this.tX, 'display', 'block');
        }
    }, {
        key: 'hideBarX',
        value: function hideBarX() {
            this.visibleX = false;
            this.adjustCounterpart(HOR, 'hide');
            this.changesManager.addClass(this.tX, 'inactive');
            this.changesManager.changeProperty(this.tX, 'opacity', '0');
            this.changesManager.changeProperty(this.tX, 'display', 'block');
        }
    }, {
        key: 'showBarY',
        value: function showBarY() {
            this.visibleY = true;
            this.adjustCounterpart(VER, 'show');
            this.changesManager.removeClass(this.tY, 'inactive');
            this.changesManager.changeProperty(this.tY, 'opacity', '1');
            this.changesManager.changeProperty(this.tY, 'display', 'block');
        }
    }, {
        key: 'hideBarY',
        value: function hideBarY() {
            this.visibleY = false;
            this.adjustCounterpart(VER, 'hide');
            this.changesManager.addClass(this.tY, 'inactive');
            this.changesManager.changeProperty(this.tY, 'opacity', '0');
            this.changesManager.changeProperty(this.tY, 'display', 'block');
        }
    }, {
        key: 'disableBarX',
        value: function disableBarX() {
            this.disabledX = true;
            this.changesManager.addClass(this.tX, 'disabled');
            this.changesManager.changeProperty(this.tX, 'display', 'none');
        }
    }, {
        key: 'enableBarX',
        value: function enableBarX() {
            this.disabledX = false;
            this.changesManager.removeClass(this.tX, 'disabled');
            this.changesManager.changeProperty(this.tX, 'display', 'none');
        }
    }, {
        key: 'disableBarY',
        value: function disableBarY() {
            this.disabledY = true;
            this.changesManager.addClass(this.tY, 'disabled');
            this.changesManager.changeProperty(this.tY, 'display', 'none');
        }
    }, {
        key: 'enableBarY',
        value: function enableBarY() {
            this.disabledY = false;
            this.changesManager.removeClass(this.tY, 'disabled');
            this.changesManager.changeProperty(this.tY, 'display', 'block');
        }
    }, {
        key: 'moveThumbX',
        value: function moveThumbX() {
            this.changesManager.changeProperty(this.tnX, 'transform', 'translateX(' + this.dataManager.thumbData.x.pos + 'px)');
        }
    }, {
        key: 'moveThumbY',
        value: function moveThumbY() {
            this.changesManager.changeProperty(this.tnY, 'transform', 'translateY(' + this.dataManager.thumbData.y.pos + 'px)');
        }
    }, {
        key: 'resizeThumbX',
        value: function resizeThumbX() {
            this.changesManager.changeProperty(this.tnX, 'width', this.dataManager.thumbData.x.size + 'px');
        }
    }, {
        key: 'resizeThumbY',
        value: function resizeThumbY() {
            this.changesManager.changeProperty(this.tnY, 'height', this.dataManager.thumbData.y.size + 'px');
        }
    }, {
        key: 'autoHide',
        value: function autoHide() {
            var _this6 = this;

            if (this.props.autoHide) {
                this.autoHideTimeout = setTimeout(function () {
                    clearTimeout(_this6.autoHideTimeout);

                    if (!_this6.scrolling && !_this6.cancelHiding) {
                        if (!_this6.mouseOverX) _this6.hideBarX();
                        if (!_this6.mouseOverY) _this6.hideBarY();
                    }
                }, this.props.autoHideTimeout);
            }
        }
    }, {
        key: 'flashBars',
        value: function flashBars() {
            var _this7 = this;

            var useDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var _dataManager$values5 = this.dataManager.values,
                flashableTrackX = _dataManager$values5.flashableTrackX,
                flashableTrackY = _dataManager$values5.flashableTrackY;

            //If flashTime is 0 there is no point showing ti

            if (this.props.flashTime === 0) return;

            var flash = setTimeout(function () {

                if (flashableTrackX) _this7.showBarX();
                if (flashableTrackY) _this7.showBarY();
                clearTimeout(flash);

                if (!_this7.props.autoHide) return;

                _this7.flashTimeout = setTimeout(function () {

                    clearTimeout(_this7.flashTimeout);
                    if (flashableTrackX && !_this7.mouseOverX) _this7.hideBarX();
                    if (flashableTrackY && !_this7.mouseOverY) _this7.hideBarY();
                }, _this7.props.flashTime);
            }, useDelay ? this.props.flashTimeDelay : 0);
        }
    }, {
        key: 'adjustCounterpart',
        value: function adjustCounterpart(axis, action) {
            var otherVisibility = axis === HOR ? this.visibleY : this.visibleX;
            var thisObject = axis === HOR ? this.tX : this.tY;
            var otherObject = axis === HOR ? this.tY : this.tX;

            if (action === 'show') {
                if (otherVisibility) {
                    this.changesManager.addClass(thisObject, 'shrinked');
                    this.changesManager.addClass(otherObject, 'shrinked');
                    this.changesManager.removeClass(thisObject, 'extended');
                    this.changesManager.removeClass(otherObject, 'extended');
                    return;
                }
                this.changesManager.addClass(thisObject, 'extended');
                this.changesManager.removeClass(thisObject, 'shrinked');
                return;
            }

            if (action === 'hide') {

                this.changesManager.removeClass(thisObject, 'extended');
                this.changesManager.removeClass(thisObject, 'shrinked');

                if (otherVisibility) {
                    this.changesManager.addClass(otherObject, 'extended');
                    this.changesManager.removeClass(otherObject, 'shrinked');
                }
            }
        }
    }, {
        key: 'toTop',
        value: function toTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.dataManager.values.availableTrackY) this.view.scrollTop = top;
        }
    }, {
        key: 'toBottom',
        value: function toBottom() {
            var bottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.dataManager.values.availableTrackY) this.view.scrollTop = this.dataManager.values.maxScrollTop - bottom;
        }
    }, {
        key: 'toLeft',
        value: function toLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.dataManager.values.availableTrackX) this.view.scrollLeft = left;
        }
    }, {
        key: 'toRight',
        value: function toRight() {
            var right = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.dataManager.values.availableTrackX) this.view.scrollLeft = this.dataManager.values.maxScrollLeft - right;
        }
    }, {
        key: 'enable',
        value: function enable() {
            //this.enabled = true;
        }
    }, {
        key: 'disable',
        value: function disable() {
            //this.enabled = false;
        }
    }, {
        key: 'cancelFlash',
        value: function cancelFlash() {}
    }]);

    return ScrollingManager;
}();

var VisualChangesManager = exports.VisualChangesManager = function () {
    function VisualChangesManager() {
        _classCallCheck(this, VisualChangesManager);

        this.scrolling = false;
        this.visualChanges = [];
    }

    _createClass(VisualChangesManager, [{
        key: 'scrollingOn',
        value: function scrollingOn() {
            this.scrolling = true;
        }
    }, {
        key: 'scrollingOff',
        value: function scrollingOff() {
            this.scrolling = false;
        }
    }, {
        key: 'addClass',
        value: function addClass(object, cssClass) {
            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (this.scrolling && !force) {
                this.storeChange(object, 'class', cssClass, 'add');
                return;
            }
            object.classList.add(cssClass);
        }
    }, {
        key: 'removeClass',
        value: function removeClass(object, cssClass) {
            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (this.scrolling && !force) {
                this.storeChange(object, 'class', cssClass, 'remove');
                return;
            }
            object.classList.remove(cssClass);
        }
    }, {
        key: 'changeProperty',
        value: function changeProperty(object, cssProperty, value) {
            var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


            if (this.scrolling && !force) {
                this.storeChange(object, cssProperty, value, null);
                return;
            }

            object.style[cssProperty] = value;
        }
    }, {
        key: 'storeChange',
        value: function storeChange(object, cssProperty, value, action) {
            this.visualChanges.push({ object: object, cssProperty: cssProperty, value: value, action: action });
        }
    }, {
        key: 'applyChanges',
        value: function applyChanges() {

            while (this.visualChanges.length > 0 && this.scrolling) {
                var currentChange = this.visualChanges.shift();

                var object = currentChange.object,
                    cssProperty = currentChange.cssProperty,
                    value = currentChange.value,
                    action = currentChange.action;


                if (cssProperty === 'class') {
                    if (action === 'add') this.addClass(object, value, true);
                    if (action === 'remove') this.removeClass(object, value, true);
                } else {
                    this.changeProperty(object, cssProperty, value, true);
                }
            }
        }
    }]);

    return VisualChangesManager;
}();

var DisplayManager = exports.DisplayManager = function DisplayManager(refs) {
    _classCallCheck(this, DisplayManager);

    this.v = {
        track: refs['trackVertical'],
        thumb: refs['thumbVertical']
    };
    this.h = {
        track: refs['trackHorizontal'],
        thumb: refs['thumbHorizontal']
    };
};

var StyleManager = exports.StyleManager = function () {
    function StyleManager(styleID) {
        var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, StyleManager);

        this.id = styleID.toLowerCase();
        this.rawCSS = null;
        this.parsedCSS = null;
        this.cssOwner = false;
        this.namespace = (namespace || '').toLowerCase() || this.id;
        this.preExisted = true;
        this.currentNode = document.getElementById(this.id) || this.createDomNode();

        this.rex = {
            placeholder: /classNamePlaceholder/gm,
            ruleFinder: /([#.a-z]?[a-z_][\s\S]+?{[\s\S]*?})/gmi
        };
    }

    _createClass(StyleManager, [{
        key: 'setParsedRules',
        value: function setParsedRules(rawCSS) {
            if (!rawCSS) return;

            this.rawCSS = rawCSS;
            this.fixRawCSS();
            this.writeRules();
        }
    }, {
        key: 'writeRules',
        value: function writeRules() {
            var forceNew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this.cssOwner && !forceNew) return;
            if (this.preExisted) return;

            this.currentNode.innerHTML = this.parsedCSS;
        }
    }, {
        key: 'fixRawCSS',
        value: function fixRawCSS() {
            this.parsedCSS = this.rawCSS.replace(this.rex.placeholder, this.namespace);
        }
    }, {
        key: 'createDomNode',
        value: function createDomNode() {
            var node = document.createElement('style');
            node.setAttribute('type', "text/css");
            node.setAttribute('id', this.id);
            document.head.appendChild(node);
            this.preExisted = false;
            this.cssOwner = true;
            return node;
        }
    }]);

    return StyleManager;
}();

/***/ }),

/***/ "../scrollbars2/compiled/index.js":
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ../scrollbars2/compiled/index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteList = exports.Scrollbars2 = undefined;

var _Scrollbars = __webpack_require__(/*! ./Scrollbars2/Scrollbars */ "../scrollbars2/compiled/Scrollbars2/Scrollbars.js");

var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

var _InfiniteList = __webpack_require__(/*! ./Scrollbars2/InfiniteList */ "../scrollbars2/compiled/Scrollbars2/InfiniteList.js");

var _InfiniteList2 = _interopRequireDefault(_InfiniteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 *  File: index.js | Package: Scrollbars2
 *
 *  Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 *  Created:   08 Sep, 2016 | 08:36 PM
 *
 *  This file is part of a package and all the information, intellectual
 *  and technical concepts contained here are property of their owners.
 *  Any kind of use, reproduction, distribution, publication, etc. without
 *  express written permission from CapitalMental && BackLogics Technologies
 *  is strictly forbidden.
 *
 *  CapitalMental && BackLogics Technologies
 *  Copyright 2014-present. | All rights reserved.
 *
 *
 *
 */

exports.default = _Scrollbars2.default;
exports.Scrollbars2 = _Scrollbars2.default;
exports.InfiniteList = _InfiniteList2.default;

/***/ }),

/***/ "../scrollbars2/node_modules/classnames/index.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ../scrollbars2/~/classnames/index.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "../scrollbars2/node_modules/css-loader/index.js!../scrollbars2/node_modules/less-loader/index.js!../scrollbars2/compiled/Scrollbars2/style/style.less":
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************!*\
  !*** ../scrollbars2/~/css-loader!../scrollbars2/~/less-loader!../scrollbars2/compiled/Scrollbars2/style/style.less ***!
  \*********************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ "../scrollbars2/node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "body.sb2-dragging .classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:active.sb2v {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 3px 5px;\n}\nbody.sb2-dragging .classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:active.sb2h {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 5px 3px;\n}\nbody.sb2-dragging .classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:active .sb2thumbs {\n  border-radius: 6px;\n}\nbody.sb2-dragging .classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:active .sb2thumbs.sb2v {\n  width: 12px;\n}\nbody.sb2-dragging .classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:active .sb2thumbs.sb2h {\n  height: 12px;\n}\n/**  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - **/\n.classNamePlaceholder {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  /* I N I T I A L */\n  /**  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - **/\n  /* E X P A N D A B L E */\n  /**  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - **/\n}\n.classNamePlaceholder::-webkit-scrollbar {\n  display: none !important;\n}\n.classNamePlaceholder .sb2view {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n.classNamePlaceholder .sb2view::-webkit-scrollbar {\n  display: none !important;\n}\n.classNamePlaceholder.sb2container.initial .sb2tracks.sb2h {\n  transition: none;\n}\n.classNamePlaceholder.sb2container.initial .sb2tracks.sb2v {\n  transition: none;\n}\n.classNamePlaceholder.sb2container.initial .sb2thumbs.sb2h {\n  transition: none;\n}\n.classNamePlaceholder.sb2container.initial .sb2thumbs.sb2v {\n  transition: none;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2thumbs {\n  transition: width 150ms 200ms, height 150ms 200ms;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks {\n  transition: padding 150ms 200ms, border 150ms 200ms, opacity 150ms 200ms, background 150ms 200ms, margin 150ms 200ms;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover {\n  transition: padding 200ms 0ms, border 200ms 0ms, opacity 200ms 0ms, background 200ms 0ms, margin 200ms 0ms;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover.sb2v {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 3px 5px;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover.sb2h {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 5px 3px;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover .sb2thumbs {\n  border-radius: 6px;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover .sb2thumbs.sb2v {\n  width: 12px;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover .sb2thumbs.sb2h {\n  height: 12px;\n}\n.classNamePlaceholder.sb2container.sb2-expand-tracks .sb2tracks:hover .sb2thumbs {\n  transition: width 200ms 0ms, height 200ms 0ms;\n}\n.classNamePlaceholder .sb2tracks {\n  position: absolute;\n  opacity: 1;\n}\n.classNamePlaceholder .sb2tracks.sb2init-hidden {\n  display: none;\n}\n.classNamePlaceholder .sb2tracks.sb2h {\n  transition: opacity 200ms, background 200ms;\n  background-color: rgba(0, 0, 0, 0.02);\n  bottom: 0;\n  left: 0;\n  right: 13px;\n  border-top: 1px solid transparent;\n  padding: 2px 3px;\n}\n.classNamePlaceholder .sb2tracks.sb2h:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.classNamePlaceholder .sb2tracks.sb2h:active {\n  background: rgba(0, 0, 0, 0.18) !important;\n}\n.classNamePlaceholder .sb2tracks.sb2h.inactive {\n  opacity: 0;\n}\n.classNamePlaceholder .sb2tracks.sb2h.extended.sb2h {\n  right: 0;\n}\n.classNamePlaceholder .sb2tracks.sb2h.shrinked.sb2h {\n  right: 14px;\n}\n.classNamePlaceholder .sb2tracks.sb2h.shrinked.sb2h:after {\n  content: '';\n  background-color: rgba(0, 0, 0, 0.02);\n  position: absolute;\n  width: 14px;\n  height: 15px;\n  right: -14px;\n  bottom: 0;\n}\n.classNamePlaceholder .sb2tracks.sb2v {\n  transition: opacity 200ms, background 200ms;\n  background-color: rgba(0, 0, 0, 0.02);\n  bottom: 0;\n  top: 0;\n  right: 0;\n  border-left: 1px solid transparent;\n  padding: 3px 2px;\n}\n.classNamePlaceholder .sb2tracks.sb2v:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.classNamePlaceholder .sb2tracks.sb2v:active {\n  background: rgba(0, 0, 0, 0.18) !important;\n}\n.classNamePlaceholder .sb2tracks.sb2v.inactive {\n  opacity: 0;\n}\n.classNamePlaceholder .sb2tracks.sb2v.extended.sb2v {\n  bottom: 0;\n}\n.classNamePlaceholder .sb2tracks.sb2v.shrinked.sb2v {\n  bottom: 15px;\n}\n.classNamePlaceholder .sb2thumbs {\n  border-radius: 4px;\n}\n.classNamePlaceholder .sb2thumbs.sb2h {\n  background: rgba(0, 0, 0, 0.15);\n  transition: height 150ms 200ms, width 200ms, background 200ms;\n  height: 8px;\n}\n.classNamePlaceholder .sb2thumbs.sb2h:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.classNamePlaceholder .sb2thumbs.sb2h:active {\n  background: rgba(0, 0, 0, 0.5);\n}\n.classNamePlaceholder .sb2thumbs.sb2v {\n  background: rgba(0, 0, 0, 0.15);\n  transition: width 150ms 200ms, height 200ms, background 200ms;\n  width: 8px;\n}\n.classNamePlaceholder .sb2thumbs.sb2v:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.classNamePlaceholder .sb2thumbs.sb2v:active {\n  background: rgba(0, 0, 0, 0.5);\n}\n.classNamePlaceholder.sb2container.h-disabled .sb2view {\n  overflow-x: hidden;\n}\n.classNamePlaceholder.sb2container.h-disabled .sb2tracks.sb2h {\n  display: none;\n}\n.classNamePlaceholder.sb2container.v-disabled .sb2view {\n  overflow-y: hidden;\n}\n.classNamePlaceholder.sb2container.v-disabled .sb2tracks.sb2v {\n  display: none;\n}\n._defCursor,\n._noSelectable,\nbody.sb2-dragging {\n  cursor: default !important;\n}\n._noSelectable,\nbody.sb2-dragging {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n._noOutline {\n  outline: none 0 !important;\n  -moz-outline-style: none !important;\n}\n.hack,\n.classNamePlaceholder .sb2view {\n  transform: translateZ(0);\n  will-change: transform;\n}\n", ""]);

// exports


/***/ }),

/***/ "../scrollbars2/node_modules/css-loader/lib/css-base.js":
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ../scrollbars2/~/css-loader/lib/css-base.js ***!
  \***************************************************/
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "../scrollbars2/node_modules/fbjs/lib/emptyFunction.js":
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ../scrollbars2/~/fbjs/lib/emptyFunction.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "../scrollbars2/node_modules/fbjs/lib/invariant.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ../scrollbars2/~/fbjs/lib/invariant.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "../scrollbars2/node_modules/fbjs/lib/warning.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ../scrollbars2/~/fbjs/lib/warning.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "../scrollbars2/node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),

/***/ "../scrollbars2/node_modules/prop-types/checkPropTypes.js":
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ../scrollbars2/~/prop-types/checkPropTypes.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../scrollbars2/node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "../scrollbars2/node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../scrollbars2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../scrollbars2/node_modules/prop-types/factoryWithTypeCheckers.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ../scrollbars2/~/prop-types/factoryWithTypeCheckers.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "../scrollbars2/node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../scrollbars2/node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "../scrollbars2/node_modules/fbjs/lib/warning.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../scrollbars2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../scrollbars2/node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../scrollbars2/node_modules/prop-types/index.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ../scrollbars2/~/prop-types/index.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../scrollbars2/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "../scrollbars2/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ../scrollbars2/~/prop-types/lib/ReactPropTypesSecret.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../scrollbars2/node_modules/react-autobind-helper/lib/index.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ../scrollbars2/~/react-autobind-helper/lib/index.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 The MIT License (MIT)

 Copyright (c) 2017 Miguel Zamora Serrano

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

var lifecycleMethods = {
    constructor: 1,
    render: 1,
    shouldComponentUpdate: 1,
    componentWillMount: 1,
    componentDidMount: 1,
    componentWillReceiveProps: 1,
    componentWillUpdate: 1,
    componentDidUpdate: 1,
    componentWillUnmount: 1
};

function autobind(object, filter) {
    var filterLifecycle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var bindSetState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


    var proto = object.constructor.prototype;
    var filterIsFunction = typeof filter === 'function';
    var filterIsObject = !!filter && (typeof filter === 'undefined' ? 'undefined' : _typeof(filter)) === 'object';
    var filterIsString = typeof filter === 'string';
    var methods = Object.getOwnPropertyNames(proto);

    var defaultFilter = function defaultFilter(key) {
        return typeof proto[key] === 'function' && (filterLifecycle ? !lifecycleMethods[key] : true);
    };

    var givenMethodsToFilter = function givenMethodsToFilter(key) {
        var isFunction = typeof proto[key] === 'function';
        var isConstructor = key === 'constructor';
        var isIncludable = isConstructor ? !filterLifecycle : !!filter[key];
        var isLifecycle = !!lifecycleMethods[key];

        if (filterLifecycle) {
            return isFunction && isIncludable;
        }
        return !isLifecycle ? isIncludable : typeof filter[key] === 'undefined' ? true : !!filter[key];
    };

    var filterPrefix = function filterPrefix(key) {
        var isFunction = typeof proto[key] === 'function';
        var hasPrefix = key.indexOf(filter) === 0;
        var isIncludable = filterLifecycle ? !lifecycleMethods[key] : true;
        return isFunction && hasPrefix && isIncludable;
    };

    var SelectedFilter = filterIsFunction ? filter : filterIsObject ? givenMethodsToFilter : filterIsString ? filterPrefix : defaultFilter;

    var names = methods.filter(SelectedFilter);
    if (bindSetState) names.push('setState');

    names.forEach(function (key) {
        object[key] = object[key].bind(object);
    });

    return object;
}

exports.default = autobind;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/autoprefix.js":
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/autoprefix.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoprefix = undefined;

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports.default = autoprefix;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/components/active.js":
/* no static exports found */
/* all exports used */
/*!**********************************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/components/active.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports.default = active;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/components/hover.js":
/* no static exports found */
/* all exports used */
/*!*********************************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/components/hover.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports.default = hover;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/flattenNames.js":
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/flattenNames.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenNames = undefined;

var _isString2 = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString3 = _interopRequireDefault(_isString2);

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _isPlainObject2 = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _map2 = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports.default = flattenNames;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/index.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(/*! ./flattenNames */ "../scrollbars2/node_modules/reactcss/lib/flattenNames.js");

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(/*! ./mergeClasses */ "../scrollbars2/node_modules/reactcss/lib/mergeClasses.js");

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(/*! ./autoprefix */ "../scrollbars2/node_modules/reactcss/lib/autoprefix.js");

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(/*! ./components/hover */ "../scrollbars2/node_modules/reactcss/lib/components/hover.js");

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(/*! ./components/active */ "../scrollbars2/node_modules/reactcss/lib/components/active.js");

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(/*! ./loop */ "../scrollbars2/node_modules/reactcss/lib/loop.js");

var _loop3 = _interopRequireDefault(_loop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports.default = ReactCSS;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/loop.js":
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/loop.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports.default = loopable;

/***/ }),

/***/ "../scrollbars2/node_modules/reactcss/lib/mergeClasses.js":
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ../scrollbars2/~/reactcss/lib/mergeClasses.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClasses = undefined;

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _cloneDeep2 = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports.default = mergeClasses;

/***/ }),

/***/ "../scrollbars2/node_modules/tiny-emitter/index.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ../scrollbars2/~/tiny-emitter/index.js ***!
  \**********************************************/
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),

/***/ "../scrollbars2/node_modules/to-string-loader/src/to-string.js!../scrollbars2/node_modules/css-loader/index.js!../scrollbars2/node_modules/less-loader/index.js!../scrollbars2/compiled/Scrollbars2/style/style.less":
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************!*\
  !*** ../scrollbars2/~/to-string-loader/src/to-string.js!../scrollbars2/~/css-loader!../scrollbars2/~/less-loader!../scrollbars2/compiled/Scrollbars2/style/style.less ***!
  \************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./style.less */ "../scrollbars2/node_modules/css-loader/index.js!../scrollbars2/node_modules/less-loader/index.js!../scrollbars2/compiled/Scrollbars2/style/style.less");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./node_modules/moment/moment.js":
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./~/moment/moment.js ***!
  \****************************/
/***/ (function(module, exports) {

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));


/***/ }),

/***/ "./node_modules/react-color/lib/components/alpha/Alpha.js":
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/react-color/lib/components/alpha/Alpha.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _AlphaPointer = __webpack_require__(/*! ./AlphaPointer */ "./node_modules/react-color/lib/components/alpha/AlphaPointer.js");

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker' },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer2.default
};

exports.default = (0, _common.ColorWrap)(AlphaPicker);

/***/ }),

/***/ "./node_modules/react-color/lib/components/alpha/AlphaPointer.js":
/* no static exports found */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/react-color/lib/components/alpha/AlphaPointer.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPointer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = AlphaPointer;

/***/ }),

/***/ "./node_modules/react-color/lib/components/block/Block.js":
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/react-color/lib/components/block/Block.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _BlockSwatches = __webpack_require__(/*! ./BlockSwatches */ "./node_modules/react-color/lib/components/block/BlockSwatches.js");

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = exports.Block = function Block(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle;

  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    _color2.default.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: transparent ? 'rgba(0,0,0,0.4)' : '#fff',
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, { 'hide-triangle': triangle === 'hide' });

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'block-picker' },
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.head },
      transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: '6px 6px 0 0' }),
      _react2.default.createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange }),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};

Block.defaultProps = {
  width: '170px',
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top'
};

exports.default = (0, _common.ColorWrap)(Block);

/***/ }),

/***/ "./node_modules/react-color/lib/components/block/BlockSwatches.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/block/BlockSwatches.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSwatches = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = BlockSwatches;

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/Chrome.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/chrome/Chrome.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chrome = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _ChromeFields = __webpack_require__(/*! ./ChromeFields */ "./node_modules/react-color/lib/components/chrome/ChromeFields.js");

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = __webpack_require__(/*! ./ChromePointer */ "./node_modules/react-color/lib/components/chrome/ChromePointer.js");

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = __webpack_require__(/*! ./ChromePointerCircle */ "./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js");

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chrome = exports.Chrome = function Chrome(_ref) {
  var onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        width: '225px',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.color },
          _react2.default.createElement(
            'div',
            { style: styles.swatch },
            _react2.default.createElement('div', { style: styles.active }),
            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.toggles },
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              onChange: onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_ChromeFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

exports.default = (0, _common.ColorWrap)(Chrome);

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromeFields.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/chrome/ChromeFields.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromeFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

var ChromeFields = exports.ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChromeFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: ''
    }, _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    }, _this.handleChange = function (data, e) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: data.s && data.s.replace('%', '') || _this.props.hsl.s,
          l: data.l && data.l.replace('%', '') || _this.props.hsl.l,
          source: 'hsl'
        }, e);
      }
    }, _this.showHighlight = function (e) {
      e.target.style.background = '#eee';
    }, _this.hideHighlight = function (e) {
      e.target.style.background = 'transparent';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChromeFields, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
        this.setState({ view: 'hex' });
      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: styles.toggle },
          _react2.default.createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: 'icon' },
            _react2.default.createElement(
              'svg',
              {
                style: styles.svg,
                viewBox: '0 0 24 24',
                onMouseOver: this.showHighlight,
                onMouseEnter: this.showHighlight,
                onMouseOut: this.hideHighlight
              },
              _react2.default.createElement('path', {
                ref: 'iconUp',
                fill: '#333',
                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
              }),
              _react2.default.createElement('path', {
                ref: 'iconDown',
                fill: '#333',
                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'
              })
            )
          )
        )
      );
    }
  }]);

  return ChromeFields;
}(_react2.default.Component);

exports.default = ChromeFields;

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromePointer.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./~/react-color/lib/components/chrome/ChromePointer.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointer = exports.ChromePointer = function ChromePointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointer;

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js":
/* no static exports found */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/react-color/lib/components/chrome/ChromePointerCircle.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointerCircle = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointerCircle;

/***/ }),

/***/ "./node_modules/react-color/lib/components/circle/Circle.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/circle/Circle.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _materialColors = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _CircleSwatch = __webpack_require__(/*! ./CircleSwatch */ "./node_modules/react-color/lib/components/circle/CircleSwatch.js");

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = exports.Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  });

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'circle-picker' },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_CircleSwatch2.default, {
        key: c,
        color: c,
        onClick: handleChange,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.defaultProps = {
  width: '252px',
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']]
};

exports.default = (0, _common.ColorWrap)(Circle);

/***/ }),

/***/ "./node_modules/react-color/lib/components/circle/CircleSwatch.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/circle/CircleSwatch.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleSwatch = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      style: styles.Swatch,
      color: color,
      onClick: onClick,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

exports.default = (0, _reactcss.handleHover)(CircleSwatch);

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Alpha.js":
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/react-color/lib/components/common/Alpha.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _alpha = __webpack_require__(/*! ../../helpers/alpha */ "./node_modules/react-color/lib/helpers/alpha.js");

var alpha = _interopRequireWildcard(_alpha);

var _Checkboard = __webpack_require__(/*! ./Checkboard */ "./node_modules/react-color/lib/components/common/Checkboard.js");

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = alpha.calculateChange(e, skip, _this.props, _this.refs.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden'
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: 'container',
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(_react.PureComponent || _react.Component);

exports.default = Alpha;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Checkboard.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/react-color/lib/components/common/Checkboard.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = __webpack_require__(/*! ../../helpers/checkboard */ "./node_modules/react-color/lib/helpers/checkboard.js");

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports.default = Checkboard;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/ColorWrap.js":
/* no static exports found */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/react-color/lib/components/common/ColorWrap.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.state = _extends({}, _color2.default.toState(props.color, 0));

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue)));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange }));
      }
    }]);

    return ColorPicker;
  }(_react.PureComponent || _react.Component);

  ColorPicker.defaultProps = {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  };

  return ColorPicker;
};

exports.default = ColorWrap;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/EditableInput.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./~/react-color/lib/components/common/EditableInput.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      if (!!_this.props.label) {
        _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);
      } else {
        _this.props.onChange && _this.props.onChange(e.target.value, e);
      }

      _this.setState({ value: e.target.value });
    };

    _this.handleKeyDown = function (e) {
      var number = Number(e.target.value);
      if (!isNaN(number)) {
        var amount = _this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number + amount, e);
          }

          _this.setState({ value: number + amount });
        }

        // Down
        if (e.keyCode === 40) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number - amount, e);
          }

          _this.setState({ value: number - amount });
        }
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.refs.input;
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          style: styles.input,
          ref: 'input',
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder
        }),
        this.props.label ? _react2.default.createElement(
          'span',
          { style: styles.label, onMouseDown: this.handleMouseDown },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(_react.PureComponent || _react.Component);

exports.default = EditableInput;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Hue.js":
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/react-color/lib/components/common/Hue.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _hue = __webpack_require__(/*! ../../helpers/hue */ "./node_modules/react-color/lib/helpers/hue.js");

var hue = _interopRequireWildcard(_hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = hue.calculateChange(e, skip, _this.props, _this.refs.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            margin: '0 2px',
            position: 'relative',
            height: '100%'
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          hue: {
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          },
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: this.props.direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: 'container',
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(_react.PureComponent || _react.Component);

exports.default = Hue;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Saturation.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/react-color/lib/components/common/Saturation.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

var _saturation = __webpack_require__(/*! ../../helpers/saturation */ "./node_modules/react-color/lib/helpers/saturation.js");

var saturation = _interopRequireWildcard(_saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e, skip) {
      _this.props.onChange && _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.refs.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
          },
          black: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
            boxShadow: this.props.shadow
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: 'container',
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'div',
          { style: styles.white },
          _react2.default.createElement('div', { style: styles.black }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react.PureComponent || _react.Component);

exports.default = Saturation;

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Swatch.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/common/Swatch.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _interaction = __webpack_require__(/*! ../../helpers/interaction */ "./node_modules/react-color/lib/helpers/interaction.js");

var _ = __webpack_require__(/*! ./ */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER = 13;

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0, _reactcss2.default)({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };

  return _react2.default.createElement(
    'div',
    {
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    },
    children,
    transparent && _react2.default.createElement(_.Checkboard, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

exports.default = (0, _interaction.handleFocus)(Swatch);

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/index.js":
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/react-color/lib/components/common/index.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alpha = __webpack_require__(/*! ./Alpha */ "./node_modules/react-color/lib/components/common/Alpha.js");

Object.defineProperty(exports, 'Alpha', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Checkboard = __webpack_require__(/*! ./Checkboard */ "./node_modules/react-color/lib/components/common/Checkboard.js");

Object.defineProperty(exports, 'Checkboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkboard).default;
  }
});

var _EditableInput = __webpack_require__(/*! ./EditableInput */ "./node_modules/react-color/lib/components/common/EditableInput.js");

Object.defineProperty(exports, 'EditableInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EditableInput).default;
  }
});

var _Hue = __webpack_require__(/*! ./Hue */ "./node_modules/react-color/lib/components/common/Hue.js");

Object.defineProperty(exports, 'Hue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Saturation = __webpack_require__(/*! ./Saturation */ "./node_modules/react-color/lib/components/common/Saturation.js");

Object.defineProperty(exports, 'Saturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Saturation).default;
  }
});

var _ColorWrap = __webpack_require__(/*! ./ColorWrap */ "./node_modules/react-color/lib/components/common/ColorWrap.js");

Object.defineProperty(exports, 'ColorWrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Swatch = __webpack_require__(/*! ./Swatch */ "./node_modules/react-color/lib/components/common/Swatch.js");

Object.defineProperty(exports, 'Swatch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/Compact.js":
/* no static exports found */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/react-color/lib/components/compact/Compact.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = __webpack_require__(/*! ../../../modules/react-material-design */ "./node_modules/react-color/modules/react-material-design/index.js");

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _CompactColor = __webpack_require__(/*! ./CompactColor */ "./node_modules/react-color/lib/components/compact/CompactColor.js");

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = __webpack_require__(/*! ./CompactFields */ "./node_modules/react-color/lib/components/compact/CompactFields.js");

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compact = exports.Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb;

  var styles = (0, _reactcss2.default)({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return _react2.default.createElement(
    _reactMaterialDesign.Raised,
    { style: styles.Compact },
    _react2.default.createElement(
      'div',
      { style: styles.compact, className: 'compact-picker' },
      _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(colors, function (c) {
          return _react2.default.createElement(_CompactColor2.default, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange
          });
        }),
        _react2.default.createElement('div', { style: styles.clear })
      ),
      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
};

exports.default = (0, _common.ColorWrap)(Compact);

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/CompactColor.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./~/react-color/lib/components/compact/CompactColor.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactColor = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactColor = exports.CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: '#fff',
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });

  return _react2.default.createElement(
    _common.Swatch,
    {
      style: styles.color,
      color: color,
      onClick: onClick,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement('div', { style: styles.dot })
  );
};

exports.default = CompactColor;

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/CompactFields.js":
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/react-color/lib/components/compact/CompactFields.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactFields = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFields = exports.CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement('div', { style: styles.active }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

exports.default = CompactFields;

/***/ }),

/***/ "./node_modules/react-color/lib/components/github/Github.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/github/Github.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Github = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _GithubSwatch = __webpack_require__(/*! ./GithubSwatch */ "./node_modules/react-color/lib/components/github/GithubSwatch.js");

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      triangle = _ref.triangle;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-right-triangle': triangle === 'bottom-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker' },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: handleChange });
    })
  );
};

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left'
};

exports.default = (0, _common.ColorWrap)(Github);

/***/ }),

/***/ "./node_modules/react-color/lib/components/github/GithubSwatch.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/github/GithubSwatch.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSwatch = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, { color: color, onClick: onClick, focusStyle: hoverSwatch })
  );
};

exports.default = (0, _reactcss.handleHover)(GithubSwatch);

/***/ }),

/***/ "./node_modules/react-color/lib/components/hue/Hue.js":
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/react-color/lib/components/hue/Hue.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _HuePointer = __webpack_require__(/*! ./HuePointer */ "./node_modules/react-color/lib/components/hue/HuePointer.js");

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  });

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker' },
    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer2.default
};

exports.default = (0, _common.ColorWrap)(HuePicker);

/***/ }),

/***/ "./node_modules/react-color/lib/components/hue/HuePointer.js":
/* no static exports found */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/react-color/lib/components/hue/HuePointer.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),

/***/ "./node_modules/react-color/lib/components/material/Material.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/react-color/lib/components/material/Material.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = __webpack_require__(/*! ../../../modules/react-material-design */ "./node_modules/react-color/modules/react-material-design/index.js");

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Material = exports.Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb;

  var styles = (0, _reactcss2.default)({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    _reactMaterialDesign.Raised,
    null,
    _react2.default.createElement(
      'div',
      { style: styles.material, className: 'material-picker' },
      _react2.default.createElement(_common.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports.default = (0, _common.ColorWrap)(Material);

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/Photoshop.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/Photoshop.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photoshop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _PhotoshopFields = __webpack_require__(/*! ./PhotoshopFields */ "./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js");

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = __webpack_require__(/*! ./PhotoshopPointerCircle */ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js");

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = __webpack_require__(/*! ./PhotoshopPointer */ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js");

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _PhotoshopButton = __webpack_require__(/*! ./PhotoshopButton */ "./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js");

var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

var _PhotoshopPreviews = __webpack_require__(/*! ./PhotoshopPreviews */ "./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js");

var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker' },
        _react2.default.createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.controls },
            _react2.default.createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: styles.previews },
                _react2.default.createElement(_PhotoshopPreviews2.default, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              _react2.default.createElement(
                'div',
                { style: styles.actions },
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
                _react2.default.createElement(_PhotoshopFields2.default, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_react2.default.Component);

Photoshop.defaultProps = {
  header: 'Color Picker'
};

exports.default = (0, _common.ColorWrap)(Photoshop);

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/PhotoshopButton.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopBotton = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

exports.default = PhotoshopBotton;

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/PhotoshopFields.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      _color2.default.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields },
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    _react2.default.createElement(
      'div',
      { style: styles.fieldSymbols },
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

exports.default = PhotoshopPicker;

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js":
/* no static exports found */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/PhotoshopPointer.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.pointer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      _react2.default.createElement('div', { style: styles.leftInside })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement('div', { style: styles.rightInside })
    )
  );
};

exports.default = PhotoshopPointerCircle;

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/PhotoshopPointerCircle.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = PhotoshopPointerCircle;

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js":
/* no static exports found */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./~/react-color/lib/components/photoshop/PhotoshopPreviews.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPreviews = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement('div', { style: styles.new }),
      _react2.default.createElement('div', { style: styles.current })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

exports.default = PhotoshopPreviews;

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/Sketch.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/sketch/Sketch.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sketch = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _SketchFields = __webpack_require__(/*! ./SketchFields */ "./node_modules/react-color/lib/components/sketch/SketchFields.js");

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = __webpack_require__(/*! ./SketchPresetColors */ "./node_modules/react-color/lib/components/sketch/SketchPresetColors.js");

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    },
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      _react2.default.createElement(
        'div',
        { style: styles.sliders },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: styles.activeColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    _react2.default.createElement(_SketchPresetColors2.default, { colors: presetColors, onClick: onChange })
  );
};

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  width: 200
};

exports.default = (0, _common.ColorWrap)(Sketch);

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/SketchFields.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/sketch/SketchFields.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShetchFields = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

var ShetchFields = exports.ShetchFields = function ShetchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a = data.a / 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.double },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.alpha },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

exports.default = ShetchFields;

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/SketchPresetColors.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./~/react-color/lib/components/sketch/SketchPresetColors.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchPresetColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick;

  var styles = (0, _reactcss2.default)({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      return _react2.default.createElement(
        'div',
        { key: c.color, style: styles.swatchWrap },
        _react2.default.createElement(_common.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          focusStyle: {
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
          }
        }))
      );
    })
  );
};
SketchPresetColors.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    color: _propTypes2.default.string,
    title: _propTypes2.default.string
  })]))
};

exports.default = SketchPresetColors;

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/Slider.js":
/* no static exports found */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/react-color/lib/components/slider/Slider.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _SliderSwatches = __webpack_require__(/*! ./SliderSwatches */ "./node_modules/react-color/lib/components/slider/SliderSwatches.js");

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = __webpack_require__(/*! ./SliderPointer */ "./node_modules/react-color/lib/components/slider/SliderPointer.js");

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = exports.Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { className: 'slider-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.hue },
      _react2.default.createElement(_common.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.defaultProps = {
  pointer: _SliderPointer2.default
};

exports.default = (0, _common.ColorWrap)(Slider);

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderPointer.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./~/react-color/lib/components/slider/SliderPointer.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderSwatch.js":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/react-color/lib/components/slider/SliderSwatch.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatch = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports.default = SliderSwatch;

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderSwatches.js":
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/react-color/lib/components/slider/SliderSwatches.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatches = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SliderSwatch = __webpack_require__(/*! ./SliderSwatch */ "./node_modules/react-color/lib/components/slider/SliderSwatch.js");

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.80',
        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        first: true
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.65',
        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.50',
        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.35',
        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.20',
        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        last: true
      })
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = SliderSwatches;

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/Swatches.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/react-color/lib/components/swatches/Swatches.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatches = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _materialColors = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

var _reactMaterialDesign = __webpack_require__(/*! ../../../modules/react-material-design */ "./node_modules/react-color/modules/react-material-design/index.js");

var _SwatchesGroup = __webpack_require__(/*! ./SwatchesGroup */ "./node_modules/react-color/lib/components/swatches/SwatchesGroup.js");

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatches = exports.Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    _color2.default.isValidHex(data) && onChange({
      hex: data,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker' },
    _react2.default.createElement(
      _reactMaterialDesign.Raised,
      null,
      _react2.default.createElement(
        'div',
        { style: styles.overflow },
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(colors, function (group) {
            return _react2.default.createElement(_SwatchesGroup2.default, {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange
            });
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

/* eslint-disable max-len */
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]
};

exports.default = (0, _common.ColorWrap)(Swatches);

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/SwatchesColor.js":
/* no static exports found */
/* all exports used */
/*!****************************************************************!*\
  !*** ./~/react-color/lib/components/swatches/SwatchesColor.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesColor = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        fill: '#fff',
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        fill: '#333'
      }
    },
    'transparent': {
      check: {
        fill: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return _react2.default.createElement(
    _common.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(
        'svg',
        { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
      )
    )
  );
};

exports.default = SwatchesColor;

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/SwatchesGroup.js":
/* no static exports found */
/* all exports used */
/*!****************************************************************!*\
  !*** ./~/react-color/lib/components/swatches/SwatchesGroup.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesGroup = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _SwatchesColor = __webpack_require__(/*! ./SwatchesColor */ "./node_modules/react-color/lib/components/swatches/SwatchesColor.js");

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      group = _ref.group,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.group },
    (0, _map2.default)(group, function (color, i) {
      return _react2.default.createElement(_SwatchesColor2.default, {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick
      });
    })
  );
};

exports.default = SwatchesGroup;

/***/ }),

/***/ "./node_modules/react-color/lib/components/twitter/Twitter.js":
/* no static exports found */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/react-color/lib/components/twitter/Twitter.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(/*! ../common */ "./node_modules/react-color/lib/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = exports.Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hexcode, e) {
    _color2.default.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'twitter-picker' },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      (0, _map2.default)(colors, function (c, i) {
        return _react2.default.createElement(_common.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          focusStyle: {
            boxShadow: '0 0 4px ' + c
          }
        });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex.replace('#', ''),
        onChange: handleChange
      }),
      _react2.default.createElement('div', { style: styles.clear })
    )
  );
};

Twitter.defaultProps = {
  width: '276px',
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left'
};

exports.default = (0, _common.ColorWrap)(Twitter);

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/alpha.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/react-color/lib/helpers/alpha.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (props.hsl.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (props.a !== _a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
}

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/checkboard.js":
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/react-color/lib/helpers/checkboard.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.get = get;
var checkboardCache = {};

function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) return null;
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) return null; // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
  var checkboard = render(c1, c2, size, serverCanvas);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
}

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/color.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/react-color/lib/helpers/color.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.red = undefined;

var _each = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");

var _each2 = _interopRequireDefault(_each);

var _tinycolor = __webpack_require__(/*! ../../modules/tinycolor2 */ "./node_modules/react-color/modules/tinycolor2/index.js");

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
    var checked = 0;
    var passed = 0;
    (0, _each2.default)(keysToCheck, function (letter) {
      if (data[letter]) {
        checked += 1;
        if (!isNaN(data[letter])) {
          passed += 1;
        }
      }
    });
    return checked === passed ? data : false;
  },
  toState: function toState(data, oldHue) {
    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    var rgb = color.toRgb();
    var hex = color.toHex();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }
    var transparent = hex === '000000' && rgb.a === 0;

    return {
      hsl: hsl,
      hex: transparent ? 'transparent' : '#' + hex,
      rgb: rgb,
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source
    };
  },
  isValidHex: function isValidHex(hex) {
    return (0, _tinycolor2.default)(hex).isValid();
  }
};
var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/hue.js":
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./~/react-color/lib/helpers/hue.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (props.hsl.h !== h) {
      return {
        h: h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (props.hsl.h !== _h) {
      return {
        h: _h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  }
  return null;
}

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/interaction.js":
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/react-color/lib/helpers/interaction.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handleFocus = exports.handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onFocus: _this.handleFocus, onBlur: _this.handleBlur },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Focus;
  }(_react2.default.Component);
};

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/saturation.js":
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/react-color/lib/helpers/saturation.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  } else if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left * 100 / containerWidth;
  var bright = -(top * 100 / containerHeight) + 100;

  return {
    h: props.hsl.h,
    s: saturation,
    v: bright,
    a: props.hsl.a,
    source: 'rgb'
  };
}

/***/ }),

/***/ "./node_modules/react-color/lib/index.js":
/* no static exports found */
/* exports used: BlockPicker */
/*!************************************!*\
  !*** ./~/react-color/lib/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.default = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;

var _Alpha = __webpack_require__(/*! ./components/alpha/Alpha */ "./node_modules/react-color/lib/components/alpha/Alpha.js");

Object.defineProperty(exports, 'AlphaPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Block = __webpack_require__(/*! ./components/block/Block */ "./node_modules/react-color/lib/components/block/Block.js");

Object.defineProperty(exports, 'BlockPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circle = __webpack_require__(/*! ./components/circle/Circle */ "./node_modules/react-color/lib/components/circle/Circle.js");

Object.defineProperty(exports, 'CirclePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Chrome = __webpack_require__(/*! ./components/chrome/Chrome */ "./node_modules/react-color/lib/components/chrome/Chrome.js");

Object.defineProperty(exports, 'ChromePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
});

var _Compact = __webpack_require__(/*! ./components/compact/Compact */ "./node_modules/react-color/lib/components/compact/Compact.js");

Object.defineProperty(exports, 'CompactPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
});

var _Github = __webpack_require__(/*! ./components/github/Github */ "./node_modules/react-color/lib/components/github/Github.js");

Object.defineProperty(exports, 'GithubPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Github).default;
  }
});

var _Hue = __webpack_require__(/*! ./components/hue/Hue */ "./node_modules/react-color/lib/components/hue/Hue.js");

Object.defineProperty(exports, 'HuePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Material = __webpack_require__(/*! ./components/material/Material */ "./node_modules/react-color/lib/components/material/Material.js");

Object.defineProperty(exports, 'MaterialPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Material).default;
  }
});

var _Photoshop = __webpack_require__(/*! ./components/photoshop/Photoshop */ "./node_modules/react-color/lib/components/photoshop/Photoshop.js");

Object.defineProperty(exports, 'PhotoshopPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Photoshop).default;
  }
});

var _Sketch = __webpack_require__(/*! ./components/sketch/Sketch */ "./node_modules/react-color/lib/components/sketch/Sketch.js");

Object.defineProperty(exports, 'SketchPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sketch).default;
  }
});

var _Slider = __webpack_require__(/*! ./components/slider/Slider */ "./node_modules/react-color/lib/components/slider/Slider.js");

Object.defineProperty(exports, 'SliderPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _Swatches = __webpack_require__(/*! ./components/swatches/Swatches */ "./node_modules/react-color/lib/components/swatches/Swatches.js");

Object.defineProperty(exports, 'SwatchesPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatches).default;
  }
});

var _Twitter = __webpack_require__(/*! ./components/twitter/Twitter */ "./node_modules/react-color/lib/components/twitter/Twitter.js");

Object.defineProperty(exports, 'TwitterPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Twitter).default;
  }
});

var _ColorWrap = __webpack_require__(/*! ./components/common/ColorWrap */ "./node_modules/react-color/lib/components/common/ColorWrap.js");

Object.defineProperty(exports, 'CustomPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chrome2.default;

/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/index.js":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/index.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libComponentsRaised = __webpack_require__(/*! ./lib/components/Raised */ "./node_modules/react-color/modules/react-material-design/lib/components/Raised.js");

var _libComponentsRaised2 = _interopRequireDefault(_libComponentsRaised);

var _libComponentsTile = __webpack_require__(/*! ./lib/components/Tile */ "./node_modules/react-color/modules/react-material-design/lib/components/Tile.js");

var _libComponentsTile2 = _interopRequireDefault(_libComponentsTile);

var _libComponentsTabs = __webpack_require__(/*! ./lib/components/Tabs */ "./node_modules/react-color/modules/react-material-design/lib/components/Tabs.js");

var _libComponentsTabs2 = _interopRequireDefault(_libComponentsTabs);

exports.Raised = _libComponentsRaised2['default'];
exports.Tile = _libComponentsTile2['default'];
exports.Tabs = _libComponentsTabs2['default'];


/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/lib/components/Link.js":
/* no static exports found */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/lib/components/Link.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e, this.props.callbackValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var a;
      if ((0, _isString2.default)(this.props.onClick)) {
        a = _react2.default.createElement(
          'a',
          { style: { textDecoration: 'none' }, href: this.props.onClick, target: this.props.newTab && '_blank' },
          this.props.children
        );
      } else {
        a = _react2.default.createElement(
          'a',
          { style: { textDecoration: 'none' }, onClick: this.handleClick },
          this.props.children
        );
      }

      return a;
    }
  }]);

  return Link;
}(_react2.default.Component);

// Link.propTypes =
//   onClick: PropTypes.oneOfType(
//     PropTypes.string,
//     PropTypes.func
//   );

Link.defaultProps = {
  newTab: false
};

exports.default = Link;

/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/lib/components/Raised.js":
/* no static exports found */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/lib/components/Raised.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, esnext: true */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Raised = function (_React$Component) {
  _inherits(Raised, _React$Component);

  function Raised() {
    _classCallCheck(this, Raised);

    return _possibleConstructorReturn(this, (Raised.__proto__ || Object.getPrototypeOf(Raised)).apply(this, arguments));
  }

  _createClass(Raised, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          },
          content: {
            position: 'relative'
          },
          bg: {
            absolute: '0px 0px 0px 0px',
            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
            borderRadius: this.props.radius,
            background: this.props.background
          }
        },
        'zDepth-0': {
          bg: {
            boxShadow: 'none'
          }
        },

        'zDepth-1': {
          bg: {
            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
          }
        },
        'zDepth-2': {
          bg: {
            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
          }
        },
        'zDepth-3': {
          bg: {
            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
          }
        },
        'zDepth-4': {
          bg: {
            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
          }
        },
        'zDepth-5': {
          bg: {
            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
          }
        },
        'square': {
          bg: {
            borderRadius: '0'
          }
        },
        'circle': {
          bg: {
            borderRadius: '50%'
          }
        }
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('div', { style: styles.bg }),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          this.props.children
        )
      );
    }
  }]);

  return Raised;
}(_react2.default.Component);

Raised.propTypes = {
  background: _propTypes2.default.string,
  zDepth: _propTypes2.default.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
  radius: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: '1',
  radius: '2px'
};

exports.default = Raised;

/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/lib/components/Tab.js":
/* no static exports found */
/* all exports used */
/*!***************************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/lib/components/Tab.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.selectable !== false) {
        this.props.onClick(this.props.tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tab: {
            color: this.props.inactive || this.props.color,
            cursor: 'pointer',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '48px',
            lineHeight: '48px',
            textAlign: 'center',
            fontSize: '14px',
            textTransform: this.props.capitalize === false ? '' : 'uppercase',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            opacity: '.47',
            transition: 'opacity 100ms linear'
          }
        },
        'selected': {
          tab: {
            color: this.props.color,
            opacity: '.87'
          }
        }
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.tab, onClick: this.handleClick },
        this.props.children
      );
    }
  }]);

  return Tab;
}(_react2.default.Component);

Tab.propTypes = {
  selected: _propTypes2.default.bool
};

Tab.defaultProps = {
  selected: false,
  color: '#fff'
};

exports.default = Tab;

/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/lib/components/Tabs.js":
/* no static exports found */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/lib/components/Tabs.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _Tab = __webpack_require__(/*! ./Tab */ "./node_modules/react-color/modules/react-material-design/lib/components/Tab.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-color/modules/react-material-design/lib/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var Ink = require('./Ink');

// var context = {
//   primaryColor: '#2196F3',
//   accentColor: '#E91E63',
//   theme: 'light'
// }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    var selectedTab;
    if (props.selectedTab < (props.tabs && props.tabs.length)) {
      selectedTab = props.selectedTab;
    } else {
      selectedTab = 0;
    }

    _this.state = {
      selectedTab: selectedTab
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.slide = _this.slide.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleClick',
    value: function handleClick(tab) {
      if (this.props.onChange) {
        this.props.onChange(tab);
      }

      this.setState({
        selectedTab: tab
      });
    }
  }, {
    key: 'slide',
    value: function slide() {
      if (this.props.tabs.length) {
        var containerNode = this.refs.tabs.getDOMNode();
        var containerLeft = containerNode.scrollLeft;
        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

        // scroll right if tab is off screen
        if (selectedRight > containerRight) {
          containerNode.scrollLeft += selectedRight - containerRight;
        }

        // scroll left if tab is off screen
        if (selectedLeft < containerLeft) {
          containerNode.scrollLeft -= containerLeft - selectedLeft;
        }

        // slide the indicator
        var indicator = this.refs.indicator;
        indicator.style.left = selectedLeft + 'px';
        indicator.style.width = selectedNode.offsetWidth + 'px';
        indicator.style.height = '2px';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slide();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedTab !== this.state.selectedTab) {
        this.setState({ selectedTab: nextProps.selectedTab });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
        nextState.selectedTab = nextProps.tabs.length - 1;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.slide();
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tabs: {
            position: 'relative',
            background: this.props.background
          },
          tabWrap: {
            display: 'flex'
          },
          tab: {
            justifyContent: 'flex-start',
            minWidth: '68px',
            maxWidth: '240px'
          },
          Tab: {
            color: this.props.color,
            inactive: this.props.inactive,
            capitalize: this.props.capitalize
          },
          indicator: {
            height: '0',
            position: 'absolute',
            bottom: '0',
            left: '0',
            background: this.props.color,
            transition: 'all 200ms linear'
          }
        },
        'scrollable': {
          tabs: {
            overflowX: 'scroll'
          },
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start',
            width: '400%'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-justify': {
          tabWrap: {
            justifyContent: 'space-between'
          },
          tab: {
            width: 100 / this.props.tabs.length + '%'
          }
        },
        'align-left': {
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-center': {
          tabWrap: {
            justifyContent: 'center'
          },
          tab: {
            width: 'auto'
          }
        }
      }, {
        'scrollable': this.props.width / this.props.tabs.length < 72
      }, this.props, this.state);

      var tabs = [];
      for (var i = 0; i < this.props.tabs.length; i++) {
        var tab = this.props.tabs[i];

        var label;
        var callback;
        var callbackValue;
        var newTab;
        if ((0, _isString2.default)(tab)) {
          label = tab;
          callback = null;
        } else {
          label = tab.label;
          callback = tab.onClick;
          callbackValue = tab.callbackValue;
          newTab = tab.newTab;
        }

        tabs.push(_react2.default.createElement(
          'div',
          { style: styles.tab, ref: 'tab-' + i, key: i },
          _react2.default.createElement(
            _Link2.default,
            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
            _react2.default.createElement(
              _Tab2.default,
              { style: styles.Tab, tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick },
              label
            )
          )
        ));
      }

      return _react2.default.createElement(
        'div',
        { style: styles.tabs, ref: 'tabs' },
        _react2.default.createElement(
          'div',
          { style: styles.tabWrap, className: 'flexbox-fix' },
          tabs
        ),
        _react2.default.createElement('div', { style: styles.indicator, ref: 'indicator' })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
  selectedTab: 0,
  background: 'transparent',
  color: '#fff'
};

exports.default = Tabs;

/***/ }),

/***/ "./node_modules/react-color/modules/react-material-design/lib/components/Tile.js":
/* no static exports found */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./~/react-color/modules/react-material-design/lib/components/Tile.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, esnext: true */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tile: {
            fontSize: '16px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            color: this.props.color
          },
          primary: {
            display: 'flex',
            width: '100%'
          },
          sidebar: {
            minWidth: '56px',
            maxWidth: '56px',
            flexBasis: '56px' },
          content: {
            background: 'none',
            flex: '1',
            overflow: 'auto'
          },
          secondary: {
            flexBasis: '42',
            textAlign: 'center'
          },
          sidebarIcon: {
            marginTop: '-12px',
            marginLeft: '-12px',
            marginBottom: '-12px'
          }
        },
        'divider': {
          tile: {
            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
          }
        },
        'condensed': {
          tile: {
            paddingBottom: '0px',
            paddingTop: '0px',
            paddingRight: '0px'
          },
          sidebar: {
            minWidth: '28px',
            maxWidth: '28px',
            flexBasis: '28px'
          }
        }
      }, {
        'clickable': this.props.onClick
      }, this.props);

      var _props$children = _slicedToArray(this.props.children, 2),
          sidebar = _props$children[0],
          content = _props$children[1];

      return _react2.default.createElement(
        'div',
        { style: styles.tile, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.primary, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.sidebar, key: "sidebar-#{ sidebar }" },
            sidebar
          ),
          _react2.default.createElement(
            'div',
            { style: styles.content, key: "content-#{ content }" },
            content
          )
        )
      );
    }
  }]);

  return Tile;
}(_react2.default.Component);

;

exports.default = Tile;

/***/ }),

/***/ "./node_modules/react-color/modules/tinycolor2/index.js":
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/react-color/modules/tinycolor2/index.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// jscs: disable

// TinyColor v1.1.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/;
var trimRight = /\s+$/;
var tinyCounter = 0;
var math = Math;
var mathRound = math.round;
var mathMin = math.min;
var mathMax = math.max;
var mathRandom = math.random;

function tinycolor(color, opts) {

		color = (color) ? color : '';
		opts = opts || { };

		// If input is already a tinycolor, return itself
		if (color instanceof tinycolor) {
			 return color;
		}
		// If we are called as a function, call using new instead
		if (!(this instanceof tinycolor)) {
				return new tinycolor(color, opts);
		}

		var rgb = inputToRGB(color);
		this._originalInput = color,
		this._r = rgb.r,
		this._g = rgb.g,
		this._b = rgb.b,
		this._a = rgb.a,
		this._roundA = mathRound(100*this._a) / 100,
		this._format = opts.format || rgb.format;
		this._gradientType = opts.gradientType;

		// Don't let the range of [0,255] come back in [0,1].
		// Potentially lose a little bit of precision here, but will fix issues where
		// .5 gets interpreted as half of the total, instead of half of 1
		// If it was supposed to be 128, this was already taken care of by `inputToRgb`
		if (this._r < 1) { this._r = mathRound(this._r); }
		if (this._g < 1) { this._g = mathRound(this._g); }
		if (this._b < 1) { this._b = mathRound(this._b); }

		this._ok = rgb.ok;
		this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
		isDark: function() {
				return this.getBrightness() < 128;
		},
		isLight: function() {
				return !this.isDark();
		},
		isValid: function() {
				return this._ok;
		},
		getOriginalInput: function() {
			return this._originalInput;
		},
		getFormat: function() {
				return this._format;
		},
		getAlpha: function() {
				return this._a;
		},
		getBrightness: function() {
				//http://www.w3.org/TR/AERT#color-contrast
				var rgb = this.toRgb();
				return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
		},
		getLuminance: function() {
				//http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
				var rgb = this.toRgb();
				var RsRGB, GsRGB, BsRGB, R, G, B;
				RsRGB = rgb.r/255;
				GsRGB = rgb.g/255;
				BsRGB = rgb.b/255;

				if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
				if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
				if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
				return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
		},
		setAlpha: function(value) {
				this._a = boundAlpha(value);
				this._roundA = mathRound(100*this._a) / 100;
				return this;
		},
		toHsv: function() {
				var hsv = rgbToHsv(this._r, this._g, this._b);
				return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
		},
		toHsvString: function() {
				var hsv = rgbToHsv(this._r, this._g, this._b);
				var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
				return (this._a == 1) ?
					"hsv("	+ h + ", " + s + "%, " + v + "%)" :
					"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
		},
		toHsl: function() {
				var hsl = rgbToHsl(this._r, this._g, this._b);
				return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
		},
		toHslString: function() {
				var hsl = rgbToHsl(this._r, this._g, this._b);
				var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
				return (this._a == 1) ?
					"hsl("	+ h + ", " + s + "%, " + l + "%)" :
					"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
		},
		toHex: function(allow3Char) {
				return rgbToHex(this._r, this._g, this._b, allow3Char);
		},
		toHexString: function(allow3Char) {
				return '#' + this.toHex(allow3Char);
		},
		toHex8: function() {
				return rgbaToHex(this._r, this._g, this._b, this._a);
		},
		toHex8String: function() {
				return '#' + this.toHex8();
		},
		toRgb: function() {
				return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
		},
		toRgbString: function() {
				return (this._a == 1) ?
					"rgb("	+ mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
					"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
		},
		toPercentageRgb: function() {
				return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
		},
		toPercentageRgbString: function() {
				return (this._a == 1) ?
					"rgb("	+ mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
					"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
		},
		toName: function() {
				if (this._a === 0) {
						return "transparent";
				}

				if (this._a < 1) {
						return false;
				}

				return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
		},
		toFilter: function(secondColor) {
				var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
				var secondHex8String = hex8String;
				var gradientType = this._gradientType ? "GradientType = 1, " : "";

				if (secondColor) {
						var s = tinycolor(secondColor);
						secondHex8String = s.toHex8String();
				}

				return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
		},
		toString: function(format) {
				var formatSet = !!format;
				format = format || this._format;

				var formattedString = false;
				var hasAlpha = this._a < 1 && this._a >= 0;
				var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

				if (needsAlphaFormat) {
						// Special case for "transparent", all other non-alpha formats
						// will return rgba when there is transparency.
						if (format === "name" && this._a === 0) {
								return this.toName();
						}
						return this.toRgbString();
				}
				if (format === "rgb") {
						formattedString = this.toRgbString();
				}
				if (format === "prgb") {
						formattedString = this.toPercentageRgbString();
				}
				if (format === "hex" || format === "hex6") {
						formattedString = this.toHexString();
				}
				if (format === "hex3") {
						formattedString = this.toHexString(true);
				}
				if (format === "hex8") {
						formattedString = this.toHex8String();
				}
				if (format === "name") {
						formattedString = this.toName();
				}
				if (format === "hsl") {
						formattedString = this.toHslString();
				}
				if (format === "hsv") {
						formattedString = this.toHsvString();
				}

				return formattedString || this.toHexString();
		},

		_applyModification: function(fn, args) {
				var color = fn.apply(null, [this].concat([].slice.call(args)));
				this._r = color._r;
				this._g = color._g;
				this._b = color._b;
				this.setAlpha(color._a);
				return this;
		},
		lighten: function() {
				return this._applyModification(lighten, arguments);
		},
		brighten: function() {
				return this._applyModification(brighten, arguments);
		},
		darken: function() {
				return this._applyModification(darken, arguments);
		},
		desaturate: function() {
				return this._applyModification(desaturate, arguments);
		},
		saturate: function() {
				return this._applyModification(saturate, arguments);
		},
		greyscale: function() {
				return this._applyModification(greyscale, arguments);
		},
		spin: function() {
				return this._applyModification(spin, arguments);
		},

		_applyCombination: function(fn, args) {
				return fn.apply(null, [this].concat([].slice.call(args)));
		},
		analogous: function() {
				return this._applyCombination(analogous, arguments);
		},
		complement: function() {
				return this._applyCombination(complement, arguments);
		},
		monochromatic: function() {
				return this._applyCombination(monochromatic, arguments);
		},
		splitcomplement: function() {
				return this._applyCombination(splitcomplement, arguments);
		},
		triad: function() {
				return this._applyCombination(triad, arguments);
		},
		tetrad: function() {
				return this._applyCombination(tetrad, arguments);
		}
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
		if (typeof color == "object") {
				var newColor = {};
				for (var i in color) {
						if (color.hasOwnProperty(i)) {
								if (i === "a") {
										newColor[i] = color[i];
								}
								else {
										newColor[i] = convertToPercentage(color[i]);
								}
						}
				}
				color = newColor;
		}

		return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//		 "red"
//		 "#f00" or "f00"
//		 "#ff0000" or "ff0000"
//		 "#ff000000" or "ff000000"
//		 "rgb 255 0 0" or "rgb (255, 0, 0)"
//		 "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//		 "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//		 "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//		 "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//		 "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//		 "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

		var rgb = { r: 0, g: 0, b: 0 };
		var a = 1;
		var ok = false;
		var format = false;

		if (typeof color == "string") {
				color = stringInputToObject(color);
		}

		if (typeof color == "object") {
				if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
						rgb = rgbToRgb(color.r, color.g, color.b);
						ok = true;
						format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
				}
				else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
						color.s = convertToPercentage(color.s, 1);
						color.v = convertToPercentage(color.v, 1);
						rgb = hsvToRgb(color.h, color.s, color.v);
						ok = true;
						format = "hsv";
				}
				else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
						color.s = convertToPercentage(color.s);
						color.l = convertToPercentage(color.l);
						rgb = hslToRgb(color.h, color.s, color.l);
						ok = true;
						format = "hsl";
				}

				if (color.hasOwnProperty("a")) {
						a = color.a;
				}
		}

		a = boundAlpha(a);

		return {
				ok: ok,
				format: color.format || format,
				r: mathMin(255, mathMax(rgb.r, 0)),
				g: mathMin(255, mathMax(rgb.g, 0)),
				b: mathMin(255, mathMax(rgb.b, 0)),
				a: a
		};
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
		return {
				r: bound01(r, 255) * 255,
				g: bound01(g, 255) * 255,
				b: bound01(b, 255) * 255
		};
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

		r = bound01(r, 255);
		g = bound01(g, 255);
		b = bound01(b, 255);

		var max = mathMax(r, g, b), min = mathMin(r, g, b);
		var h, s, l = (max + min) / 2;

		if(max == min) {
				h = s = 0; // achromatic
		}
		else {
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max) {
						case r: h = (g - b) / d + (g < b ? 6 : 0); break;
						case g: h = (b - r) / d + 2; break;
						case b: h = (r - g) / d + 4; break;
				}

				h /= 6;
		}

		return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
		var r, g, b;

		h = bound01(h, 360);
		s = bound01(s, 100);
		l = bound01(l, 100);

		function hue2rgb(p, q, t) {
				if(t < 0) t += 1;
				if(t > 1) t -= 1;
				if(t < 1/6) return p + (q - p) * 6 * t;
				if(t < 1/2) return q;
				if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
				return p;
		}

		if(s === 0) {
				r = g = b = l; // achromatic
		}
		else {
				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
		}

		return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

		r = bound01(r, 255);
		g = bound01(g, 255);
		b = bound01(b, 255);

		var max = mathMax(r, g, b), min = mathMin(r, g, b);
		var h, s, v = max;

		var d = max - min;
		s = max === 0 ? 0 : d / max;

		if(max == min) {
				h = 0; // achromatic
		}
		else {
				switch(max) {
						case r: h = (g - b) / d + (g < b ? 6 : 0); break;
						case g: h = (b - r) / d + 2; break;
						case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
		}
		return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

		h = bound01(h, 360) * 6;
		s = bound01(s, 100);
		v = bound01(v, 100);

		var i = math.floor(h),
				f = h - i,
				p = v * (1 - s),
				q = v * (1 - f * s),
				t = v * (1 - (1 - f) * s),
				mod = i % 6,
				r = [v, q, p, p, t, v][mod],
				g = [t, v, v, q, p, p][mod],
				b = [p, p, t, v, v, q][mod];

		return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

		var hex = [
				pad2(mathRound(r).toString(16)),
				pad2(mathRound(g).toString(16)),
				pad2(mathRound(b).toString(16))
		];

		// Return a 3 character hex if possible
		if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
				return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
		}

		return hex.join("");
}
		// `rgbaToHex`
		// Converts an RGBA color plus alpha transparency to hex
		// Assumes r, g, b and a are contained in the set [0, 255]
		// Returns an 8 character hex
		function rgbaToHex(r, g, b, a) {

				var hex = [
						pad2(convertDecimalToHex(a)),
						pad2(mathRound(r).toString(16)),
						pad2(mathRound(g).toString(16)),
						pad2(mathRound(b).toString(16))
				];

				return hex.join("");
		}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
		if (!color1 || !color2) { return false; }
		return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
		return tinycolor.fromRatio({
				r: mathRandom(),
				g: mathRandom(),
				b: mathRandom()
		});
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.s -= amount / 100;
		hsl.s = clamp01(hsl.s);
		return tinycolor(hsl);
}

function saturate(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.s += amount / 100;
		hsl.s = clamp01(hsl.s);
		return tinycolor(hsl);
}

function greyscale(color) {
		return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.l += amount / 100;
		hsl.l = clamp01(hsl.l);
		return tinycolor(hsl);
}

function brighten(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var rgb = tinycolor(color).toRgb();
		rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
		rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
		rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
		return tinycolor(rgb);
}

function darken (color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.l -= amount / 100;
		hsl.l = clamp01(hsl.l);
		return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
		var hsl = tinycolor(color).toHsl();
		var hue = (mathRound(hsl.h) + amount) % 360;
		hsl.h = hue < 0 ? 360 + hue : hue;
		return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
		var hsl = tinycolor(color).toHsl();
		hsl.h = (hsl.h + 180) % 360;
		return tinycolor(hsl);
}

function triad(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
		];
}

function tetrad(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
		];
}

function splitcomplement(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
				tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
		];
}

function analogous(color, results, slices) {
		results = results || 6;
		slices = slices || 30;

		var hsl = tinycolor(color).toHsl();
		var part = 360 / slices;
		var ret = [tinycolor(color)];

		for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
				hsl.h = (hsl.h + part) % 360;
				ret.push(tinycolor(hsl));
		}
		return ret;
}

function monochromatic(color, results) {
		results = results || 6;
		var hsv = tinycolor(color).toHsv();
		var h = hsv.h, s = hsv.s, v = hsv.v;
		var ret = [];
		var modification = 1 / results;

		while (results--) {
				ret.push(tinycolor({ h: h, s: s, v: v}));
				v = (v + modification) % 1;
		}

		return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
		amount = (amount === 0) ? 0 : (amount || 50);

		var rgb1 = tinycolor(color1).toRgb();
		var rgb2 = tinycolor(color2).toRgb();

		var p = amount / 100;
		var w = p * 2 - 1;
		var a = rgb2.a - rgb1.a;

		var w1;

		if (w * a == -1) {
				w1 = w;
		} else {
				w1 = (w + a) / (1 + w * a);
		}

		w1 = (w1 + 1) / 2;

		var w2 = 1 - w1;

		var rgba = {
				r: rgb2.r * w1 + rgb1.r * w2,
				g: rgb2.g * w1 + rgb1.g * w2,
				b: rgb2.b * w1 + rgb1.b * w2,
				a: rgb2.a * p	+ rgb1.a * (1 - p)
		};

		return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
		var c1 = tinycolor(color1);
		var c2 = tinycolor(color2);
		return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//			the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//			the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//		tinycolor.isReadable("#000", "#111") => false
//		tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

tinycolor.isReadable = function(color1, color2, wcag2) {
		var readability = tinycolor.readability(color1, color2);
		var wcag2Parms, out;

		out = false;

		wcag2Parms = validateWCAG2Parms(wcag2);
		switch (wcag2Parms.level + wcag2Parms.size) {
				case "AAsmall":
				case "AAAlarge":
						out = readability >= 4.5;
						break;
				case "AAlarge":
						out = readability >= 3;
						break;
				case "AAAsmall":
						out = readability >= 7;
						break;
		}
		return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();	// "#ffffff"
//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


tinycolor.mostReadable = function(baseColor, colorList, args) {
		var bestColor = null;
		var bestScore = 0;
		var readability;
		var includeFallbackColors, level, size ;
		args = args || {};
		includeFallbackColors = args.includeFallbackColors ;
		level = args.level;
		size = args.size;

		for (var i= 0; i < colorList.length ; i++) {
				readability = tinycolor.readability(baseColor, colorList[i]);
				if (readability > bestScore) {
						bestScore = readability;
						bestColor = tinycolor(colorList[i]);
				}
		}

		if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
				return bestColor;
		}
		else {
				args.includeFallbackColors=false;
				return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
		}
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "0ff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000",
		blanchedalmond: "ffebcd",
		blue: "00f",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		burntsienna: "ea7e5d",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "0ff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkgrey: "a9a9a9",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkslategrey: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dimgrey: "696969",
		dodgerblue: "1e90ff",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "f0f",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		grey: "808080",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgray: "d3d3d3",
		lightgreen: "90ee90",
		lightgrey: "d3d3d3",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslategray: "789",
		lightslategrey: "789",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "0f0",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "f0f",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370db",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "db7093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		rebeccapurple: "663399",
		red: "f00",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		slategrey: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		wheat: "f5deb3",
		white: "fff",
		whitesmoke: "f5f5f5",
		yellow: "ff0",
		yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
		var flipped = { };
		for (var i in o) {
				if (o.hasOwnProperty(i)) {
						flipped[o[i]] = i;
				}
		}
		return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
		a = parseFloat(a);

		if (isNaN(a) || a < 0 || a > 1) {
				a = 1;
		}

		return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
		if (isOnePointZero(n)) { n = "100%"; }

		var processPercent = isPercentage(n);
		n = mathMin(max, mathMax(0, parseFloat(n)));

		// Automatically convert percentage into number
		if (processPercent) {
				n = parseInt(n * max, 10) / 100;
		}

		// Handle floating point rounding errors
		if ((math.abs(n - max) < 0.000001)) {
				return 1;
		}

		// Convert into [0, 1] range if it isn't already
		return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
		return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
		return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
		return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
		return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
		return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n, multiplier) {
		multiplier = multiplier || 100;
		if (n <= 1) {
				n = (n * multiplier) + "%";
		}

		return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
		return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
		return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

		// <http://www.w3.org/TR/css3-values/#integers>
		var CSS_INTEGER = "[-\\+]?\\d+%?";

		// <http://www.w3.org/TR/css3-values/#number-value>
		var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

		// Allow positive/negative integer/number.	Don't capture the either/or, just the entire outcome.
		var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

		// Actual matching.
		// Parentheses and commas are optional, but not required.
		// Whitespace can take the place of commas or opening paren
		var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
		var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

		return {
				rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
				rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
				hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
				hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
				hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
				hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
				hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
		};
})();

// `stringInputToObject`
// Permissive string parsing.	Take in a number of formats, and output an object
// based on detected format.	Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

		color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
		var named = false;
		if (names[color]) {
				color = names[color];
				named = true;
		}
		else if (color == 'transparent') {
				return { r: 0, g: 0, b: 0, a: 0, format: "name" };
		}

		// Try to match string input using regular expressions.
		// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
		// Just return an object and let the conversion functions handle that.
		// This way the result will be the same whether the tinycolor is initialized with string or object.
		var match;
		if ((match = matchers.rgb.exec(color))) {
				return { r: match[1], g: match[2], b: match[3] };
		}
		if ((match = matchers.rgba.exec(color))) {
				return { r: match[1], g: match[2], b: match[3], a: match[4] };
		}
		if ((match = matchers.hsl.exec(color))) {
				return { h: match[1], s: match[2], l: match[3] };
		}
		if ((match = matchers.hsla.exec(color))) {
				return { h: match[1], s: match[2], l: match[3], a: match[4] };
		}
		if ((match = matchers.hsv.exec(color))) {
				return { h: match[1], s: match[2], v: match[3] };
		}
		if ((match = matchers.hsva.exec(color))) {
				return { h: match[1], s: match[2], v: match[3], a: match[4] };
		}
		if ((match = matchers.hex8.exec(color))) {
				return {
						a: convertHexToDecimal(match[1]),
						r: parseIntFromHex(match[2]),
						g: parseIntFromHex(match[3]),
						b: parseIntFromHex(match[4]),
						format: named ? "name" : "hex8"
				};
		}
		if ((match = matchers.hex6.exec(color))) {
				return {
						r: parseIntFromHex(match[1]),
						g: parseIntFromHex(match[2]),
						b: parseIntFromHex(match[3]),
						format: named ? "name" : "hex"
				};
		}
		if ((match = matchers.hex3.exec(color))) {
				return {
						r: parseIntFromHex(match[1] + '' + match[1]),
						g: parseIntFromHex(match[2] + '' + match[2]),
						b: parseIntFromHex(match[3] + '' + match[3]),
						format: named ? "name" : "hex"
				};
		}

		return false;
}

function validateWCAG2Parms(parms) {
		// return valid WCAG2 parms for isReadable.
		// If input parms are invalid, return {"level":"AA", "size":"small"}
		var level, size;
		parms = parms || {"level":"AA", "size":"small"};
		level = (parms.level || "AA").toUpperCase();
		size = (parms.size || "small").toLowerCase();
		if (level !== "AA" && level !== "AAA") {
				level = "AA";
		}
		if (size !== "small" && size !== "large") {
				size = "small";
		}
		return {"level":level, "size":size};
}
// Node: Export function
if (typeof module !== "undefined" && module.exports) {
		module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
		window.tinycolor = tinycolor;
}

})();


/***/ })

});
//# sourceMappingURL=zyx2f32347f3ae915220c2b.js.map