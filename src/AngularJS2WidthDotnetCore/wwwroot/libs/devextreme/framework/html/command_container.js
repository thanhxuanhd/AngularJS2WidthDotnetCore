/**
 * DevExtreme (framework/html/command_container.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    MarkupComponent = require("./markup_component").MarkupComponent,
    registerComponent = require("../../core/component_registrator");
require("../../integration/knockout");
var CommandContainer = MarkupComponent.inherit({
    ctor: function(element, options) {
        if ($.isPlainObject(element)) {
            options = element;
            element = $("<div />")
        }
        this.callBase(element, options)
    },
    _setDefaultOptions: function() {
        this.callBase();
        this.option({
            id: null
        })
    },
    _render: function() {
        this.callBase();
        this.element().addClass("dx-command-container")
    }
});
registerComponent("dxCommandContainer", CommandContainer);
module.exports = CommandContainer;