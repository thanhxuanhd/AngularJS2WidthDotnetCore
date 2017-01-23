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
var events_strategy_1 = require('./events-strategy');
var nested_option_1 = require('./nested-option');
var DxComponent = (function () {
    function DxComponent(element, ngZone, templateHost, watcherHelper) {
        this.element = element;
        this.watcherHelper = watcherHelper;
        this._initialOptions = { integrationOptions: {} };
        this.templates = [];
        templateHost.setHost(this);
        this._collectionContainerImpl = new nested_option_1.CollectionNestedOptionContainerImpl(this._setOption.bind(this));
        this.eventHelper = new events_strategy_1.EmitterHelper(ngZone, this);
    }
    DxComponent.prototype._initTemplates = function () {
        if (this.templates.length) {
            var initialTemplates_1 = {};
            this.templates.forEach(function (template) {
                initialTemplates_1[template.name] = template;
            });
            this._initialOptions.integrationOptions.templates = initialTemplates_1;
        }
    };
    DxComponent.prototype._initOptions = function () {
        this._initialOptions.eventsStrategy = this.eventHelper.strategy;
        this._initialOptions.integrationOptions.watchMethod = this.watcherHelper.getWatchMethod();
    };
    DxComponent.prototype._createEventEmitters = function (events) {
        var _this = this;
        events.forEach(function (event) {
            _this.eventHelper.createEmitter(event.emit, event.subscribe);
        });
    };
    DxComponent.prototype._initEvents = function () {
        var _this = this;
        this.instance.on('optionChanged', function (e) {
            var changeEventName = e.name + 'Change';
            _this.eventHelper.fireNgEvent(changeEventName, [e.value]);
        });
    };
    DxComponent.prototype._getOption = function (name) {
        if (this.instance) {
            return this.instance.option(name);
        }
        else {
            return this._initialOptions[name];
        }
    };
    DxComponent.prototype._setOption = function (name, value) {
        if (this.instance) {
            this.instance.option(name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    };
    DxComponent.prototype._createWidget = function (element) {
        this._initTemplates();
        this._initOptions();
        this.instance = this._createInstance(element, this._initialOptions);
        this._initEvents();
    };
    DxComponent.prototype._destroyWidget = function () {
        if (this.instance) {
            this.instance.element().triggerHandler({ type: 'dxremove', _angularIntegration: true });
        }
    };
    DxComponent.prototype.setTemplate = function (template) {
        this.templates.push(template);
    };
    DxComponent.prototype.setChildren = function (propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    };
    return DxComponent;
}());
exports.DxComponent = DxComponent;
var DxComponentExtension = (function (_super) {
    __extends(DxComponentExtension, _super);
    function DxComponentExtension() {
        _super.apply(this, arguments);
    }
    DxComponentExtension.prototype.createInstance = function (element) {
        this._createWidget(element);
    };
    return DxComponentExtension;
}(DxComponent));
exports.DxComponentExtension = DxComponentExtension;
//# sourceMappingURL=component.js.map