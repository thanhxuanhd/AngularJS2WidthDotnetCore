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
var DxoTileComponent = (function (_super) {
    __extends(DxoTileComponent, _super);
    function DxoTileComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoTileComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTileComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTileComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTileComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTileComponent.prototype, "selectionStyle", {
        get: function () {
            return this._getOption('selectionStyle');
        },
        set: function (value) {
            this._setOption('selectionStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTileComponent.prototype, "_optionPath", {
        get: function () {
            return 'tile';
        },
        enumerable: true,
        configurable: true
    });
    DxoTileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-tile',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoTileComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoTileComponent.propDecorators = {
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'hoverStyle': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'selectionStyle': [{ type: core_1.Input },],
    };
    return DxoTileComponent;
}(nested_option_2.NestedOption));
exports.DxoTileComponent = DxoTileComponent;
var DxoTileModule = (function () {
    function DxoTileModule() {
    }
    DxoTileModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoTileComponent
                    ],
                    exports: [
                        DxoTileComponent
                    ],
                },] },
    ];
    DxoTileModule.ctorParameters = function () { return []; };
    return DxoTileModule;
}());
exports.DxoTileModule = DxoTileModule;
//# sourceMappingURL=tile.js.map