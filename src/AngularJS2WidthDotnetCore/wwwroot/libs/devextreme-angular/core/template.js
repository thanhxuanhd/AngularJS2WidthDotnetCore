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
"use strict";
var core_1 = require('@angular/core');
var template_host_1 = require('./template-host');
var $ = require('jquery');
exports.DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
exports.RenderData = RenderData;
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        templateHost.setTemplate(this);
    }
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DxTemplateDirective.prototype.render = function (renderData) {
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': renderData.model });
        if (renderData.container) {
            renderData.container.append(childView.rootNodes);
        }
        childView['detectChanges']();
        return $(childView.rootNodes)
            .addClass(exports.DX_TEMPLATE_WRAPPER_CLASS)
            .on('dxremove', function (e) {
            if (!e._angularIntegration) {
                childView.destroy();
            }
        });
    };
    DxTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dxTemplate][dxTemplateOf]'
                },] },
    ];
    DxTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: template_host_1.DxTemplateHost, },
    ]; };
    DxTemplateDirective.propDecorators = {
        'dxTemplateOf': [{ type: core_1.Input },],
    };
    return DxTemplateDirective;
}());
exports.DxTemplateDirective = DxTemplateDirective;
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [DxTemplateDirective],
                    exports: [DxTemplateDirective]
                },] },
    ];
    DxTemplateModule.ctorParameters = function () { return []; };
    return DxTemplateModule;
}());
exports.DxTemplateModule = DxTemplateModule;
//# sourceMappingURL=template.js.map