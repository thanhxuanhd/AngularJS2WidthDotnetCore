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
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
export declare class DxoValueAxisComponent extends NestedOption {
    color: any;
    constantLineStyle: any;
    discreteAxisDivisionMode: any;
    grid: any;
    inverted: any;
    label: any;
    minorGrid: any;
    minorTick: any;
    opacity: any;
    setTicksAtUnitBeginning: any;
    stripStyle: any;
    tick: any;
    visible: any;
    width: any;
    axisDivisionFactor: any;
    categories: any;
    constantLines: any;
    logarithmBase: any;
    maxValueMargin: any;
    minorTickCount: any;
    minorTickInterval: any;
    minValueMargin: any;
    showZero: any;
    strips: any;
    tickInterval: any;
    type: any;
    valueMarginsEnabled: any;
    valueType: any;
    max: any;
    min: any;
    protected readonly _optionPath: string;
    constantLinesChildren: QueryList<DxiConstantLineComponent>;
    stripsChildren: QueryList<DxiStripComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoValueAxisModule {
}