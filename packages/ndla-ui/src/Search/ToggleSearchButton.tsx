/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { spacing, spacingUnit, breakpoints, mq, misc, fonts, colors } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import { ButtonProps, ButtonV2 } from '@ndla/button';
import styled from '@emotion/styled';

interface Props extends ButtonProps {
  hideOnNarrowScreen?: boolean;
  hideOnWideScreen?: boolean;
  ndlaFilm?: boolean;
}

interface StyledButtonProps {
  hideOnNarrowScreen?: boolean;
  hideOnWideScreen?: boolean;
  ndlaFilm?: boolean;
}

const StyledButton = styled(ButtonV2)<StyledButtonProps>`
  background: ${(p) => (p.ndlaFilm ? colors.ndlaFilm.filmColorBright : colors.brand.greyLighter)};
  border-radius: ${misc.borderRadius};
  border: 0;
  display: ${(p) => (p.hideOnNarrowScreen ? 'none' : 'flex')};
  color: ${(p) => (p.ndlaFilm ? '#fff' : colors.brand.primary)};
  padding: ${spacing.small} ${spacingUnit * 0.75}px ${spacing.small} ${spacing.normal};
  align-items: center;
  margin-left: ${spacing.medium};

  .c-icon {
    height: 24px;
    width: 24px;
  }

  ${fonts.sizes('16px', '32px')};

  ${mq.range({ from: breakpoints.desktop })} {
    display: ${(p) => (p.hideOnWideScreen ? 'none' : 'flex')};
    margin-right: ${spacing.nsmall};
    padding: ${spacing.small} ${spacing.normal};
  }
  &:hover,
  &:focus,
  &:active {
    border: 0;
  }
`;

const StyledSpan = styled.span`
  margin-right: ${spacing.normal};
  font-weight: ${fonts.weight.normal};
`;

const ToggleSearchButton = ({ children, ndlaFilm, hideOnNarrowScreen, hideOnWideScreen, ...rest }: Props) => (
  <StyledButton
    ndlaFilm={ndlaFilm}
    hideOnNarrowScreen={hideOnNarrowScreen}
    hideOnWideScreen={hideOnWideScreen}
    type="button"
    {...rest}
  >
    <StyledSpan>{children}</StyledSpan>
    <Search />
  </StyledButton>
);

export default ToggleSearchButton;
