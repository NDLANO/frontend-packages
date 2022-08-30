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
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import { Menu } from '@ndla/icons/common';
import { ButtonV2 as Button } from '@ndla/button';

const style = css`
  display: block;
  position: relative;
  background: transparent;
  padding: ${spacing.small} ${spacing.normal};
  font-weight: ${fonts.weight.normal};

  svg {
    width: 25px;
    height: 25px;
    margin-top: -3px;
    margin-right: ${spacing.xsmall};
  }
  &:hover {
    border-color: transparent;
    background: ${colors.brand.primary};
    color: ${colors.white};
  }
  &:active,
  &:focus {
    border-color: ${colors.brand.lighter};
    background: ${colors.white};
    color: ${colors.brand.primary};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    padding-left: ${spacing.xsmall};
    padding-right: ${spacing.xsmall};
  }
`;

const TopicMenuButton = ({ ndlaFilm, children, ...rest }) => (
  <Button inverted={ndlaFilm} variant="outline" css={style} {...rest}>
    <Menu /> {children}
  </Button>
);

TopicMenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  ndlaFilm: PropTypes.bool,
};

export default TopicMenuButton;
