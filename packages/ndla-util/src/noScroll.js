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

const noScroll = enable => {
  const htmlElement = document.querySelector('html');
  if (enable) {
    const scrollWidth = getScrollbarWidth();
    htmlElement.style.overflow = 'hidden';
    htmlElement.style.paddingRight = `${scrollWidth}px`;
    htmlElement.style.position = 'fixed'; // iOS scrolling fix
    htmlElement.style.left = 0;
    htmlElement.style.right = 0;
  } else {
    htmlElement.style.overflow = null;
    htmlElement.style.paddingRight = null;
    htmlElement.style.position = 'static';
    htmlElement.style.left = 'auto';
    htmlElement.style.right = 'auto';
  }
};

export default noScroll;
