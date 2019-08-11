import { elementRectType } from '../types';

export const calculateScaling = (element: HTMLElement): elementRectType => {
  const { innerWidth } = window;
  const elementClientRect: ClientRect = element.getBoundingClientRect();
  return {
    fromX: elementClientRect.left + elementClientRect.width / 2,
    fromY: elementClientRect.top + elementClientRect.height / 2,
    fromScale: elementClientRect.width / innerWidth,
  };
};
