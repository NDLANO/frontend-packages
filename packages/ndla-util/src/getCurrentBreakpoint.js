const getCurrentBreakpoint = () =>
  window
    .getComputedStyle(document.querySelector('body'), ':before')
    .getPropertyValue('content')
    .replace(/"/g, '');

export default getCurrentBreakpoint;

export const breakpoints = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  wide: 'wide',
};
