webpackJsonp([7],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":false,\"presets\":[[\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-latest/lib/index.js\",{\"es2015\":{\"modules\":false}}],\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-stage-2/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react-hmre/index.js\"],\"plugins\":[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-class-properties/lib/index.js\",[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",{\"useBuiltIns\":true}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-runtime/lib/index.js\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Users/MiKE/Development/www/mnx/node_modules/babel-runtime\"}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-import/lib/index.js\",[{\"libraryName\":\"antd\"},{\"libraryName\":\"material-ui\",\"libraryDirectory\":\"components\",\"camel2DashComponentName\":false}]]]}!./node_modules/eslint-loader/index.js?{\"configFile\":\"/Users/MiKE/Development/www/mnx/config_environment/eslint.js\",\"useEslintrc\":false}!./resources/react/modules/management/Company.js":
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?{"babelrc":false,"cacheDirectory":false,"presets":[["/Users/MiKE/Development/www/mnx/~/babel-preset-latest/lib/index.js",{"es2015":{"modules":false}}],"/Users/MiKE/Development/www/mnx/~/babel-preset-stage-2/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react-hmre/index.js"],"plugins":["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-class-properties/lib/index.js",["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-object-rest-spread/lib/index.js",{"useBuiltIns":true}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-runtime/lib/index.js",{"helpers":false,"polyfill":false,"regenerator":true,"moduleName":"/Users/MiKE/Development/www/mnx/~/babel-runtime"}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-import/lib/index.js",[{"libraryName":"antd"},{"libraryName":"material-ui","libraryDirectory":"components","camel2DashComponentName":false}]]]}!./~/eslint-loader?{"configFile":"/Users/MiKE/Development/www/mnx/config_environment/eslint.js","useEslintrc":false}!./resources/react/modules/management/Company.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_shallowequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_throttle__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sideBars_LeftBarSearchField__ = __webpack_require__(/*! ../../components/sideBars/LeftBarSearchField */ "./resources/react/components/sideBars/LeftBarSearchField.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_global_TagFilter__ = __webpack_require__(/*! ../../components/global/TagFilter */ "./resources/react/components/global/TagFilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_ProjectsList__ = __webpack_require__(/*! ../shared/ProjectsList */ "./resources/react/modules/shared/ProjectsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_ProjectsManagerUtility__ = __webpack_require__(/*! ../shared/ProjectsManagerUtility */ "./resources/react/modules/shared/ProjectsManagerUtility.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_SimpleCalendar__ = __webpack_require__(/*! ../shared/SimpleCalendar */ "./resources/react/modules/shared/SimpleCalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__ = __webpack_require__(/*! ../../components/global/ModuleContainer */ "./resources/react/components/global/ModuleContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_global_ListCell__ = __webpack_require__(/*! ../../components/global/ListCell */ "./resources/react/components/global/ListCell.js");





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Company: {
        displayName: 'Company'
    },
    UserPreview: {
        displayName: 'UserPreview'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/management/Company.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/management/Company.js',
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















var BUILDING_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/building2.svg */ "./resources/assets/media/images/optimized/building2.svg");
var USER_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/user 1.svg */ "./resources/assets/media/images/optimized/user 1.svg");
var ARROWS_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/arrows.2.svg */ "./resources/assets/media/images/optimized/arrows.2.svg");

var TABS = {
    details: { label: "Details", code: '#details' },
    users: { label: "Users", code: '#users' },
    projects: { label: "Projects", code: '#projects' },
    events: { label: "Events", code: '#events' },
    calendar: { label: "Calendar", code: '#calendar' }
};

var Company = _wrapComponent('Company')((_temp = _class = function (_React$Component) {
    _inherits(Company, _React$Component);

    function Company(props) {
        _classCallCheck(this, Company);

        var _this = _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, props));

        _this.usersFilter = function (contact, filter) {

            var fName = contact['first_names'].toLowerCase();
            var lName = contact['last_names'].toLowerCase();
            var uName = contact.user['username'].toLowerCase();
            return fName.indexOf(filter) > -1 || lName.indexOf(filter) > -1 || uName.indexOf(filter) > -1;
        };

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);

        var _props$dataLoaded = props.dataLoaded,
            participation = _props$dataLoaded.participation,
            users = _props$dataLoaded.users;


        _this.state = {
            defaultView: '#details',
            currentView: props.location.hash,
            projectsFilter: '',
            projectsSubFilter: [],
            usersFilter: '',
            usersFiltered: users,
            projectsManager: new __WEBPACK_IMPORTED_MODULE_12__shared_ProjectsManagerUtility__["a" /* default */](participation.projects, participation.events)
        };
        _this.doFilterThrothle = __WEBPACK_IMPORTED_MODULE_8_lodash_throttle___default()(_this.doFilter, 300);
        return _this;
    }

    /** O P E R A T I O N S **/
    /** ************************************************* **/

    _createClass(Company, [{
        key: 'doFilter',
        value: function doFilter(filter) {
            this.state.projectsManager.filterProjects(filter);
        }

        /** E V E N T S **/
        /** ************************************************* **/

    }, {
        key: 'onProjectsFilterChange',
        value: function onProjectsFilterChange(filter) {
            this.doFilterThrothle(filter);
            this.setState({
                projectsFilter: filter
            });
        }
    }, {
        key: 'onProjectsSubFilterFilterChange',
        value: function onProjectsSubFilterFilterChange(filters) {
            this.state.projectsManager.subFilterProjects(filters);
            this.setState({
                projectsSubFilter: filters
            });
        }
    }, {
        key: 'onUsersFilterChange',
        value: function onUsersFilterChange(filter) {
            var _this2 = this;

            var users = this.props.users;

            this.setState({
                usersFilter: filter,
                usersFiltered: users.filter(function (user) {
                    return _this2.usersFilter(user, filter);
                })
            });
        }

        /** L I F E C Y C L E **/
        /** ************************************************* **/

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
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
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var nextLocation = nextProps.location;
            var prevLocation = this.props.location;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["a" /* saveHashAsCurrentView */])(nextLocation, prevLocation, this);

            if (!__WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(nextProps.participation, this.props.participation)) {
                //dd( 'UPDATING PROPS' );
                var _nextProps$participat = nextProps.participation,
                    events = _nextProps$participat.events,
                    projects = _nextProps$participat.projects;


                this.setState({
                    projectsManager: new __WEBPACK_IMPORTED_MODULE_12__shared_ProjectsManagerUtility__["a" /* default */](projects, events, this.state.projectsFilter),
                    usersFiltered: nextProps.users.filter(function (user) {
                        return _this3.usersFilter(user, _this3.state.usersFilter);
                    })
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                location = _props.location,
                dispatch = _props.dispatch;
            var defaultView = this.state.defaultView;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["b" /* redirectToDefaultView */])(location, defaultView, dispatch);
        }
    }, {
        key: 'dataForCurrentView',
        value: function dataForCurrentView() {

            var hint = void 0;
            var counter = void 0;
            var filter = void 0;
            var search = void 0;
            var searchVisible = void 0;
            var subSearchVisible = void 0;
            var subOptions = void 0;

            switch (this.state.currentView) {

                case '#projects':
                case '#events':
                case '#calendar':
                    hint = "projects";
                    counter = this.state.projectsManager.getVisibleProjectsCount();
                    filter = this.onProjectsFilterChange;
                    search = this.state.projectsFilter;
                    searchVisible = true;
                    subSearchVisible = true;
                    subOptions = ['open', 'closed', 'upcoming', 'all'];
                    break;

                case '#users':
                    hint = "users";
                    counter = this.state.usersFiltered.length;
                    filter = this.onUsersFilterChange;
                    search = this.state.usersFilter;
                    searchVisible = true;
                    subSearchVisible = true;
                    subOptions = ['active', 'inactive', 'cancelled', 'expired', 'suspended', 'all'];
                    break;

                default:
                    hint = '';
                    counter = 0;
                    filter = mnx.noop;
                    search = '';
                    searchVisible = false;
                    subSearchVisible = false;
                    subOptions = [];
            }

            return { hint: hint, counter: counter, filter: filter, search: search, searchVisible: searchVisible, subSearchVisible: subSearchVisible, subOptions: subOptions };
        }

        /** R E N D E R **/
        /** ************************************************* **/

    }, {
        key: 'render',
        value: function render() {
            var viewData = this.dataForCurrentView();
            var cssClass = __WEBPACK_IMPORTED_MODULE_7_classnames___default()(this.props.className);
            var currentView = this.state.currentView;
            var _props$data = this.props.data,
                name = _props$data.name,
                short_name = _props$data.short_name;
            //dd( 'rendering', short_name.toUpperCase() );
            //const pp                   = new ProjectsManager( this.state.projects, this.state.events );
            //dd( pp );
            //dd("F", this.state.projectsManager.filteredProjects);

            if (true) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    'MODULE'
                );
            }

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["c" /* default */],
                { className: cssClass },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["d" /* ModuleTopContainer */],
                    { headerIndex: 0, optionsIndex: 1, viewSelectorIndex: 2 },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["e" /* ModuleHeader */], { title: short_name,
                        icon: null,
                        subtitle: name
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'optionsWrapper' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_sideBars_LeftBarSearchField__["a" /* default */], {
                                hintText: "search " + viewData.hint,
                                value: viewData.search,
                                isVisible: viewData.searchVisible,
                                isBackEnabled: false,
                                counter: viewData.counter,
                                onChange: viewData.filter })
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_global_TagFilter__["a" /* default */], {
                                options: viewData.subOptions,
                                'default': ['open'],
                                exclusive: ['all'],
                                onFilterChange: this.onProjectsSubFilterFilterChange,
                                isVisible: viewData.subSearchVisible
                            })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["f" /* ModuleViewSelector */], { views: TABS,
                        location: location,
                        dispatch: this.props.dispatch,
                        'default': this.state.defaultView,
                        current: currentView })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["g" /* ModuleBodyContainer */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["h" /* ModuleBodyView */],
                        { selector: '#details', current: currentView, isDefault: true },
                        'Details'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["h" /* ModuleBodyView */],
                        { selector: '#users', current: currentView },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(UsersList, { users: this.state.usersFiltered })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["h" /* ModuleBodyView */],
                        { selector: '#projects', current: currentView },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(PList, { projects: this.state.projectsManager.getVisibleProjects(), showEvents: false })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["h" /* ModuleBodyView */],
                        { selector: '#events', current: currentView },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(PList, { projects: this.state.projectsManager.getVisibleProjects(), showEvents: true })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["h" /* ModuleBodyView */],
                        { selector: '#calendar', current: currentView },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'cal-container' },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__shared_SimpleCalendar__["a" /* default */], {
                                projectsManager: this.state.projectsManager,
                                projects: this.state.projectsFiltered,
                                events: this.state.events })
                        )
                    )
                )
            );
        }
    }]);

    return Company;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class.defaultProps = {}, _class.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
}, _class.contextTypes = {
    muiTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
}, _temp));

/** R E D U X   S T O R E **/
/** ************************************************* **/



/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_react_redux__["b" /* connect */])()(Company));

var PList = function (_React$PureComponent) {
    _inherits(PList, _React$PureComponent);

    function PList(props) {
        _classCallCheck(this, PList);

        var _this4 = _possibleConstructorReturn(this, (PList.__proto__ || Object.getPrototypeOf(PList)).call(this, props));

        _this4.baseDelay = 35;
        _this4.state = {
            selected: null
        };
        _this4.projectsCell = _this4.projectsCell.bind(_this4);
        return _this4;
    }

    _createClass(PList, [{
        key: 'projectsCell',
        value: function projectsCell() {}
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["i" /* ModuleInnerPreview */],
                { icon: USER_ICON, renderFunction: this.userCell, simple: false },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'mnx title small underlined centered' },
                    'User Details',
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'subtitle uppercased' },
                        'Choose a users to see their details.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'title' },
                    'Projects Preview List'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'counter' },
                    'Total projects: ',
                    this.props.projects.length,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        null,
                        '+'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__shared_ProjectsList__["a" /* default */], {
                    filteredProjects: this.props.projects,
                    showEvents: this.props.showEvents
                })
            );
        }
    }]);

    return PList;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.PureComponent);



var UsersList = function (_React$PureComponent2) {
    _inherits(UsersList, _React$PureComponent2);

    function UsersList(props) {
        _classCallCheck(this, UsersList);

        //this.scrollbarObj = null;
        var _this5 = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));

        _this5.baseDelay = 35;
        _this5.state = {
            selected: null,
            active: null
        };
        _this5.userCell = _this5.userCell.bind(_this5);
        _this5.onClick = _this5.onClick.bind(_this5);
        _this5.userPreview = _this5.userPreview.bind(_this5);
        return _this5;
    }

    _createClass(UsersList, [{
        key: 'onClick',
        value: function onClick(element, index) {
            var active = this.state.active;

            if (active) {
                active.deactivate();
            }
            this.setState({ active: element, selected: index });
        }
    }, {
        key: 'userCell',
        value: function userCell(user, indx) {
            var first_names = user.first_names,
                last_names = user.last_names;
            var _user$user = user.user,
                username = _user$user.username,
                status = _user$user.status;


            var style = {
                animationDelay: indx * this.baseDelay + "ms"
            };

            var items = [{ label: 'Something', action: '' }];

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_16__components_global_ListCell__["a" /* default */],
                {
                    key: user.id,
                    titleIndex: 0,
                    subtitleIndex: 1,
                    iconIndex: 2,
                    descriptionIndex_: 3,
                    menuIndex_: 3,
                    counter: indx,
                    index: indx,
                    labels: status,
                    iconURL_: USER_ICON,
                    iconFont_: 'icon icon-user13',
                    iconSize: 'small',
                    menuItems: items,
                    underlinedTitle: false,
                    onClick: this.onClick
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    first_names,
                    ' ',
                    last_names,
                    ' '
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    username
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'i',
                    { className: 'icon material-icons' },
                    'account_circle'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    'This is the description of the current user and allows to try to test'
                )
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
    }, {
        key: 'userPreview',
        value: function userPreview() {
            var selected = this.state.selected;

            var emptySelection = selected === null || typeof selected === 'undefined';
            if (emptySelection) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'message' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'h2',
                        null,
                        'User Details ',
                        this.state.selected
                    ),
                    'Choose a users to see their details.'
                );
            }

            var users = this.props.users;

            var user = users[selected] || users[0];
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(UserPreview, { user: user });
        }
    }, {
        key: 'render',
        value: function render() {
            var selected = this.state.selected;

            var emptySelection = selected === null || typeof selected === 'undefined';
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_14__components_global_ModuleContainer__["i" /* ModuleInnerPreview */],
                { empty: emptySelection, icon: USER_ICON, elements: this.props.users,
                    renderFunction: this.userCell },
                this.userPreview(),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'title' },
                    'Users Preview List'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'counter' },
                    'Total users: ',
                    this.props.users.length,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        null,
                        '+'
                    )
                )
            );
        }
    }]);

    return UsersList;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.PureComponent);

var FEMALE_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/female02.svg */ "./resources/assets/media/images/optimized/female02.svg");
var MALE_ICON = __webpack_require__(/*! ../../../assets/media/images/optimized/male02.svg */ "./resources/assets/media/images/optimized/male02.svg");

var UserPreview = _wrapComponent('UserPreview')((_temp2 = _class2 = function (_React$Component2) {
    _inherits(UserPreview, _React$Component2);

    function UserPreview(props) {
        _classCallCheck(this, UserPreview);

        var _this6 = _possibleConstructorReturn(this, (UserPreview.__proto__ || Object.getPrototypeOf(UserPreview)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this6);
        return _this6;
    }

    _createClass(UserPreview, [{
        key: 'render',
        value: function render() {
            dd(this.props);
            var user = this.props.user;
            var first_names = user.first_names,
                last_names = user.last_names,
                preferred_name = user.preferred_name,
                gender = user.gender;

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'element-preview' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'mnx title medium underlined centered' },
                    preferred_name,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'subtitle' },
                        first_names,
                        ' ',
                        last_names
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    user.user.username
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'mnx title tiny reversed' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'span',
                            null,
                            first_names,
                            ' ',
                            last_names
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'subtitle uppercased' },
                            'Full name'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'mnx title tiny reversed' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'span',
                            null,
                            user.bday
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'subtitle uppercased' },
                            'Birth Day'
                        )
                    )
                )
            );
        }
    }]);

    return UserPreview;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class2.defaultProps = {
    user: ''
}, _class2.propTypes = {
    user: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
}, _temp2));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/calendar-months/dist/enums.js":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/calendar-months/dist/enums.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var months = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11
};

var days = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6
};

exports.months = months;
exports.days = days;

/***/ }),

/***/ "./node_modules/calendar-months/dist/index.js":
/* no static exports found */
/* exports used: default */
/*!*****************************************!*\
  !*** ./~/calendar-months/dist/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.months = exports.Month = exports.days = undefined;

var _enums = __webpack_require__(/*! ./enums */ "./node_modules/calendar-months/dist/enums.js");

var _month = __webpack_require__(/*! ./month */ "./node_modules/calendar-months/dist/month.js");

var _month2 = _interopRequireDefault(_month);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _month2.default;
exports.days = _enums.days;
exports.Month = _month2.default;
exports.months = _enums.months;

/***/ }),

/***/ "./node_modules/calendar-months/dist/month.js":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/calendar-months/dist/month.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Month = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enums = __webpack_require__(/*! ./enums */ "./node_modules/calendar-months/dist/enums.js");

var _moment2 = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment3 = _interopRequireDefault(_moment2);

var _validate = __webpack_require__(/*! ./validate */ "./node_modules/calendar-months/dist/validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Month
 *
 * @property {number} month
 * @property {number} year
 */
var Month = function () {
    /**
     * Create a new instance of Month from a month and a year.
     *
     * @param {number} month - A number from 0 to 11.
     * @param {number} year - A valid year number.
     *
     * @return {Month}
     */
    function Month(month, year) {
        _classCallCheck(this, Month);

        month = parseInt(month);
        year = parseInt(year);

        if (!_validate2.default.isValidMonthNumber(month)) {
            throw new Error('Argument `month` has to be a number between 0 and 11.');
        }

        if (!_validate2.default.isValidYearNumber(year)) {
            throw new Error('Argument `year` has to be a number.');
        }

        this.month = month;
        this.year = year;
    }

    /**
     * Return a fresh instance of the Month object.
     *
     * @return {Month}
     */


    _createClass(Month, [{
        key: 'clone',
        value: function clone() {
            return new Month(this.month, this.year);
        }

        /**
         * Create a new instance of Month, this essentially creates a clone of the
         * object.
         *
         * @return {Month}
         */

    }, {
        key: 'thisMonth',
        value: function thisMonth() {
            return this.clone();
        }

        /**
         * Create a new instance for the current month.
         *
         * @return {Month}
         */

    }, {
        key: 'nextMonth',


        /**
         * Return a new Month instance, set one month later than now.
         *
         * @return {Month}
         */
        value: function nextMonth() {
            return Month.create(this.moment().add(1, 'month'));
        }

        /**
         * Return a new Month instance, set one month later than now.
         *
         * @return {Month}
         */

    }, {
        key: 'lastMonth',


        /**
         * Return a new Month instance, set one month earlier than the current
         * instance.
         *
         * @return {Month}
         */
        value: function lastMonth() {
            return Month.create(this.moment().add(-1, 'month'));
        }

        /**
         * Alias for `lastMonth`.
         *
         * @return {Month}
         */

    }, {
        key: 'previousMonth',
        value: function previousMonth() {
            return this.lastMonth();
        }

        /**
         * Return a new Month instance, set one month earlier than now.
         *
         * @return {Month}
         */

    }, {
        key: 'format',


        /**
         * Format the month's date. Uses ISO 8601, defaults to YYYY-MM.
         *
         * @param {string} format - The format you want to return.
         *
         * @return {number}
         */
        value: function format() {
            var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM';

            return this.moment().format(_format);
        }

        /**
         * Generate a new moment instance set to the first day of this month.
         * Since moment.js creates mutable instances, it's very important to always
         * return a new one here.
         *
         * @return {Moment}
         */

    }, {
        key: 'moment',
        value: function moment() {
            return (0, _moment3.default)([this.year, this.month, 1]);
        }

        /**
         * Return a moment instance of the first day of the month.
         *
         * @return {Moment}
         */

    }, {
        key: 'firstDay',
        value: function firstDay() {
            return this.moment();
        }

        /**
         * Return a moment instance of the first 'calendar day' of the month.
         *
         * @return {Moment}
         */

    }, {
        key: 'firstCalendarDay',
        value: function firstCalendarDay() {
            var weekStartsOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Month.weekStartsOn;

            var firstDay = this.moment();

            while (firstDay.day() !== weekStartsOn) {
                firstDay.subtract(1, 'day');
            }

            return firstDay;
        }

        /**
         * Return an array of 'calendar days'. This array contains 42 days,
         * starting on a specific day of the week.
         *
         * @return {Moment[]}
         */

    }, {
        key: 'calendarDays',
        value: function calendarDays() {
            var weekStartsOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Month.weekStartsOn;

            var current = this.firstCalendarDay(weekStartsOn);

            var days = [];

            while (days.length < 42) {
                days.push(current.clone());
                current.add(1, 'day');
            }

            return days;
        }

        /**
         * Return an array of 'calendar weeks'. This array contains 6 weeks, with
         * days starting on a specific day of the week.
         *
         * @return {Moment[][]}
         */

    }, {
        key: 'calendarWeeks',
        value: function calendarWeeks() {
            var weekStartsOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Month.weekStartsOn;

            var weeks = [];

            for (var i = 0; i < 6; i++) {
                weeks.push(this.calendarDays(weekStartsOn).slice(i * 7, i * 7 + 7));
            }

            return weeks;
        }

        /**
         * Creates a new instance of Month from various formats.
         *
         * 		- {number}, {number}: creates a Month from a month and year number.
         * 		- {string}: creates a Month from a string which is equal to 'YYYY-MM'
         * 		            or starts with 'YYYY-MM-'.
         * 		- {Moment}: creates a Month for the month in which the Moment instance resides.
         *
         * @param {(number|string|Moment)} argument
         * @param {?number} year
         *
         * @return {Month}
         */

    }, {
        key: 'containsDay',


        /**
         * Check whether a day in the form of a Moment instance is in this month.
         *
         * @param {Moment} day
         *
         * @return {bool}
         */
        value: function containsDay(day) {
            return day.month() === this.month && day.year() === this.year;
        }

        /**
         * Check whether a day in the form of a Moment instance is not in this month.
         *
         * @param {Moment} day
         *
         * @return {bool}
         */

    }, {
        key: 'doesntContainDay',
        value: function doesntContainDay(day) {
            return !this.containsDay(day);
        }

        /**
         * Check whether the month instance is the current month in time.
         *
         * @return {bool}
         */

    }, {
        key: 'isThisMonth',
        value: function isThisMonth() {
            return this.containsDay((0, _moment3.default)());
        }

        /**
         * Check whether the month is in the future. Note: the current month will never be in the future.
         *
         * @return {bool}
         */

    }, {
        key: 'isFuture',
        value: function isFuture() {
            return this.moment().diff(Month.now().nextMonth().moment(), 'months') > -1;
        }

        /**
         * Check whether the month is in the future. Note: the current month will never be in the future.
         *
         * @return {bool}
         */

    }, {
        key: 'isPast',
        value: function isPast() {
            return this.moment().diff(Month.now().lastMonth().moment(), 'months') < 1;
        }
    }], [{
        key: 'now',
        value: function now() {
            return Month.create((0, _moment3.default)());
        }

        /**
         * Create a new instance for the current month.
         *
         * @return {Month}
         */

    }, {
        key: 'thisMonth',
        value: function thisMonth() {
            return Month.now();
        }
    }, {
        key: 'nextMonth',
        value: function nextMonth() {
            return Month.thisMonth().nextMonth();
        }
    }, {
        key: 'lastMonth',
        value: function lastMonth() {
            return Month.thisMonth().lastMonth();
        }

        /**
         * Alias for `static lastMonth`.
         *
         * @return {Month}
         */

    }, {
        key: 'previousMonth',
        value: function previousMonth() {
            return Month.lastMonth();
        }
    }, {
        key: 'create',
        value: function create() {
            if (arguments.length > 2) {
                throw new Error('`Month.create()` can only accept zero, one or two arguments.');
            }

            if (arguments.length === 2) {
                return new (Function.prototype.bind.apply(Month, [null].concat(Array.prototype.slice.call(arguments))))();
            }

            if (arguments.length === 1) {

                var argument = arguments[0];

                if (_validate2.default.isString(argument)) {
                    var dateParts = argument.split('-');

                    return new Month(dateParts[1] - 1, dateParts[0]);
                }

                if (_validate2.default.isMoment(argument)) {
                    return new Month(argument.month(), argument.year());
                }

                if (_validate2.default.isDate(argument)) {
                    return new Month(argument.getMonth(), argument.getFullYear());
                }

                throw new Error('Invalid argument specified for `Month.create()`.');
            }

            return Month.thisMonth();
        }
    }]);

    return Month;
}();

/**
 * Default setting for the first day of the week.
 *
 * @type {number} - A number from 0 to 6, 0 being Sunday.
 */


exports.Month = Month;
Month.weekStartsOn = _enums.days.SUNDAY;

exports.default = Month;

/***/ }),

/***/ "./node_modules/calendar-months/dist/validate.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/calendar-months/dist/validate.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determine whether the object is a string.
 *
 * @param {mixed} object
 *
 * @return {bool}
 */
var isString = function isString(object) {
  return typeof object === 'string';
};

/**
 * Determine whether the object is an instance of Moment.
 *
 * @param {mixed} object
 *
 * @return {bool}
 */
var isMoment = function isMoment(object) {
  return _moment2.default.isMoment(object);
};

/**
 * Determine whether the object is an instance of Date (JavaScript standard library).
 *
 * @param {mixed} object
 *
 * @return {bool}
 */
var isDate = function isDate(object) {
  return object instanceof Date;
};

/**
 * Determine whether a number is a valid month number (0-11).
 *
 * @param {number} number
 *
 * @return {bool}
 */
var isValidMonthNumber = function isValidMonthNumber(number) {
  return !isNaN(number) && number >= 0 && number <= 11;
};

/**
 * Determine whether a number is a valid year number.
 *
 * @param {number} number
 *
 * @return {bool}
 */
var isValidYearNumber = function isValidYearNumber(number) {
  return !isNaN(number);
};

exports.default = { isString: isString, isMoment: isMoment, isDate: isDate, isValidMonthNumber: isValidMonthNumber, isValidYearNumber: isValidYearNumber };

/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseFilter.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


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

/***/ "./node_modules/lodash/filter.js":
/* no static exports found */
/* exports used: default */
/*!****************************!*\
  !*** ./~/lodash/filter.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


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

/***/ "./resources/assets/media/images/optimized/arrows.2.svg":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./resources/assets/media/images/optimized/arrows.2.svg ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-3Jpsyhd.svg";

/***/ }),

/***/ "./resources/assets/media/images/optimized/building2.svg":
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ./resources/assets/media/images/optimized/building2.svg ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-2g-LwF1.svg";

/***/ }),

/***/ "./resources/assets/media/images/optimized/female02.svg":
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./resources/assets/media/images/optimized/female02.svg ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-34WtkR3.svg";

/***/ }),

/***/ "./resources/assets/media/images/optimized/male02.svg":
/* no static exports found */
/* all exports used */
/*!************************************************************!*\
  !*** ./resources/assets/media/images/optimized/male02.svg ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-1KLsUbW.svg";

/***/ }),

/***/ "./resources/assets/media/images/optimized/user 1.svg":
/* no static exports found */
/* all exports used */
/*!************************************************************!*\
  !*** ./resources/assets/media/images/optimized/user 1.svg ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/img-3aXp1Lu.svg";

/***/ }),

/***/ "./resources/react/components/global/DateCard.js":
/* exports provided: SingleDateCard, DoubleDateCard, default */
/* exports used: DoubleDateCard, SingleDateCard */
/*!*******************************************************!*\
  !*** ./resources/react/components/global/DateCard.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SingleDateCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleDateCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__ = __webpack_require__(/*! ./~/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_MiKE_Development_www_mnx_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__(/*! ./~/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    DateCard: {
        displayName: 'DateCard'
    },
    SingleDateCard: {
        displayName: 'SingleDateCard'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/DateCard.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/DateCard.js',
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
 * File: DateCard.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 1:48 AM
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




var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var DateCard = _wrapComponent('DateCard')((_temp = _class = function (_Component) {
    _inherits(DateCard, _Component);

    function DateCard() {
        _classCallCheck(this, DateCard);

        return _possibleConstructorReturn(this, (DateCard.__proto__ || Object.getPrototypeOf(DateCard)).apply(this, arguments));
    }

    _createClass(DateCard, [{
        key: 'render',
        value: function render() {
            var thisDate = this.props.date.split(' ')[0].split('-');
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'DateCard--SC' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'day' },
                    thisDate[2]
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'month' },
                    months[parseInt(thisDate[1], 10)]
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'year' },
                    thisDate[0]
                )
            );
        }
    }]);

    return DateCard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class.propTypes = {
    date: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
}, _temp));

var SingleDateCard = _wrapComponent('SingleDateCard')((_temp2 = _class2 = function (_Component2) {
    _inherits(SingleDateCard, _Component2);

    function SingleDateCard() {
        _classCallCheck(this, SingleDateCard);

        return _possibleConstructorReturn(this, (SingleDateCard.__proto__ || Object.getPrototypeOf(SingleDateCard)).apply(this, arguments));
    }

    _createClass(SingleDateCard, [{
        key: 'render',
        value: function render() {
            if (!this.props.show) return null;
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(DateCard, { date: this.props.date });
        }
    }]);

    return SingleDateCard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class2.defaultProps = {
    show: true
}, _class2.propTypes = {
    date: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    show: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    datesData: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
}, _temp2));

var DoubleDateCard = function (_PureComponent) {
    _inherits(DoubleDateCard, _PureComponent);

    function DoubleDateCard() {
        _classCallCheck(this, DoubleDateCard);

        return _possibleConstructorReturn(this, (DoubleDateCard.__proto__ || Object.getPrototypeOf(DoubleDateCard)).apply(this, arguments));
    }

    _createClass(DoubleDateCard, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'card-wrapper' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(DateCard, { date: this.props.start }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: 'arrow' }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(DateCard, { date: this.props.end })
            );
        }
    }]);

    return DoubleDateCard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

DoubleDateCard.propTypes = {
    start: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    end: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    datesData: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
};
/* unused harmony default export */ var _unused_webpack_default_export = (DateCard);
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

/***/ }),

/***/ "./resources/react/components/global/TagFilter.js":
/* exports provided: default */
/* exports used: default */
/*!********************************************************!*\
  !*** ./resources/react/components/global/TagFilter.js ***!
  \********************************************************/
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





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TagFilter: {
        displayName: 'TagFilter'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/TagFilter.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/TagFilter.js',
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
 * File: TagFilter.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Jun, 2017 | 1:45 AM
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






var TagFilter = _wrapComponent('TagFilter')((_temp = _class = function (_React$Component) {
    _inherits(TagFilter, _React$Component);

    function TagFilter(props) {
        _classCallCheck(this, TagFilter);

        var _this = _possibleConstructorReturn(this, (TagFilter.__proto__ || Object.getPrototypeOf(TagFilter)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);
        _this.state = {
            options: _this.props.options,
            selected: _this.props.default,
            exclusive: _this.props.exclusive
        };
        return _this;
    }

    _createClass(TagFilter, [{
        key: 'onOptionClicked',
        value: function onOptionClicked(event) {
            var _this2 = this;

            var val = event.target.getAttribute('data-value');
            var isSelected = this.state.selected.find(function (el) {
                return el === val;
            });
            var isExclusive = this.state.exclusive.find(function (el) {
                return el === val;
            });
            var selected = this.state.selected.slice(0).filter(function (el) {
                return !_this2.state.exclusive.find(function (e) {
                    return e === el;
                });
            });

            if (!isSelected) {
                selected.push(val);
                this.props.onFilterChange(isExclusive ? [val] : selected);
                this.setState({
                    selected: isExclusive ? [val] : selected
                });
            } else {
                var newSelected = this.state.selected.filter(function (el) {
                    return el !== val;
                });
                if (newSelected.length === 0) return;
                this.props.onFilterChange(newSelected);
                this.setState({
                    selected: newSelected
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('filterBar', { isInvisible: !this.props.isVisible });
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass },
                this.props.options.map(function (opt) {
                    var selected = _this3.state.selected.find(function (el) {
                        return opt === el;
                    });
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { key: 'opt' + opt,
                            className: selected ? 'active' : '',
                            onClick: _this3.onOptionClicked,
                            'data-value': opt
                        },
                        opt
                    );
                })
            );
        }
    }]);

    return TagFilter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class.propTypes = {
    options: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
    default: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
    exclusive: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
    onFilterChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    isVisible: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
}, _class.defaultProps = {
    options: [],
    default: [],
    exclusive: [],
    onFilterChange: mnx.noop,
    isVisible: true
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (TagFilter);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/react/modules/shared/EventsList.js":
/* exports provided: default */
/* exports used: default */
/*!******************************************************!*\
  !*** ./resources/react/modules/shared/EventsList.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global_DateCard__ = __webpack_require__(/*! ../../components/global/DateCard */ "./resources/react/components/global/DateCard.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * File: EventsList.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 2:12 AM
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








var EventsList = function (_PureComponent) {
    _inherits(EventsList, _PureComponent);

    function EventsList() {
        _classCallCheck(this, EventsList);

        return _possibleConstructorReturn(this, (EventsList.__proto__ || Object.getPrototypeOf(EventsList)).apply(this, arguments));
    }

    _createClass(EventsList, [{
        key: 'render',
        value: function render() {
            if (!this.props.showEvents) return null;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'eventsList' },
                this.props.events.map(function (event) {
                    var _event$data = event.data,
                        event_type = _event$data.event_type,
                        title = _event$data.title,
                        starts_at = _event$data.starts_at,
                        dates = _event$data.dates,
                        id = _event$data.id;
                    var _event$status = event.status,
                        isOpen = _event$status.isOpen,
                        isClosed = _event$status.isClosed,
                        distantPast = _event$status.distantPast,
                        distantFuture = _event$status.distantFuture;


                    var momentNow = __WEBPACK_IMPORTED_MODULE_3_moment___default()();
                    var momentStart = __WEBPACK_IMPORTED_MODULE_3_moment___default()(starts_at);
                    var cssClass = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                        past: momentStart.isBefore(momentNow, 'month'),
                        future: momentStart.isAfter(momentNow, 'month'),
                        current: momentStart.isSame(momentNow, 'month'),
                        isOpen: isOpen,
                        isClosed: isClosed,
                        distantPast: distantPast,
                        distantFuture: distantFuture
                    });
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { key: 'event_' + id, className: cssClass },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'title' },
                            title
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_global_DateCard__["b" /* SingleDateCard */], { date: starts_at, datesData: dates }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'type' },
                            event_type
                        )
                    );
                })
            );
        }
    }]);

    return EventsList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

EventsList.defaultProps = {
    events: []
};
EventsList.propTypes = {
    events: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
    showEvents: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (EventsList);

/***/ }),

/***/ "./resources/react/modules/shared/ProjectsList.js":
/* exports provided: default */
/* exports used: default */
/*!********************************************************!*\
  !*** ./resources/react/modules/shared/ProjectsList.js ***!
  \********************************************************/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_shallowequal__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_shallowequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scrollbars2__ = __webpack_require__(/*! react-scrollbars2 */ "../scrollbars2/compiled/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scrollbars2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_scrollbars2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EventsList__ = __webpack_require__(/*! ./EventsList */ "./resources/react/modules/shared/EventsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_global_DateCard__ = __webpack_require__(/*! ../../components/global/DateCard */ "./resources/react/components/global/DateCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_global_ListCell__ = __webpack_require__(/*! ../../components/global/ListCell */ "./resources/react/components/global/ListCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_IconMenu__ = __webpack_require__(/*! material-ui/IconMenu */ "./node_modules/material-ui/IconMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_IconMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_IconMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem__ = __webpack_require__(/*! material-ui/MenuItem */ "./node_modules/material-ui/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__ = __webpack_require__(/*! material-ui/IconButton */ "./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_svg_icons_navigation_more_vert__ = __webpack_require__(/*! material-ui/svg-icons/navigation/more-vert */ "./node_modules/material-ui/svg-icons/navigation/more-vert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_svg_icons_navigation_more_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_svg_icons_navigation_more_vert__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ProjectsList: {
        displayName: 'ProjectsList'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/shared/ProjectsList.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/shared/ProjectsList.js',
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
 * File: ProjectsList.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 May, 2017 | 1:47 AM
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

















var ProjectsList = _wrapComponent('ProjectsList')((_temp = _class = function (_Component) {
    _inherits(ProjectsList, _Component);

    function ProjectsList(props) {
        _classCallCheck(this, ProjectsList);

        var _this = _possibleConstructorReturn(this, (ProjectsList.__proto__ || Object.getPrototypeOf(ProjectsList)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);
        _this.state = {
            activeWithEvents: null,
            activeWithoutEvents: null
        };
        return _this;
    }

    _createClass(ProjectsList, [{
        key: 'onCellClick',
        value: function onCellClick(element) {
            var _state = this.state,
                activeWithEvents = _state.activeWithEvents,
                activeWithoutEvents = _state.activeWithoutEvents;


            if (activeWithEvents && this.props.showEvents) {
                activeWithEvents.deactivate();
            }
            if (activeWithoutEvents && !this.props.showEvents) {
                activeWithoutEvents.deactivate();
            }
            if (this.props.showEvents) {
                this.setState({ activeWithEvents: element });
            } else {
                this.setState({ activeWithoutEvents: element });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            dd("RECEIVING");
        }
    }, {
        key: 'renderProject',
        value: function renderProject(project, indx, index) {
            var _project$data = project.data,
                starts_at = _project$data.starts_at,
                ends_at = _project$data.ends_at,
                title = _project$data.title,
                description = _project$data.description,
                id = _project$data.id;
            var eventsCount = project.eventsCount,
                events = project.events,
                dates = project.dates;

            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('__ProjectElement--SC mxn genericCell', project.status);
            var style = {
                animationDelay: indx * 35 + "ms"
            };

            if (true) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11__components_global_ListCell__["a" /* default */],
                    {
                        key: 'project_' + id,
                        titleIndex: 0,
                        subtitleIndex: 1,
                        counter: index,
                        index: indx,
                        underlinedTitle: true,
                        descriptionIndex: this.props.showEvents ? 3 : 2,
                        iconFont: 'icon icon-briefcase08',
                        iconSize: 'small',
                        onClick: this.onCellClick,
                        usesInfiniteList: true
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        null,
                        title
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        null,
                        description
                    ),
                    !this.props.showEvents && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'eventsList' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_global_DateCard__["a" /* DoubleDateCard */], { start: starts_at, end: ends_at, datesData: dates })
                    ),
                    this.props.showEvents && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EventsList__["a" /* default */], { events: events, showEvents: this.props.showEvents })
                );
            }

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass, key: 'project_' + id, style: style },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'counter' },
                    index + 1
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: 'left' }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'center' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'mnx title tiny' },
                        title,
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'subtitle' },
                            description
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: 'division' }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'details' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'mnx tag' },
                            'Events',
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'sub' },
                                eventsCount
                            )
                        )
                    ),
                    !this.props.showEvents && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'eventsList' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_global_DateCard__["a" /* DoubleDateCard */], { start: starts_at, end: ends_at, datesData: dates })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EventsList__["a" /* default */], { events: events, showEvents: this.props.showEvents })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'right' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12_material_ui_IconMenu___default.a,
                        { className: 'icon-menu',
                            useLayerForClickAway: true,
                            iconButtonElement: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default.a,
                                { className: 'iButton' },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_material_ui_svg_icons_navigation_more_vert___default.a, null)
                            ),
                            anchorOrigin: { horizontal: 'right', vertical: 'top' },
                            targetOrigin: { horizontal: 'right', vertical: 'top' }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default.a, { className: 'sub-menu', primaryText: 'Refresh' }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default.a, { className: 'sub-menu', primaryText: 'Send feedback' }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default.a, { className: 'sub-menu', primaryText: 'Settings' }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default.a, { className: 'sub-menu', primaryText: 'Help' }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_MenuItem___default.a, { className: 'sub-menu', primaryText: 'Sign out' })
                    )
                )
            );
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !__WEBPACK_IMPORTED_MODULE_7_shallowequal___default()(nextProps, this.props);
        }
    }, {
        key: 'render',
        value: function render() {

            var projects = this.props.filteredProjects;

            if (!projects.length) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'module-no-events' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'icon icon-briefcase10' }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        null,
                        'There are no ',
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'b',
                            null,
                            'Projects'
                        ),
                        ' programmed.'
                    )
                );
            }

            var cssClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ProjectsList--SC', this.props.showEvents ? 'showEvents' : 'noEvents');

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_scrollbars2__["InfiniteList"], {
                className: cssClass,
                visibles: 20,
                items: projects,
                defaultRowHeight: 90,
                totalItems: projects.length,
                renderFunc: this.renderProject });
        }
    }]);

    return ProjectsList;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class.propTypes = {
    /*projects  : PropTypes.array,
     events    : PropTypes.oneOfType( [
     PropTypes.object,
     PropTypes.array
     ] ),*/
    showEvents: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    filteredProjects: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (ProjectsList);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/react/modules/shared/ProjectsManagerUtility.js":
/* exports provided: default */
/* exports used: default */
/*!******************************************************************!*\
  !*** ./resources/react/modules/shared/ProjectsManagerUtility.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autobind_helper__ = __webpack_require__(/*! react-autobind-helper */ "./node_modules/react-autobind-helper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autobind_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_autobind_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_filter__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_filter__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * File: ProjectsManagerUtilitiy.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Jun, 2017 | 1:15 AM
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






var ProjectsManagerUtility = function () {
    function ProjectsManagerUtility() {
        var projects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var filterWord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        _classCallCheck(this, ProjectsManagerUtility);

        __WEBPACK_IMPORTED_MODULE_2_react_autobind_helper___default()(this, false, false, false);
        this.days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        this.now = __WEBPACK_IMPORTED_MODULE_0_moment___default()();
        this.pastLimit = __WEBPACK_IMPORTED_MODULE_0_moment___default()().add(-2, 'month');
        this.futureLimit = __WEBPACK_IMPORTED_MODULE_0_moment___default()().add(2, 'month');
        this.original_projects = projects.slice(0);
        this.original_events = Object.assign({}, events);

        this.filterWord = filterWord;
        this.filteredProjects = [];
        this.filteredProjectsCount = 0;

        //this.subFilter           = [];
        //this.subFilteredProjects = [];
        //this.subFilteredCount    = 0;

        this.projects = [];
        this.events = [];
        this.singleTimeEvents = [];

        this.setupProjects();
        this.filterProjects(this.filterWord);
        //dd( this.filteredProjects );
        //dd( _filter( this.projects, { year: '2017', closed: false } ), this.projects );
    }

    _createClass(ProjectsManagerUtility, [{
        key: 'filterProjects',
        value: function filterProjects(filter) {
            var lowerFilter = filter.toLowerCase();
            this.filteredProjects = __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.projects, function (project) {
                var lowerTitle = project.data.title.toLowerCase();
                return lowerTitle.indexOf(lowerFilter) > -1;
            });
            this.filterWord = filter;
            this.filteredProjectsCount = this.filteredProjects.length;
        }
    }, {
        key: 'subFilterProjects',
        value: function subFilterProjects(filters) {
            if (filters.find(function (e) {
                return e === 'all';
            })) {
                this.filterProjects(this.filterWord);
                //this.subFilter = ['all'];
                return;
            }
            var newFiltered = __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.projects, function (project) {
                return filters.find(function (e) {
                    return project.status.indexOf(e) > -1;
                });
            });
            this.filteredProjects = newFiltered;
            this.filteredProjectsCount = this.filteredProjects.length;
            dd(filters, newFiltered);
        }
    }, {
        key: 'setupProjects',
        value: function setupProjects() {
            var _this = this;

            this.original_projects.forEach(function (project) {
                _this.projects.push(_this.formatProject(project));
            });
        }
    }, {
        key: 'formatProject',
        value: function formatProject(project) {
            var _this2 = this;

            var id = project.id;

            var events = [];
            var newProject = Object.assign({}, this.formatObjectDate(project));

            this.original_events[id].forEach(function (ev) {
                var newEvent = _this2.formatObjectDate(ev, newProject);
                _this2.events.push(newEvent);
                events.push(newEvent);

                _this2.singleTimeEvents.push(Object.assign({}, newEvent, {
                    kind: 'start',
                    type: newEvent.data['event_type'],
                    momentEvent: newEvent.dates.mStart,
                    flatEvent: newEvent.dates.starts_at,
                    date: newEvent.start
                }));
                _this2.singleTimeEvents.push(Object.assign({}, newEvent, {
                    kind: 'end',
                    type: newEvent.data['event_type'],
                    momentEvent: newEvent.dates.mEnd,
                    flatEvent: newEvent.dates.ends_at,
                    date: newEvent.end
                }));
            });

            newProject.events = events;
            newProject.eventsCount = events.length;
            return newProject;
        }
    }, {
        key: 'formatObjectDate',
        value: function formatObjectDate(object, parent) {
            var starts_at = object.starts_at,
                ends_at = object.ends_at;

            //Moment Events

            var mStart = __WEBPACK_IMPORTED_MODULE_0_moment___default()(starts_at);
            var mEnd = __WEBPACK_IMPORTED_MODULE_0_moment___default()(ends_at);

            //Status
            var hasStarted = mStart.isBefore(this.now);
            var hasEnded = mEnd.isBefore(this.now);
            var isOpen = hasStarted && !hasEnded;
            var isClosed = hasStarted && hasEnded;
            var distantPast = mEnd.isBefore(this.pastLimit);
            var distantFuture = mEnd.isAfter(this.futureLimit);

            return {
                status: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
                    open: isOpen,
                    closed: isClosed,
                    upcoming: !isClosed && !isOpen,
                    distantPast: distantPast, distantFuture: distantFuture
                }),
                start: {
                    year: mStart.format('YYYY'),
                    month: mStart.format('MMM').toLowerCase(),
                    day: mStart.format('DD')
                },
                end: {
                    year: mEnd.format('YYYY'),
                    month: mEnd.format('MMM').toLowerCase(),
                    day: mEnd.format('DD')
                },
                dates: {
                    mStart: mStart, mEnd: mEnd, starts_at: starts_at, ends_at: ends_at
                },
                data: object,
                parent: parent || null,
                parentStart: parent ? parent.dates.mStart.isSame(mStart) : null,
                parentEnd: parent ? parent.dates.mEnd.isSame(mEnd) : null
            };
        }
    }, {
        key: 'getVisibleProjects',
        value: function getVisibleProjects() {
            return this.filteredProjects;
        }
    }, {
        key: 'getVisibleProjectsCount',
        value: function getVisibleProjectsCount() {
            return this.filteredProjectsCount;
        }
    }, {
        key: 'getMonthEvents',
        value: function getMonthEvents(_year, _month) {

            var month = !isNaN(_month) ? this.months[_month] : _month;
            var year = _year.toString();

            var filtered = __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.singleTimeEvents, function (e) {
                return e.date.year === year && e.date.month === month;
            }) || [];

            return filtered.sort(function (a, b) {
                if (a === b) return 0;
                return a.flatEvent > b.flatEvent ? 1 : -1;
            });
        }
    }, {
        key: 'getDayEvents',
        value: function getDayEvents(_year, _month, _day) {

            var month = !isNaN(_month) ? this.months[_month] : _month;
            var year = _year.toString();
            var day = _day.toString();

            return __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.singleTimeEvents, function (e) {
                return e.date.year === year && e.date.month === month && e.date.day === day;
            });
        }
    }, {
        key: 'getDayProjects',
        value: function getDayProjects(_year, _month, _day) {
            var month = !isNaN(_month) ? this.months[_month] : _month;
            var year = _year.toString();
            var day = _day.toString();

            var starts = this.projects.find(function (p) {
                return p.start.year === year && p.start.month === month && p.start.day === day;
            });
            var ends = this.projects.find(function (p) {
                return p.end.year === year && p.end.month === month && p.end.day === day;
            });

            return {
                starting: starts ? starts.dates.mStart.format('hh:mm a') : false,
                ending: ends ? ends.dates.mEnd.format('hh:mm a') : false
            };
        }
    }]);

    return ProjectsManagerUtility;
}();

/* harmony default export */ __webpack_exports__["a"] = (ProjectsManagerUtility);

/***/ }),

/***/ "./resources/react/modules/shared/SimpleCalendar.js":
/* exports provided: default */
/* exports used: default */
/*!**********************************************************!*\
  !*** ./resources/react/modules/shared/SimpleCalendar.js ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_shallowequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_calendar_months__ = __webpack_require__(/*! calendar-months */ "./node_modules/calendar-months/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_calendar_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_calendar_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_scrollbars2__ = __webpack_require__(/*! react-scrollbars2 */ "../scrollbars2/compiled/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_scrollbars2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_scrollbars2__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SimpleCalendar: {
        displayName: 'SimpleCalendar'
    },
    DateDetails: {
        displayName: 'DateDetails'
    },
    EventDetail: {
        displayName: 'EventDetail'
    },
    CalendarHeader: {
        displayName: 'CalendarHeader'
    },
    MonthsBar: {
        displayName: 'MonthsBar'
    },
    WeekDay: {
        displayName: 'WeekDay'
    },
    Week: {
        displayName: 'Week'
    },
    Day: {
        displayName: 'Day'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/shared/SimpleCalendar.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/modules/shared/SimpleCalendar.js',
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
 * File: SimpleCalendar.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   5 May, 2017 | 7:43 PM
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









var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function dblDigit(val) {
    var newVal = parseInt(val, 10);
    return newVal > 9 ? newVal.toString() : '0' + newVal.toString();
}

function monthObjectToMomentObject(monthObject) {
    var year = monthObject.year;

    var month = dblDigit(monthObject.month + 1);
    var day = dblDigit(1);
    return __WEBPACK_IMPORTED_MODULE_8_moment___default()(year + "-" + month + '-' + day, "YYYY-MM-DD");
}

var SimpleCalendar = _wrapComponent('SimpleCalendar')((_temp = _class = function (_Component) {
    _inherits(SimpleCalendar, _Component);

    function SimpleCalendar(props) {
        _classCallCheck(this, SimpleCalendar);

        var _this = _possibleConstructorReturn(this, (SimpleCalendar.__proto__ || Object.getPrototypeOf(SimpleCalendar)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this);

        var month = __WEBPACK_IMPORTED_MODULE_9_calendar_months___default.a.thisMonth();

        _this.state = {
            currentMonth: month,
            currentMonthMoment: monthObjectToMomentObject(month),
            today: __WEBPACK_IMPORTED_MODULE_8_moment___default()(),
            selectedDay: null
        };
        return _this;
    }

    _createClass(SimpleCalendar, [{
        key: 'changeMonth',
        value: function changeMonth(month) {
            this.setState({
                currentMonth: month,
                currentMonthMoment: monthObjectToMomentObject(month),
                today: __WEBPACK_IMPORTED_MODULE_8_moment___default()()
            });
        }

        /** E V E N T S **/
        /** ************************************************* **/

    }, {
        key: 'onResetSelectedDay',
        value: function onResetSelectedDay() {
            this.setState({
                selectedDay: null
            });
        }
    }, {
        key: 'onDayClick',
        value: function onDayClick(momentDay) {
            this.setState({
                selectedDay: momentDay
            });
        }
    }, {
        key: 'onMonthClick',
        value: function onMonthClick(targetMonth) {
            var _state$currentMonth = this.state.currentMonth,
                month = _state$currentMonth.month,
                year = _state$currentMonth.year;


            if (targetMonth !== month) {
                this.changeMonth(__WEBPACK_IMPORTED_MODULE_9_calendar_months___default.a.create(targetMonth, year));
            }
        }
    }, {
        key: 'onClickNext',
        value: function onClickNext() {
            this.changeMonth(this.state.currentMonth.nextMonth());
        }
    }, {
        key: 'onClickPrev',
        value: function onClickPrev() {
            this.changeMonth(this.state.currentMonth.previousMonth());
        }
    }, {
        key: 'onClickToday',
        value: function onClickToday() {
            this.changeMonth(__WEBPACK_IMPORTED_MODULE_9_calendar_months___default.a.thisMonth());
        }

        /** L I F E C Y C L E **/
        /** ************************************************* **/

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!__WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(nextProps.events, this.props.events) || !__WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(nextProps.projects, this.props.projects)) {

                this.setState({
                    today: __WEBPACK_IMPORTED_MODULE_8_moment___default()(),
                    selectedDay: null
                });
            }
        }

        /** R E N D E R **/
        /** ************************************************* **/

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                today = _state.today,
                _month = _state.currentMonth,
                selectedDay = _state.selectedDay,
                currentMonthMoment = _state.currentMonthMoment;
            var projectsManager = this.props.projectsManager;
            var month = _month.month,
                year = _month.year;

            var weeks = _month.calendarWeeks();
            var monthEvents = projectsManager.getMonthEvents(year, month);

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'SimpleCalendar--SC' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(DateDetails, { selectedDay: selectedDay,
                    currentMonthMoment: currentMonthMoment,
                    projectsManager: projectsManager,
                    monthEvents: monthEvents,
                    onReset: this.onResetSelectedDay
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'calendar' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'table',
                        { cellPadding: 0, cellSpacing: 0 },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'thead',
                            null,
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'tr',
                                null,
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CalendarHeader, { counter: monthEvents.length,
                                    onNext: this.onClickNext,
                                    onPrev: this.onClickPrev,
                                    onToday: this.onClickToday,
                                    currentMonthMoment: currentMonthMoment
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'tr',
                                null,
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'td',
                                    { colSpan: 7, className: 'months' },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MonthsBar, { selectedMonth: this.state.currentMonth,
                                        onMonthClick: this.onMonthClick })
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'tbody',
                            null,
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'tr',
                                null,
                                days.map(function (wd) {
                                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(WeekDay, { key: 'wd' + wd, weekday: wd });
                                })
                            ),
                            weeks.map(function (w, i) {
                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Week, { key: 'week' + i,
                                    days: w,
                                    today: today,
                                    onDayClick: _this2.onDayClick,
                                    currentMonthMoment: currentMonthMoment,
                                    month: month,
                                    year: year,
                                    selectedDay: selectedDay,
                                    projectsManager: projectsManager });
                            })
                        )
                    )
                )
            );
        }
    }]);

    return SimpleCalendar;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class.propTypes = {
    projects: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
    projectsManager: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    events: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
}, _temp));

/** D A T E  D E T A I L S **/
/** ************************************************* **/


var DateDetails = _wrapComponent('DateDetails')((_temp2 = _class2 = function (_Component2) {
    _inherits(DateDetails, _Component2);

    function DateDetails(props) {
        _classCallCheck(this, DateDetails);

        var _this3 = _possibleConstructorReturn(this, (DateDetails.__proto__ || Object.getPrototypeOf(DateDetails)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this3);
        return _this3;
    }

    _createClass(DateDetails, [{
        key: 'onReset',
        value: function onReset() {
            this.props.onReset();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                selectedDay = _props.selectedDay,
                projectsManager = _props.projectsManager,
                currentMonthMoment = _props.currentMonthMoment;


            if (!selectedDay) {
                var monthEvents = this.props.monthEvents;

                var currentDay = false;

                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'details' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'main-title monthly' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'center' },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'month' },
                                currentMonthMoment.format('MMMM')
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'year' },
                                currentMonthMoment.format('YYYY')
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'close', onClick: this.onReset },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'anticon anticon-close-circle' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'events-container' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_10_react_scrollbars2__["Scrollbars2"],
                            null,
                            !monthEvents.length && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(NoEvents, null),
                            monthEvents.map(function (ev, indx) {

                                var project = ev.parent.data;
                                var sameDay = ev.date.day !== currentDay;
                                var time = ev.momentEvent.format('hh:mm a');
                                currentDay = ev.date.day;

                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'events-day', key: ev + indx },
                                    sameDay && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        'div',
                                        { className: 'day-separator' },
                                        ev.momentEvent.format('D MMM')
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(EventDetail, {
                                        title: project.title,
                                        time: time,
                                        type: ev.type,
                                        kind: ev.kind,
                                        hasProjectsStarting: ev.parentStart && ev.kind === 'start',
                                        hasProjectsEnding: ev.parentEnd && ev.kind === 'end',
                                        className: ev.status
                                    })
                                );
                            })
                        )
                    )
                );
            }

            var year = selectedDay.format('YYYY');
            var month = selectedDay.format('MMM').toLowerCase();
            var day = selectedDay.format('DD');
            var dayEvents = projectsManager.getDayEvents(year, month, day);
            var dayProjects = projectsManager.getDayProjects(year, month, day);

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'details' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'main-title daily' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'left' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'day' },
                            selectedDay.format('Do')
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'right' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'weekday' },
                            selectedDay.format('dddd')
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'month' },
                            selectedDay.format('MMMM, YYYY')
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'close', onClick: this.onReset },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'anticon anticon-close-circle' })
                    )
                ),
                !dayEvents.length && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(NoEvents, null),
                dayEvents.map(function (ev, indx) {

                    var project = ev.parent.data;
                    var time = ev.momentEvent.format('hh:mm a');

                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'events-day', key: ev + indx },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(EventDetail, {
                            title: project.title,
                            time: time,
                            type: ev.type,
                            kind: ev.kind,
                            hasProjectsStarting: dayProjects.starting === time,
                            hasProjectsEnding: dayProjects.ending === time,
                            className: ev.status
                        })
                    );
                })
            );
        }
    }]);

    return DateDetails;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class2.defaultProps = {
    className: '',
    onReset: mnx.noop
}, _class2.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    selectedDay: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    onReset: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    projectsManager: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    monthEvents: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array
}, _temp2));

var EventDetail = _wrapComponent('EventDetail')(function (_Component3) {
    _inherits(EventDetail, _Component3);

    function EventDetail() {
        _classCallCheck(this, EventDetail);

        return _possibleConstructorReturn(this, (EventDetail.__proto__ || Object.getPrototypeOf(EventDetail)).apply(this, arguments));
    }

    _createClass(EventDetail, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                title = _props2.title,
                time = _props2.time,
                type = _props2.type,
                kind = _props2.kind,
                hasProjectsStarting = _props2.hasProjectsStarting,
                hasProjectsEnding = _props2.hasProjectsEnding;


            var cssClass = __WEBPACK_IMPORTED_MODULE_7_classnames___default()('content', type, kind, this.props.className || '', {
                hasProjectsStarting: hasProjectsStarting,
                hasProjectsEnding: hasProjectsEnding
            });

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: cssClass },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'time' },
                    time
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'title' },
                    title
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'kind' },
                    type,
                    ' | ',
                    kind
                )
            );
        }
    }]);

    return EventDetail;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var NoEvents = function NoEvents() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { className: 'no-events' },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'anticon anticon-calendar' }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'span',
            null,
            'No Events Scheduled for this day.'
        )
    );
};

/** C A L E N D A R  H E A D E R **/
/** ************************************************* **/

var CalendarHeader = _wrapComponent('CalendarHeader')(function (_Component4) {
    _inherits(CalendarHeader, _Component4);

    function CalendarHeader() {
        _classCallCheck(this, CalendarHeader);

        return _possibleConstructorReturn(this, (CalendarHeader.__proto__ || Object.getPrototypeOf(CalendarHeader)).apply(this, arguments));
    }

    _createClass(CalendarHeader, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                onNext = _props3.onNext,
                onPrev = _props3.onPrev,
                onToday = _props3.onToday,
                counter = _props3.counter,
                currentMonthMoment = _props3.currentMonthMoment;


            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                { colSpan: 7 },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'prev nav-button', onClick: onPrev },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'anticon anticon-left' })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'head', onClick: onToday },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { className: 'month' },
                        currentMonthMoment.format("MMM")
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { className: 'year' },
                        currentMonthMoment.format("YYYY")
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { className: 'events' },
                        'Events in Month:',
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'strong',
                            null,
                            counter
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'next nav-button', onClick: onNext },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'anticon anticon-right' })
                )
            );
        }
    }]);

    return CalendarHeader;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

/** M O N T H S  B A R  **/
/** ************************************************* **/


var MonthsBar = _wrapComponent('MonthsBar')((_temp3 = _class3 = function (_Component5) {
    _inherits(MonthsBar, _Component5);

    function MonthsBar(props) {
        _classCallCheck(this, MonthsBar);

        var _this6 = _possibleConstructorReturn(this, (MonthsBar.__proto__ || Object.getPrototypeOf(MonthsBar)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this6);
        return _this6;
    }

    _createClass(MonthsBar, [{
        key: 'onClick',
        value: function onClick(event) {
            var targetMonth = parseInt(event.target.getAttribute('data-month'), 10);
            this.props.onMonthClick(targetMonth);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var selectedMonth = this.props.selectedMonth;
            var month = selectedMonth.month;


            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                months.map(function (loopMonth, index) {
                    var cssClass = __WEBPACK_IMPORTED_MODULE_7_classnames___default()({
                        current: index === month
                    });
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { key: loopMonth,
                            className: cssClass,
                            onClick: _this7.onClick,
                            'data-month': index },
                        loopMonth
                    );
                })
            );
        }
    }]);

    return MonthsBar;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class3.defaultProps = {
    className: '',
    onMonthClick: mnx.noop
}, _class3.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    selectedMonth: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    onMonthClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
}, _temp3));

/** W E E K D A Y S **/
/** ************************************************* **/


var WeekDay = _wrapComponent('WeekDay')(function (_Component6) {
    _inherits(WeekDay, _Component6);

    function WeekDay() {
        _classCallCheck(this, WeekDay);

        return _possibleConstructorReturn(this, (WeekDay.__proto__ || Object.getPrototypeOf(WeekDay)).apply(this, arguments));
    }

    _createClass(WeekDay, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                null,
                this.props.weekday
            );
        }
    }]);

    return WeekDay;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

/** W E E K  C O M P O N E N T **/
/** ************************************************* **/


var Week = _wrapComponent('Week')((_temp4 = _class4 = function (_Component7) {
    _inherits(Week, _Component7);

    function Week(props) {
        _classCallCheck(this, Week);

        var _this9 = _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this9);
        return _this9;
    }

    _createClass(Week, [{
        key: 'dayRender',
        value: function dayRender(day, index) {
            var _props4 = this.props,
                today = _props4.today,
                onDayClick = _props4.onDayClick,
                month = _props4.month,
                year = _props4.year,
                selectedDay = _props4.selectedDay,
                currentMonthMoment = _props4.currentMonthMoment,
                projectsManager = _props4.projectsManager;


            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Day, { key: 'day' + index,
                day: day,
                month: month,
                year: year,
                today: today,
                onDayClick: onDayClick,
                dayOfTheWeek: index,
                currentMonthMoment: currentMonthMoment,
                projectsManager: projectsManager,
                selectedDay: selectedDay });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'tr',
                null,
                this.props.days.map(this.dayRender)
            );
        }
    }]);

    return Week;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class4.defaultProps = {}, _class4.propTypes = {}, _temp4));

/** D A Y  C O M P O N E N T **/
/** ************************************************* **/


var Day = _wrapComponent('Day')(function (_Component8) {
    _inherits(Day, _Component8);

    function Day(props) {
        _classCallCheck(this, Day);

        var _this10 = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(_this10);
        return _this10;
    }

    _createClass(Day, [{
        key: 'onClick',
        value: function onClick() {
            this.props.onDayClick(this.props.day);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                day = _props5.day,
                today = _props5.today,
                selectedDay = _props5.selectedDay,
                month = _props5.month,
                year = _props5.year,
                dayOfTheWeek = _props5.dayOfTheWeek,
                currentMonthMoment = _props5.currentMonthMoment,
                projectsManager = _props5.projectsManager;


            var dayEvents = projectsManager.getDayEvents(year, day.format('MMM').toLowerCase(), day.format('DD'));
            var dayProjects = projectsManager.getDayProjects(year, day.format('MMM').toLowerCase(), day.format('DD'));

            var cssClass = __WEBPACK_IMPORTED_MODULE_7_classnames___default()({
                isWeekend: dayOfTheWeek === 0 || dayOfTheWeek === 6,
                isToday: day.isSame(today, 'day'),
                isMuted: !day.isSame(currentMonthMoment, 'month'),
                selected: day.isSame(selectedDay, 'day'),
                hasProjects: dayProjects.starting || dayProjects.ending,
                hasProjectsStarting: dayProjects.starting,
                hasProjectsEnding: dayProjects.ending
            });

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'td',
                { className: cssClass, onClick: this.onClick },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'day' },
                    day.format('D')
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'events' },
                    dayEvents.map(function (ev, k) {
                        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { key: 'event' + k, className: 'event ' + ev.kind + ' ' + ev.type });
                    })
                )
            );
        }
    }]);

    return Day;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var CalendarizedEvents = function () {
    function CalendarizedEvents() {
        _classCallCheck(this, CalendarizedEvents);

        __WEBPACK_IMPORTED_MODULE_5_react_autobind_helper___default()(this, false, false, false);
        this.projects = {};
        this.events = {};
        this._eventsArr = [];
        this._projectsArr = [];
    }

    _createClass(CalendarizedEvents, [{
        key: 'addProjects',
        value: function addProjects(projects) {
            projects.forEach(this.addProject);
        }
    }, {
        key: 'addProject',
        value: function addProject(project) {
            var momentStart = __WEBPACK_IMPORTED_MODULE_8_moment___default()(project['starts_at'], 'YYYY-MM-DD HH:mm:ss');
            var momentEnd = __WEBPACK_IMPORTED_MODULE_8_moment___default()(project['ends_at'], 'YYYY-MM-DD HH:mm:ss');

            this.projects[project['id']] = project;

            this._projectsArr.push({
                momentEvent: momentStart,
                kind: 'start',
                project: project,
                type: 'project',
                date: momentStart.format('YYYY-MM-DD HH:mm:ss')
            });

            this._projectsArr.push({
                momentEvent: momentEnd,
                kind: 'end',
                project: project,
                type: 'project',
                date: momentEnd.format('YYYY-MM-DD HH:mm:ss')
            });
        }
    }, {
        key: 'addEvents',
        value: function addEvents(events) {
            var _this11 = this;

            Object.keys(events).forEach(function (k) {
                events[k].forEach(_this11.addEvent);
            });
        }
    }, {
        key: 'addEvent',
        value: function addEvent(event) {
            if (!this.projects[event['project_id']]) return;
            var momentStart = __WEBPACK_IMPORTED_MODULE_8_moment___default()(event['starts_at'], 'YYYY-MM-DD HH:mm:ss');
            var momentEnd = __WEBPACK_IMPORTED_MODULE_8_moment___default()(event['ends_at'], 'YYYY-MM-DD HH:mm:ss');

            this._eventsArr.push({
                momentEvent: momentStart,
                kind: 'start',
                event: event,
                type: event['event_type'],
                date: momentStart.format('YYYY-MM-DD HH:mm:ss')
            });

            this._eventsArr.push({
                momentEvent: momentEnd,
                kind: 'end',
                event: event,
                type: event['event_type'],
                date: momentEnd.format('YYYY-MM-DD HH:mm:ss')
            });
        }
    }, {
        key: 'projectsFor',
        value: function projectsFor() {
            var targetCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'month';
            var targetMoment = arguments[1];

            return this._projectsArr.filter(function (eObject) {
                return eObject.momentEvent.isSame(targetMoment, targetCompare);
            });
        }
    }, {
        key: 'projectsStartsFor',
        value: function projectsStartsFor() {
            var targetCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'month';
            var targetMoment = arguments[1];

            return this._projectsArr.find(function (eObject) {
                return eObject.momentEvent.isSame(targetMoment, targetCompare) && eObject.kind === 'start';
            });
        }
    }, {
        key: 'projectsEndsFor',
        value: function projectsEndsFor() {
            var targetCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'month';
            var targetMoment = arguments[1];

            return this._projectsArr.find(function (eObject) {
                return eObject.momentEvent.isSame(targetMoment, targetCompare) && eObject.kind === 'end';
            });
        }
    }, {
        key: 'eventsFor',
        value: function eventsFor() {
            var targetCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'month';
            var targetMoment = arguments[1];

            return this._eventsArr.filter(function (eObject) {
                return eObject.momentEvent.isSame(targetMoment, targetCompare);
            }).sort(function (a, b) {
                if (a.date === b.date) return 0;
                return a.date > b.date ? 1 : -1;
            });
        }
    }]);

    return CalendarizedEvents;
}();

/* harmony default export */ __webpack_exports__["a"] = (SimpleCalendar);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

});
//# sourceMappingURL=zyx1fbddd9f1298d45a9afa.js.map