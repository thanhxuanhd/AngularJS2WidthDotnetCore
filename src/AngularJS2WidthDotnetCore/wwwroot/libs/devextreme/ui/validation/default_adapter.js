/**
 * DevExtreme (ui/validation/default_adapter.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class");
var DefaultAdapter = Class.inherit({
    ctor: function(editor, validator) {
        var that = this;
        that.editor = editor;
        that.validator = validator;
        that.validationRequestsCallbacks = $.Callbacks();
        var handler = function() {
            that.validationRequestsCallbacks.fire()
        };
        editor.validationRequest.add(handler);
        editor.on("disposing", function() {
            editor.validationRequest.remove(handler)
        })
    },
    getValue: function() {
        return this.editor.option("value")
    },
    getCurrentValidationError: function() {
        return this.editor.option("validationError")
    },
    bypass: function() {
        return this.editor.option("disabled")
    },
    applyValidationResults: function(params) {
        this.editor.option({
            isValid: params.isValid,
            validationError: params.brokenRule
        })
    },
    reset: function() {
        this.editor.reset()
    },
    focus: function() {
        this.editor.focus()
    }
});
module.exports = DefaultAdapter;