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
import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiRangeComponent } from './range-dxi';
export declare class DxoRangeContainerComponent extends NestedOption {
    backgroundColor: any;
    offset: any;
    palette: any;
    ranges: any;
    orientation: any;
    width: any;
    horizontalOrientation: any;
    verticalOrientation: any;
    protected readonly _optionPath: string;
    rangesChildren: QueryList<DxiRangeComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoRangeContainerModule {
}