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
var DxoSelectedRangeComponent = (function (_super) {
    __extends(DxoSelectedRangeComponent, _super);
    function DxoSelectedRangeComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSelectedRangeComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectedRangeComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectedRangeComponent.prototype, "_optionPath", {
        get: function () {
            return 'selectedRange';
        },
        enumerable: true,
        configurable: true
    });
    DxoSelectedRangeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-selected-range',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoSelectedRangeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSelectedRangeComponent.propDecorators = {
        'endValue': [{ type: core_1.Input },],
        'startValue': [{ type: core_1.Input },],
    };
    return DxoSelectedRangeComponent;
}(nested_option_2.NestedOption));
exports.DxoSelectedRangeComponent = DxoSelectedRangeComponent;
var DxoSelectedRangeModule = (function () {
    function DxoSelectedRangeModule() {
    }
    DxoSelectedRangeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSelectedRangeComponent
                    ],
                    exports: [
                        DxoSelectedRangeComponent
                    ],
                },] },
    ];
    DxoSelectedRangeModule.ctorParameters = function () { return []; };
    return DxoSelectedRangeModule;
}());
exports.DxoSelectedRangeModule = DxoSelectedRangeModule;
//# sourceMappingURL=selected-range.js.map