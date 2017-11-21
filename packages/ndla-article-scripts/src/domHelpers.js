/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export const forEachElement = (selector, callback, parent = null) => {
  const topNode = parent || document;
  const nodeList = topNode.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

export const findAncestorByClass = (el, className) => {
  let target = el;
  while (!target.classList.contains(className)) {
    target = target.parentElement;
  }
  return target;
};

export const wrapElement = (elementToWrap, wrapper) => {
  if (elementToWrap.nextSibling) {
    elementToWrap.parentNode.insertBefore(wrapper, elementToWrap.nextSibling);
  } else {
    elementToWrap.parentNode.appendChild(wrapper);
  }
  return wrapper.appendChild(elementToWrap);
};

export const createElement = (type, id, className, innerHTML) => {
  const el = document.createElement(type);
  el.id = id;
  el.innerHTML = innerHTML;
  el.className = className;
  return el;
};

export const removeElementById = id => {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
  }
};

export const removeModifiers = (className, modifier, rootSelector = '') => {
  forEachElement(`${rootSelector} .${className}`, el => {
    el.classList.remove(`${className}--${modifier}`);
  });
};

let scrollbarWidth = null;

export const getScrollbarWidth = () => {
  if (scrollbarWidth) {
    return scrollbarWidth;
  }

  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';

  document.body.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};

export const toggleNoScroll = (enable) => {
  const htmlElement = document.querySelector('html');
  if (enable) {
    const scrollWidth = getScrollbarWidth();
    htmlElement.style.overflow = 'hidden';
    htmlElement.style.paddingRight = `${scrollWidth}px`;
  } else {
    htmlElement.style.overflow = null;
    htmlElement.style.paddingRight = null;
  }
}
