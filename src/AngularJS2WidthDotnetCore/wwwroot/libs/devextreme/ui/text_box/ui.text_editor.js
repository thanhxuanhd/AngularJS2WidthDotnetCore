/**
 * DevExtreme (ui/text_box/ui.text_editor.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var registerComponent = require("../../core/component_registrator"),
    TextEditorMask = require("./ui.text_editor.mask");
registerComponent("dxTextEditor", TextEditorMask);
module.exports = TextEditorMask;