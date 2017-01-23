/*!
 * devextreme-angular
 * Version: 16.2.4
 * Build date: Wed Jan 18 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var tree_map_1 = require('devextreme/viz/tree_map');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var export_1 = require('./nested/export');
var loading_indicator_1 = require('./nested/loading-indicator');
var font_1 = require('./nested/font');
var size_1 = require('./nested/size');
var title_1 = require('./nested/title');
var margin_1 = require('./nested/margin');
var subtitle_1 = require('./nested/subtitle');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var format_1 = require('./nested/format');
var shadow_1 = require('./nested/shadow');
var colorizer_1 = require('./nested/colorizer');
var group_1 = require('./nested/group');
var hover_style_1 = require('./nested/hover-style');
var label_1 = require('./nested/label');
var selection_style_1 = require('./nested/selection-style');
var tile_1 = require('./nested/tile');
var DxTreeMapComponent = (function (_super) {
    __extends(DxTreeMapComponent, _super);
    function DxTreeMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'drill', emit: 'onDrill' },
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
            { subscribe: 'nodesRendering', emit: 'onNodesRendering' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'childrenFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'colorizerChange' },
            { emit: 'dataSourceChange' },
            { emit: 'groupChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'idFieldChange' },
            { emit: 'interactWithGroupChange' },
            { emit: 'labelFieldChange' },
            { emit: 'layoutAlgorithmChange' },
            { emit: 'layoutDirectionChange' },
            { emit: 'maxDepthChange' },
            { emit: 'parentFieldChange' },
            { emit: 'resolveLabelOverflowChange' },
            { emit: 'selectionModeChange' },
            { emit: 'tileChange' },
            { emit: 'valueFieldChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxTreeMapComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "childrenField", {
        get: function () {
            return this._getOption('childrenField');
        },
        set: function (value) {
            this._setOption('childrenField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
        get: function () {
            return this._getOption('colorField');
        },
        set: function (value) {
            this._setOption('colorField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
        get: function () {
            return this._getOption('colorizer');
        },
        set: function (value) {
            this._setOption('colorizer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "group", {
        get: function () {
            return this._getOption('group');
        },
        set: function (value) {
            this._setOption('group', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
        get: function () {
            return this._getOption('idField');
        },
        set: function (value) {
            this._setOption('idField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
        get: function () {
            return this._getOption('interactWithGroup');
        },
        set: function (value) {
            this._setOption('interactWithGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
        get: function () {
            return this._getOption('labelField');
        },
        set: function (value) {
            this._setOption('labelField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
        get: function () {
            return this._getOption('layoutAlgorithm');
        },
        set: function (value) {
            this._setOption('layoutAlgorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
        get: function () {
            return this._getOption('layoutDirection');
        },
        set: function (value) {
            this._setOption('layoutDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
        get: function () {
            return this._getOption('maxDepth');
        },
        set: function (value) {
            this._setOption('maxDepth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
        get: function () {
            return this._getOption('parentField');
        },
        set: function (value) {
            this._setOption('parentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
        get: function () {
            return this._getOption('resolveLabelOverflow');
        },
        set: function (value) {
            this._setOption('resolveLabelOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
        get: function () {
            return this._getOption('tile');
        },
        set: function (value) {
            this._setOption('tile', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeMapComponent.prototype._createInstance = function (element, options) {
        return new tree_map_1.default(element, options);
    };
    DxTreeMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeMapComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
    };
    DxTreeMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    };
    DxTreeMapComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxTreeMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tree-map',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxTreeMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxTreeMapComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'colorField': [{ type: core_1.Input },],
        'colorizer': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'group': [{ type: core_1.Input },],
        'hoverEnabled': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'interactWithGroup': [{ type: core_1.Input },],
        'labelField': [{ type: core_1.Input },],
        'layoutAlgorithm': [{ type: core_1.Input },],
        'layoutDirection': [{ type: core_1.Input },],
        'maxDepth': [{ type: core_1.Input },],
        'parentField': [{ type: core_1.Input },],
        'resolveLabelOverflow': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'tile': [{ type: core_1.Input },],
        'valueField': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onClick': [{ type: core_1.Output },],
        'onDrill': [{ type: core_1.Output },],
        'onHoverChanged': [{ type: core_1.Output },],
        'onNodesInitialized': [{ type: core_1.Output },],
        'onNodesRendering': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'childrenFieldChange': [{ type: core_1.Output },],
        'colorFieldChange': [{ type: core_1.Output },],
        'colorizerChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'groupChange': [{ type: core_1.Output },],
        'hoverEnabledChange': [{ type: core_1.Output },],
        'idFieldChange': [{ type: core_1.Output },],
        'interactWithGroupChange': [{ type: core_1.Output },],
        'labelFieldChange': [{ type: core_1.Output },],
        'layoutAlgorithmChange': [{ type: core_1.Output },],
        'layoutDirectionChange': [{ type: core_1.Output },],
        'maxDepthChange': [{ type: core_1.Output },],
        'parentFieldChange': [{ type: core_1.Output },],
        'resolveLabelOverflowChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'tileChange': [{ type: core_1.Output },],
        'valueFieldChange': [{ type: core_1.Output },],
    };
    return DxTreeMapComponent;
}(component_1.DxComponent));
exports.DxTreeMapComponent = DxTreeMapComponent;
var DxTreeMapModule = (function () {
    function DxTreeMapModule() {
    }
    DxTreeMapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        colorizer_1.DxoColorizerModule,
                        group_1.DxoGroupModule,
                        hover_style_1.DxoHoverStyleModule,
                        label_1.DxoLabelModule,
                        selection_style_1.DxoSelectionStyleModule,
                        tile_1.DxoTileModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxTreeMapComponent
                    ],
                    exports: [
                        DxTreeMapComponent,
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        colorizer_1.DxoColorizerModule,
                        group_1.DxoGroupModule,
                        hover_style_1.DxoHoverStyleModule,
                        label_1.DxoLabelModule,
                        selection_style_1.DxoSelectionStyleModule,
                        tile_1.DxoTileModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxTreeMapModule.ctorParameters = function () { return []; };
    return DxTreeMapModule;
}());
exports.DxTreeMapModule = DxTreeMapModule;
//# sourceMappingURL=tree-map.js.map