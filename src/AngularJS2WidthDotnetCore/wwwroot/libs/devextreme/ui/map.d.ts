/**
* DevExtreme (ui/map.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxMap(): JQuery;
    dxMap(options: "instance"): DevExpress.ui.dxMap;
    dxMap(options: string): any;
    dxMap(options: string, ...params: any[]): any;
    dxMap(options: DevExpress.ui.dxMapOptions): JQuery;
}
}
export default DevExpress.ui.dxMap;