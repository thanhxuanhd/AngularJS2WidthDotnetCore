/**
 * DevExtreme (core/utils/console.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery");
var logger = function() {
    var console = window.console;

    function info(text) {
        if (!console || !$.isFunction(console.info)) {
            return
        }
        console.info(text)
    }

    function warn(text) {
        if (!console || !$.isFunction(console.warn)) {
            return
        }
        console.warn(text)
    }

    function error(text) {
        if (!console || !$.isFunction(console.error)) {
            return
        }
        console.error(text)
    }
    return {
        info: info,
        warn: warn,
        error: error
    }
}();
var debug = function() {
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message)
        }
    }

    function assertParam(parameter, message) {
        assert(null !== parameter && void 0 !== parameter, message)
    }
    return {
        assert: assert,
        assertParam: assertParam
    }
}();
exports.logger = logger;
exports.debug = debug;