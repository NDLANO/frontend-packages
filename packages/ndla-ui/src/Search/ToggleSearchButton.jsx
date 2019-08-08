/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { spacing, breakpoints, mq, misc, fonts, colors } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import Button from '@ndla/button';

const style = (hideOnNarrowScreen, hideOnWideScreen, ndlaFilm) => css`
  background: ${ndlaFilm
    ? colors.ndlaFilm.filmColorBright
    : colors.brand.greyLighter};
  border-radius: ${misc.borderRadius};
  border: 0;
  display: flex;
  color: ${ndlaFilm ? '#fff' : colors.brand.primary};
  padding: ${spacing.small} ${spacing.spacingUnit * 0.75}px ${spacing.small}
    ${spacing.normal};
  ${hideOnNarrowScreen &&
    css`
      display: none;
    `}

  align-items: center;

  .c-icon {
    height: 24px;
    width: 24px;
  }

  ${fonts.sizes('16px', '32px')};

  ${mq.range({ from: breakpoints.desktop })} {
    display: ${hideOnWideScreen ? 'none' : 'flex'};
    margin-right: ${spacing.medium};
    padding: ${spacing.small} ${spacing.normal};
  }
  &:hover,
  &:focus,
  &:active {
    border: 0;
  }
`;

const ToggleSearchButton = ({
  children,
  ndlaFilm,
  hideOnNarrowScreen,
  hideOnWideScreen,
  ...rest
}) => (
  <Button
    type="button"
    css={style(hideOnNarrowScreen, hideOnWideScreen, ndlaFilm)}
    {...rest}>
    <span
      css={{ marginRight: spacing.normal, fontWeight: fonts.weight.normal }}>
      {children}
    </span>
    <Search />
  </Button>
);

ToggleSearchButton.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnNarrowScreen: PropTypes.bool,
  hideOnWideScreen: PropTypes.bool,
  ndlaFilm: PropTypes.bool,
};

export default ToggleSearchButton;
