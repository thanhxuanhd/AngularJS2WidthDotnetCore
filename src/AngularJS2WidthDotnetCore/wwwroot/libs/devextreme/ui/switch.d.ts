/**
* DevExtreme (ui/switch.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxSwitch(): JQuery;
    dxSwitch(options: "instance"): DevExpress.ui.dxSwitch;
    dxSwitch(options: string): any;
    dxSwitch(options: string, ...params: any[]): any;
    dxSwitch(options: DevExpress.ui.dxSwitchOptions): JQuery;
}
}
export default DevExpress.ui.dxSwitch;