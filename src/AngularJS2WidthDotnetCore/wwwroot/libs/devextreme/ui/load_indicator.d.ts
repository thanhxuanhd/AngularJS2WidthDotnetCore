/**
* DevExtreme (ui/load_indicator.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxLoadIndicator(): JQuery;
    dxLoadIndicator(options: "instance"): DevExpress.ui.dxLoadIndicator;
    dxLoadIndicator(options: string): any;
    dxLoadIndicator(options: string, ...params: any[]): any;
    dxLoadIndicator(options: DevExpress.ui.dxLoadIndicatorOptions): JQuery;
}
}
export default DevExpress.ui.dxLoadIndicator;