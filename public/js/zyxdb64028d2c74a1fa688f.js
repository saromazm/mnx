webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":false,\"presets\":[[\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-latest/lib/index.js\",{\"es2015\":{\"modules\":false}}],\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-stage-2/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react/lib/index.js\",\"/Users/MiKE/Development/www/mnx/node_modules/babel-preset-react-hmre/index.js\"],\"plugins\":[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-class-properties/lib/index.js\",[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",{\"useBuiltIns\":true}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-transform-runtime/lib/index.js\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Users/MiKE/Development/www/mnx/node_modules/babel-runtime\"}],[\"/Users/MiKE/Development/www/mnx/node_modules/babel-plugin-import/lib/index.js\",[{\"libraryName\":\"antd\"},{\"libraryName\":\"material-ui\",\"libraryDirectory\":\"components\",\"camel2DashComponentName\":false}]]]}!./node_modules/eslint-loader/index.js?{\"configFile\":\"/Users/MiKE/Development/www/mnx/config_environment/eslint.js\",\"useEslintrc\":false}!./resources/react/components/global/BigError.js":
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?{"babelrc":false,"cacheDirectory":false,"presets":[["/Users/MiKE/Development/www/mnx/~/babel-preset-latest/lib/index.js",{"es2015":{"modules":false}}],"/Users/MiKE/Development/www/mnx/~/babel-preset-stage-2/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react/lib/index.js","/Users/MiKE/Development/www/mnx/~/babel-preset-react-hmre/index.js"],"plugins":["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-class-properties/lib/index.js",["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-object-rest-spread/lib/index.js",{"useBuiltIns":true}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-transform-runtime/lib/index.js",{"helpers":false,"polyfill":false,"regenerator":true,"moduleName":"/Users/MiKE/Development/www/mnx/~/babel-runtime"}],["/Users/MiKE/Development/www/mnx/~/babel-plugin-import/lib/index.js",[{"libraryName":"antd"},{"libraryName":"material-ui","libraryDirectory":"components","camel2DashComponentName":false}]]]}!./~/eslint-loader?{"configFile":"/Users/MiKE/Development/www/mnx/config_environment/eslint.js","useEslintrc":false}!./resources/react/components/global/BigError.js ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_CMLogo__ = __webpack_require__(/*! ../global/CMLogo */ "./resources/react/components/global/CMLogo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__ = __webpack_require__(/*! material-ui/styles/colors */ "./node_modules/material-ui/styles/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    BigError: {
        displayName: 'BigError'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/BigError.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/BigError.js',
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
 * File: BigError.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   4 Mar, 2017 | 1:57 PM
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






var BigError = _wrapComponent('BigError')((_temp = _class = function (_React$Component) {
    _inherits(BigError, _React$Component);

    function BigError() {
        _classCallCheck(this, BigError);

        return _possibleConstructorReturn(this, (BigError.__proto__ || Object.getPrototypeOf(BigError)).apply(this, arguments));
    }

    _createClass(BigError, [{
        key: 'render',
        value: function render() {
            var palette = this.context.muiTheme.palette;


            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'loginContainer' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'loginBoxContainer animated bounceInDown' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'left', style: { backgroundColor: palette.primary1Color } },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__global_CMLogo__["a" /* default */], { color: __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__["lightBlue100"] })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'right', style: { backgroundColor: __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__["blueGrey50"], padding: 50 } },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'h2',
                            null,
                            'Whoops!'
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            null,
                            'Houston, we have a problem!'
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'note', style: { marginTop: 20 } },
                            'There seems to be some communication issues right now,',
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'strong',
                                null,
                                ' please give a few minutes and try again.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'a',
                                { href: '', tabIndex: -1 },
                                'support@capitalmental.com'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'strong',
                                null,
                                'Description:'
                            ),
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                            this.props.error
                        )
                    )
                )
            );
        }

        //noinspection JSUnusedGlobalSymbols

    }]);

    return BigError;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _class.propTypes = {}, _class.defaultProps = {}, _class.contextTypes = {
    muiTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
}, _temp));

/* harmony default export */ __webpack_exports__["default"] = (BigError);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/react/components/global/CMLogo.js":
/* exports provided: default */
/* exports used: default */
/*!*****************************************************!*\
  !*** ./resources/react/components/global/CMLogo.js ***!
  \*****************************************************/
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





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CMLogo: {
        displayName: 'CMLogo'
    }
};

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_MiKE_Development_www_mnx_node_modules_react_transform_hmr_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/CMLogo.js',
    components: _components,
    locals: [module],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersMiKEDevelopmentWwwMnxNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_MiKE_Development_www_mnx_node_modules_react_transform_catch_errors_lib_index_js___default()({
    filename: '/Users/MiKE/Development/www/mnx/resources/react/components/global/CMLogo.js',
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
 * File: CMLogo.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   21 Feb, 2017 | 11:10 PM
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




var CMLogo = _wrapComponent('CMLogo')(function (_React$Component) {
    _inherits(CMLogo, _React$Component);

    function CMLogo(props) {
        _classCallCheck(this, CMLogo);

        var _this = _possibleConstructorReturn(this, (CMLogo.__proto__ || Object.getPrototypeOf(CMLogo)).call(this, props));

        _this.state = {
            width: 81,
            height: 39
        };
        return _this;
    }

    _createClass(CMLogo, [{
        key: 'getSize',
        value: function getSize() {
            var _props = this.props,
                sizeW = _props.sizeW,
                sizeH = _props.sizeH,
                oSizeW = _props.oSizeW,
                oSizeH = _props.oSizeH;


            var sizeInfo = !sizeW && !sizeH ? "none" : sizeW ? 'width' : 'height';
            var newWidth = void 0,
                newHeight = void 0;

            switch (sizeInfo) {
                case 'none':
                    newWidth = oSizeW;
                    newHeight = oSizeH;
                    break;
                case 'width':
                    newWidth = sizeW;
                    newHeight = newWidth / oSizeW * oSizeH;
                    break;
                case 'height':
                    newHeight = sizeH;
                    newWidth = newHeight / oSizeH * oSizeW;
                    break;
                default:
                    newWidth = oSizeW;
                    newHeight = oSizeH;
                    break;
            }

            this.setState({ width: Math.round(newWidth), height: Math.round(newHeight) });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getSize();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (!prevProps) return;
            if (prevState.width !== this.state.width || prevState.height !== this.state.height) {
                this.getSize();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                width = _state.width,
                height = _state.height;

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'svg',
                { id: 'cm-logo', width: width + "px", height: height + "px", viewBox: '0 0 81 39', version: '1.1', fill: this.props.color, xmlns: 'http://www.w3.org/2000/svg' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'title',
                    null,
                    'CapitalMental Logo - 2016'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'desc',
                    null,
                    'This is the logo of CapitalMental - www.capitalmental.com'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('defs', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M34.412,3.85814964 C34.412,4.85714964 34.02,5.76614964 33.388,6.44814964 C32.693,7.20714964 31.695,7.67514964 30.583,7.67514964 L19.108,7.67514964 C12.777,7.67514964 7.647, 12.8181496 7.647,19.1491496 C7.647,25.4811496 12.777,30.6241496 19.108,30.6241496 C21.232,30.6241496 22.937,32.3301496 22.937,34.4401496 C22.937,36.5511496 21.232, 38.2691496 19.108,38.2691496 C12.866,38.2691496 7.317,35.2621496 3.817,30.6241496 C1.416,27.4271496 0,23.4461496 0,19.1491496 C0,14.8401496 1.416,10.8721496 3.817, 7.67514964 C7.317,3.02414964 12.866,0.0291496433 19.108,0.0291496433 L30.583,0.0291496433 C32.693,0.0291496433 34.412,1.73514964 34.412,3.85814964 Z M32.935,37.9818496 L33.092, 38.0408496 C35.018,38.7648496 37.166,37.7918496 37.891,35.8648496 L49.467,5.09784964 C50.192,3.17184964 49.218,1.02284964 47.292,0.297849643 L47.135,0.239849643 C45.209, -0.485150357 43.06,0.488849643 42.335,2.41484964 L30.76,33.1828496 C30.035,35.1088496 31.009,37.2568496 32.935,37.9818496 Z M48.2415,37.9818496 L48.3985,38.0408496 C50.3245, 38.7648496 52.4725,37.7918496 53.1975,35.8648496 L64.7735,5.09784964 C65.4985,3.17184964 64.5245,1.02284964 62.5985,0.297849643 L62.4415,0.239849643 C60.5155,-0.485150357 58.3665, 0.488849643 57.6415,2.41484964 L46.0665,33.1828496 C45.3415,35.1088496 46.3155,37.2568496 48.2415,37.9818496 Z M63.5479,37.9818496 L63.7049,38.0408496 C65.6309, 38.7648496 67.7789,37.7918496 68.5039,35.8648496 L80.0799,5.09784964 C80.8049,3.17184964 79.8309,1.02284964 77.9049,0.297849643 L77.7479,0.239849643 C75.8219,-0.485150357 73.6729, 0.488849643 72.9479,2.41484964 L61.3729,33.1828496 C60.6479,35.1088496 61.6219,37.2568496 63.5479,37.9818496 Z' })
            );
        }
    }]);

    return CMLogo;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

CMLogo.defaultProps = {
    color: "#AB2430",
    oSizeW: 81,
    oSizeH: 39,
    sizeW: 0,
    sizeH: 0
};

CMLogo.propTypes = {
    color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    oSizeW: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    oSizeH: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    sizeW: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    sizeH: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
};

/* harmony default export */ __webpack_exports__["a"] = (CMLogo);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../~/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

});
//# sourceMappingURL=zyxdb64028d2c74a1fa688f.js.map