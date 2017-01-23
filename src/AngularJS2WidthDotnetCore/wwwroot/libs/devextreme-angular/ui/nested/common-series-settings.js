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
var nested_option_1 = require('../../core/nested-option');
var chart_common_series_settings_1 = require('./base/chart-common-series-settings');
var DxoCommonSeriesSettingsComponent = (function (_super) {
    __extends(DxoCommonSeriesSettingsComponent, _super);
    function DxoCommonSeriesSettingsComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoCommonSeriesSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonSeriesSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonSeriesSettingsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-common-series-settings',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'argumentField',
                        'axis',
                        'border',
                        'closeValueField',
                        'color',
                        'cornerRadius',
                        'dashStyle',
                        'highValueField',
                        'hoverMode',
                        'hoverStyle',
                        'ignoreEmptyPoints',
                        'innerColor',
                        'label',
                        'lowValueField',
                        'maxLabelCount',
                        'minBarSize',
                        'opacity',
                        'openValueField',
                        'pane',
                        'point',
                        'rangeValue1Field',
                        'rangeValue2Field',
                        'reduction',
                        'selectionMode',
                        'selectionStyle',
                        'showInLegend',
                        'sizeField',
                        'stack',
                        'tagField',
                        'valueErrorBar',
                        'valueField',
                        'visible',
                        'width',
                        'area',
                        'bar',
                        'bubble',
                        'candlestick',
                        'fullstackedarea',
                        'fullstackedbar',
                        'fullstackedline',
                        'fullstackedspline',
                        'fullstackedsplinearea',
                        'line',
                        'rangearea',
                        'rangebar',
                        'scatter',
                        'spline',
                        'splinearea',
                        'stackedarea',
                        'stackedbar',
                        'stackedline',
                        'stackedspline',
                        'stackedsplinearea',
                        'steparea',
                        'stepline',
                        'stock',
                        'type',
                        'argumentType',
                        'innerRadius',
                        'minSegmentSize',
                        'segmentsDirection',
                        'smallValuesGrouping',
                        'startAngle',
                        'closed'
                    ]
                },] },
    ];
    DxoCommonSeriesSettingsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoCommonSeriesSettingsComponent;
}(chart_common_series_settings_1.DxoChartCommonSeriesSettings));
exports.DxoCommonSeriesSettingsComponent = DxoCommonSeriesSettingsComponent;
var DxoCommonSeriesSettingsModule = (function () {
    function DxoCommonSeriesSettingsModule() {
    }
    DxoCommonSeriesSettingsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoCommonSeriesSettingsComponent
                    ],
                    exports: [
                        DxoCommonSeriesSettingsComponent
                    ],
                },] },
    ];
    DxoCommonSeriesSettingsModule.ctorParameters = function () { return []; };
    return DxoCommonSeriesSettingsModule;
}());
exports.DxoCommonSeriesSettingsModule = DxoCommonSeriesSettingsModule;
//# sourceMappingURL=common-series-settings.js.map