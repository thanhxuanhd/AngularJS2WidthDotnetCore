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
import { NgZone } from '@angular/core';
import { DxComponent } from './component';
export declare class NgEventsStrategy {
    private component;
    private subscribers;
    constructor(component: DxComponent);
    hasEvent(name: string): number;
    fireEvent(name: any, args: any): void;
    on(name: any, handler: any): void;
    off(name: any, handler: any): void;
    dispose(): void;
    private getEmitter(eventName);
}
export declare class EmitterHelper {
    private ngZone;
    private component;
    strategy: NgEventsStrategy;
    constructor(ngZone: NgZone, component: DxComponent);
    fireNgEvent(eventName: string, eventArgs: any): void;
    createEmitter(ngEventName: string, dxEventName: string): void;
}