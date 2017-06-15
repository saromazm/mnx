webpackJsonp([8],{

/***/ "./node_modules/antd/lib/col/index.js":
/* no static exports found */
/* exports used: default */
/*!*********************************!*\
  !*** ./~/antd/lib/col/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./~/antd/lib/grid/col.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var stringOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]);
var objectOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].number]);

var Col = function (_React$Component) {
    (0, _inherits3['default'])(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3['default'])(this, Col);
        return (0, _possibleConstructorReturn3['default'])(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
                var _assign;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if ((0, _typeof3['default'])(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = (0, _objectAssign2['default'])({}, sizeClassObj, (_assign = {}, (0, _defineProperty3['default'])(_assign, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3['default'])(_assign, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), (0, _defineProperty3['default'])(_assign, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty3['default'])(_assign, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), (0, _defineProperty3['default'])(_assign, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _assign));
            });
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + span, span !== undefined), (0, _defineProperty3['default'])(_classNames, prefixCls + '-order-' + order, order), (0, _defineProperty3['default'])(_classNames, prefixCls + '-offset-' + offset, offset), (0, _defineProperty3['default'])(_classNames, prefixCls + '-push-' + push, push), (0, _defineProperty3['default'])(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: classes }),
                children
            );
        }
    }]);
    return Col;
}(_react2['default'].Component);

exports['default'] = Col;

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./~/antd/lib/grid/index.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Row = _row2['default'];
exports.Col = _col2['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./~/antd/lib/grid/row.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Row = function (_React$Component) {
    (0, _inherits3['default'])(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3['default'])(this, Row);
        return (0, _possibleConstructorReturn3['default'])(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Row, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                gutter = _a.gutter,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "gutter", "style", "children", "prefixCls"]);
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, !type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? (0, _objectAssign2['default'])({}, {
                marginLeft: gutter / -2,
                marginRight: gutter / -2
            }, style) : style;
            var cols = _react.Children.map(children, function (col) {
                if (!col) {
                    return null;
                }
                if (col.props && gutter > 0) {
                    return (0, _react.cloneElement)(col, {
                        style: (0, _objectAssign2['default'])({}, {
                            paddingLeft: gutter / 2,
                            paddingRight: gutter / 2
                        }, col.props.style)
                    });
                }
                return col;
            });
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: classes, style: rowStyle }),
                cols
            );
        }
    }]);
    return Row;
}(_react2['default'].Component);

exports['default'] = Row;

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: _propTypes2['default'].string,
    align: _propTypes2['default'].string,
    justify: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    gutter: _propTypes2['default'].number,
    prefixCls: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/group.js":
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./~/antd/lib/radio/group.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _radio = __webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCheckedValue(children) {
    var value = null;
    var matched = false;
    _react2['default'].Children.forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    (0, _inherits3['default'])(RadioGroup, _React$Component);

    function RadioGroup(props) {
        (0, _classCallCheck3['default'])(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    (0, _createClass3['default'])(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-radio-group' : _props$prefixCls,
                _props$className = props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classString = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + props.size, props.size), className);
            var children = props.children;
            // 如果存在 options, 优先使用
            if (props.options && props.options.length > 0) {
                children = props.options.map(function (option, index) {
                    if (typeof option === 'string') {
                        return _react2['default'].createElement(
                            _radio2['default'],
                            { key: index, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
                            option
                        );
                    } else {
                        return _react2['default'].createElement(
                            _radio2['default'],
                            { key: index, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
                            option.label
                        );
                    }
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                children
            );
        }
    }]);
    return RadioGroup;
}(_react2['default'].Component);

exports['default'] = RadioGroup;

RadioGroup.defaultProps = {
    disabled: false
};
RadioGroup.childContextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/index.js":
/* no static exports found */
/* exports used: default */
/*!***********************************!*\
  !*** ./~/antd/lib/radio/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Button = undefined;

var _radio = __webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

var _group = __webpack_require__(/*! ./group */ "./node_modules/antd/lib/radio/group.js");

var _group2 = _interopRequireDefault(_group);

var _radioButton = __webpack_require__(/*! ./radioButton */ "./node_modules/antd/lib/radio/radioButton.js");

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_radio2['default'].Button = _radioButton2['default'];
_radio2['default'].Group = _group2['default'];
exports.Button = _radioButton2['default'];
exports.Group = _group2['default'];
exports['default'] = _radio2['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/radio.js":
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./~/antd/lib/radio/radio.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCheckbox = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Radio = function (_React$Component) {
    (0, _inherits3['default'])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3['default'])(this, Radio);
        return (0, _possibleConstructorReturn3['default'])(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState) || !(0, _shallowequal2['default'])(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

            var radioGroup = context.radioGroup;

            var radioProps = Object.assign({}, restProps);
            if (radioGroup) {
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));
            return _react2['default'].createElement(
                'label',
                { className: wrapperClassString, style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                _react2['default'].createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, radioProps, { prefixCls: prefixCls })),
                children !== undefined ? _react2['default'].createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);
    return Radio;
}(_react2['default'].Component);

exports['default'] = Radio;

Radio.defaultProps = {
    prefixCls: 'ant-radio',
    type: 'radio'
};
Radio.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/radioButton.js":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/antd/lib/radio/radioButton.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radio = __webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RadioButton = function (_React$Component) {
    (0, _inherits3['default'])(RadioButton, _React$Component);

    function RadioButton() {
        (0, _classCallCheck3['default'])(this, RadioButton);
        return (0, _possibleConstructorReturn3['default'])(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = Object.assign({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }
            return _react2['default'].createElement(_radio2['default'], radioProps);
        }
    }]);
    return RadioButton;
}(_react2['default'].Component);

exports['default'] = RadioButton;

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
RadioButton.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/* no static exports found */
/* exports used: default */
/*!*********************************!*\
  !*** ./~/antd/lib/row/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":false,\"presets\":[[\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-latest/lib/index.js\",{\"es2015\":{\"modules\":false}}],\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-stage-2/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react-hmre/index.js\"],\"plugins\":[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-class-properties/lib/index.js\",[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",{\"useBuiltIns\":true}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-runtime/lib/index.js\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Users/MiKE/Development/www/mnx/node_modules/babel-runtime\"}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-import/lib/index.js\",[{\"libraryName\":\"antd\"},{\"libraryName\":\"material-ui\",\"libraryDirectory\":\"components\",\"camel2DashComponentName\":false}]]]}!./node_modules/eslint-loader/index.js?{\"configFile\":\"/Users/MiKE/Development/www/mnx/config_environment/eslint.js\",\"useEslintrc\":false}!./resources/react/modules/testing/Fonts.js":
/* exports provided: default */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?{"babelrc":false,"cacheDirectory":false,"presets":[["/Users/MiKE/Development/www/mnx/~/babel-preset-latest/lib/index.js",{"es2015":{"modules":false}}],"/Users/MiKE/Development/www/mnx/~/babel-preset-stage-2/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react-hmre/index.js"],"plugins":["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-class-properties/lib/index.js",["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-object-rest-spread/lib/index.js",{"useBuiltIns":true}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-runtime/lib/index.js",{"helpers":false,"polyfill":false,"regenerator":true,"moduleName":"/Users/MiKE/Development/www/mnx/~/babel-runtime"}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-import/lib/index.js",[{"libraryName":"antd"},{"libraryName":"material-ui","libraryDirectory":"components","camel2DashComponentName":false}]]]}!./~/eslint-loader?{"configFile":"/Users/MiKE/Development/www/mnx/config_environment/eslint.js","useEslintrc":false}!./resources/react/modules/testing/Fonts.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__ = __webpack_require__(/*! ./~/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper__ = __webpack_require__(/*! react-autobind-helper */ "./node_modules/react-autobind-helper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_autobind_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_scrollbars2__ = __webpack_require__(/*! react-scrollbars2 */ "../scrollbars2/compiled/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_scrollbars2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_scrollbars2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sideBars_LeftBarSearchField__ = __webpack_require__(/*! ../../components/sideBars/LeftBarSearchField */ "./resources/react/components/sideBars/LeftBarSearchField.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_global_ColorPicker__ = __webpack_require__(/*! ../../components/global/ColorPicker */ "./resources/react/components/global/ColorPicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_global_ModuleContainer__ = __webpack_require__(/*! ../../components/global/ModuleContainer */ "./resources/react/components/global/ModuleContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_internal_TouchRipple__ = __webpack_require__(/*! material-ui/internal/TouchRipple */ "./node_modules/material-ui/internal/TouchRipple.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_internal_TouchRipple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_internal_TouchRipple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_copy_to_clipboard__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_copy_to_clipboard__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Fonts: {
        displayName: 'Fonts'
    },
    FontCard: {
        displayName: 'FontCard'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/testing/Fonts.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/testing/Fonts.js',
    components: _components,
    locals: [],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2(_UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

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







/*import ModuleContainer from '../../components/global/ModuleContainer';
const { ModuleTopContainer, ModuleBodyContainer, ModuleHeader } = ModuleContainer;*/





var FONT_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/font.svg */ "./resources/assets/media/images/optimized/font.svg");

var Fonts = _wrapComponent('Fonts')((_temp = _class = function (_React$Component) {
    _inherits(Fonts, _React$Component);

    function Fonts(props) {
        _classCallCheck(this, Fonts);

        var _this = _possibleConstructorReturn(this, (Fonts.__proto__ || Object.getPrototypeOf(Fonts)).call(this, props));

        _this.state = {
            name: 'component',
            filter: '',
            color: null
        };

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);
        return _this;
    }

    _createClass(Fonts, [{
        key: 'onColorChange',


        /** E V E N T S **/
        /** ************************************************* **/
        value: function onColorChange(color) {
            var rgb = color.rgb;
            var colorRGBA = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
            this.setState({ color: colorRGBA });
        }
    }, {
        key: 'renderCells',
        value: function renderCells(cellInfo, index) {
            var indx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


            var iconLabel = cellInfo.replace(/icon/g, " ").replace(/(-|\.)/g, "").replace(/(\s*\w+\s+)([0-9]+?)/g, " $1 $2");
            var isAntIcon = cellInfo.indexOf('anticon') > -1;
            var iconCssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()(cellInfo, {
                anticon: isAntIcon,
                icon: !isAntIcon
            });
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FontCard, {
                color: this.state.color,
                index: indx,
                title: iconLabel,
                toCopy: cellInfo,
                icon: iconCssClass });
            /*return (
             <div className="FontCard--SC" >
             <div className="index" >{indx}</div>
             <div className="title" >{iconLabel}</div>
             <i className={iconCssClass} />
             </div>
             )*/
        }
    }, {
        key: 'onFilterChange',
        value: function onFilterChange(filter) {
            this.setState({ filter: filter });
        }
    }, {
        key: '_render',
        value: function _render() {

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                'FONTS'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var lines = this.props.lines;


            var filteredLines = lines.filter(function (val) {
                return val.indexOf(_this2.state.filter) > -1;
            });

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10__components_global_ModuleContainer__["c" /* default */],
                null,
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_10__components_global_ModuleContainer__["d" /* ModuleTopContainer */],
                    { headerIndex: 0, optionsIndex: 1 },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_global_ModuleContainer__["e" /* ModuleHeader */], { title: 'Fonts',
                        subtitle: 'showing font sets',
                        icon: FONT_ICON,
                        status: 'disabled' }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'optionsWrapper' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { style: { overflow: 'hidden', display: 'inline-block' } },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_sideBars_LeftBarSearchField__["a" /* default */], {
                                hintText: "search icon",
                                value: this.state.filter,
                                isVisible: true,
                                isBackEnabled: false,
                                counter: filteredLines.length,
                                onChange: this.onFilterChange })
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_global_ColorPicker__["a" /* default */], { onChangeColor: this.onColorChange })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_10__components_global_ModuleContainer__["g" /* ModuleBodyContainer */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_scrollbars2__["InfiniteList"], {
                        defaultRowHeight: 170 / 4,
                        totalItems: filteredLines.length,
                        items: filteredLines, offset: 10,
                        renderFunc: this.renderCells,
                        visibles: 36,
                        scrollbarProps: { injectStyle: false },
                        className: 'FontCard--SC-container',
                        pageClassName: 'FontCard--SC-pages'
                    })
                )
            );
        }
    }]);

    return Fonts;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class.defaultProps = {}, _class.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
}, _class.contextTypes = {
    muiTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
}, _temp));

/** F O N T  C A R D  C O M P O N E N T **/
/** ************************************************* **/





var FontCard = _wrapComponent('FontCard')((_temp2 = _class2 = function (_React$Component2) {
    _inherits(FontCard, _React$Component2);

    function FontCard(props) {
        _classCallCheck(this, FontCard);

        var _this3 = _possibleConstructorReturn(this, (FontCard.__proto__ || Object.getPrototypeOf(FontCard)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this3);
        return _this3;
    }

    _createClass(FontCard, [{
        key: 'onCopy',
        value: function onCopy() {
            console.log("copied");
        }
    }, {
        key: 'render',
        value: function render() {
            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()("FontCard--SC", this.props.className);
            var iconStyle = { color: this.props.color };
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass, tabIndex: '0' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11_material_ui_internal_TouchRipple___default.a,
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'index' },
                        this.props.index + 1
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'title' },
                        this.props.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { style: iconStyle, className: this.props.icon }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12_react_copy_to_clipboard___default.a,
                        { text: this.props.toCopy, onCopy: this.onCopy },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'button' },
                            'copy to clipboard'
                        )
                    )
                )
            );
        }
    }]);

    return FontCard;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class2.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    icon: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    toCopy: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    index: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
}, _temp2));

/* harmony default export */ __webpack_exports__["default"] = (Fonts);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/copy-to-clipboard/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/debounce.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/each.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/forEach.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./~/lodash/now.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/throttle.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/* exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, default */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/material-colors/dist/colors.es2015.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ "./node_modules/rc-checkbox/es/Checkbox.js":
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./~/rc-checkbox/es/Checkbox.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin__ = __webpack_require__(/*! rc-util/es/PureRenderMixin */ "./node_modules/rc-util/es/PureRenderMixin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);












var Checkbox = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Checkbox, _React$Component);

  function Checkbox(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Checkbox);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _initialiseProps.call(_this);

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin___default.a.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          style = _props.style,
          name = _props.name,
          type = _props.type,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          tabIndex = _props.tabIndex,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          others = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['prefixCls', 'className', 'style', 'name', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur']);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = others[key];
        }
        return prev;
      }, {});

      var checked = this.state.checked;

      var classString = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(prefixCls, className, (_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-checked', checked), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'span',
        { className: classString, style: style },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          name: name,
          type: type,
          readOnly: readOnly,
          disabled: disabled,
          tabIndex: tabIndex,
          className: prefixCls + '-input',
          checked: !!checked,
          onClick: onClick,
          onFocus: onFocus,
          onBlur: onBlur,
          onChange: this.handleChange
        }, globalProps)),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('span', { className: prefixCls + '-inner' })
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

Checkbox.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  name: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),
  checked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),
  disabled: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  onFocus: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  readOnly: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
};
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var props = _this2.props;

    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      _this2.setState({
        checked: e.target.checked
      });
    }
    props.onChange({
      target: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./node_modules/rc-checkbox/es/index.js":
/* exports provided: default */
/* all exports used */
/*!***********************************!*\
  !*** ./~/rc-checkbox/es/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/rc-checkbox/es/Checkbox.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Checkbox__["a"]; });


/***/ }),

/***/ "./node_modules/rc-util/es/PureRenderMixin.js":
/* no static exports found */
/* exports used: default */
/*!*****************************************!*\
  !*** ./~/rc-util/es/PureRenderMixin.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var shallowEqual = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/react-copy-to-clipboard/lib/Component.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _text = _props.text,
          _onCopy = _props.onCopy,
          _options = _props.options,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/* no static exports found */
/* exports used: default */
/*!************************************************!*\
  !*** ./~/react-copy-to-clipboard/lib/index.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/reactcss/lib/autoprefix.js":
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/reactcss/lib/autoprefix.js ***!
  \**************************************/
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

/***/ "./node_modules/reactcss/lib/components/active.js":
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/reactcss/lib/components/active.js ***!
  \*********************************************/
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

/***/ "./node_modules/reactcss/lib/components/hover.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/reactcss/lib/components/hover.js ***!
  \********************************************/
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

/***/ "./node_modules/reactcss/lib/flattenNames.js":
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/reactcss/lib/flattenNames.js ***!
  \****************************************/
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

/***/ "./node_modules/reactcss/lib/index.js":
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./~/reactcss/lib/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(/*! ./flattenNames */ "./node_modules/reactcss/lib/flattenNames.js");

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(/*! ./mergeClasses */ "./node_modules/reactcss/lib/mergeClasses.js");

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(/*! ./autoprefix */ "./node_modules/reactcss/lib/autoprefix.js");

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(/*! ./components/hover */ "./node_modules/reactcss/lib/components/hover.js");

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(/*! ./components/active */ "./node_modules/reactcss/lib/components/active.js");

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(/*! ./loop */ "./node_modules/reactcss/lib/loop.js");

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

/***/ "./node_modules/reactcss/lib/loop.js":
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./~/reactcss/lib/loop.js ***!
  \********************************/
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

/***/ "./node_modules/reactcss/lib/mergeClasses.js":
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/reactcss/lib/mergeClasses.js ***!
  \****************************************/
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

/***/ "./node_modules/toggle-selection/index.js":
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./~/toggle-selection/index.js ***!
  \*************************************/
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./resources/assets/media/images/optimized/font.svg":
/* no static exports found */
/* all exports used */
/*!**********************************************************!*\
  !*** ./resources/assets/media/images/optimized/font.svg ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-2ZFCM2p.svg";

/***/ }),

/***/ "./resources/react/components/global/ColorPicker.js":
/* exports provided: default */
/* exports used: default */
/*!**********************************************************!*\
  !*** ./resources/react/components/global/ColorPicker.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__ = __webpack_require__(/*! ./~/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper__ = __webpack_require__(/*! react-autobind-helper */ "./node_modules/react-autobind-helper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_autobind_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__ = __webpack_require__(/*! material-ui/styles/colors */ "./node_modules/material-ui/styles/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_color__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_color__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ColorPicker: {
        displayName: 'ColorPicker'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/ColorPicker.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/ColorPicker.js',
    components: _components,
    locals: [],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2(_UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

/*
 * File: colorPicker.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   31 Mar, 2017 | 5:58 PM
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

//noinspection JSUnresolvedVariable








var ColorPicker = _wrapComponent('ColorPicker')((_temp = _class = function (_React$Component) {
    _inherits(ColorPicker, _React$Component);

    function ColorPicker(props) {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);

        _this.state = {
            showPicker: false,
            color: props.color
        };
        return _this;
    }

    /** E V E N T S **/
    /** ************************************************* **/


    _createClass(ColorPicker, [{
        key: 'addEvents',
        value: function addEvents() {
            window.addEventListener('click', this.onClosePicker);
        }
    }, {
        key: 'removeEvents',
        value: function removeEvents() {
            window.removeEventListener('click', this.onClosePicker);
        }
    }, {
        key: 'onChangeColor',
        value: function onChangeColor(color) {
            var rgb = color.rgb;
            var colorRGBA = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
            this.props.onChangeColor(color);
            this.setState({ color: colorRGBA, showPicker: !this.props.closeOnSelect });
        }
    }, {
        key: 'onOpenPicker',
        value: function onOpenPicker() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (event) event.stopPropagation();
            this.props.onOpenPicker();
            this.setState({ showPicker: true }, this.addEvents);
        }
    }, {
        key: 'onClosePicker',
        value: function onClosePicker() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (event) event.stopPropagation();
            this.props.onClosePicker();
            this.setState({ showPicker: false }, this.removeEvents);
        }

        /** R E N D E R **/
        /** ************************************************* **/

    }, {
        key: 'render',
        value: function render() {
            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ColorPicker--SC', this.props.className);
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass, onClick: this.onOpenPicker },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: 'content', style: { backgroundColor: this.state.color } }),
                this.renderPickerControl()
            );
        }
    }, {
        key: 'renderPickerControl',
        value: function renderPickerControl() {
            if (!this.state.showPicker) return null;
            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('color-picker', this.props.openDirection);
            var colors = this.props.colors;
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_color__["BlockPicker"], { colors: colors, color: this.state.color, onChange: this.onChangeColor })
            );
        }
    }]);

    return ColorPicker;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class.defaultProps = {
    color: __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__["lightBlack"],
    colors: ['#CCC', __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__["lightBlack"], __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__["deepOrange400"], __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__["blue400"]],
    openDirection: 'left',
    onChangeColor: mnx.noop,
    onOpenPicker: mnx.noop,
    onClosePicker: mnx.noop,
    closeOnSelect: false
}, _class.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    colors: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
    openDirection: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    onChangeColor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onOpenPicker: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onClosePicker: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    closeOnSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
}, _class.contextTypes = {
    muiTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (ColorPicker);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/react/components/global/ModuleContainer.js":
/* exports provided: ModuleTopContainer, ModuleBodyContainer, ModuleBodyView, ModuleHeader, ModuleViewSelector, ModuleInnerPreview, redirectToDefaultView, redirectToCurrentView, saveHashAsCurrentView, default */
/* exports used: saveHashAsCurrentView, redirectToDefaultView, default, ModuleTopContainer, ModuleHeader, ModuleViewSelector, ModuleBodyContainer, ModuleBodyView, ModuleInnerPreview */
/*!**************************************************************!*\
  !*** ./resources/react/components/global/ModuleContainer.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModuleTopContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ModuleBodyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ModuleBodyView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ModuleHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModuleViewSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ModuleInnerPreview; });
/* harmony export (immutable) */ __webpack_exports__["b"] = redirectToDefaultView;
/* unused harmony export redirectToCurrentView */
/* harmony export (immutable) */ __webpack_exports__["a"] = saveHashAsCurrentView;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_radio__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__ = __webpack_require__(/*! ./~/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SimpleSvgImageLoader__ = __webpack_require__(/*! ./SimpleSvgImageLoader */ "./resources/react/components/global/SimpleSvgImageLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_redux__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_scrollbars2__ = __webpack_require__(/*! react-scrollbars2 */ "../scrollbars2/compiled/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_scrollbars2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_scrollbars2__);








var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4, _class5, _temp6, _class6, _temp7;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ModuleContainer: {
        displayName: 'ModuleContainer'
    },
    ModuleTopContainer: {
        displayName: 'ModuleTopContainer'
    },
    ModuleBodyContainer: {
        displayName: 'ModuleBodyContainer'
    },
    ModuleBodyView: {
        displayName: 'ModuleBodyView'
    },
    ModuleHeader: {
        displayName: 'ModuleHeader'
    },
    ModuleViewSelector: {
        displayName: 'ModuleViewSelector'
    },
    ModuleInnerPreview: {
        displayName: 'ModuleInnerPreview'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_6__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/ModuleContainer.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_5_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_4__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/ModuleContainer.js',
    components: _components,
    locals: [],
    imports: [__WEBPACK_IMPORTED_MODULE_5_react___default.a, __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2(_UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

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



//import autobind from 'react-autobind-helper';


/** M O D U L E   C O N T A I N E R **/
/** ************************************************* **/

var ModuleContainer = _wrapComponent('ModuleContainer')((_temp = _class = function (_Component) {
    _inherits(ModuleContainer, _Component);

    function ModuleContainer() {
        _classCallCheck(this, ModuleContainer);

        return _possibleConstructorReturn(this, (ModuleContainer.__proto__ || Object.getPrototypeOf(ModuleContainer)).apply(this, arguments));
    }

    _createClass(ModuleContainer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'ModuleContainer--CT' },
                this.props.children
            );
        }
    }]);

    return ModuleContainer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class.propTypes = {}, _class.defaultProps = {}, _temp));

/** M O D U L E   T O P **/
/** ************************************************* **/


var ModuleTopContainer = _wrapComponent('ModuleTopContainer')((_temp2 = _class2 = function (_Component2) {
    _inherits(ModuleTopContainer, _Component2);

    function ModuleTopContainer() {
        _classCallCheck(this, ModuleTopContainer);

        return _possibleConstructorReturn(this, (ModuleTopContainer.__proto__ || Object.getPrototypeOf(ModuleTopContainer)).apply(this, arguments));
    }

    _createClass(ModuleTopContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                headerIndex = _props.headerIndex,
                viewSelectorIndex = _props.viewSelectorIndex,
                optionsIndex = _props.optionsIndex;


            if (!Array.isArray(children)) {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'ModuleContainer-Top--CT' },
                    children
                );
            }

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'ModuleContainer-Top--CT' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a,
                    { type: 'flex', align: 'middle', justify: 'space-between' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a,
                        { xs: 24, sm: { span: 14, offset: 0 } },
                        headerIndex !== null && children[headerIndex]
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a,
                        { xs: 24, sm: 8 },
                        optionsIndex !== null && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'div',
                            { className: 'options' },
                            optionsIndex && children[optionsIndex]
                        )
                    )
                ),
                viewSelectorIndex && children[viewSelectorIndex]
            );
        }
    }]);

    return ModuleTopContainer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class2.propTypes = {
    viewSelectorIndex: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
    headerIndex: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
    optionsIndex: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number
}, _temp2));

/** M O D U L E   B O D Y **/
/** ************************************************* **/
var ModuleBodyContainer = _wrapComponent('ModuleBodyContainer')(function (_Component3) {
    _inherits(ModuleBodyContainer, _Component3);

    function ModuleBodyContainer() {
        _classCallCheck(this, ModuleBodyContainer);

        return _possibleConstructorReturn(this, (ModuleBodyContainer.__proto__ || Object.getPrototypeOf(ModuleBodyContainer)).apply(this, arguments));
    }

    _createClass(ModuleBodyContainer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'ModuleContainer-Body--CT' },
                this.props.children
            );
        }
    }]);

    return ModuleBodyContainer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]));

/** M O D U L E   B O D Y   V I E W**/
/** ************************************************* **/
var ModuleBodyView = _wrapComponent('ModuleBodyView')((_temp3 = _class3 = function (_Component4) {
    _inherits(ModuleBodyView, _Component4);

    function ModuleBodyView() {
        _classCallCheck(this, ModuleBodyView);

        return _possibleConstructorReturn(this, (ModuleBodyView.__proto__ || Object.getPrototypeOf(ModuleBodyView)).apply(this, arguments));
    }

    _createClass(ModuleBodyView, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                selector = _props2.selector,
                selectors = _props2.selectors,
                current = _props2.current,
                visible = _props2.visible,
                isDefault = _props2.isDefault;


            var inSelectors = selectors ? selectors.indexOf(current) > -1 : false;
            var isSelected = selector ? current === selector : false;
            var displayable = visible || isSelected || inSelectors || isDefault && current === '';
            var style = { display: displayable ? 'block' : 'none' };

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { style: style, className: 'ModuleContainer-BodyView--CT' },
                this.props.children
            );
        }
    }]);

    return ModuleBodyView;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class3.defaultProps = {
    isDefault: false,
    current: ''
}, _class3.propTypes = {
    visible: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
    current: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    selector: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    selectors: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.array,
    isDefault: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
}, _temp3));

/** M O D U L E   H E A D E R **/
/** ************************************************* **/


var ModuleHeader = _wrapComponent('ModuleHeader')((_temp4 = _class4 = function (_Component5) {
    _inherits(ModuleHeader, _Component5);

    function ModuleHeader() {
        _classCallCheck(this, ModuleHeader);

        return _possibleConstructorReturn(this, (ModuleHeader.__proto__ || Object.getPrototypeOf(ModuleHeader)).apply(this, arguments));
    }

    _createClass(ModuleHeader, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                title = _props3.title,
                subtitle = _props3.subtitle,
                icon = _props3.icon,
                status = _props3.status,
                extra = _props3.extra,
                details = _props3.details;


            var iconCss = __WEBPACK_IMPORTED_MODULE_8_classnames___default()("image", status || '');

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'ModuleContainer-Header--CT' },
                icon !== null && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SimpleSvgImageLoader__["a" /* default */], { key: 'headerImage', imageName: icon, className: iconCss }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'content' },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { className: 'mnx title big underlined active' },
                        title,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'div',
                            { className: 'subtitle uppercased' },
                            subtitle
                        )
                    ),
                    details !== null && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { key: 'detailsHeader', className: 'details' },
                        details
                    ),
                    extra !== null && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { key: 'extraHeader', className: 'extra' },
                        extra
                    )
                )
            );
        }
    }]);

    return ModuleHeader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class4.propTypes = {
    title: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
    subtitle: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
    icon: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    status: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    extraIndex: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
    detailsIndex: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
    extra: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.element,
    details: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.element
}, _temp4));

/** M O D U L E   V I E W   S E L E C T O R **/
/** ************************************************* **/

var RadioGroup = __WEBPACK_IMPORTED_MODULE_0_antd_lib_radio___default.a.Group;
var RadioButton = __WEBPACK_IMPORTED_MODULE_0_antd_lib_radio___default.a.Button;


var ModuleViewSelector = _wrapComponent('ModuleViewSelector')((_temp6 = _class5 = function (_Component6) {
    _inherits(ModuleViewSelector, _Component6);

    function ModuleViewSelector() {
        var _ref;

        var _temp5, _this6, _ret;

        _classCallCheck(this, ModuleViewSelector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp5 = (_this6 = _possibleConstructorReturn(this, (_ref = ModuleViewSelector.__proto__ || Object.getPrototypeOf(ModuleViewSelector)).call.apply(_ref, [this].concat(args))), _this6), _this6.onChange = function (event) {
            var _this6$props$location = _this6.props.location,
                pathname = _this6$props$location.pathname,
                hash = _this6$props$location.hash;
            var value = event.target.value;
            //const isDefault          = value === this.props.defaultView;

            var newURL = pathname + value;

            if (newURL === pathname + hash) return;

            _this6.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_router_redux__["b" /* push */])(pathname + value));
            _this6.props.onChange(value, event);
        }, _temp5), _possibleConstructorReturn(_this6, _ret);
    }

    _createClass(ModuleViewSelector, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            var groupCSS = 'RadioGroup--AntDesign';
            var views = this.props.views;

            var viewsKeys = Object.keys(views);

            if (views.length < 1) return null;

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'ModuleContainer-ViewSelector--CT' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    RadioGroup,
                    { className: groupCSS,
                        size: 'small',
                        value: this.props.current,
                        onChange: this.onChange },
                    viewsKeys.map(function (key) {
                        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            RadioButton,
                            { className: 'RadioButton--AntDesign',
                                key: key + "_view_selector",
                                value: _this7.props.views[key].code },
                            _this7.props.views[key].label
                        );
                    })
                )
            );
        }
    }]);

    return ModuleViewSelector;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class5.defaultProps = {
    views: {},
    onChange: mnx.noop
}, _class5.propTypes = {
    views: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
    onChange: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    location: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
    current: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    defaultView: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    dispatch: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired
}, _temp6));

/** M O D U L E  I N N E R  P R E V I E W **/
/** ************************************************* **/


var ModuleInnerPreview = _wrapComponent('ModuleInnerPreview')((_temp7 = _class6 = function (_Component7) {
    _inherits(ModuleInnerPreview, _Component7);

    function ModuleInnerPreview(props) {
        _classCallCheck(this, ModuleInnerPreview);

        var _this8 = _possibleConstructorReturn(this, (ModuleInnerPreview.__proto__ || Object.getPrototypeOf(ModuleInnerPreview)).call(this, props));

        _this8.scrollbarObj = null;
        _this8.state = {
            selected: null
        };
        _this8.simpleList = _this8.simpleList.bind(_this8);
        _this8.content = _this8.content.bind(_this8);
        return _this8;
    }

    _createClass(ModuleInnerPreview, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.scrollbarObj) {
                this.scrollbarObj.api.update();
            }
        }
    }, {
        key: 'simpleList',
        value: function simpleList() {
            var _this9 = this;

            var _props4 = this.props,
                elements = _props4.elements,
                renderFunction = _props4.renderFunction;

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_react_scrollbars2__["Scrollbars2"],
                { ref: function ref(_ref2) {
                        _this9.scrollbarObj = _ref2;
                    } },
                elements.map(renderFunction)
            );
        }
    }, {
        key: 'content',
        value: function content() {
            if (!this.props.empty) {
                return this.props.children[0];
            }

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'arrows' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('object', { data: this.props.icon, type: 'image/svg+xml' }),
                this.props.children[0]
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                children = _props5.children,
                icon = _props5.icon,
                elements = _props5.elements;

            var SimpleList = this.simpleList;
            var content = elements ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(SimpleList, null) : children[3] || null;

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'miniModule' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'drawer' },
                    this.content()
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { className: 'content' },
                    children[1],
                    content,
                    children[2]
                )
            );
        }
    }]);

    return ModuleInnerPreview;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class6.propTypes = {
    icon: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
    renderFunction: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    simple: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
    empty: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
}, _temp7));

/** U T I L I T I E S **/
/** ************************************************* **/

function redirectToDefaultView(location, defaultView, dispatch) {
    var pathname = location.pathname,
        hash = location.hash;

    if (hash === '') {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_router_redux__["c" /* replace */])(pathname + defaultView));
    }
}

function redirectToCurrentView(location, currentView, dispatch) {
    var pathname = location.pathname,
        hash = location.hash;

    if (hash === '') {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_router_redux__["c" /* replace */])(pathname + currentView));
    }
}

function saveHashAsCurrentView(newLocation, prevLocation, owner) {

    var nextHash = newLocation.hash;
    var prevHash = prevLocation.hash;

    if (nextHash !== prevHash && nextHash !== '') {
        owner.setState({
            currentView: nextHash
        });
    } else if (nextHash === '' && owner.state.currentView) {
        redirectToCurrentView(newLocation, owner.state.currentView, owner.props.dispatch);
    }
}

/* harmony default export */ __webpack_exports__["c"] = (ModuleContainer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/react/components/global/SimpleSvgImageLoader.js":
/* exports provided: default */
/* exports used: default */
/*!*******************************************************************!*\
  !*** ./resources/react/components/global/SimpleSvgImageLoader.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/*
 * File: SimpleSvgImageLoader.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   20 Mar, 2017 | 2:17 PM
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




var SimpleSvgImageLoader = function SimpleSvgImageLoader(props) {

    var classCSS = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('SimpleSvgImageLoader--SC', props.className || '');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classCSS },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: props.imageName, alt: '', style: props.style })
    );
};

SimpleSvgImageLoader.defaultProps = { imageName: '' };
SimpleSvgImageLoader.propTypes = {
    imageName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (SimpleSvgImageLoader);

/***/ })

});
//# sourceMappingURL=zyx7cdc706d40c466ec43e7.js.map