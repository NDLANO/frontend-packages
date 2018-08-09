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

const isIosDevice =
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.platform &&
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

const noScroll = enable => {
  const htmlElement = document.querySelector('html');
  if (enable) {
    const scrollWidth = getScrollbarWidth();
    currentScrollPosition = getBodyScrollTop();
    htmlElement.style.overflow = 'hidden';
    htmlElement.style.paddingRight = `${scrollWidth}px`;
    htmlElement.style.position = isIosDevice ? 'fixed' : 'static'; // iOS scrolling fix
    htmlElement.style.left = 0;
    htmlElement.style.right = 0;
    if (isIosDevice) {
      htmlElement.classList.add('scrollFix');
    }
  } else {
    htmlElement.style.overflow = null;
    htmlElement.style.paddingRight = null;
    htmlElement.style.position = 'static';
    htmlElement.style.left = 'auto';
    htmlElement.style.right = 'auto';
    if (isIosDevice) {
      htmlElement.classList.remove('scrollFix');
      setBodyScrollTop(currentScrollPosition);
    }
  }
};

export default noScroll;
