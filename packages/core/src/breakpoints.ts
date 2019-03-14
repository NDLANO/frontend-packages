import em from 'polished/lib/helpers/em';
import { Breakpoints } from '../types';

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
