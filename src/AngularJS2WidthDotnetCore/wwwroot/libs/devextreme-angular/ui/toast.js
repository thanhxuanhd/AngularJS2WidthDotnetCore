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
var toast_1 = require('devextreme/ui/toast');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var animation_1 = require('./nested/animation');
var hide_1 = require('./nested/hide');
var show_1 = require('./nested/show');
var position_1 = require('./nested/position');
var at_1 = require('./nested/at');
var boundary_offset_1 = require('./nested/boundary-offset');
var collision_1 = require('./nested/collision');
var my_1 = require('./nested/my');
var offset_1 = require('./nested/offset');
var DxToastComponent = (function (_super) {
    __extends(DxToastComponent, _super);
    function DxToastComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'closeOnClickChange' },
            { emit: 'closeOnSwipeChange' },
            { emit: 'displayTimeChange' },
            { emit: 'messageChange' },
            { emit: 'positionChange' },
            { emit: 'typeChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxToastComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnBackButton", {
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "contentTemplate", {
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "maxHeight", {
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "maxWidth", {
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "minHeight", {
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "shadingColor", {
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnClick", {
        get: function () {
            return this._getOption('closeOnClick');
        },
        set: function (value) {
            this._setOption('closeOnClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnSwipe", {
        get: function () {
            return this._getOption('closeOnSwipe');
        },
        set: function (value) {
            this._setOption('closeOnSwipe', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "displayTime", {
        get: function () {
            return this._getOption('displayTime');
        },
        set: function (value) {
            this._setOption('displayTime', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "message", {
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    DxToastComponent.prototype._createInstance = function (element, options) {
        return new toast_1.default(element, options);
    };
    DxToastComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxToastComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxToastComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-toast',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxToastComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxToastComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'closeOnBackButton': [{ type: core_1.Input },],
        'closeOnOutsideClick': [{ type: core_1.Input },],
        'contentTemplate': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'maxHeight': [{ type: core_1.Input },],
        'maxWidth': [{ type: core_1.Input },],
        'minHeight': [{ type: core_1.Input },],
        'minWidth': [{ type: core_1.Input },],
        'shading': [{ type: core_1.Input },],
        'shadingColor': [{ type: core_1.Input },],
        'closeOnClick': [{ type: core_1.Input },],
        'closeOnSwipe': [{ type: core_1.Input },],
        'displayTime': [{ type: core_1.Input },],
        'message': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onHiding': [{ type: core_1.Output },],
        'onShowing': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'closeOnBackButtonChange': [{ type: core_1.Output },],
        'closeOnOutsideClickChange': [{ type: core_1.Output },],
        'contentTemplateChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'maxHeightChange': [{ type: core_1.Output },],
        'maxWidthChange': [{ type: core_1.Output },],
        'minHeightChange': [{ type: core_1.Output },],
        'minWidthChange': [{ type: core_1.Output },],
        'shadingChange': [{ type: core_1.Output },],
        'shadingColorChange': [{ type: core_1.Output },],
        'closeOnClickChange': [{ type: core_1.Output },],
        'closeOnSwipeChange': [{ type: core_1.Output },],
        'displayTimeChange': [{ type: core_1.Output },],
        'messageChange': [{ type: core_1.Output },],
        'positionChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
    };
    return DxToastComponent;
}(component_1.DxComponent));
exports.DxToastComponent = DxToastComponent;
var DxToastModule = (function () {
    function DxToastModule() {
    }
    DxToastModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxToastComponent
                    ],
                    exports: [
                        DxToastComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxToastModule.ctorParameters = function () { return []; };
    return DxToastModule;
}());
exports.DxToastModule = DxToastModule;
//# sourceMappingURL=toast.js.map