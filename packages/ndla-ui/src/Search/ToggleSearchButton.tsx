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

const StyledButton = styled(ButtonV2)`
  background: ${colors.brand.greyLight};
  color: ${colors.brand.primary};
  border-radius: ${misc.borderRadius};
  border: 0;
  display: flex;
  padding: ${spacing.small} ${spacingUnit * 0.75}px ${spacing.small} ${spacing.normal};
  align-items: center;
  margin-left: ${spacing.medium};

  .c-icon {
    height: 24px;
    width: 24px;
  }

  ${fonts.sizes('16px', '32px')};

  &[data-hide-on-narrow='true'] {
    display: none;
  }

  &[data-ndla-film='true'] {
    background: ${colors.ndlaFilm.filmColorBright};
    color: ${colors.white};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    display: flex;
    margin-right: ${spacing.nsmall};
    padding: ${spacing.small} ${spacing.normal};

    &[data-hide-on-wide='true'] {
      display: none;
    }
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
    data-ndla-film={ndlaFilm}
    data-hide-on-narrow={hideOnNarrowScreen}
    data-hide-on-wide={hideOnWideScreen}
    type="button"
    {...rest}
  >
    <StyledSpan>{children}</StyledSpan>
    <Search />
  </StyledButton>
);

export default ToggleSearchButton;
