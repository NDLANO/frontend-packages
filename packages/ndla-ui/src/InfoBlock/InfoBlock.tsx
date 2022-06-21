/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors, breakpoints, mq } from '@ndla/core';

const StyledDiv = styled.div`
  border-bottom: 1px solid ${colors.brand.neutral7};
  padding: ${spacing.small} 0;
  p {
    ${fonts.sizes(18)}
  }
  svg {
    height: 25px;
    width: 25px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    align-items: flex-start;
  }
`;

const StyledTitle = styled.h2`
  ${fonts.sizes('18')}
  font-weight: 700;
  margin: 0;
`;

interface InfoBlockProps {
  icon?: ReactNode;
  title?: string;
  children?: ReactNode;
}
export const InfoBlock = ({ icon, title, children }: InfoBlockProps) => {
  return (
    <StyledDiv>
      <TitleWrapper>
        {icon}
        <StyledTitle>{title}</StyledTitle>
      </TitleWrapper>
      {children}
    </StyledDiv>
  );
};

export default InfoBlock;
