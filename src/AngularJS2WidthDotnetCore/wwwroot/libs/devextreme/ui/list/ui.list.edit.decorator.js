/**
 * DevExtreme (ui/list/ui.list.edit.decorator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class"),
    swipeEvents = require("../../events/swipe"),
    eventUtils = require("../../events/utils");
var LIST_EDIT_DECORATOR = "dxListEditDecorator",
    SWIPE_START_EVENT_NAME = eventUtils.addNamespace(swipeEvents.start, LIST_EDIT_DECORATOR),
    SWIPE_UPDATE_EVENT_NAME = eventUtils.addNamespace(swipeEvents.swipe, LIST_EDIT_DECORATOR),
    SWIPE_END_EVENT_NAME = eventUtils.addNamespace(swipeEvents.end, LIST_EDIT_DECORATOR);
var EditDecorator = Class.inherit({
    ctor: function(list) {
        this._list = list;
        this._init()
    },
    _init: $.noop,
    _shouldHandleSwipe: false,
    _attachSwipeEvent: function(config) {
        var swipeConfig = {
            itemSizeFunc: $.proxy(function() {
                if (this._clearSwipeCache) {
                    this._itemWidthCache = this._list.element().width();
                    this._clearSwipeCache = false
                }
                return this._itemWidthCache
            }, this)
        };
        config.$itemElement.on(SWIPE_START_EVENT_NAME, swipeConfig, $.proxy(this._itemSwipeStartHandler, this)).on(SWIPE_UPDATE_EVENT_NAME, $.proxy(this._itemSwipeUpdateHandler, this)).on(SWIPE_END_EVENT_NAME, $.proxy(this._itemSwipeEndHandler, this))
    },
    _itemSwipeStartHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        if ($itemElement.is(".dx-state-disabled, .dx-state-disabled *")) {
            e.cancel = true;
            return
        }
        this._swipeStartHandler($itemElement, e)
    },
    _itemSwipeUpdateHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        this._swipeUpdateHandler($itemElement, e)
    },
    _itemSwipeEndHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        this._swipeEndHandler($itemElement, e);
        this._clearSwipeCache = true
    },
    beforeBag: $.noop,
    afterBag: $.noop,
    _commonOptions: function() {
        return {
            activeStateEnabled: this._list.option("activeStateEnabled"),
            hoverStateEnabled: this._list.option("hoverStateEnabled"),
            focusStateEnabled: this._list.option("focusStateEnabled")
        }
    },
    modifyElement: function(config) {
        if (this._shouldHandleSwipe) {
            this._attachSwipeEvent(config);
            this._clearSwipeCache = true
        }
    },
    afterRender: $.noop,
    handleClick: $.noop,
    handleContextMenu: $.noop,
    handleDataSourceChanged: $.noop,
    _swipeStartHandler: $.noop,
    _swipeUpdateHandler: $.noop,
    _swipeEndHandler: $.noop,
    visibilityChange: $.noop,
    dispose: $.noop
});
module.exports = EditDecorator;