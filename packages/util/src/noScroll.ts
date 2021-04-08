let scrollbarWidth: number | null = null;

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

const scrollTargets: string[] = [];

const noScroll = (enable: boolean, uuid: string): void => {
  const htmlElement = document.querySelector('html') as HTMLElement;
  if (htmlElement === null) {
    return;
  }
  if (enable) {
    if (!scrollTargets.includes(uuid)) {
      scrollTargets.push(uuid);
      const scrollWidth = getScrollbarWidth();
      htmlElement.style.overflow = 'hidden';
      htmlElement.style.paddingRight = `${scrollWidth}px`;
      const mastHead = document.querySelector('.c-masthead--fixed') as HTMLElement;
      if (mastHead) {
        mastHead.style.paddingRight = `${scrollWidth}px`;
      }
    }
  } else {
    if (scrollTargets.indexOf(uuid) !== -1) {
      scrollTargets.splice(scrollTargets.indexOf(uuid), 1);
    }
    if (scrollTargets.length === 0) {
      htmlElement.style.paddingRight = '0';
      htmlElement.style.overflow = 'visible';
      const mastHead = document.querySelector('.c-masthead--fixed') as HTMLElement;
      if (mastHead) {
        mastHead.style.paddingRight = '0';
      }
    }
  }
};

export default noScroll;
