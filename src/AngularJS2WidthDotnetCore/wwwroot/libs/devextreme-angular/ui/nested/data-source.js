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
var pivot_grid_data_source_1 = require('./base/pivot-grid-data-source');
var field_dxi_1 = require('./field-dxi');
var DxoDataSourceComponent = (function (_super) {
    __extends(DxoDataSourceComponent, _super);
    function DxoDataSourceComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoDataSourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataSource';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataSourceComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDataSourceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-data-source',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'fields',
                        'filter',
                        'onChanged',
                        'onFieldsPrepared',
                        'onLoadError',
                        'onLoadingChanged',
                        'remoteOperations',
                        'retrieveFields',
                        'store'
                    ]
                },] },
    ];
    DxoDataSourceComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDataSourceComponent.propDecorators = {
        'fieldsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return field_dxi_1.DxiFieldComponent; }),] },],
    };
    return DxoDataSourceComponent;
}(pivot_grid_data_source_1.DxoPivotGridDataSource));
exports.DxoDataSourceComponent = DxoDataSourceComponent;
var DxoDataSourceModule = (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDataSourceComponent
                    ],
                    exports: [
                        DxoDataSourceComponent
                    ],
                },] },
    ];
    DxoDataSourceModule.ctorParameters = function () { return []; };
    return DxoDataSourceModule;
}());
exports.DxoDataSourceModule = DxoDataSourceModule;
//# sourceMappingURL=data-source.js.map