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
import SafeLink from '@ndla/safelink';
import { fonts, spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { OneColumn, LayoutItem } from '../index-javascript';

const StyledHeader = styled.h1`
  display: flex;
  flex-direction: column;
`;

const StyledSmallText = styled.small`
  ${fonts.sizes(20, 1.3)};
  font-weight: ${fonts.weight.semibold};
  margin-top: ${spacing.normal};
`;

const StyledLinkWrapper = styled.div`
  margin: ${spacing.xsmall} 0;
  a {
    margin-left: ${spacing.xsmall};
  }
`;

const OneColumnCss = css`
  background: #fff;
  padding-top: ${spacing.spacingUnit * 3}px;
  margin-top: -${spacing.normal};
`;

interface Props {
  children: React.ReactNode;
  subject?: {
    name: string;
    url: string;
  };
  topic?: {
    name: string;
    url: string;
  };
  learningPathName: string;
  t: any;
}

const LearningPathLastStepNavigation: React.FunctionComponent<Props> = ({
  subject,
  topic,
  learningPathName,
  children,
  t,
}) => (
  <OneColumn css={OneColumnCss}>
    <LayoutItem layout="center">
      <StyledHeader className="c-article__title">
        <span>{t('learningPath.lastStep.heading')}</span>
        <StyledSmallText>
          {t('learningPath.lastStep.headingSmall', {
            learningPathName,
          })}
        </StyledSmallText>
      </StyledHeader>
      {subject && (
        <StyledLinkWrapper>
          {t('learningPath.lastStep.subjectHeading')}
          <SafeLink to={subject.url}>{subject.name}</SafeLink>
        </StyledLinkWrapper>
      )}
      {topic && (
        <StyledLinkWrapper>
          {t('learningPath.lastStep.topicHeading')}
          <SafeLink to={topic.url}>{topic.name}</SafeLink>
        </StyledLinkWrapper>
      )}
      {children}
    </LayoutItem>
  </OneColumn>
);

export default injectT(LearningPathLastStepNavigation);
