/**
 * DevExtreme (ui/selection/selection.strategy.deferred.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    commonUtils = require("../../core/utils/common"),
    SelectionStrategy = require("./selection.strategy"),
    errors = require("../widget/ui.errors"),
    dataQuery = require("../../data/query");
module.exports = SelectionStrategy.inherit({
    getSelectedItems: function() {
        return this._loadFilteredData(this._getSelectionOption("_selectionFilter"))
    },
    getSelectedItemKeys: function() {
        var d = $.Deferred(),
            that = this,
            key = this._getSelectionOption("_key")(),
            select = commonUtils.isString(key) ? [key] : key;
        this._loadFilteredData(this._getSelectionOption("_selectionFilter"), null, select).done(function(items) {
            var keys = items.map(function(item) {
                return that._getSelectionOption("_keyOf")(item)
            });
            d.resolve(keys)
        }).fail(d.reject);
        return d.promise()
    },
    selectedItemKeys: function(keys, preserve, isDeselect, isSelectAll) {
        if (isSelectAll) {
            var filter = this._getSelectionOption("_filter")();
            if (!filter) {
                this._setSelectionOption("_selectionFilter", isDeselect ? [] : null)
            } else {
                this._addSelectionFilter(isDeselect, filter, false)
            }
        } else {
            if (!preserve) {
                this._setSelectionOption("_selectionFilter", [])
            }
            for (var i = 0; i < keys.length; i++) {
                if (isDeselect) {
                    this.removeSelectedItem(keys[i])
                } else {
                    this.addSelectedItem(keys[i])
                }
            }
        }
        this.onSelectionChanged();
        return $.Deferred().resolve()
    },
    setSelectedItems: function(keys) {
        this._setSelectionOption("_selectionFilter", null);
        for (var i = 0; i < keys.length; i++) {
            this.addSelectedItem(keys[i])
        }
    },
    isItemDataSelected: function(itemData) {
        return this.isItemKeySelected(itemData)
    },
    isItemKeySelected: function(itemData) {
        var selectionFilter = this._getSelectionOption("_selectionFilter");
        if (!selectionFilter) {
            return true
        }
        return !!dataQuery([itemData]).filter(selectionFilter).toArray().length
    },
    _processSelectedItem: function(key) {
        var keyField = this._getSelectionOption("_key")(),
            filter = [keyField, "=", key];
        if ($.isArray(keyField)) {
            filter = [];
            for (var i = 0; i < keyField.length; i++) {
                filter.push([keyField[i], "=", key[keyField[i]]]);
                if (i !== keyField.length - 1) {
                    filter.push("and")
                }
            }
        }
        return filter
    },
    addSelectedItem: function(key) {
        var filter = this._processSelectedItem(key);
        this._addSelectionFilter(false, filter, true)
    },
    removeSelectedItem: function(key) {
        var filter = this._processSelectedItem(key);
        this._addSelectionFilter(true, filter, true)
    },
    validate: function() {
        var key = this._getSelectionOption("_key");
        if (key && void 0 === key()) {
            throw errors.Error("E1042")
        }
    },
    _hasSameFilter: function(selectionFilter, currentFilter) {
        return this._findSubFilter(selectionFilter, currentFilter) >= 0
    },
    _findSubFilter: function(selectionFilter, filter) {
        if (!selectionFilter) {
            return -1
        }
        var filterString = JSON.stringify(filter);
        for (var index = 0; index < selectionFilter.length; index++) {
            var subFilter = selectionFilter[index];
            if (subFilter && JSON.stringify(subFilter) === filterString) {
                return index
            }
        }
        return -1
    },
    _isLastSubFilter: function(selectionFilter, filter) {
        if (selectionFilter && filter) {
            return this._findSubFilter(selectionFilter, filter) === selectionFilter.length - 1
        }
        return false
    },
    _addFilterOperator: function(selectionFilter, filterOperator) {
        if (selectionFilter.length > 1 && commonUtils.isString(selectionFilter[1]) && selectionFilter[1] !== filterOperator) {
            selectionFilter = [selectionFilter]
        }
        if (selectionFilter.length) {
            selectionFilter.push(filterOperator)
        }
        return selectionFilter
    },
    _denormalizeFilter: function(filter) {
        if (filter && commonUtils.isString(filter[0])) {
            filter = [filter]
        }
        return filter
    },
    _addSelectionFilter: function(isDeselect, filter, isUnique) {
        var that = this,
            needAddFilter = true,
            currentFilter = isDeselect ? ["!", filter] : filter,
            selectionFilter = that._getSelectionOption("_selectionFilter") || [];
        selectionFilter = that._denormalizeFilter(selectionFilter);
        if (selectionFilter && selectionFilter.length) {
            if (that._hasSameFilter(selectionFilter, currentFilter)) {
                return
            }
            if (that._removeInvertedFilter(selectionFilter, isDeselect, filter)) {
                needAddFilter = !isUnique
            }
            if (needAddFilter) {
                selectionFilter = that._addFilterOperator(selectionFilter, isDeselect ? "and" : "or")
            }
        }
        if (needAddFilter) {
            selectionFilter.push(currentFilter)
        }
        selectionFilter = that._normalizeFilter(selectionFilter);
        that._setSelectionOption("_selectionFilter", !isDeselect && !selectionFilter.length ? null : selectionFilter)
    },
    _normalizeFilter: function(filter) {
        if (filter && 1 === filter.length) {
            filter = filter[0]
        }
        return filter
    },
    _removeInvertedFilter: function(selectionFilter, isDeselect, filter) {
        filter = isDeselect ? filter : ["!", filter];
        var filterIndex = this._findSubFilter(selectionFilter, filter);
        if (JSON.stringify(filter) === JSON.stringify(selectionFilter)) {
            selectionFilter.splice(0, selectionFilter.length);
            return true
        }
        if (filterIndex >= 0) {
            if (filterIndex > 0) {
                selectionFilter.splice(filterIndex - 1, 2)
            } else {
                selectionFilter.splice(filterIndex, 2)
            }
            return true
        }
        return false
    },
    getSelectAllState: function() {
        var filter = this._getSelectionOption("_filter")(),
            selectionFilter = this._getSelectionOption("_selectionFilter");
        if (!selectionFilter) {
            return true
        }
        if (!selectionFilter.length) {
            return false
        }
        if (!filter || !filter.length) {
            return
        }
        selectionFilter = this._denormalizeFilter(selectionFilter);
        if (this._isLastSubFilter(selectionFilter, filter)) {
            return true
        }
        if (this._isLastSubFilter(selectionFilter, ["!", filter])) {
            return false
        }
        return
    }
});