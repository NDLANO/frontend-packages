/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface IEDocument extends Document {
  documentMode?: number;
}

// Fallback is copied from https://github.com/developit/simple-element-resize-detector
// Only added  firefox support and types
function fallbackResizeObserver(element: HTMLElement, handler: (el: HTMLElement) => void): () => void {
  const CSS =
    "position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;pointer-events:none;";
  const frame = document.createElement("iframe");
  const documentMode = (document as IEDocument).documentMode || 12;
  const supportsPE = documentMode < 11 ? false : "pointerEvents" in frame.style;

  frame.style.cssText = supportsPE ? CSS : CSS + "visibility:hidden;";
  element.appendChild(frame);
  if (frame.contentWindow) {
    frame.contentWindow.onresize = () => {
      handler(element);
    };
  }
  return () => {
    frame.remove();
  };
}

function resizeObserverWrapper(element: HTMLElement, handler: (el: HTMLElement) => void): () => void {
  let resizeObserver: ResizeObserver | null = new ResizeObserver(() => {
    handler(element);
  });
  resizeObserver.observe(element);
  return () => {
    resizeObserver?.disconnect();
    resizeObserver = null;
  };
}

/**
 * Reports changes to the content rectangle of an HTMLElement. Uses builtin `ResizeObserver`
 * if supported.
 * @param element a HTMLElement
 * @param handler is called on every resize events
 * @returns a callback function which removes the resize listner
 */
export function resizeObserver(element: HTMLElement, handler: (el: HTMLElement) => void): () => void {
  if (typeof ResizeObserver === "function") {
    return resizeObserverWrapper(element, handler);
  }

  return fallbackResizeObserver(element, handler);
}
