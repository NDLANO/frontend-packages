import facepaint from 'facepaint';
import breakpoints from './breakpoints';

export default {
  tablet: facepaint([`@media (min-width: ${breakpoints.tablet})`]),
  desktop: facepaint([`@media (min-width: ${breakpoints.desktop})`]),
  mobile: facepaint([`@media (min-width: ${breakpoints.mobile})`]),
};
