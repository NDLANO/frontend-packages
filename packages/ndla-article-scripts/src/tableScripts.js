import throttle from 'lodash/throttle';

import { forEachElement } from './domHelpers';

const hasScrollbar = tableEl => {
  console.log(tableEl.scrollWidth, tableEl.clientWidth);

  return tableEl.scrollWidth > tableEl.clientWidth;
};

const margin = 5;

const toggleShadows = tableEl => {
  const isStart = tableEl.scrollLeft <= margin;
  const isEnd =
    tableEl.offsetWidth + tableEl.scrollLeft >= tableEl.scrollWidth - margin;

  const leftShadowClassName = 'c-table__left-shadow';
  const rightShadowClassName = 'c-table__right-shadow';
  const activePostFix = '--active';

  const leftShadow = tableEl.parentNode.querySelector(
    `.${leftShadowClassName}`,
  );
  const rightShadow = tableEl.parentNode.querySelector(
    `.${rightShadowClassName}`,
  );

  if (isStart) {
    if (
      leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)
    ) {
      leftShadow.classList.remove(`${leftShadowClassName}${activePostFix}`);
    }

    if (
      !rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)
    ) {
      rightShadow.classList.add(`${rightShadowClassName}${activePostFix}`);
    }
  } else if (isEnd) {
    if (
      !leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)
    ) {
      leftShadow.classList.add(`${leftShadowClassName}${activePostFix}`);
    }

    if (
      rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)
    ) {
      rightShadow.classList.remove(`${rightShadowClassName}${activePostFix}`);
    }
  } else {
    if (
      !leftShadow.classList.contains(`${leftShadowClassName}${activePostFix}`)
    ) {
      leftShadow.classList.add(`${leftShadowClassName}${activePostFix}`);
    }

    if (
      !rightShadow.classList.contains(`${rightShadowClassName}${activePostFix}`)
    ) {
      rightShadow.classList.add(`${rightShadowClassName}${activePostFix}`);
    }
  }
};

const eventListener = event => {
  const targetEl = event.target;
  toggleShadows(targetEl);
};

const throttledEventListner = throttle(eventListener, 100);

export const initTableScript = () => {
  setTimeout(() => {
    forEachElement('.c-table__wrapper', el => {
      const table = el.querySelector('.c-table');

      if (hasScrollbar(table)) {
        toggleShadows(table);

        el.classList.add('c-table__wrapper--has-scroll');
        table.addEventListener('scroll', throttledEventListner);
      }
    });
  }, 0);
};

export const removeTableEventListeners = () => {
  forEachElement('.c-table', el => {
    el.removeEventListener('scroll', throttledEventListner);
  });
};
