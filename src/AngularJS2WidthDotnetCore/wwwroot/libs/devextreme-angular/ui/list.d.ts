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
import DxList from 'devextreme/ui/list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
import { DxiMenuItemComponent } from './nested/menu-item-dxi';
export declare class DxListComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxList;
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
    itemHoldTimeout: any;
    itemTemplate: any;
    keyExpr: any;
    noDataText: any;
    selectAllMode: any;
    selectedItemKeys: any;
    selectedItems: any;
    selectionMode: any;
    items: any;
    allowItemDeleting: any;
    allowItemReordering: any;
    autoPagingEnabled: any;
    bounceEnabled: any;
    collapsibleGroups: any;
    grouped: any;
    groupTemplate: any;
    indicateLoading: any;
    itemDeleteMode: any;
    menuItems: any;
    menuMode: any;
    nextButtonText: any;
    pageLoadingText: any;
    pageLoadMode: any;
    pulledDownText: any;
    pullingDownText: any;
    pullRefreshEnabled: any;
    refreshingText: any;
    scrollByContent: any;
    scrollByThumb: any;
    scrollingEnabled: any;
    showNextButton: any;
    showScrollbar: any;
    showSelectionControls: any;
    useNativeScrolling: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onItemClick: any;
    onItemContextMenu: any;
    onItemDeleted: any;
    onItemDeleting: any;
    onItemHold: any;
    onItemRendered: any;
    onItemReordered: any;
    onSelectionChanged: any;
    onGroupRendered: any;
    onItemSwipe: any;
    onPageLoading: any;
    onPullRefresh: any;
    onScroll: any;
    onSelectAllValueChanged: any;
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
    itemHoldTimeoutChange: any;
    itemTemplateChange: any;
    keyExprChange: any;
    noDataTextChange: any;
    selectAllModeChange: any;
    selectedItemKeysChange: any;
    selectedItemsChange: any;
    selectionModeChange: any;
    itemsChange: any;
    allowItemDeletingChange: any;
    allowItemReorderingChange: any;
    autoPagingEnabledChange: any;
    bounceEnabledChange: any;
    collapsibleGroupsChange: any;
    groupedChange: any;
    groupTemplateChange: any;
    indicateLoadingChange: any;
    itemDeleteModeChange: any;
    menuItemsChange: any;
    menuModeChange: any;
    nextButtonTextChange: any;
    pageLoadingTextChange: any;
    pageLoadModeChange: any;
    pulledDownTextChange: any;
    pullingDownTextChange: any;
    pullRefreshEnabledChange: any;
    refreshingTextChange: any;
    scrollByContentChange: any;
    scrollByThumbChange: any;
    scrollingEnabledChange: any;
    showNextButtonChange: any;
    showScrollbarChange: any;
    showSelectionControlsChange: any;
    useNativeScrollingChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    menuItemsChildren: QueryList<DxiMenuItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxList;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxListModule {
}