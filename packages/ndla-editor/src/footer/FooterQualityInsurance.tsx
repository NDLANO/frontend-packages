/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, typography, colors, fonts } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { PopUpWrapper } from '@ndla/forms'; 

const StyledWrapper = styled.section`
  padding: 0 ${spacing.large} ${spacing.large} ${spacing.medium};
  margin-top: -${spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const buttonStyle = css`
  padding: ${spacing.spacingUnit / 8}px 0;
  white-space: nowrap;
  &:last-child {
    margin-bottom: -${spacing.spacingUnit / 8}px; 
  }
  &:first-child {
    margin-top: -${spacing.spacingUnit / 8}px; 
  }
`;

type optionProps = {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Props = {
  options: Array<optionProps>;
  messages: {
    buttonLabel: string;
    heading: string;
  }
};

const FooterQualityInsurance: React.FC<Props> = ({
  options,
  messages,
}) => {
  return (
    <PopUpWrapper
      label={messages.buttonLabel}
      verticalPosition="bottom"
      offsetY={spacing.spacingUnit * 2}
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
        &:hover, &:focus {
          text-decoration: underline;
        }
      `}
    >
      {(onClosePopup: () => void) => (
        <StyledWrapper>
          <h1 css={typography.smallerHeadingUppercase(`${spacing.xsmall} 0 ${spacing.small} 0`)}>{messages.heading}</h1>
          {options.map(option => (
            <Button
              css={buttonStyle}
              boldLink
              key={option.name}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                option.onClick(e);
                onClosePopup();
              }}
            >
              {option.name}
            </Button>
          ))}
        </StyledWrapper>
      )}
    </PopUpWrapper>
  );
};

export default FooterQualityInsurance;
