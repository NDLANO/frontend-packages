/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-disable max-len */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SvgLogo from './SvgLogo';
import Beta from './Beta';
import SafeLink from '../common/SafeLink';

export const logoClasses = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

export const Logo = ({ name, to, isBeta, cssModifier, color, large }) => {
  const beta = isBeta ? <Beta /> : null;
  const modifiers = { large };

  if (cssModifier) {
    modifiers[cssModifier] = true;
  }

  if (isBeta) {
    modifiers.beta = true;
  }

  const logo = to ? (
    <SafeLink to={to}>
      <SvgLogo name={name} color={color} /> {beta}
    </SafeLink>
  ) : (
    <Fragment>
      <SvgLogo name={name} color={color} /> {beta}
    </Fragment>
  );
  return <h1 {...logoClasses('', modifiers)}>{logo}</h1>;
};

Logo.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  altText: PropTypes.string.isRequired,
  cssModifier: PropTypes.string,
  large: PropTypes.bool,
  name: PropTypes.bool,
  isBeta: PropTypes.bool,
  color: PropTypes.string,
};

Logo.defaultProps = {
  name: true,
  large: false,
};

export default Logo;
