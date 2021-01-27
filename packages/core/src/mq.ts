import facepaint from 'facepaint';
import breakpoints from './breakpoints';

const mq = {
  tablet: facepaint([`@media (min-width: ${breakpoints.tablet})`]),
  desktop: facepaint([`@media (min-width: ${breakpoints.desktop})`]),
  mobile: facepaint([`@media (min-width: ${breakpoints.mobile})`]),
  range: ({ from, until }: { from?: string; until?: string }) =>
    `${from ? `@media (min-width: ${from})` : ''}${
      from && until ? ' and ' : ''
    }${!from && until ? '@media ' : ''}${until ? `(max-width: ${until})` : ''}`,
};

export default mq;
