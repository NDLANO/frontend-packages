let scrollbarWidth = null;

const getScrollbarWidth = () => {
  if (scrollbarWidth) {
    return scrollbarWidth;
  }

  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';

  document.body.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};

export const isIosDeviceSafari =
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.platform &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
  /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(
    window.navigator.platform,
  );

const getBodyScrollTop = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

const setBodyScrollTop = top => {
  const el = document.scrollingElement || document.documentElement;
  el.scrollTop = top;
};

let currentScrollPosition;

const scrollTargets = [];

const noScroll = (enable, uuid) => {
  const htmlElement = document.querySelector('html');
  if (enable) {
    if (!scrollTargets.includes(uuid)) {
      scrollTargets.push(uuid);
      const scrollWidth = getScrollbarWidth();
      currentScrollPosition = getBodyScrollTop();
      htmlElement.style.overflow = 'hidden';
      htmlElement.style.paddingRight = `${scrollWidth}px`;
      const mastHead = document.querySelector('.c-masthead--fixed');
      if (mastHead) {
        mastHead.style.paddingRight = `${scrollWidth}px`;
      }
      htmlElement.style.position = isIosDeviceSafari ? 'fixed' : 'static'; // iOS scrolling fix
      htmlElement.style.left = 0;
      htmlElement.style.right = 0;
    }
  } else {
    if (scrollTargets.indexOf(uuid) !== -1) {
      scrollTargets.splice(scrollTargets.indexOf(uuid), 1);
    }
    if (scrollTargets.length === 0) {
      htmlElement.style.overflow = 'visible';
      htmlElement.style.position = 'static';
      htmlElement.style.paddingRight = 0;
      const mastHead = document.querySelector('.c-masthead--fixed');
      if (mastHead) {
        mastHead.style.paddingRight = 0;
      }
      htmlElement.style.left = 'auto';
      htmlElement.style.right = 'auto';
      if (isIosDeviceSafari) {
        setBodyScrollTop(currentScrollPosition);
      }
    }
  }
};

export default noScroll;
