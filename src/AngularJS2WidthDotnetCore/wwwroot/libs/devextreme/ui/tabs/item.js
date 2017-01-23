/**
 * DevExtreme (ui/tabs/item.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    CollectionWidgetItem = require("../collection/item");
var TABS_ITEM_BADGE_CLASS = "dx-tabs-item-badge",
    BADGE_CLASS = "dx-badge";
var TabsItem = CollectionWidgetItem.inherit({
    _renderWatchers: function() {
        this.callBase();
        this._startWatcher("badge", this._renderBadge.bind(this))
    },
    _renderBadge: function(badge) {
        this._$element.children("." + BADGE_CLASS).remove();
        if (!badge) {
            return
        }
        var $badge = $("<div>").addClass(TABS_ITEM_BADGE_CLASS).addClass(BADGE_CLASS).text(badge);
        this._$element.append($badge)
    }
});
module.exports = TabsItem;