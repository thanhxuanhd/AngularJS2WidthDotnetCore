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
var radio_group_1 = require('devextreme/ui/radio_group');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var item_dxi_2 = require('./nested/item-dxi');
var DxRadioGroupComponent = (function (_super) {
    __extends(DxRadioGroupComponent, _super);
    function DxRadioGroupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
            { emit: 'layoutChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxRadioGroupComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "layout", {
        get: function () {
            return this._getOption('layout');
        },
        set: function (value) {
            this._setOption('layout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRadioGroupComponent.prototype._createInstance = function (element, options) {
        var widget = new radio_group_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxRadioGroupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRadioGroupComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxRadioGroupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    DxRadioGroupComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxRadioGroupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-radio-group',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxRadioGroupComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxRadioGroupComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'valueExpr': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'layout': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'valueExprChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'layoutChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxRadioGroupComponent;
}(component_1.DxComponent));
exports.DxRadioGroupComponent = DxRadioGroupComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxRadioGroupValueAccessorDirective; }),
    multi: true
};
var DxRadioGroupValueAccessorDirective = (function () {
    function DxRadioGroupValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxRadioGroupValueAccessorDirective.prototype.onChange = function (_) { };
    DxRadioGroupValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxRadioGroupValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxRadioGroupValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxRadioGroupValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxRadioGroupValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-radio-group[formControlName],dx-radio-group[formControl],dx-radio-group[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxRadioGroupValueAccessorDirective.ctorParameters = function () { return [
        { type: DxRadioGroupComponent, },
    ]; };
    DxRadioGroupValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxRadioGroupValueAccessorDirective;
}());
exports.DxRadioGroupValueAccessorDirective = DxRadioGroupValueAccessorDirective;
var DxRadioGroupModule = (function () {
    function DxRadioGroupModule() {
    }
    DxRadioGroupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxRadioGroupComponent,
                        DxRadioGroupValueAccessorDirective
                    ],
                    exports: [
                        DxRadioGroupComponent,
                        item_dxi_1.DxiItemModule,
                        DxRadioGroupValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxRadioGroupModule.ctorParameters = function () { return []; };
    return DxRadioGroupModule;
}());
exports.DxRadioGroupModule = DxRadioGroupModule;
//# sourceMappingURL=radio-group.js.map