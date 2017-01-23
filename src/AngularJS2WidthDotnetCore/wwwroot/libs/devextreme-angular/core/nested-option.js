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
var $ = require('jquery');
var template_1 = require('./template');
var BaseNestedOption = (function () {
    function BaseNestedOption() {
        this._initialOptions = {};
        this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this), this._filterItems.bind(this));
    }
    Object.defineProperty(BaseNestedOption.prototype, "_optionPath", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    BaseNestedOption.prototype._getOption = function (name) {
        if (this.isLinked) {
            return this.instance.option(this._fullOptionPath() + name);
        }
        else {
            return this._initialOptions[name];
        }
    };
    BaseNestedOption.prototype._setOption = function (name, value) {
        if (this.isLinked) {
            this.instance.option(this._fullOptionPath() + name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    };
    BaseNestedOption.prototype.setHost = function (host, optionPath) {
        this._host = host;
        this._hostOptionPath = optionPath;
    };
    BaseNestedOption.prototype.setChildren = function (propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    };
    BaseNestedOption.prototype._filterItems = function (items) {
        var _this = this;
        return items.filter(function (item) { return item !== _this; });
    };
    Object.defineProperty(BaseNestedOption.prototype, "instance", {
        get: function () {
            return this._host && this._host.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNestedOption.prototype, "isLinked", {
        get: function () {
            return !!this.instance;
        },
        enumerable: true,
        configurable: true
    });
    return BaseNestedOption;
}());
exports.BaseNestedOption = BaseNestedOption;
var CollectionNestedOptionContainerImpl = (function () {
    function CollectionNestedOptionContainerImpl(_setOption, _filterItems) {
        this._setOption = _setOption;
        this._filterItems = _filterItems;
        this._activatedQueries = {};
    }
    CollectionNestedOptionContainerImpl.prototype.setChildren = function (propertyName, items) {
        if (this._filterItems) {
            items = this._filterItems(items);
        }
        if (items.length) {
            this._activatedQueries[propertyName] = true;
        }
        if (this._activatedQueries[propertyName]) {
            var widgetItems = items.map(function (item, index) {
                item._index = index;
                return item._value;
            });
            this._setOption(propertyName, widgetItems);
        }
    };
    return CollectionNestedOptionContainerImpl;
}());
exports.CollectionNestedOptionContainerImpl = CollectionNestedOptionContainerImpl;
var NestedOption = (function (_super) {
    __extends(NestedOption, _super);
    function NestedOption() {
        _super.apply(this, arguments);
    }
    NestedOption.prototype.setHost = function (host, optionPath) {
        _super.prototype.setHost.call(this, host, optionPath);
        this._host[this._optionPath] = this._initialOptions;
    };
    NestedOption.prototype._fullOptionPath = function () {
        return this._hostOptionPath() + this._optionPath + '.';
    };
    return NestedOption;
}(BaseNestedOption));
exports.NestedOption = NestedOption;
var CollectionNestedOption = (function (_super) {
    __extends(CollectionNestedOption, _super);
    function CollectionNestedOption() {
        _super.apply(this, arguments);
    }
    CollectionNestedOption.prototype._fullOptionPath = function () {
        return this._hostOptionPath() + this._optionPath + '[' + this._index + ']' + '.';
    };
    Object.defineProperty(CollectionNestedOption.prototype, "_value", {
        get: function () {
            return this._initialOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionNestedOption.prototype, "isLinked", {
        get: function () {
            return this._index !== undefined && !!this.instance;
        },
        enumerable: true,
        configurable: true
    });
    return CollectionNestedOption;
}(BaseNestedOption));
exports.CollectionNestedOption = CollectionNestedOption;
function extractTemplate(option, element) {
    if (!option.template === undefined || !element.nativeElement.hasChildNodes()) {
        return;
    }
    var childNodes = [].slice.call(element.nativeElement.childNodes);
    var userContent = childNodes.filter(function (n) {
        if (n.tagName) {
            var tagNamePrefix = n.tagName.toLowerCase().substr(0, 3);
            return !(tagNamePrefix === 'dxi' || tagNamePrefix === 'dxo');
        }
        else {
            return n.textContent.replace(/\s/g, '').length;
        }
    });
    if (!userContent.length) {
        return;
    }
    option.template = {
        render: function (renderData) {
            if (renderData.container) {
                renderData.container.append(element.nativeElement);
            }
            return $(element.nativeElement)
                .addClass(template_1.DX_TEMPLATE_WRAPPER_CLASS);
        }
    };
}
exports.extractTemplate = extractTemplate;
var NestedOptionHost = (function () {
    function NestedOptionHost() {
    }
    NestedOptionHost.prototype.setHost = function (host, optionPath) {
        this._host = host;
        this._optionPath = optionPath || (function () { return ''; });
    };
    NestedOptionHost.prototype.setNestedOption = function (nestedOption) {
        nestedOption.setHost(this._host, this._optionPath);
    };
    return NestedOptionHost;
}());
exports.NestedOptionHost = NestedOptionHost;
//# sourceMappingURL=nested-option.js.map