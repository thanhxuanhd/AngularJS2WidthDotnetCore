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
var DxoExportComponent = (function (_super) {
    __extends(DxoExportComponent, _super);
    function DxoExportComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoExportComponent.prototype, "allowExportSelectedData", {
        get: function () {
            return this._getOption('allowExportSelectedData');
        },
        set: function (value) {
            this._setOption('allowExportSelectedData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelFilterEnabled", {
        get: function () {
            return this._getOption('excelFilterEnabled');
        },
        set: function (value) {
            this._setOption('excelFilterEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelWrapTextEnabled", {
        get: function () {
            return this._getOption('excelWrapTextEnabled');
        },
        set: function (value) {
            this._setOption('excelWrapTextEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "fileName", {
        get: function () {
            return this._getOption('fileName');
        },
        set: function (value) {
            this._setOption('fileName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "proxyUrl", {
        get: function () {
            return this._getOption('proxyUrl');
        },
        set: function (value) {
            this._setOption('proxyUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "formats", {
        get: function () {
            return this._getOption('formats');
        },
        set: function (value) {
            this._setOption('formats', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "printingEnabled", {
        get: function () {
            return this._getOption('printingEnabled');
        },
        set: function (value) {
            this._setOption('printingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "_optionPath", {
        get: function () {
            return 'export';
        },
        enumerable: true,
        configurable: true
    });
    DxoExportComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-export',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoExportComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoExportComponent.propDecorators = {
        'allowExportSelectedData': [{ type: core_1.Input },],
        'enabled': [{ type: core_1.Input },],
        'excelFilterEnabled': [{ type: core_1.Input },],
        'excelWrapTextEnabled': [{ type: core_1.Input },],
        'fileName': [{ type: core_1.Input },],
        'proxyUrl': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
        'backgroundColor': [{ type: core_1.Input },],
        'formats': [{ type: core_1.Input },],
        'printingEnabled': [{ type: core_1.Input },],
    };
    return DxoExportComponent;
}(nested_option_2.NestedOption));
exports.DxoExportComponent = DxoExportComponent;
var DxoExportModule = (function () {
    function DxoExportModule() {
    }
    DxoExportModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoExportComponent
                    ],
                    exports: [
                        DxoExportComponent
                    ],
                },] },
    ];
    DxoExportModule.ctorParameters = function () { return []; };
    return DxoExportModule;
}());
exports.DxoExportModule = DxoExportModule;
//# sourceMappingURL=export.js.map