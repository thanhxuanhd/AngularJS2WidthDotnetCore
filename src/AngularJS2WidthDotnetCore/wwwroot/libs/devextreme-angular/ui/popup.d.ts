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
import DxPopup from 'devextreme/ui/popup';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiToolbarItemComponent } from './nested/toolbar-item-dxi';
export declare class DxPopupComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPopup;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    animation: any;
    closeOnBackButton: any;
    closeOnOutsideClick: any;
    contentTemplate: any;
    deferRendering: any;
    dragEnabled: any;
    maxHeight: any;
    maxWidth: any;
    minHeight: any;
    minWidth: any;
    shading: any;
    shadingColor: any;
    buttons: any;
    fullScreen: any;
    resizeEnabled: any;
    showCloseButton: any;
    showTitle: any;
    title: any;
    titleTemplate: any;
    toolbarItems: any;
    position: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onHidden: any;
    onHiding: any;
    onShowing: any;
    onShown: any;
    onResize: any;
    onResizeEnd: any;
    onResizeStart: any;
    onTitleRendered: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
    visibleChange: any;
    animationChange: any;
    closeOnBackButtonChange: any;
    closeOnOutsideClickChange: any;
    contentTemplateChange: any;
    deferRenderingChange: any;
    dragEnabledChange: any;
    maxHeightChange: any;
    maxWidthChange: any;
    minHeightChange: any;
    minWidthChange: any;
    shadingChange: any;
    shadingColorChange: any;
    buttonsChange: any;
    fullScreenChange: any;
    resizeEnabledChange: any;
    showCloseButtonChange: any;
    showTitleChange: any;
    titleChange: any;
    titleTemplateChange: any;
    toolbarItemsChange: any;
    positionChange: any;
    toolbarItemsChildren: QueryList<DxiToolbarItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPopup;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPopupModule {
}