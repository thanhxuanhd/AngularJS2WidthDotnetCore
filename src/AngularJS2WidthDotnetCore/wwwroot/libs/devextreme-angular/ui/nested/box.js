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
var box_options_1 = require('./base/box-options');
var item_dxi_1 = require('./item-dxi');
var DxoBoxComponent = (function (_super) {
    __extends(DxoBoxComponent, _super);
    function DxoBoxComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoBoxComponent.prototype, "_optionPath", {
        get: function () {
            return 'box';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-box',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'onDisposing',
                        'onInitialized',
                        'onOptionChanged',
                        'elementAttr',
                        'height',
                        'rtlEnabled',
                        'width',
                        'disabled',
                        'hoverStateEnabled',
                        'onContentReady',
                        'visible',
                        'dataSource',
                        'itemHoldTimeout',
                        'itemTemplate',
                        'onItemClick',
                        'onItemContextMenu',
                        'onItemHold',
                        'onItemRendered',
                        'items',
                        'align',
                        'crossAlign',
                        'direction'
                    ]
                },] },
    ];
    DxoBoxComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBoxComponent.propDecorators = {
        'itemsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxoBoxComponent;
}(box_options_1.DxoBoxOptions));
exports.DxoBoxComponent = DxoBoxComponent;
var DxoBoxModule = (function () {
    function DxoBoxModule() {
    }
    DxoBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBoxComponent
                    ],
                    exports: [
                        DxoBoxComponent
                    ],
                },] },
    ];
    DxoBoxModule.ctorParameters = function () { return []; };
    return DxoBoxModule;
}());
exports.DxoBoxModule = DxoBoxModule;
//# sourceMappingURL=box.js.map