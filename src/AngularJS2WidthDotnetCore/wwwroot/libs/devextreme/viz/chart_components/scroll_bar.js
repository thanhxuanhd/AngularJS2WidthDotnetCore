/**
 * DevExtreme (viz/chart_components/scroll_bar.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    MIN_SCROLL_BAR_SIZE = 2,
    translator2DModule = require("../translators/translator2d"),
    commonUtils = require("../../core/utils/common"),
    pointerEvents = require("../../events/pointer"),
    isDefined = commonUtils.isDefined,
    _min = Math.min,
    _max = Math.max;
var ScrollBar = function(renderer, group) {
    this._translator = new translator2DModule.Translator2D({}, {}, {});
    this._scroll = renderer.rect().append(group);
    this._addEvents()
};

function _getXCoord(canvas, pos, offset, width) {
    var x = 0;
    if ("right" === pos) {
        x = canvas.width - canvas.right + offset
    } else {
        if ("left" === pos) {
            x = canvas.left - offset - width
        }
    }
    return x
}

function _getYCoord(canvas, pos, offset, width) {
    var y = 0;
    if ("top" === pos) {
        y = canvas.top - offset
    } else {
        if ("bottom" === pos) {
            y = canvas.height - canvas.bottom + width + offset
        }
    }
    return y
}
ScrollBar.prototype = {
    _addEvents: function() {
        var that = this,
            $scroll = $(that._scroll.element),
            startPosX = 0,
            startPosY = 0,
            scrollChangeHandler = function(e) {
                var dX = (startPosX - e.pageX) * that._scale,
                    dY = (startPosY - e.pageY) * that._scale;
                $scroll.trigger(new $.Event("dxc-scroll-move", $.extend(e, {
                    type: "dxc-scroll-move",
                    pointers: [{
                        pageX: startPosX + dX,
                        pageY: startPosY + dY
                    }]
                })))
            };
        $scroll.on(pointerEvents.down, function(e) {
            startPosX = e.pageX;
            startPosY = e.pageY;
            $scroll.trigger(new $.Event("dxc-scroll-start", {
                pointers: [{
                    pageX: startPosX,
                    pageY: startPosY
                }]
            }));
            $(document).on(pointerEvents.move, scrollChangeHandler)
        });
        $(document).on(pointerEvents.up, function() {
            $(document).off(pointerEvents.move, scrollChangeHandler)
        })
    },
    update: function(options) {
        var that = this,
            position = options.position,
            isVertical = options.rotated,
            defaultPosition = isVertical ? "right" : "top",
            secondaryPosition = isVertical ? "left" : "bottom";
        if (position !== defaultPosition && position !== secondaryPosition) {
            position = defaultPosition
        }
        that._scroll.attr({
            rotate: !options.rotated ? -90 : 0,
            rotateX: 0,
            rotateY: 0,
            fill: options.color,
            width: options.width,
            opacity: options.opacity
        });
        that._layoutOptions = {
            width: options.width,
            offset: options.offset,
            vertical: isVertical,
            position: position
        };
        return that
    },
    init: function(range, canvas) {
        var that = this;
        that._translateWithOffset = "discrete" === range.axisType && !range.stick && 1 || 0;
        that._translator.update($.extend({}, range, {
            minVisible: null,
            maxVisible: null,
            visibleCategories: null
        }), $.extend({}, canvas), {
            isHorizontal: !that._layoutOptions.vertical
        });
        return that
    },
    getOptions: function() {
        return this._layoutOptions
    },
    shift: function(x, y) {
        this._scroll.attr({
            translateX: x,
            translateY: y
        })
    },
    setPane: function(panes) {
        var pane, position = this._layoutOptions.position;
        if ("left" === position || "top" === position) {
            pane = panes[0]
        } else {
            pane = panes[panes.length - 1]
        }
        this.pane = pane.name;
        this._canvas = pane.canvas;
        return this
    },
    getMultipleAxesSpacing: function() {
        return 0
    },
    getBoundingRect: function() {
        var options = this._layoutOptions,
            isVertical = options.vertical,
            offset = options.offset,
            width = options.width,
            pos = options.position,
            size = width + offset,
            canvas = this._canvas;
        return isVertical ? {
            x: _getXCoord(canvas, pos, offset, width),
            y: canvas.top,
            width: size,
            height: canvas.height - canvas.top - canvas.bottom
        } : {
            x: canvas.left,
            y: _getYCoord(canvas, pos, offset, width),
            width: canvas.width - canvas.left - canvas.right,
            height: size
        }
    },
    applyLayout: function() {
        var canvas = this._canvas,
            options = this._layoutOptions,
            pos = options.position,
            offset = options.offset,
            width = options.width;
        this.shift(_getXCoord(canvas, pos, offset, width), _getYCoord(canvas, pos, offset, width))
    },
    setPosition: function(min, max) {
        var that = this,
            translator = that._translator,
            minPoint = isDefined(min) ? translator.translate(min, -that._translateWithOffset) : translator.translate("canvas_position_start"),
            maxPoint = isDefined(max) ? translator.translate(max, that._translateWithOffset) : translator.translate("canvas_position_end");
        that._offset = _min(minPoint, maxPoint);
        that._scale = translator.getScale(min, max);
        that._applyPosition(_min(minPoint, maxPoint), _max(minPoint, maxPoint))
    },
    transform: function(translate, scale) {
        var translator = this._translator,
            x = translator.getCanvasVisibleArea().min,
            dx = x - (x * scale - translate),
            lx = this._offset + dx / (this._scale * scale);
        this._applyPosition(lx, lx + translator.canvasLength / (this._scale * scale))
    },
    dispose: function() {
        this._scroll.dispose();
        this._scroll = this._translator = null
    },
    _applyPosition: function(x1, x2) {
        var height, that = this,
            visibleArea = that._translator.getCanvasVisibleArea();
        x1 = _max(x1, visibleArea.min);
        x1 = _min(x1, visibleArea.max);
        x2 = _min(x2, visibleArea.max);
        x2 = _max(x2, visibleArea.min);
        height = Math.abs(x2 - x1);
        that._scroll.attr({
            y: x1,
            height: height < MIN_SCROLL_BAR_SIZE ? MIN_SCROLL_BAR_SIZE : height
        })
    }
};
exports.ScrollBar = ScrollBar;