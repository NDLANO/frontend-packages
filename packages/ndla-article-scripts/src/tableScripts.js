import throttle from 'lodash/throttle';

import { forEachElement } from './domHelpers';

const hasScrollbar = (tableEl) => tableEl.scrollWidth > tableEl.clientWidth;

const margin = 5;

const toggleShadows = (tableEl) => {
  const isStart = tableEl.scrollLeft <= margin;
  const isEnd = tableEl.offsetWidth + tableEl.scrollLeft >= tableEl.scrollWidth - margin;

  const leftShadowClassName = 'c-table__left-shadow';
  const rightShadowClassName = 'c-table__right-shadow';
  const activePostFix = '--active';

  const leftShadow = tableEl.parentNode.querySelector(`.${leftShadowClassName}`);
  const rightShadow = tableEl.parentNode.querySelector(`.${rightShadowClassName}`);

  if (isStart) {
    if (leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)) {
      leftShadow.classList.remove(`${leftShadowClassName}${activePostFix}`);
    }

    if (!rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)) {
      rightShadow.classList.add(`${rightShadowClassName}${activePostFix}`);
    }
  } else if (isEnd) {
    if (!leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)) {
      leftShadow.classList.add(`${leftShadowClassName}${activePostFix}`);
    }

    if (rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)) {
      rightShadow.classList.remove(`${rightShadowClassName}${activePostFix}`);
    }
  } else {
    if (!leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)) {
      leftShadow.classList.add(`${leftShadowClassName}${activePostFix}`);
    }

    if (!rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)) {
      rightShadow.classList.add(`${rightShadowClassName}${activePostFix}`);
    }
  }
};

const eventListener = (event) => {
  const targetEl = event.target;
  toggleShadows(targetEl);
};

const throttledEventListner = throttle(eventListener, 100);

export const initTableScript = () => {
  setTimeout(() => {
    forEachElement('.c-table__wrapper', (el) => {
      const table = el.querySelector('.c-table');

      if (hasScrollbar(table)) {
        toggleShadows(table);
        table.setAttribute('tabindex', '0');
        el.classList.add('c-table__wrapper--has-scroll');
        table.addEventListener('scroll', throttledEventListner);
      }

      // detect if parent has c-bodybox class and add container adjustment class
      // a hacky fix for table cropped when inside a c-bodybox.
      if (el.parentNode.classList.contains('c-bodybox')) {
        el.parentNode.classList.add('c-bodybox--contains-table');
      }
      if (el.parentNode.classList.contains('wrapper')) {
        el.classList.remove('c-table__wrapper');
      }
    });
  }, 0);
};

export const removeTableEventListeners = () => {
  forEachElement('.c-table', (el) => {
    el.removeEventListener('scroll', throttledEventListner);
  });
};
