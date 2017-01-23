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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxSparkline from 'devextreme/viz/sparkline';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxSparklineComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxSparkline;
    elementAttr: any;
    rtlEnabled: any;
    margin: any;
    pathModified: any;
    size: any;
    theme: any;
    tooltip: any;
    argumentField: any;
    barNegativeColor: any;
    barPositiveColor: any;
    dataSource: any;
    firstLastColor: any;
    ignoreEmptyPoints: any;
    lineColor: any;
    lineWidth: any;
    lossColor: any;
    maxColor: any;
    maxValue: any;
    minColor: any;
    minValue: any;
    pointColor: any;
    pointSize: any;
    pointSymbol: any;
    showFirstLast: any;
    showMinMax: any;
    type: any;
    valueField: any;
    winColor: any;
    winlossThreshold: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onTooltipHidden: any;
    onTooltipShown: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    marginChange: any;
    pathModifiedChange: any;
    sizeChange: any;
    themeChange: any;
    tooltipChange: any;
    argumentFieldChange: any;
    barNegativeColorChange: any;
    barPositiveColorChange: any;
    dataSourceChange: any;
    firstLastColorChange: any;
    ignoreEmptyPointsChange: any;
    lineColorChange: any;
    lineWidthChange: any;
    lossColorChange: any;
    maxColorChange: any;
    maxValueChange: any;
    minColorChange: any;
    minValueChange: any;
    pointColorChange: any;
    pointSizeChange: any;
    pointSymbolChange: any;
    showFirstLastChange: any;
    showMinMaxChange: any;
    typeChange: any;
    valueFieldChange: any;
    winColorChange: any;
    winlossThresholdChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxSparkline;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxSparklineModule {
}