/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SvgLogo from './SvgLogo';

export const logoClasses = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

const getUrl = (to) => {
  const isObject = typeof to === 'object';
  if (isObject) {
    const search = to.search ? to.search : '';
    const hash = to.hash ? to.hash : '';
    return `${to.pathname}${hash}${search}`;
  }
  return to;
}

export const LinkLogo = ({ name, to, cssModifier }) => (
  <a href={getUrl(to)}>
    <h1 {...logoClasses('', cssModifier)}>
      <SvgLogo name={name} />
    </h1>
  </a>
);


LinkLogo.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
  })]).isRequired,
  cssModifier: PropTypes.string,
  name: PropTypes.bool,
};

LinkLogo.defaultProps = {
  name: true,
};

export default LinkLogo;
