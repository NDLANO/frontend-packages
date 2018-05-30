import createFocusTrap from 'focus-trap';
import jump from 'jump.js';

import { noScroll } from 'ndla-util';
import { forEachElement } from './domHelpers';

const trapInstances = {};

const closeDialog = dialog => {
  dialog.classList.remove('c-dialog--active');
  dialog.setAttribute('aria-hidden', 'true');
  noScroll(false);
};

export const addShowDialogClickListeners = () => {
  forEachElement('[data-dialog-trigger-id]', el => {
    const target = el;
    const id = target.getAttribute('data-dialog-trigger-id');

    const sourceId = target.getAttribute('data-dialog-source-id');
    const source = document.getElementById(sourceId);

    const dialog = document.querySelector(`[data-dialog-id='${id}']`);
    const dialogContent = dialog.querySelector(`.c-dialog__content`);

    trapInstances[id] = createFocusTrap(dialogContent, {
      onDeactivate: () => {
        closeDialog(dialog);
      },
      clickOutsideDeactivates: true,
    });

    target.onclick = () => {
      noScroll(true);
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      const sourceHeight = source.offsetHeight;

      jump(source, {
        offset: -((viewportHeight - sourceHeight) / 2),
        duration: 300,
        callback: () => {
          const instance = trapInstances[id];

          if (instance) {
            instance.activate();
          }
        },
      });

      setTimeout(() => {
        dialog.setAttribute('aria-hidden', 'false');
        dialog.classList.add('c-dialog--active');
      }, 150);
    };
  });
};

export const removeShowDialogClickListeners = () => {
  forEachElement('[data-dialog-trigger-id]', el => {
    const target = el;
    target.onclick = undefined;
  });
};

export const addCloseDialogClickListeners = () => {
  forEachElement('.c-dialog', el => {
    const target = el;
    const closeButton = target.querySelector('.c-dialog__close');

    closeButton.onclick = () => {
      const id = target.getAttribute('data-dialog-id');
      const instance = trapInstances[id];
      if (instance) {
        instance.deactivate();
      }
    };
  });
};
