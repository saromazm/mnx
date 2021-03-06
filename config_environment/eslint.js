/*
 * File: eslint.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   13 Feb, 2017 | 11:1 PM
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

module.exports = {
    root: true,

    parser: 'babel-eslint',

    // import plugin is temporarily disabled, scroll below to see why
    plugins: [/*'import', */'flowtype', 'jsx-a11y', 'react'],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },

    settings: {
        'import/ignore': [
            'node_modules',
            '\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$',
        ],
        'import/extensions': ['.js'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        }
    },

    rules: {
        // http://eslint.org/docs/rules/
        'array-callback-return': 'warn',
        'default-case': ['warn', { commentPattern: '^no default$' }],
        'dot-location': ['warn', 'property'],
        eqeqeq: ['warn', 'allow-null'],
        'guard-for-in': 'warn',
        'new-cap': ['warn', { newIsCap: true }],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': ['warn', 'always'],
        'no-const-assign': 'warn',
        'no-control-regex': 'warn',
        'no-delete-var': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'warn',
        'no-eval': 'warn',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-regexp': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': ['warn', {
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: false
        }],
        'no-multi-str': 'warn',
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-symbol': 'warn',
        'no-new-wrappers': 'warn',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': 'warn',
        'no-regex-spaces': 'warn',
        'no-restricted-syntax': [
            'warn',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-return-assign': 'warn',
        'no-script-url': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-sparse-arrays': 'warn',
        'no-this-before-super': 'warn',
        'no-throw-literal': 'warn',
        'no-undef': 'warn',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
        'no-use-before-define': ['warn', 'nofunc'],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': ['warn', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],
        'no-with': 'warn',
        'no-whitespace-before-property': 'warn',
        'operator-assignment': ['warn', 'always'],
        radix: 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        strict: ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'use-isnan': 'warn',
        'valid-typeof': 'warn',

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
        'react/jsx-no-undef': 'warn',
        'react/jsx-pascal-case': ['warn', {
            allowAllCaps: true,
            ignore: [],
        }],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-deprecated': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/react-in-jsx-scope': 'warn',
        'react/require-render-return': 'warn',

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/img-has-alt': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/no-access-key': 'warn',

        // https://github.com/gajus/eslint-plugin-flowtype
        'flowtype/define-flow-type': 'warn',
        'flowtype/require-valid-file-annotation': 'warn',
        'flowtype/use-flow-type': 'warn'
    }
};