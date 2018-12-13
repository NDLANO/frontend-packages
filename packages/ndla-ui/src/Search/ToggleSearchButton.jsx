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
import { spacing, breakpoints, mq, misc, fonts, colors } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import Button from '@ndla/button';

const style = hideOnNarrowScreen => css`
  background: ${colors.brand.greyLighter};
  border-radius: ${misc.borderRadius};
  border: 0;
  color: ${colors.brand.primary};
  padding: ${spacing.xsmall} ${spacing.small};
  ${hideOnNarrowScreen &&
    css`
      display: none;
    `}

  align-items: center;

  .c-icon {
    height: 18px;
    width: 18px;

    ${mq.range({ from: breakpoints.desktop })} {
      height: 24px;
      width: 24px;
    }
  }

  ${fonts.sizes('16px', '22px')};

  ${mq.range({ from: breakpoints.desktop })} {
    display: flex;
    margin-right: ${spacing.medium};
    ${fonts.sizes('18px', '32px')};
    padding: ${spacing.small} ${spacing.normal};
  }
  &:hover,
  &:focus,
  &:active {
    border: 0;
  }
`;

const ToggleSearchButton = ({ children, hideOnNarrowScreen, ...rest }) => {
  return (
    <Button type="button" css={style(hideOnNarrowScreen)} {...rest}>
      <span css={{ marginRight: spacing.normal }}>{children}</span>
      <Search />
    </Button>
  );
};

ToggleSearchButton.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnNarrowScreen: PropTypes.bool,
};

export default ToggleSearchButton;
