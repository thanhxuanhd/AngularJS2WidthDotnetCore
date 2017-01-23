/*!
 * devextreme-angular
 * Version: 16.2.4
 * Build date: Wed Jan 18 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var nested_option_1 = require('../../../core/nested-option');
var DxoFormat = (function (_super) {
    __extends(DxoFormat, _super);
    function DxoFormat() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DxoFormat.prototype, "currency", {
        get: function () {
            return this._getOption('currency');
        },
        set: function (value) {
            this._setOption('currency', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "formatter", {
        get: function () {
            return this._getOption('formatter');
        },
        set: function (value) {
            this._setOption('formatter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "parser", {
        get: function () {
            return this._getOption('parser');
        },
        set: function (value) {
            this._setOption('parser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFormat;
}(nested_option_1.NestedOption));
exports.DxoFormat = DxoFormat;
//# sourceMappingURL=format.js.map