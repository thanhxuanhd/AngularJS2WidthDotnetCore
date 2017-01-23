/**
 * DevExtreme (viz/components/parse_utils.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    commonUtils = require("../../core/utils/common"),
    isDefined = commonUtils.isDefined,
    parsers = {
        string: function(val) {
            return isDefined(val) ? "" + val : val
        },
        numeric: function(val) {
            if (!isDefined(val)) {
                return val
            }
            var parsedVal = Number(val);
            if (isNaN(parsedVal)) {
                parsedVal = void 0
            }
            return parsedVal
        },
        datetime: function(val) {
            if (!isDefined(val)) {
                return val
            }
            var parsedVal, numVal = Number(val);
            if (!isNaN(numVal)) {
                parsedVal = new Date(numVal)
            } else {
                parsedVal = new Date(val)
            }
            if (isNaN(Number(parsedVal))) {
                parsedVal = void 0
            }
            return parsedVal
        }
    };

function correctValueType(type) {
    return "numeric" === type || "datetime" === type || "string" === type ? type : ""
}
module.exports = {
    correctValueType: correctValueType,
    getParser: function(valueType) {
        return parsers[correctValueType(valueType)] || $.noop
    }
};