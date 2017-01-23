/**
* DevExtreme (ui/pivot.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxPivot(): JQuery;
    dxPivot(options: "instance"): DevExpress.ui.dxPivot;
    dxPivot(options: string): any;
    dxPivot(options: string, ...params: any[]): any;
    dxPivot(options: DevExpress.ui.dxPivotOptions): JQuery;
}
}
export default DevExpress.ui.dxPivot;