/**
* DevExtreme (ui/tabs.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxTabs(): JQuery;
    dxTabs(options: "instance"): DevExpress.ui.dxTabs;
    dxTabs(options: string): any;
    dxTabs(options: string, ...params: any[]): any;
    dxTabs(options: DevExpress.ui.dxTabsOptions): JQuery;
}
}
export default DevExpress.ui.dxTabs;