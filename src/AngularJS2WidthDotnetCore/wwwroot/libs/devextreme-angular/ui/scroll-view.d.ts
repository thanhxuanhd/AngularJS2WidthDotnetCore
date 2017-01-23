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
import { ElementRef, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxScrollViewComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxScrollView;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    bounceEnabled: any;
    direction: any;
    disabled: any;
    scrollByContent: any;
    scrollByThumb: any;
    showScrollbar: any;
    useNative: any;
    pulledDownText: any;
    pullingDownText: any;
    reachBottomText: any;
    refreshingText: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onScroll: any;
    onUpdated: any;
    onPullDown: any;
    onReachBottom: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    bounceEnabledChange: any;
    directionChange: any;
    disabledChange: any;
    scrollByContentChange: any;
    scrollByThumbChange: any;
    showScrollbarChange: any;
    useNativeChange: any;
    pulledDownTextChange: any;
    pullingDownTextChange: any;
    reachBottomTextChange: any;
    refreshingTextChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxScrollView;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxScrollViewModule {
}