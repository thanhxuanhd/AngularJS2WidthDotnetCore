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
var DxoGroupingComponent = (function (_super) {
    __extends(DxoGroupingComponent, _super);
    function DxoGroupingComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoGroupingComponent.prototype, "allowCollapsing", {
        get: function () {
            return this._getOption('allowCollapsing');
        },
        set: function (value) {
            this._setOption('allowCollapsing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "autoExpandAll", {
        get: function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "contextMenuEnabled", {
        get: function () {
            return this._getOption('contextMenuEnabled');
        },
        set: function (value) {
            this._setOption('contextMenuEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "expandMode", {
        get: function () {
            return this._getOption('expandMode');
        },
        set: function (value) {
            this._setOption('expandMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "groupContinuedMessage", {
        get: function () {
            return this._getOption('groupContinuedMessage');
        },
        set: function (value) {
            this._setOption('groupContinuedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "groupContinuesMessage", {
        get: function () {
            return this._getOption('groupContinuesMessage');
        },
        set: function (value) {
            this._setOption('groupContinuesMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "_optionPath", {
        get: function () {
            return 'grouping';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-grouping',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoGroupingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoGroupingComponent.propDecorators = {
        'allowCollapsing': [{ type: core_1.Input },],
        'autoExpandAll': [{ type: core_1.Input },],
        'contextMenuEnabled': [{ type: core_1.Input },],
        'expandMode': [{ type: core_1.Input },],
        'groupContinuedMessage': [{ type: core_1.Input },],
        'groupContinuesMessage': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
    };
    return DxoGroupingComponent;
}(nested_option_2.NestedOption));
exports.DxoGroupingComponent = DxoGroupingComponent;
var DxoGroupingModule = (function () {
    function DxoGroupingModule() {
    }
    DxoGroupingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoGroupingComponent
                    ],
                    exports: [
                        DxoGroupingComponent
                    ],
                },] },
    ];
    DxoGroupingModule.ctorParameters = function () { return []; };
    return DxoGroupingModule;
}());
exports.DxoGroupingModule = DxoGroupingModule;
//# sourceMappingURL=grouping.js.map