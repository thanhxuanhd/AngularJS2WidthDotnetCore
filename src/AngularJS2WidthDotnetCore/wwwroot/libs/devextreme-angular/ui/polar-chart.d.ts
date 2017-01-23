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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DxPolarChart from 'devextreme/viz/polar_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiSeriesComponent } from './nested/series-dxi';
export declare class DxPolarChartComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPolarChart;
    elementAttr: any;
    rtlEnabled: any;
    export: any;
    loadingIndicator: any;
    margin: any;
    pathModified: any;
    redrawOnResize: any;
    size: any;
    theme: any;
    title: any;
    tooltip: any;
    adaptiveLayout: any;
    animation: any;
    customizeLabel: any;
    customizePoint: any;
    dataSource: any;
    legend: any;
    palette: any;
    pointSelectionMode: any;
    argumentAxis: any;
    barWidth: any;
    commonAxisSettings: any;
    commonSeriesSettings: any;
    containerBackgroundColor: any;
    dataPrepareSettings: any;
    equalBarWidth: any;
    negativesAsZeroes: any;
    resolveLabelOverlapping: any;
    series: any;
    seriesSelectionMode: any;
    seriesTemplate: any;
    useSpiderWeb: any;
    valueAxis: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onDone: any;
    onPointClick: any;
    onPointHoverChanged: any;
    onPointSelectionChanged: any;
    onTooltipHidden: any;
    onTooltipShown: any;
    onArgumentAxisClick: any;
    onLegendClick: any;
    onSeriesClick: any;
    onSeriesHoverChanged: any;
    onSeriesSelectionChanged: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    exportChange: any;
    loadingIndicatorChange: any;
    marginChange: any;
    pathModifiedChange: any;
    redrawOnResizeChange: any;
    sizeChange: any;
    themeChange: any;
    titleChange: any;
    tooltipChange: any;
    adaptiveLayoutChange: any;
    animationChange: any;
    customizeLabelChange: any;
    customizePointChange: any;
    dataSourceChange: any;
    legendChange: any;
    paletteChange: any;
    pointSelectionModeChange: any;
    argumentAxisChange: any;
    barWidthChange: any;
    commonAxisSettingsChange: any;
    commonSeriesSettingsChange: any;
    containerBackgroundColorChange: any;
    dataPrepareSettingsChange: any;
    equalBarWidthChange: any;
    negativesAsZeroesChange: any;
    resolveLabelOverlappingChange: any;
    seriesChange: any;
    seriesSelectionModeChange: any;
    seriesTemplateChange: any;
    useSpiderWebChange: any;
    valueAxisChange: any;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPolarChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPolarChartModule {
}