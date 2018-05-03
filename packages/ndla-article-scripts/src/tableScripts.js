import throttle from 'lodash/throttle';

import { forEachElement } from './domHelpers';

const hasScrollbar = tableEl => tableEl.scrollWidth > tableEl.clientWidth;

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

const expandButtonEventListner = event => {
  const el = event.currentTarget;

  const dialogId = el.getAttribute('data-dialog-trigger-id');
  const tableId = el.getAttribute('data-table-id');

  const dialog = document.querySelector(`[data-dialog-id='${dialogId}']`);

  const expandedTableWrapper = dialog.querySelector('.c-table__content');

  if (!expandedTableWrapper.hasChildNodes()) {
    const table = document.getElementById(tableId);
    const clonedTable = table.cloneNode(true);
    clonedTable.setAttribute('id', `${tableId}_dup`);
    expandedTableWrapper.appendChild(clonedTable);
  }
};

const throttledEventListner = throttle(eventListener, 100);

export const initTableScript = () => {
  setTimeout(() => {
    forEachElement('.c-table__wrapper', el => {
      const table = el.querySelector('.c-table');

      if (hasScrollbar(table)) {
        toggleShadows(table);
        table.setAttribute('tabindex', '0');
        el.classList.add('c-table__wrapper--has-scroll');
        table.addEventListener('scroll', throttledEventListner);
      }
    });

    forEachElement('.c-table__expand-button', el =>
      el.addEventListener('click', expandButtonEventListner),
    );
  }, 0);
};

export const removeTableEventListeners = () => {
  forEachElement('.c-table', el => {
    el.removeEventListener('scroll', throttledEventListner);
  });
};
