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
import DxPivotGridFieldChooser from 'devextreme/ui/pivot_grid_field_chooser';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxPivotGridFieldChooserComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPivotGridFieldChooser;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    dataSource: any;
    layout: any;
    texts: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onContextMenuPreparing: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    activeStateEnabledChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
    visibleChange: any;
    dataSourceChange: any;
    layoutChange: any;
    textsChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPivotGridFieldChooser;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPivotGridFieldChooserModule {
}