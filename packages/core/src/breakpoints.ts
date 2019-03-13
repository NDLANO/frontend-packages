import em from 'polished/lib/helpers/em';

export type Breakpoint =
  | 'mobile'
  | 'mobileWide'
  | 'tablet'
  | 'tabletWide'
  | 'desktop'
  | 'wide'
  | 'ultraWide';

export type Breakpoints = { [key in Breakpoint]: string };

const breakpoints: Breakpoints = {
  mobile: em('320px'),
  mobileWide: em('476px'),
  tablet: em('601px'),
  tabletWide: em('768px'),
  desktop: em('981px'),
  wide: em('1301px'),
  ultraWide: em('1601px'),
};

export default breakpoints;
