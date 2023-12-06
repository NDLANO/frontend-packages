/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, spacing, fonts, typography } from '@ndla/core';

interface StyledFieldHeaderWrapperProps {
  wrapperWidth: number;
}
const StyledFieldHeaderWrapper = styled.div<StyledFieldHeaderWrapperProps>`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colors.brand.light};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  margin-top: ${spacing.normal};
  margin-bottom: ${spacing.small};
  ${(props) => css`
    width: ${props.wrapperWidth}%;
  `};
  > div {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    margin: 0;
    padding: 0;
    background: 0;
    border: 0;
  }
`;

const StyledTitle = styled.h2`
  ${typography.mediumHeaderUppercase};
  span {
    ${fonts.sizes(16, 1.1)};
    font-weight: ${fonts.weight.normal};
    text-transform: none;
    padding-left: ${spacing.small};
    color: ${colors.text.light};
  }
`;

interface Props {
  title: string;
  subTitle?: string;
  width?: number;
  children?: ReactNode;
}

const FieldHeader = ({ title, subTitle, width = 1, children }: Props) => (
  <StyledFieldHeaderWrapper wrapperWidth={width * 100}>
    <StyledTitle>
      {title}
      {subTitle && <span>{subTitle}</span>}
    </StyledTitle>
    <div>{children}</div>
  </StyledFieldHeaderWrapper>
);

export default FieldHeader;
