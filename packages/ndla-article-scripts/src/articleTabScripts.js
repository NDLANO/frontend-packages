import { forEachElement } from './domHelpers';

const selectedClass = 'c-tabs__tab--selected';
const selectedAttribute = 'aria-selected';

const leftKeys = ['ArrowLeft', 'Left', 'ArrowUp', 'Up'];
const rightKeys = ['ArrowRight', 'Right', 'ArrowDown', 'Down'];

const changeTabs = (currentTab, nextTab) => {
  currentTab.setAttribute(selectedAttribute, 'false');
  currentTab.classList.remove(selectedClass);
  currentTab.removeAttribute('tabindex');

  nextTab.setAttribute(selectedAttribute, 'true');
  nextTab.classList.add(selectedClass);
  nextTab.setAttribute('tabindex', '0');
  nextTab.focus();
};

const changePanel = (currentPanel, nextPanel) => {
  const ariaHiddenAttr = 'aria-hidden';
  currentPanel.setAttribute(ariaHiddenAttr, 'true');
  nextPanel.setAttribute(ariaHiddenAttr, 'false');
};

export const initArticleTabs = () => {
  forEachElement('.c-tabs--article', (el) => {
    const tabCount = parseInt(el.getAttribute('data-length'), 10);

    const tabs = el.querySelectorAll('.c-tabs__tab');

    tabs.forEach((tab) => {
      const index = parseInt(tab.getAttribute('data-index'), 10);

      tab.addEventListener('click', () => {
        const currentTab = el.querySelector(`.${selectedClass}`);
        changeTabs(currentTab, tab);

        const currentPanel = el.querySelector(`[aria-hidden='false']`);
        const panel = el.querySelector(`#${tab.getAttribute('aria-controls')}`);
        changePanel(currentPanel, panel);
      });

      tab.addEventListener('keydown', (event) => {
        let newIndex = null;

        if (leftKeys.some((key) => key === event.key)) {
          newIndex = index - 1;
          if (newIndex < 0) {
            newIndex = tabCount - 1;
          }
        } else if (rightKeys.some((key) => key === event.key)) {
          newIndex = index + 1;
          if (newIndex > tabCount - 1) {
            newIndex = 0;
          }
        }

        if (newIndex !== null) {
          event.preventDefault();
          const nextTab = el.querySelector(`[data-index='${newIndex}']`);
          changeTabs(tab, nextTab);

          const currentPanel = el.querySelector(`[aria-hidden='false']`);
          const panel = el.querySelector(`#${nextTab.getAttribute('aria-controls')}`);
          changePanel(currentPanel, panel);
        }
      });
    });
  });
};
