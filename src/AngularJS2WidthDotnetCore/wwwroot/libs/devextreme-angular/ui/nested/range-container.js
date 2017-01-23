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
var range_dxi_1 = require('./range-dxi');
var DxoRangeContainerComponent = (function (_super) {
    __extends(DxoRangeContainerComponent, _super);
    function DxoRangeContainerComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoRangeContainerComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "ranges", {
        get: function () {
            return this._getOption('ranges');
        },
        set: function (value) {
            this._setOption('ranges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "_optionPath", {
        get: function () {
            return 'rangeContainer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "rangesChildren", {
        get: function () {
            return this._getOption('ranges');
        },
        set: function (value) {
            this.setChildren('ranges', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoRangeContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-range-container',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoRangeContainerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoRangeContainerComponent.propDecorators = {
        'backgroundColor': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'ranges': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'horizontalOrientation': [{ type: core_1.Input },],
        'verticalOrientation': [{ type: core_1.Input },],
        'rangesChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return range_dxi_1.DxiRangeComponent; }),] },],
    };
    return DxoRangeContainerComponent;
}(nested_option_2.NestedOption));
exports.DxoRangeContainerComponent = DxoRangeContainerComponent;
var DxoRangeContainerModule = (function () {
    function DxoRangeContainerModule() {
    }
    DxoRangeContainerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoRangeContainerComponent
                    ],
                    exports: [
                        DxoRangeContainerComponent
                    ],
                },] },
    ];
    DxoRangeContainerModule.ctorParameters = function () { return []; };
    return DxoRangeContainerModule;
}());
exports.DxoRangeContainerModule = DxoRangeContainerModule;
//# sourceMappingURL=range-container.js.map