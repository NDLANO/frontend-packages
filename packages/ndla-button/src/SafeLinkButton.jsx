/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SafeLink } from '@ndla/ui';
import { css } from '@emotion/core';
import { buttonStyle, appearances } from './Button';

const getStyles = modifiers => {
  const styles = [];
  Object.keys(modifiers).forEach(key => {
    if (modifiers[key]) {
      styles.push(appearances[key]);
    }
  });
  return styles;
};

const SafeLinkButton = ({
  outline,
  stripped,
  link,
  lighter,
  children,
  inverted,
  invertedOutline,
  to,
  ...rest
}) => {
  const modifierStyles = getStyles({
    link,
    outline,
    lighter,
    stripped,
    inverted,
    invertedOutline,
  });

  return (
    <SafeLink
      to={to}
      css={css`
        ${buttonStyle}
        ${modifierStyles}
      `}
      {...rest}>
      {children}
    </SafeLink>
  );
};

SafeLinkButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  stripped: PropTypes.bool,
  lighter: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default SafeLinkButton;
