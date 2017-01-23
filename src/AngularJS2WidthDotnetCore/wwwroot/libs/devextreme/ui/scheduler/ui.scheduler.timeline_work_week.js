/**
 * DevExtreme (ui/scheduler/ui.scheduler.timeline_work_week.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var registerComponent = require("../../core/component_registrator"),
    SchedulerTimelineWeek = require("./ui.scheduler.timeline_week"),
    dateUtils = require("../../core/utils/date");
var TIMELINE_CLASS = "dx-scheduler-timeline-work-week",
    MONDAY_INDEX = 1;
var SchedulerTimelineWorkWeek = SchedulerTimelineWeek.inherit({
    _getElementClass: function() {
        return TIMELINE_CLASS
    },
    _getWeekDuration: function() {
        return 5
    },
    _firstDayOfWeek: function() {
        return this.option("firstDayOfWeek") || MONDAY_INDEX
    },
    _setFirstViewDate: function() {
        this._firstViewDate = dateUtils.getFirstWeekDate(this.option("currentDate"), this._firstDayOfWeek());
        this._firstViewDate = dateUtils.normalizeDateByWeek(this._firstViewDate, this.option("currentDate"));
        this._setStartDayHour(this._firstViewDate)
    }
});
registerComponent("dxSchedulerTimelineWorkWeek", SchedulerTimelineWorkWeek);
module.exports = SchedulerTimelineWorkWeek;