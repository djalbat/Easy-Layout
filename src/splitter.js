'use strict';

var easyui = require('easyui'),
    Element = easyui.Element,
    Body = easyui.Body;

var body = new Body();

class Splitter extends Element {
  constructor(selectorOr$Element) {
    super(selectorOr$Element);

    this.dragHandler = null;

    this.dragging = false;

    this.disabled = false;
  }

  enable() {
    this.disabled = false;
  }

  disable() {
    this.disabled = true;
  }

  onDragging(dragHandler) {
    this.dragHandler = dragHandler;
  }

  startDragging() {
    this.dragging = true;
  }

  stopDragging() {
    this.dragging = false;
  }

  isDragging() {
    return this.dragging;
  }

  onMouseDown(handler) { super.onMouseDown(returnMouseEventHandler(handler).bind(this)); }
  onMouseOver(handler) { super.onMouseOver(returnMouseEventHandler(handler).bind(this)); }
  onMouseOut(handler) { super.onMouseOut(returnMouseEventHandler(handler).bind(this)); }
  onMouseUp(handler) { body.onMouseUp(returnMouseEventHandler(handler).bind(this)); }  ///
  onMouseMove(handler) { body.onMouseMove(returnMouseEventHandler(handler).bind(this)); } ///
}

function returnMouseEventHandler(handler) {
  return function(mouseTop, mouseLeft) {
    if (!this.disabled) {
      handler(mouseTop, mouseLeft);
    }
  };
}

module.exports = Splitter;
