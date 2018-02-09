import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-beta-navigation');
const BetaNavigation = ({ links }) => (
  <nav {...classes()}>
    <ul>
      {links.map(link => (
        <li key={link.url}>
          <SafeLink to={link.url}>{link.text}</SafeLink>
        </li>
      ))}
    </ul>
  </nav>
);

BetaNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BetaNavigation;
