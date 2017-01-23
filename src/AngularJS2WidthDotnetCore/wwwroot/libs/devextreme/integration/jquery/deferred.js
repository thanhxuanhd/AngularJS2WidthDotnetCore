/**
 * DevExtreme (integration/jquery/deferred.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    compareVersion = require("../../core/utils/version").compare;
exports.fromPromise = function(promise, context) {
    var isDeferred = promise && $.isFunction(promise.done) && $.isFunction(promise.fail);
    if (isDeferred) {
        return promise
    }
    var d = $.Deferred();
    promise.then(function() {
        d.resolveWith.apply(d, [context].concat([$.makeArray(arguments)]))
    }, function() {
        d.rejectWith.apply(d, [context].concat([$.makeArray(arguments)]))
    });
    return d
};
exports.when = compareVersion($.fn.jquery, [3]) < 0 ? $.when : function(singleArg) {
    if (0 === arguments.length) {
        return $.Deferred().resolve()
    } else {
        if (1 === arguments.length) {
            return singleArg && singleArg.then ? singleArg : $.Deferred().resolve(singleArg)
        } else {
            return $.when.apply($, arguments)
        }
    }
};