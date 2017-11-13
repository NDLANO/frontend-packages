import { updateIFrameDimensions } from './iframeScripts';
import { forEachElement } from './domHelpers';

const eventListener = (event) => {
  if (event.currentTarget.getAttribute('open') !== null) {
    updateIFrameDimensions(false, event.currentTarget);
  }
}

export const addDetailsEventListeners = () => {
  forEachElement('details', (el) => {
    el.addEventListener('toggle', eventListener);
  });
}

export const removeDetailsEventListeners = () => {
  forEachElement('details', (el) => {
    el.removeEventListener('toggle', eventListener);
  });
};
