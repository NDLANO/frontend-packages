/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { spacing, fonts, colors } from '@ndla/core';
import { Menu } from '@ndla/icons/common';
import Button from '@ndla/button';

const style = css`
  position: relative;
  background: transparent;
  padding: ${spacing.small};
  padding-right: ${spacing.normal};
  padding-left: ${spacing.normal};
  font-weight: ${fonts.weight.normal};
  color: ${colors.brand.primary};
  border: 2px solid ${colors.brand.primary};

  svg {
    width: 16px;
    height: 16px;
    margin-top: -6px;
    margin-right: ${spacing.xsmall};
  }
  &:hover {
    border: 3px solid transparent;
    background: ${colors.brand.primary};
    color: ${colors.white};
  }
  &:active,
  &:focus {
    border: 2px solid ${colors.brand.lighter};
    background: ${colors.white};
    color: ${colors.brand.primary};
  }
`;

const TopicMenuButton = ({ children, ...rest }) => {
  return (
    <Button apperance="outline" css={style} {...rest}>
      <Menu /> {children}
    </Button>
  );
};

TopicMenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopicMenuButton;
