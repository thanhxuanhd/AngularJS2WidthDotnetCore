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
var core_1 = require('@angular/core');
var nested_option_1 = require('../../core/nested-option');
var nested_option_2 = require('../../core/nested-option');
var DxoColorizerComponent = (function (_super) {
    __extends(DxoColorizerComponent, _super);
    function DxoColorizerComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoColorizerComponent.prototype, "colorCodeField", {
        get: function () {
            return this._getOption('colorCodeField');
        },
        set: function (value) {
            this._setOption('colorCodeField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "colorizeGroups", {
        get: function () {
            return this._getOption('colorizeGroups');
        },
        set: function (value) {
            this._setOption('colorizeGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "range", {
        get: function () {
            return this._getOption('range');
        },
        set: function (value) {
            this._setOption('range', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "_optionPath", {
        get: function () {
            return 'colorizer';
        },
        enumerable: true,
        configurable: true
    });
    DxoColorizerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-colorizer',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoColorizerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoColorizerComponent.propDecorators = {
        'colorCodeField': [{ type: core_1.Input },],
        'colorizeGroups': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'range': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
    };
    return DxoColorizerComponent;
}(nested_option_2.NestedOption));
exports.DxoColorizerComponent = DxoColorizerComponent;
var DxoColorizerModule = (function () {
    function DxoColorizerModule() {
    }
    DxoColorizerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoColorizerComponent
                    ],
                    exports: [
                        DxoColorizerComponent
                    ],
                },] },
    ];
    DxoColorizerModule.ctorParameters = function () { return []; };
    return DxoColorizerModule;
}());
exports.DxoColorizerModule = DxoColorizerModule;
//# sourceMappingURL=colorizer.js.map