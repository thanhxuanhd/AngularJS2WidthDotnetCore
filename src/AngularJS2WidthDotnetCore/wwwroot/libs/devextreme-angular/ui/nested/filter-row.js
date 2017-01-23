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
var DxoFilterRowComponent = (function (_super) {
    __extends(DxoFilterRowComponent, _super);
    function DxoFilterRowComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilter", {
        get: function () {
            return this._getOption('applyFilter');
        },
        set: function (value) {
            this._setOption('applyFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilterText", {
        get: function () {
            return this._getOption('applyFilterText');
        },
        set: function (value) {
            this._setOption('applyFilterText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenEndText", {
        get: function () {
            return this._getOption('betweenEndText');
        },
        set: function (value) {
            this._setOption('betweenEndText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenStartText", {
        get: function () {
            return this._getOption('betweenStartText');
        },
        set: function (value) {
            this._setOption('betweenStartText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "operationDescriptions", {
        get: function () {
            return this._getOption('operationDescriptions');
        },
        set: function (value) {
            this._setOption('operationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "resetOperationText", {
        get: function () {
            return this._getOption('resetOperationText');
        },
        set: function (value) {
            this._setOption('resetOperationText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showAllText", {
        get: function () {
            return this._getOption('showAllText');
        },
        set: function (value) {
            this._setOption('showAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showOperationChooser", {
        get: function () {
            return this._getOption('showOperationChooser');
        },
        set: function (value) {
            this._setOption('showOperationChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterRow';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-filter-row',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoFilterRowComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFilterRowComponent.propDecorators = {
        'applyFilter': [{ type: core_1.Input },],
        'applyFilterText': [{ type: core_1.Input },],
        'betweenEndText': [{ type: core_1.Input },],
        'betweenStartText': [{ type: core_1.Input },],
        'operationDescriptions': [{ type: core_1.Input },],
        'resetOperationText': [{ type: core_1.Input },],
        'showAllText': [{ type: core_1.Input },],
        'showOperationChooser': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return DxoFilterRowComponent;
}(nested_option_2.NestedOption));
exports.DxoFilterRowComponent = DxoFilterRowComponent;
var DxoFilterRowModule = (function () {
    function DxoFilterRowModule() {
    }
    DxoFilterRowModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFilterRowComponent
                    ],
                    exports: [
                        DxoFilterRowComponent
                    ],
                },] },
    ];
    DxoFilterRowModule.ctorParameters = function () { return []; };
    return DxoFilterRowModule;
}());
exports.DxoFilterRowModule = DxoFilterRowModule;
//# sourceMappingURL=filter-row.js.map