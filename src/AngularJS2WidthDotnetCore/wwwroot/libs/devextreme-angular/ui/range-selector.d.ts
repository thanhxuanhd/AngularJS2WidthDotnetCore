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
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxRangeSelectorComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxRangeSelector;
    validator: DxValidatorComponent;
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
    background: any;
    behavior: any;
    chart: any;
    containerBackgroundColor: any;
    dataSource: any;
    dataSourceField: any;
    indent: any;
    scale: any;
    selectedRange: any;
    selectedRangeColor: any;
    shutter: any;
    sliderHandle: any;
    sliderMarker: any;
    value: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onSelectedRangeChanged: any;
    onValueChanged: any;
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
    backgroundChange: any;
    behaviorChange: any;
    chartChange: any;
    containerBackgroundColorChange: any;
    dataSourceChange: any;
    dataSourceFieldChange: any;
    indentChange: any;
    scaleChange: any;
    selectedRangeChange: any;
    selectedRangeColorChange: any;
    shutterChange: any;
    sliderHandleChange: any;
    sliderMarkerChange: any;
    valueChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxRangeSelector;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxRangeSelectorValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxRangeSelectorComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxRangeSelectorModule {
}