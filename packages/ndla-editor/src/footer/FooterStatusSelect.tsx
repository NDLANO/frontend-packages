/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, typography, colors } from '@ndla/core';
import { css } from '@emotion/core';
// @ts-ignore
import { Check } from '@ndla/icons/editor';
import { optionProps, checkItemStyle } from './FooterStatus';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  padding: ${spacing.xsmall} ${spacing.large} ${spacing.xsmall} ${spacing.normal};
  &:disabled {
    color: ${colors.text.light};
  }
  &:not(:disabled) {
    cursor: pointer;
    svg {
      opacity: 0;
    }
    &:hover {
      background: ${colors.brand.greyLighter};
      svg {
        opacity: 0.5;
      }
    }
  }
`;

const changeStatusStyle = css`
  ${typography.smallerHeadingUppercase};
  margin: ${spacing.xsmall} ${spacing.large} ${spacing.small} ${spacing.medium};
`;

type Props = {
  heading: string;
  options: Array<optionProps>;
  onSelectStatus(option: optionProps): void;
};

const FooterStatusSelect: React.FC<Props> = ({ onSelectStatus, heading, options }) => (
  <>
    <h1 css={changeStatusStyle}>{heading}</h1>
    <StyledList>
      {options.map(option => (
        <StyledListItem key={option.id}>
          <StyledButton css={checkItemStyle} disabled={option.active} onClick={() => onSelectStatus(option)}>
            <Check />
            {option.name}
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  </>
);

export default FooterStatusSelect;
