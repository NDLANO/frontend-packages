import { updateIFrameDimensions } from './figureScripts';
import { forEachElement } from './domHelpers';

const toggleExploded = (container, isOpen) => {
  if (!isOpen) {
    container.classList.remove('c-details--exploded');
    return;
  }

  const table = container.getElementsByTagName('table')[0];
  const tbody = container.getElementsByTagName('tbody')[0];
  if (!table || !tbody) {
    return;
  }

  const tbodyWidth = tbody.getBoundingClientRect().width;
  const tableWidth = table.getBoundingClientRect().width;

  if (tbodyWidth > tableWidth) {
    container.classList.add('c-details--exploded');
  }
};

const eventListener = (event) => {
  if (event.currentTarget.getAttribute('open') !== null) {
    updateIFrameDimensions(false, event.currentTarget);
    toggleExploded(event.currentTarget, true);
  } else {
    toggleExploded(event.currentTarget, false);
  }
};

export const addDetailsEventListeners = () => {
  forEachElement('details', (el) => {
    el.addEventListener('toggle', eventListener);
  });
};

export const removeDetailsEventListeners = () => {
  forEachElement('details', (el) => {
    el.removeEventListener('toggle', eventListener);
  });
};
