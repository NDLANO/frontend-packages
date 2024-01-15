/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

let scrollbarWidth: number | null = null;

const getScrollbarWidth = () => {
  if (scrollbarWidth) {
    return scrollbarWidth;
  }

  const scrollDiv = document.createElement("div");
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";

  document.body.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};

const scrollTargets: string[] = [];

const noScroll = (enable: boolean, uuid: string): void => {
  const bodyElement = document.querySelector("html > body") as HTMLElement;
  if (bodyElement === null) {
    return;
  }
  if (enable) {
    if (!scrollTargets.includes(uuid)) {
      scrollTargets.push(uuid);
      const scrollWidth = getScrollbarWidth();
      bodyElement.style.overflow = "hidden";
      bodyElement.style.marginRight = `${scrollWidth}px`;
    }
  } else {
    if (scrollTargets.indexOf(uuid) !== -1) {
      scrollTargets.splice(scrollTargets.indexOf(uuid), 1);
    }
    if (scrollTargets.length === 0) {
      bodyElement.style.marginRight = "0";
      bodyElement.style.overflow = "visible";
    }
  }
};

export default noScroll;
