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
var DxoMasterDetailComponent = (function (_super) {
    __extends(DxoMasterDetailComponent, _super);
    function DxoMasterDetailComponent(parentOptionHost, optionHost, element) {
        _super.call(this);
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoMasterDetailComponent.prototype, "autoExpandAll", {
        get: function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "_optionPath", {
        get: function () {
            return 'masterDetail';
        },
        enumerable: true,
        configurable: true
    });
    DxoMasterDetailComponent.prototype.ngAfterViewInit = function () {
        nested_option_1.extractTemplate(this, this.element);
    };
    DxoMasterDetailComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-master-detail',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoMasterDetailComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxoMasterDetailComponent.propDecorators = {
        'autoExpandAll': [{ type: core_1.Input },],
        'enabled': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input },],
    };
    return DxoMasterDetailComponent;
}(nested_option_2.NestedOption));
exports.DxoMasterDetailComponent = DxoMasterDetailComponent;
var DxoMasterDetailModule = (function () {
    function DxoMasterDetailModule() {
    }
    DxoMasterDetailModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMasterDetailComponent
                    ],
                    exports: [
                        DxoMasterDetailComponent
                    ],
                },] },
    ];
    DxoMasterDetailModule.ctorParameters = function () { return []; };
    return DxoMasterDetailModule;
}());
exports.DxoMasterDetailModule = DxoMasterDetailModule;
//# sourceMappingURL=master-detail.js.map