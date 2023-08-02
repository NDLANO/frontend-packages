/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors } from '@ndla/core';

const InfoBlockWrapper = styled.div`
  border-bottom: 1px solid ${colors.brand.neutral7};
  padding: ${spacing.small} 0;
`;

const IconWrapper = styled.div`
  align-items: flex-start;
  display: flex;

  svg {
    height: 25px;
    width: 25px;
  }
`;

const StyledTextWrapper = styled.div`
  ${fonts.sizes(18)}
`;

const TitleWrapper = styled.div`
  display: flex;

  gap: ${spacing.small};
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
    <InfoBlockWrapper>
      <TitleWrapper>
        <IconWrapper>{icon}</IconWrapper>
        <StyledTitle>{title}</StyledTitle>
      </TitleWrapper>
      <StyledTextWrapper>{children}</StyledTextWrapper>
    </InfoBlockWrapper>
  );
};

export default InfoBlock;
