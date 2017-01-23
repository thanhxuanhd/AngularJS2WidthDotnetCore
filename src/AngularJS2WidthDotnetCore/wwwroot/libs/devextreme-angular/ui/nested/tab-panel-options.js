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
var tab_panel_options_1 = require('./base/tab-panel-options');
var item_dxi_1 = require('./item-dxi');
var DxoTabPanelOptionsComponent = (function (_super) {
    __extends(DxoTabPanelOptionsComponent, _super);
    function DxoTabPanelOptionsComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabPanelOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoTabPanelOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-tab-panel-options',
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
                        'accessKey',
                        'activeStateEnabled',
                        'disabled',
                        'focusStateEnabled',
                        'hint',
                        'hoverStateEnabled',
                        'onContentReady',
                        'tabIndex',
                        'visible',
                        'dataSource',
                        'itemHoldTimeout',
                        'itemTemplate',
                        'onItemClick',
                        'onItemContextMenu',
                        'onItemHold',
                        'onItemRendered',
                        'onSelectionChanged',
                        'selectedIndex',
                        'selectedItem',
                        'items',
                        'animationEnabled',
                        'deferRendering',
                        'loop',
                        'swipeEnabled',
                        'itemTitleTemplate',
                        'onTitleClick',
                        'onTitleHold',
                        'onTitleRendered',
                        'scrollByContent',
                        'scrollingEnabled',
                        'showNavButtons'
                    ]
                },] },
    ];
    DxoTabPanelOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoTabPanelOptionsComponent.propDecorators = {
        'itemsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxoTabPanelOptionsComponent;
}(tab_panel_options_1.DxoTabPanelOptions));
exports.DxoTabPanelOptionsComponent = DxoTabPanelOptionsComponent;
var DxoTabPanelOptionsModule = (function () {
    function DxoTabPanelOptionsModule() {
    }
    DxoTabPanelOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoTabPanelOptionsComponent
                    ],
                    exports: [
                        DxoTabPanelOptionsComponent
                    ],
                },] },
    ];
    DxoTabPanelOptionsModule.ctorParameters = function () { return []; };
    return DxoTabPanelOptionsModule;
}());
exports.DxoTabPanelOptionsModule = DxoTabPanelOptionsModule;
//# sourceMappingURL=tab-panel-options.js.map