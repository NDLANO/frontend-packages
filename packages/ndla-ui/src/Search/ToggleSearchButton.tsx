/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from 'react';
import { spacing, breakpoints, mq, misc, fonts, colors } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import { ButtonProps, ButtonV2 } from '@ndla/button';
import styled from '@emotion/styled';

interface Props extends ButtonProps {
  ndlaFilm?: boolean;
}

const StyledButton = styled(ButtonV2)`
  border-radius: ${misc.borderRadius};
  border: 0;
  color: ${colors.brand.primary};
  align-items: center;
  background: transparent;

  svg {
    height: 24px;
    width: 24px;
  }

  ${fonts.sizes('16px', '32px')};

  &[data-film='true'] {
    background: ${colors.ndlaFilm.filmColorBright};
    color: ${colors.white};
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.small} ${spacing.normal};
    background: ${colors.brand.greyLighter};
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
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const ToggleSearchButton = forwardRef<HTMLButtonElement, Props>(({ children, ndlaFilm, ...rest }, ref) => (
  <StyledButton data-film={ndlaFilm} type="button" ref={ref} {...rest}>
    <StyledSpan>{children}</StyledSpan>
    <Search />
  </StyledButton>
));

export default ToggleSearchButton;
