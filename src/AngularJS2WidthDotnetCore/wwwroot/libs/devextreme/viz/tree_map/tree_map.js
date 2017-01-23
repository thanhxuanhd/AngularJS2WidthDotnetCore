/**
 * DevExtreme (viz/tree_map/tree_map.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var dxTreeMap = module.exports = require("./tree_map.base");
require("./tiling.squarified");
require("./tiling.strip");
require("./tiling.slice_and_dice");
require("./colorizing.discrete");
require("./colorizing.gradient");
require("./colorizing.range");
require("./api");
require("./hover");
require("./selection");
require("./tooltip");
require("./tracker");
require("./drilldown");
require("./plain_data_source");
dxTreeMap.addPlugin(require("../core/export").plugin);
dxTreeMap.addPlugin(require("../core/title").plugin);
dxTreeMap.addPlugin(require("../core/loading_indicator").plugin);