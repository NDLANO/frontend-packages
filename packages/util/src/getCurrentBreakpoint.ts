const getCurrentBreakpoint = () => {
  const body = document.querySelector('body');
  if (!body) {
    return '';
  }

  return window.getComputedStyle(body, ':before').getPropertyValue('content').replace(/"/g, '');
};

export default getCurrentBreakpoint;

export const breakpoints = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  wide: 'wide',
};
