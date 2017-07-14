/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const addAsideClickListener = () => {
  document.querySelectorAll('.c-aside__button').forEach(el => {
    const target = el;
    target.onclick = () => target.parentNode.classList.toggle('expanded');
  });
};

export const removeAsideClickListener = () => {
  document.querySelectorAll('.c-aside__button').forEach(el => {
    const target = el;
    target.onclick = undefined;
  });
};
