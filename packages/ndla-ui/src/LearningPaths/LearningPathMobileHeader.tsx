import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import React from 'react';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import { LearningPathBadge } from '../index-javascript';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const StyledMiniHeader = styled.span`
  padding-left: ${spacing.xsmall};
  ${fonts.sizes(16, 1.1)};
`;

const LearningPathMobileHeader: React.FunctionComponent<tType> = ({ t }) => (
  <StyledWrapper>
    <LearningPathBadge size="xx-small" background />
    <StyledMiniHeader>
      {t('learningPath.youAreInALearningPath')}
    </StyledMiniHeader>
  </StyledWrapper>
);

export default injectT(LearningPathMobileHeader);
