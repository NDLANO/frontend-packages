/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

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

export const removeElementById = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
  }
};

export const removeModifiers = (className, modifier, rootSelector = '') => {
  document.querySelectorAll(`${rootSelector} .${className}`).forEach((el) => {
    el.classList.remove(`${className}--${modifier}`);
  });
};
