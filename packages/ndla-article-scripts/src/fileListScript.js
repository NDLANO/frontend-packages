import { forEachElement } from './domHelpers';

const toggleTooltip = (link, show) => {
  const tooltip = link.querySelector('.c-file-list__tooltip');
  tooltip.setAttribute('aria-hidden', show ? 'false' : 'true');
};

export const addFilelistTooltipListners = () => {
  forEachElement('.c-file-list__link', (link) => {
    ['mouseenter', 'focus'].map((eventName) => link.addEventListener(eventName, () => toggleTooltip(link, true)));

    ['mouseleave', 'blur'].map((eventName) => link.addEventListener(eventName, () => toggleTooltip(link, false)));
  });
};
