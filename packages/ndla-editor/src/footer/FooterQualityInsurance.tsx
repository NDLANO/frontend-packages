/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { MouseEvent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { spacing, typography, colors, fonts, spacingUnit } from '@ndla/core';
import { PopUpWrapper } from '@ndla/forms';

const StyledWrapper = styled.section`
  padding: 0 ${spacing.large} ${spacing.large} ${spacing.medium};
  margin-top: -${spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

type Props = {
  options: Array<{
    name: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  }>;
  messages: {
    buttonLabel: string;
    heading: string;
  };
  children: (f: VoidFunction) => ReactNode;
};

const FooterQualityInsurance = ({ children, messages }: Props) => {
  return (
    <PopUpWrapper
      label={messages.buttonLabel}
      verticalPosition="bottom"
      offsetY={spacingUnit * 2}
      withCloseButton
      buttonStyle={css`
        cursor: pointer;
        color: ${colors.brand.primary};
        ${fonts.sizes(16, 1.25)};
        height: ${spacing.large};
        font-weight: ${fonts.weight.semibold};
        background: none;
        border: 0;
        display: flex;
        align-items: center;
        svg {
          width: 20px;
          height: 20px;
          margin-left: ${spacing.small};
          cursor: pointer;
        }
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      `}
    >
      {(onClosePopup: () => void) => (
        <StyledWrapper>
          <h1
            css={css`
              ${typography.smallerHeadingUppercase};
              margin: ${spacing.xsmall} 0 ${spacing.small} 0;
            `}
          >
            {messages.heading}
          </h1>
          {children(onClosePopup)}
        </StyledWrapper>
      )}
    </PopUpWrapper>
  );
};

export default FooterQualityInsurance;
