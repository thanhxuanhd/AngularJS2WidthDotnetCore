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
var DxiRowComponent = (function (_super) {
    __extends(DxiRowComponent, _super);
    function DxiRowComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiRowComponent.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRowComponent.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRowComponent.prototype, "screen", {
        get: function () {
            return this._getOption('screen');
        },
        set: function (value) {
            this._setOption('screen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRowComponent.prototype, "_optionPath", {
        get: function () {
            return 'rows';
        },
        enumerable: true,
        configurable: true
    });
    DxiRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-row',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiRowComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiRowComponent.propDecorators = {
        'baseSize': [{ type: core_1.Input },],
        'ratio': [{ type: core_1.Input },],
        'screen': [{ type: core_1.Input },],
    };
    return DxiRowComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiRowComponent = DxiRowComponent;
var DxiRowModule = (function () {
    function DxiRowModule() {
    }
    DxiRowModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiRowComponent
                    ],
                    exports: [
                        DxiRowComponent
                    ],
                },] },
    ];
    DxiRowModule.ctorParameters = function () { return []; };
    return DxiRowModule;
}());
exports.DxiRowModule = DxiRowModule;
//# sourceMappingURL=row-dxi.js.map