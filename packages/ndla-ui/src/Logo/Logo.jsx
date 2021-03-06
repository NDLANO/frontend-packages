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
import SafeLink from '@ndla/safelink';
import SvgLogo from './SvgLogo';

export const logoClasses = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

export const Logo = ({ name, to, cssModifier, color, large, locale, label }) => {
  const modifiers = { large };

  if (cssModifier) {
    modifiers[cssModifier] = true;
  }

  const logo = to ? (
    <SafeLink to={to} aria-label={label}>
      <SvgLogo name={name} color={color} locale={locale} />
    </SafeLink>
  ) : (
    <Fragment>
      <SvgLogo name={name} color={color} locale={locale} />
    </Fragment>
  );
  return <div {...logoClasses('', modifiers)}>{logo}</div>;
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
  label: PropTypes.string.isRequired,
  locale: PropTypes.string,
  cssModifier: PropTypes.string,
  large: PropTypes.bool,
  name: PropTypes.bool,
  color: PropTypes.string,
};

Logo.defaultProps = {
  name: true,
  large: false,
};

export default Logo;
